import React from 'react';
import { Phone, Mail, Globe, ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/20">
                <span className="text-[11px] font-mono font-black text-black">TS</span>
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                TechSoftware<span className="text-cyan-400">.digital</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Websites, Apps & Business Software Solutions. We design, architect, and deploy digital systems that empower modern enterprises.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="tel:8169401877" className="hover:text-cyan-400 transition-colors">
                  +91 8169401877
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href="mailto:techsoftware.digital@gmail.com" className="hover:text-cyan-400 transition-colors">
                  techsoftware.digital@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href="https://ts-devloper.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>ts-devloper.web.app</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Solutions', 'Technologies', 'Portfolio', 'Process', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'Website Development',
                'Web Applications',
                'Mobile App Development',
                'Business Management Software',
                'E-Commerce Solutions',
                'AI Solutions',
                'SaaS Platforms',
                'Custom Software',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Solutions
            </h4>
            <ul className="space-y-2">
              {[
                'CRM & Sales Pipelines',
                'ERP Operations',
                'Billing & POS Systems',
                'Inventory Management',
                'Hotel & Hospitality',
                'Restaurant & KDS',
                'School & Coaching Portals',
                'Custom Business Software',
              ].map((sol) => (
                <li key={sol}>
                  <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                    {sol}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TechSoftware.digital. All rights reserved. Built for enterprise reliability.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-slate-500">
              Tagline: Websites, Apps & Business Software Solutions
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
