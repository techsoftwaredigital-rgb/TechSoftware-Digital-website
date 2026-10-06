import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Check, Sparkles, Network } from 'lucide-react';
import { technologiesData, TechItem } from '../data/technologiesData';

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
    case 'gcloud':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#A855F7" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" fill="#A855F7" fillOpacity="0.25" />
        </svg>
      );
    case 'apis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#06B6D4" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
        </svg>
      );
    case 'databases':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
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
    default:
      return null;
  }
};

export const TechSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(technologiesData[0]);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const activeId = hoveredTechId || selectedTech.id;
  const currentTech = technologiesData.find((t) => t.id === activeId) || selectedTech;

  return (
    <section id="technologies" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <Network className="w-3.5 h-3.5" />
          <span>Connected Technology Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          Technology That Powers Your Ideas
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          An integrated, full-stack ecosystem of industry-leading runtimes, clouds, databases and AI models.
        </p>
      </div>

      {/* Interactive Connected Nodes Ecosystem Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Floating Connected Technology Nodes Matrix */}
        <div className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80">
          <div className="text-xs font-mono text-slate-500 mb-6 flex items-center justify-between">
            <span>Hover or select a technology node</span>
            <span className="text-cyan-400">10 Core Frameworks</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {technologiesData.map((tech) => {
              const isCurrent = activeId === tech.id;
              const isConnected = currentTech.connections.includes(tech.id);

              return (
                <div
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  onMouseEnter={() => setHoveredTechId(tech.id)}
                  onMouseLeave={() => setHoveredTechId(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group select-none ${
                    isCurrent
                      ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.03]'
                      : isConnected
                      ? 'bg-slate-900/80 border-cyan-500/40 shadow-sm shadow-cyan-900/20'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
                      <TechLogo id={tech.id} className="w-5 h-5" />
                    </div>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>

                  <div>
                    <h3 className={`text-sm font-bold font-display ${isCurrent ? 'text-white' : 'text-slate-200'}`}>
                      {tech.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 truncate mt-0.5">
                      {tech.badge}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Node Architecture Inspector */}
        <div className="lg:col-span-5">
          <div className="p-7 sm:p-9 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center p-2.5 shadow-md">
                    <TechLogo id={currentTech.id} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block">
                      {currentTech.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">
                      {currentTech.name}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {currentTech.badge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                {currentTech.description}
              </p>

              {/* Primary Use Case */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Target Production Use Case
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{currentTech.useCase}</span>
                </div>
              </div>

              {/* Connected Mesh Nodes */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Direct Ecosystem Interconnects
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentTech.connections.map((connId) => {
                    const connItem = technologiesData.find((t) => t.id === connId);
                    return (
                      <span
                        key={connId}
                        onClick={() => connItem && setSelectedTech(connItem)}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-xs font-mono text-cyan-300 hover:border-cyan-400 transition-colors cursor-pointer"
                      >
                        {connItem?.name || connId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
              Enterprise Grade Codebases · 100% Type-Safe Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
