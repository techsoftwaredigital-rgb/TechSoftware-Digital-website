import React from 'react';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { CyberNebulaBackground } from '../components/CyberNebulaBackground';

interface CTASectionProps {
  onStartProject: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject }) => {
  const phoneNumber = '918169401877';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hello TechSoftware.digital, I would like to discuss a project.'
  )}`;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Cyber Nebula Glow Background */}
      <CyberNebulaBackground />

      <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/40 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-cyan-950/40">
        
        {/* Glow Spheres in CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -mt-40 animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -mr-20 -mb-20 animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Top Label */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready When You Are</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
            Have an Idea? <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Let's Build It.
            </span>
          </h2>

          {/* Text */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us what you want to build and let's turn your idea into a professional digital product.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 rounded-xl shadow-lg shadow-[#25D366]/10 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Marker */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 inline-flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Direct Call / Technical Lead:</span>
            <a
              href="tel:8169401877"
              className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>8169401877</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
