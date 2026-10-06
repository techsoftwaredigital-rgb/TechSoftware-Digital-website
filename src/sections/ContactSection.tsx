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
} from 'lucide-react';

interface ContactSectionProps {
  prefilledProjectType?: string;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProjectType = '',
  prefilledMessage = '',
}) => {
  const [activeIntent, setActiveIntent] = useState<'START YOUR PROJECT' | 'GET A QUOTE' | 'CONTACT US'>('START YOUR PROJECT');

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
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please provide brief requirements about what you would like to build.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionRef(`TS-${Date.now().toString().slice(-6)}`);
    }, 750);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello TechSoftware.digital!\n\nIntent: ${activeIntent}\nName: ${formData.name}\nCompany: ${
        formData.companyName || 'N/A'
      }\nProject: ${formData.projectType}\nBudget: ${formData.budgetRange}\nMessage: ${
        formData.message
      }`
    );
    window.open(`https://wa.me/918169401877?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          Connect directly with our engineering team. We review every specification within 24 business hours.
        </p>

        {/* 3 Intent Mode Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(['START YOUR PROJECT', 'GET A QUOTE', 'CONTACT US'] as const).map((intent) => (
            <button
              key={intent}
              onClick={() => setActiveIntent(intent)}
              className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeIntent === intent
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {intent}
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
                href="https://ts-devloper.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Web Headquarters</div>
                  <div className="font-semibold text-xs sm:text-sm text-cyan-400">ts-devloper.web.app</div>
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

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Project Brief Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Our technical leads have received your specifications for{' '}
                    <span className="text-cyan-300 font-semibold">{formData.projectType}</span> and will review your requirements immediately.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-left max-w-md mx-auto space-y-1 text-slate-400">
                  <div>Reference Token: <span className="text-cyan-400">{submissionRef}</span></div>
                  <div>Direct Phone: <span className="text-white">{formData.phone}</span></div>
                  <div>Estimated Scope: <span className="text-white">{formData.budgetRange}</span></div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
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
                        projectType: 'Websites',
                        budgetRange: '₹50,000 – ₹1,00,000',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
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
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
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
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
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
                      className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
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
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Project Type <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
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
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Budget Range <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
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
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want to build, existing systems, key features or timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
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

                {/* Submit Button with light sweep & ripple */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 pointer-events-none" />

                  {isSubmitting ? (
                    <span>Validating & Transmitting Brief...</span>
                  ) : (
                    <>
                      <span>{activeIntent === 'GET A QUOTE' ? 'Request Official Estimate' : activeIntent === 'START YOUR PROJECT' ? 'Start Your Project' : 'Transmit Consultation Brief'}</span>
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
