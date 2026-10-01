import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building,
  Sparkles,
  ArrowRight,
  Database,
} from 'lucide-react';
import { CyberNebulaBackground } from '../components/CyberNebulaBackground';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

interface ContactSectionProps {
  prefilledProjectType?: string;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProjectType = '',
  prefilledMessage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    projectType: 'Website',
    budgetRange: '₹50,000 – ₹1,00,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string>('');
  const [submissionError, setSubmissionError] = useState<string>('');

  useEffect(() => {
    if (prefilledProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledProjectType,
      }));
    }
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
      }));
    }
  }, [prefilledProjectType, prefilledMessage]);

  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile App',
    'Business Software',
    'E-Commerce',
    'AI Solution',
    'Custom Software',
    'Other',
  ];

  const budgetRanges = [
    'Below ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000+',
    'Discuss with us',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (minimum 2 characters).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (!/^[0-9+-\s()]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief details about your project (min 10 characters).';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError('');
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const safeUniqueId = `enq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const enquiryPayload = {
      name: formData.name.trim(),
      ...(formData.companyName.trim() ? { companyName: formData.companyName.trim() } : {}),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType,
      budgetRange: formData.budgetRange,
      message: formData.message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    try {
      await setDoc(doc(db, 'enquiries', safeUniqueId), enquiryPayload);
      setSubmittedEnquiryId(safeUniqueId);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to save to Firestore:', err);
      try {
        handleFirestoreError(err, OperationType.CREATE, `enquiries/${safeUniqueId}`);
      } catch (e) {
        // Fallback friendly message for user while error is logged per skill
        setSubmissionError('Your enquiry could not be synced to cloud right now. Please reach out via WhatsApp or direct phone.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello TechSoftware.digital!\n\nName: ${formData.name}\nCompany: ${
        formData.companyName || 'N/A'
      }\nProject: ${formData.projectType}\nBudget: ${formData.budgetRange}\nMessage: ${
        formData.message
      }`
    );
    window.open(`https://wa.me/918169401877?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Cyber Nebula Background */}
      <CyberNebulaBackground />

      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-950/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Start Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Project Consultation & Enquiry
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Tell us about your requirements. We review every brief within 24 business hours and formulate a clear technical roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Information Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-2xl glass-panel border border-slate-800">
            <h3 className="text-xl font-bold font-display text-white mb-2">
              TechSoftware<span className="text-cyan-400">.digital</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Websites, Apps & Business Software Solutions. Headquartered with global engineering delivery capabilities.
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href="tel:8169401877"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Phone / WhatsApp</div>
                  <div className="font-semibold font-mono text-sm">8169401877</div>
                </div>
              </a>

              <a
                href="mailto:techsoftware.digital@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Official Email</div>
                  <div className="font-semibold text-xs sm:text-sm">techsoftware.digital@gmail.com</div>
                </div>
              </a>

              <a
                href="https://ts-devloper.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Live Web Portal</div>
                  <div className="font-semibold text-xs sm:text-sm text-cyan-400">ts-devloper.web.app</div>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                All client conversations, intellectual property, and proprietary database schematics remain strictly protected.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl glass-panel border border-slate-800 relative">
            
            {isSubmitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Our technical leads have received your specifications for{' '}
                    <span className="text-cyan-300 font-semibold">{formData.projectType}</span> and will get in touch with you shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-400">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Firebase Firestore</span>
                    </span>
                    <span className="text-emerald-400 text-[11px]">Synced to Cloud</span>
                  </div>
                  <div>Reference: <span className="text-cyan-400 font-semibold">{submittedEnquiryId || `TS-${Date.now().toString().slice(-6)}`}</span></div>
                  <div>Direct Phone: <span className="text-white">{formData.phone}</span></div>
                  <div>Budget Range: <span className="text-white">{formData.budgetRange}</span></div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Instant WhatsApp Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        projectType: 'Website',
                        budgetRange: '₹50,000 – ₹1,00,000',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Enterprises"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Contact Phone <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Type <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-slate-100">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Budget Range <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-slate-900 text-slate-100">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Requirements / Scope <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want to build, existing systems, key features or timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.message
                        ? 'border-rose-500/80 focus:ring-rose-500'
                        : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Validating & Transmitting Brief...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
