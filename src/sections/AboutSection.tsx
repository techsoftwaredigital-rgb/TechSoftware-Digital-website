import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Check, Server, ArrowRight, Activity } from 'lucide-react';

interface AboutSectionProps {
  onTalkWithUs: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onTalkWithUs }) => {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const architectureNodes = [
    { label: 'Client Interface Layer', status: 'Active (React 19 / Native)', code: 'UI_RENDER_OK' },
    { label: 'Security & Auth Gateway', status: 'Hardened (JWT / SSL / Rules)', code: 'AUTH_VERIFIED' },
    { label: 'Business Logic Core', status: 'Custom Handlers & Pipelines', code: 'CORE_EXEC_SYNC' },
    { label: 'Distributed Database', status: 'Realtime Sync & Automated Backups', code: 'DB_HEALTHY' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial & Story */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Server className="w-3.5 h-3.5" />
            <span>Engineering Identity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
            Technology Built Around Your Business
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              TechSoftware.digital provides digital development solutions for businesses that want to establish, improve or scale their digital presence.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              We work on websites, web applications, mobile apps and custom business software with a focus on modern design, usability and scalable technology.
            </p>
          </div>

          {/* Key Checklist */}
          <div className="pt-2 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Check className="w-3 h-3" />
              </span>
              <span>Direct Developer Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Check className="w-3 h-3" />
              </span>
              <span>100% Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Check className="w-3 h-3" />
              </span>
              <span>Cross-Platform Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Check className="w-3 h-3" />
              </span>
              <span>Transparent Project Sprints</span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onTalkWithUs}
              className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Discuss Your Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Animated Futuristic Visual Terminal / Architecture Stack */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl glass-panel border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 overflow-hidden">
            
            {/* Top Terminal Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  techsoftware.core // runtime
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Simulated Live System Diagram */}
            <div className="mt-6 space-y-4">
              {architectureNodes.map((node, i) => {
                const isPulsing = pulseIndex === i;
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isPulsing
                        ? 'bg-slate-900 border-cyan-400/60 shadow-md shadow-cyan-950/40 translate-x-1.5'
                        : 'bg-slate-950/60 border-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isPulsing ? 'text-cyan-300 font-bold' : 'text-slate-300'}>
                        {node.label}
                      </span>
                      <span className={isPulsing ? 'text-cyan-400' : 'text-slate-500'}>
                        {node.code}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{node.status}</span>
                      <div className={`w-2 h-2 rounded-full ${isPulsing ? 'bg-cyan-400 animate-ping' : 'bg-slate-700'}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Telemetry Status */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Stack: TS / React / Node / Three.js</span>
              <span className="text-cyan-400">High Availability Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
