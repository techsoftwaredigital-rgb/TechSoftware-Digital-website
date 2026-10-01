import React from 'react';
import { Cpu, Terminal, Sparkles, Check } from 'lucide-react';
import { technologiesData, TechItem } from '../data/technologiesData';
import { CircuitBoardBackground } from '../components/CircuitBoardBackground';

// Authentic SVG Tech Logos
const TechLogo: React.FC<{ id: string; className?: string }> = ({ id, className = 'w-7 h-7' }) => {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="88" fill="#000" stroke="#fff" strokeWidth="6" />
          <path d="M149 148L80 50H60V130H76V72L136 157C141 154 145 151 149 148Z" fill="#fff" />
          <path d="M118 50H134V105L118 84V50Z" fill="#fff" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M57.5 73.2c-1.3-.8-3.1-1.4-5.3-1.4-3.5 0-5.8 1.9-5.8 4.7 0 2.8 1.8 4.2 6.5 6.1 7.2 2.9 10.9 6.7 10.9 13.1 0 7.8-6.1 13.3-16.1 13.3-5.2 0-9.7-1.4-12.8-3.3l2.8-6.6c2.7 1.7 6.4 2.8 9.9 2.8 4.6 0 7.3-2.1 7.3-5.2 0-3.3-2.2-4.6-7.2-6.7-7-2.9-10.2-6.5-10.2-12.4 0-7.3 5.8-12.7 15.3-12.7 4.7 0 8.5 1.1 11.2 2.5l-2.5 6.6zM96.7 63.8v44.2h-8.8V63.8H73.1V56h38.4v7.8H96.7z" fill="#FFF" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#5FA04E">
          <path d="M16 1.5L2.8 9.1v15.3L16 32l13.2-7.6V9.1L16 1.5zm8.9 20.9l-8.9 5.1-8.9-5.1V10.6l8.9-5.1 8.9 5.1v11.8z" />
          <path d="M16 8.5l-5.5 3.2v6.4l5.5 3.2 5.5-3.2v-6.4L16 8.5z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.2 18.5L6.8 2.2c.1-.5.7-.7 1-.3l3.8 6.9-7.4 9.7z" fill="#FFA000" />
          <path d="M4.2 18.5l.8-4.8 7.4-9.7L4.2 18.5z" fill="#F57C00" />
          <path d="M14.5 9.4l1.8-3.4c.2-.4.8-.4 1 0l3.8 12.5-6.6-9.1z" fill="#FFA000" />
          <path d="M19.8 18.5L14.5 9.4l-2.1 4-8.2 5.1 7.8 4.4c.6.3 1.4.3 2 0l5.8-4.4z" fill="#FFCA28" />
        </svg>
      );
    case 'threejs':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="currentColor">
          <path d="M64 8L16 36v56l48 28 48-28V36L64 8zm0 18.5l32 18.7v37.4L64 101.3 32 82.6V45.2L64 26.5z" fill="#04D9FF" />
          <path d="M64 45.2l16 9.4v18.7L64 82.6 48 73.3V54.6L64 45.2z" fill="#67E8F9" />
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#3DDC84">
          <path d="M16.6 6.3l1.8-3.1c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-1.9 3.2C14.3 5.4 13.2 5.1 12 5.1c-1.2 0-2.3.3-3.7.9L6.4 2.8c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l1.8 3.1C4.3 7.8 2.2 10.7 2 14.1h20c-.2-3.4-2.3-6.3-5.4-7.8zM7 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM2 15.5v5.8c0 .7.6 1.2 1.2 1.2h.8v-7H2zm18 0h-2v7h.8c.7 0 1.2-.6 1.2-1.2v-5.8z" />
        </svg>
      );
    case 'ios':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.4-1.3 0-1.7-.8-3.2-.8-1.5 0-2 .8-3.2.8-1.3 0-2.3-1.3-3.1-2.5-1.7-2.4-2.9-6.9-1.2-9.9 0.9-1.5 2.4-2.4 4-2.4 1.3 0 2.4.9 3.2.9.7 0 2.1-.9 3.6-.8 1.5.1 2.7.6 3.5 1.8-3.1 1.8-2.6 6 0.4 7.3zM15.5 6.2c.7-.8 1.1-1.9 1-3-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.8-1 2.9 1 0 1.9-.4 2.6-1.2z" fill="#F1F5F9" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#A855F7" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" fill="#A855F7" fillOpacity="0.25" />
        </svg>
      );
    default:
      return <Cpu className={className} />;
  }
};

export const TechSection: React.FC = () => {
  return (
    <section id="technologies" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Motherboard Circuit Background */}
      <CircuitBoardBackground />

      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-950/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Modern Engineering Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Technology That Powers Your Ideas
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          We build with industry-standard, high-performance frameworks and runtimes that scale effortlessly with your business.
        </p>
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologiesData.map((tech) => (
          <div
            key={tech.id}
            className="group relative p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300"
          >
            {/* Top row: Icon and category */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2.5 shadow-md group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300">
                <TechLogo id={tech.id} className="w-7 h-7" />
              </div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
                {tech.badge}
              </span>
            </div>

            {/* Title & Category */}
            <div className="mb-2">
              <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {tech.category}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {tech.description}
            </p>

            {/* Use case tag */}
            <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400">
              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{tech.useCase}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
