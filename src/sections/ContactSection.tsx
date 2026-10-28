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
  ShieldCheck,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import {
  submitLeadToGoogleSheet,
  InquiryType,
  GOOGLE_SHEET_WEBHOOK_URL,
} from '../services/leadSubmissionService';

interface ContactSectionProps {
  prefilledProjectType?: string;
  prefilledMessage?: string;
  initialIntent?: InquiryType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProjectType = '',
  prefilledMessage = '',
  initialIntent = 'Start Your Project',
}) => {
  const [activeIntent, setActiveIntent] = useState<InquiryType>(initialIntent);

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    projectType: 'Websites',
    budgetRange: '₹50,000 – ₹1,00,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (initialIntent) {
      setActiveIntent(initialIntent);
    }
  }, [initialIntent]);

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
    'Websites',
    'Web Applications',
    'Business Software',
    'Android Apps',
    'iOS Apps',
    'SaaS Platforms',
    'AI Solutions',
    'Custom Software',
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
      errs.email = 'Please provide a valid corporate or personal email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (!/^[0-9+-\s()]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid contact phone number (at least 8 digits).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please provide a message or requirements summary.';
    }

    // Project Type and Budget are required for "Start Your Project" and "Get A Quote", optional for "Contact Us"
    if (activeIntent !== 'Contact Us') {
      if (!formData.projectType.trim()) {
        errs.projectType = 'Please select a project category.';
      }
      if (!formData.budgetRange.trim()) {
        errs.budgetRange = 'Please select an estimated budget range.';
      }
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while in flight
    if (isSubmitting) return;

    setSubmitError(null);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLeadToGoogleSheet({
        inquiryType: activeIntent,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.companyName,
        projectType: activeIntent === 'Contact Us' && !formData.projectType ? 'General Inquiry' : formData.projectType,
        budget: activeIntent === 'Contact Us' && !formData.budgetRange ? 'General Discussion' : formData.budgetRange,
        message: formData.message,
        source: 'TechSoftware.digital Website',
      });

      if (result.success) {
        setIsSubmitted(true);
        setSubmissionRef(result.referenceToken);
        // Reset form data upon successful submission
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          projectType: 'Websites',
          budgetRange: '₹50,000 – ₹1,00,000',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitError(
          'Unable to submit your request right now. Please try again or contact us directly.'
        );
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitError(
        'Unable to submit your request right now. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello TechSoftware.digital!\n\nInquiry Type: ${activeIntent}\nName: ${formData.name || 'Client'}\nCompany: ${
        formData.companyName || 'N/A'
      }\nProject: ${formData.projectType || 'General Inquiry'}\nBudget: ${formData.budgetRange || 'N/A'}\nMessage: ${
        formData.message || 'Consultation request'
      }`
    );
    window.open(`https://wa.me/918169401877?text=${text}`, '_blank');
  };

  const handleResetForNewSubmission = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setErrors({});
    setFormData({
      name: '',
      companyName: '',
      phone: '',
      email: '',
      projectType: 'Websites',
      budgetRange: '₹50,000 – ₹1,00,000',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Technical Engagement</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display uppercase">
          LET'S BUILD WHAT'S NEXT.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Connect directly with our engineering team. All submissions automatically route to our client portal for review within 24 business hours.
        </p>

        {/* 3 Inquiry Type Mode Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(
            [
              { label: 'START YOUR PROJECT', value: 'Start Your Project' as InquiryType },
              { label: 'GET A QUOTE', value: 'Get A Quote' as InquiryType },
              { label: 'CONTACT US', value: 'Contact Us' as InquiryType },
            ] as const
          ).map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                setActiveIntent(item.value);
                setSubmitError(null);
              }}
              className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeIntent === item.value
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Information Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 sm:p-8 rounded-2xl glass-panel border border-slate-800">
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              TechSoftware<span className="text-cyan-400">.digital</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Websites, Apps & Business Software Solutions. Headquartered with global engineering delivery capabilities.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href="tel:8169401877"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Phone / WhatsApp</div>
                  <div className="font-semibold font-mono text-sm sm:text-base">8169401877</div>
                </div>
              </a>

              <a
                href="mailto:techsoftware.digital@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Official Inquiries</div>
                  <div className="font-semibold text-xs sm:text-sm">techsoftware.digital@gmail.com</div>
                </div>
              </a>

              <a
                href="https://techsoftwaredigital.in/"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Web Headquarters</div>
                  <div className="font-semibold text-xs sm:text-sm text-cyan-400">techsoftwaredigital.in</div>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                All client conversations, intellectual property, and proprietary database schematics remain strictly protected under standard non-disclosure agreements.
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

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    Thank you! Your request has been received.
                  </h3>
                  <p className="text-sm sm:text-base text-cyan-300 font-medium max-w-md mx-auto leading-relaxed">
                    Our team will contact you shortly.
                  </p>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Your <span className="text-white font-mono">{activeIntent}</span> inquiry has been recorded and assigned to a solutions engineer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-400">
                  <div className="flex justify-between items-center pb-1.5 border-b border-slate-800 text-[11px]">
                    <span className="text-slate-500 uppercase">Inquiry Type:</span>
                    <span className="text-cyan-400 font-semibold">{activeIntent}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 uppercase">Tracking Ref:</span>
                    <span className="text-white font-semibold">{submissionRef}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 uppercase">Destination Sheet:</span>
                    <span className="text-emerald-400 font-semibold">Website Leads</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Instant WhatsApp Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForNewSubmission}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Active Mode Banner */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-slate-400 uppercase">Form Mode:</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {activeIntent}
                  </span>
                </div>

                {/* Error Banner if submission fails */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-3 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">{submitError}</p>
                      <p className="text-[11px] text-rose-300/80">
                        You can also reach us immediately by phone at{' '}
                        <a href="tel:8169401877" className="underline font-bold text-white">
                          8169401877
                        </a>{' '}
                        or on WhatsApp.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors disabled:opacity-60 ${
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

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Corp"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Phone <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 8169401877"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors disabled:opacity-60 ${
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
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors disabled:opacity-60 ${
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
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                      <span>
                        Project Type{' '}
                        {activeIntent === 'Contact Us' ? (
                          <span className="text-slate-500 font-normal">(Optional)</span>
                        ) : (
                          <span className="text-cyan-400">*</span>
                        )}
                      </span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer disabled:opacity-60"
                    >
                      {activeIntent === 'Contact Us' && (
                        <option value="General Inquiry" className="bg-slate-900 text-slate-100">
                          General Inquiry
                        </option>
                      )}
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-slate-100">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                      <span>
                        Budget Range{' '}
                        {activeIntent === 'Contact Us' ? (
                          <span className="text-slate-500 font-normal">(Optional)</span>
                        ) : (
                          <span className="text-cyan-400">*</span>
                        )}
                      </span>
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer disabled:opacity-60"
                    >
                      {activeIntent === 'Contact Us' && (
                        <option value="General Discussion" className="bg-slate-900 text-slate-100">
                          General Discussion
                        </option>
                      )}
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
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      activeIntent === 'Get A Quote'
                        ? 'Describe your project scope, features, desired launch date, and technical preferences for quote calculation...'
                        : activeIntent === 'Start Your Project'
                        ? 'Describe what you want to build, existing systems, key features, architecture, or timelines...'
                        : 'How can our technology team assist your company today?'
                    }
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors disabled:opacity-60 ${
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

                {/* Submit Button with light sweep, futuristic state & ripple */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 pointer-events-none" />

                  {isSubmitting ? (
                    <div className="flex items-center gap-2.5 text-black">
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span className="font-mono tracking-wider">
                        Transmitting to Website Leads...
                      </span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {activeIntent === 'Get A Quote'
                          ? 'Submit Quote Request'
                          : activeIntent === 'Start Your Project'
                          ? 'Start Your Project'
                          : 'Send Message'}
                      </span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
