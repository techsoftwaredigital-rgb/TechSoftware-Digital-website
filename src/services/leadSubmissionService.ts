/**
 * TechSoftware.digital - Lead Submission Service
 * Direct integration with Business OS CRM (Firestore 'leads' collection)
 * and Google Apps Script Web App -> Google Sheet "Website Leads".
 */

import { collection, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxqkc4ieY4R_oZ6JL692NMr-5vr18NDRuHfYZ7hPEmEMo3FDqhkjlujYGdhRUtXXdgT/exec';

export type InquiryType = 'Start Your Project' | 'Get A Quote' | 'Contact Us';

export interface LeadSubmissionData {
  inquiryType: InquiryType;
  name: string;
  phone: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  source?: string;
}

export interface SubmissionResult {
  success: boolean;
  referenceToken: string;
  error?: string;
}

/**
 * Persists inquiry lead data into Business OS CRM ('leads' collection in Firestore)
 * and transmits to Google Sheet Webhook for dual-redundancy lead capture.
 */
export async function submitLeadToGoogleSheet(
  data: LeadSubmissionData
): Promise<SubmissionResult> {
  const timestamp = new Date().toISOString();
  const source = 'Website';
  const status = 'New';

  const company = data.company?.trim() || 'N/A';
  const projectType =
    data.projectType?.trim() ||
    (data.inquiryType === 'Contact Us' ? 'General Consultation' : 'Websites');
  const budget =
    data.budget?.trim() ||
    (data.inquiryType === 'Contact Us' ? 'Discuss with us' : '₹50,000 – ₹1,00,000');
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  // Create unique DocumentReference in Firestore 'leads' collection
  const leadDocRef = doc(collection(db, 'leads'));
  const leadId = leadDocRef.id;

  // 1. Build Business OS CRM payload according to exact schema
  const businessOsLeadPayload: Record<string, any> = {
    leadId,
    customerName: name,
    mobile: phone,
    email,
    serviceCategory: projectType,
    projectDescription: message,
    budget: budget && budget !== 'N/A' ? budget : null,
    source: 'Website',
    status: 'New',
    assignedTo: null,
    nextFollowUp: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  if (company && company !== 'N/A') {
    businessOsLeadPayload.company = company;
  }

  // 2. Persist to Business OS CRM (Firestore 'leads' collection)
  let firestoreSaved = false;
  try {
    await setDoc(leadDocRef, businessOsLeadPayload);
    firestoreSaved = true;
  } catch (fsErr) {
    console.error('Firestore Business OS CRM lead persistence error:', fsErr);
  }

  // Also write legacy enquiry record in parallel for backwards safety
  (async () => {
    try {
      if (db) {
        await addDoc(collection(db, 'enquiries'), {
          name,
          companyName: company !== 'N/A' ? company : '',
          phone,
          email,
          projectType,
          budgetRange: budget,
          message: `[Inquiry: ${data.inquiryType}] ${message}`,
          createdAt: timestamp,
          status: 'new',
        });
      }
    } catch (legacyErr) {
      // Non-fatal legacy backup
      console.warn('Legacy enquiries backup note:', legacyErr);
    }
  })();

  // 3. Dual-post to Google Sheet Webhook ("Website Leads")
  const formParams = new URLSearchParams();

  // Exact Google Sheet Column Headers
  formParams.append('Timestamp', timestamp);
  formParams.append('Inquiry Type', data.inquiryType);
  formParams.append('Name', name);
  formParams.append('Phone', phone);
  formParams.append('Email', email);
  formParams.append('Company', company);
  formParams.append('Project Type', projectType);
  formParams.append('Budget', budget);
  formParams.append('Message', message);
  formParams.append('Source', source);
  formParams.append('Status', status);
  formParams.append('Reference', leadId);

  // CamelCase equivalents
  formParams.append('timestamp', timestamp);
  formParams.append('inquiryType', data.inquiryType);
  formParams.append('name', name);
  formParams.append('phone', phone);
  formParams.append('email', email);
  formParams.append('company', company);
  formParams.append('companyName', company);
  formParams.append('projectType', projectType);
  formParams.append('budget', budget);
  formParams.append('budgetRange', budget);
  formParams.append('message', message);
  formParams.append('source', source);
  formParams.append('status', status);
  formParams.append('reference', leadId);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  let sheetSaved = false;

  try {
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formParams.toString(),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok || response.status === 200) {
      sheetSaved = true;
    } else {
      const text = await response.text();
      if (text.includes('success') || text.includes('Lead saved')) {
        sheetSaved = true;
      }
    }
  } catch (err: any) {
    clearTimeout(timeoutId);

    // Fallback attempt for CORS or network redirection
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formParams.toString(),
      });
      sheetSaved = true;
    } catch (fallbackErr) {
      console.warn('Google Sheet submission fallback attempt:', fallbackErr);
    }
  }

  // If either Business OS CRM (Firestore) or Google Sheet succeeded, confirm successful submission
  if (firestoreSaved || sheetSaved) {
    return {
      success: true,
      referenceToken: leadId,
    };
  }

  return {
    success: false,
    referenceToken: leadId,
    error: 'Unable to submit your request right now. Please try again or contact us directly.',
  };
}
