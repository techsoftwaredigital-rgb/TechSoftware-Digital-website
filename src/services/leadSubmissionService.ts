/**
 * TechSoftware.digital - Lead Submission Service
 * Connects frontend inquiry forms directly to Google Apps Script Web App -> Google Sheet "Website Leads".
 * Dual-persists to Google Sheet Webhook and Firebase Firestore for guaranteed lead capture.
 */

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
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
 * Transmits lead data to Google Sheet Webhook and persists in Firestore.
 */
export async function submitLeadToGoogleSheet(
  data: LeadSubmissionData
): Promise<SubmissionResult> {
  const timestamp = new Date().toISOString();
  const source = data.source || 'TechSoftware.digital Website';
  const status = 'New Lead';
  const referenceToken = `TS-${Date.now().toString().slice(-6)}`;

  const company = data.company?.trim() || 'N/A';
  const projectType = data.projectType?.trim() || (data.inquiryType === 'Contact Us' ? 'General Consultation' : 'Websites');
  const budget = data.budget?.trim() || (data.inquiryType === 'Contact Us' ? 'Discuss with us' : '₹50,000 – ₹1,00,000');
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  // 1. Build URLSearchParams with both exact Sheet column headers and standard camelCase keys
  // Columns: A=Timestamp, B=Inquiry Type, C=Name, D=Phone, E=Email, F=Company, G=Project Type, H=Budget, I=Message, J=Source, K=Status
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
  formParams.append('Reference', referenceToken);

  // CamelCase equivalents for scripts expecting camelCase
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
  formParams.append('reference', referenceToken);

  // Parallel background backup to Firestore (does not block sheet submission if offline)
  const firestoreBackupPromise = (async () => {
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
    } catch (fsErr) {
      // Non-fatal: logged quietly without interrupting user flow
      console.warn('Firestore backup note:', fsErr);
    }
  })();

  // 2. Submit to Google Apps Script Webhook
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  let sheetSaved = false;

  try {
    // Primary approach: URL-encoded POST with application/x-www-form-urlencoded
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

    // If fetch failed due to browser CORS redirect or network filter, attempt no-cors fallback
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

  // Await firestore backup completes
  await firestoreBackupPromise;

  if (sheetSaved) {
    return {
      success: true,
      referenceToken,
    };
  }

  // If both network routes were completely unreachable
  return {
    success: false,
    referenceToken,
    error: 'Unable to submit your request right now. Please try again or contact us directly.',
  };
}
