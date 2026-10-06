import React, { useEffect, useState } from 'react';
import { Terminal, Cpu } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'particles' | 'branding' | 'ready' | 'exit'>('particles');

  useEffect(() => {
    // 1. Digital initialization progress
    const startTime = Date.now();
    const duration = 1800; // 1.8s fast professional intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct > 25 && phase === 'particles') {
        setPhase('branding');
      }
      if (pct > 75 && phase === 'branding') {
        setPhase('ready');
      }
      if (pct >= 100) {
        clearInterval(timer);
        setPhase('exit');
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [phase, onComplete]);

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-[100] bg-[#02050c] flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background ambient grid and light sweep */}
      <div className="absolute inset-0 tech-grid-cyan opacity-25 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Floating particles aura */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
        
        {/* Company Branding Logo Reveal */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-2xl shadow-cyan-500/30 flex items-center justify-center animate-bounce duration-1000">
            <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
              <span className="font-mono text-2xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                TS
              </span>
            </div>
          </div>
          {/* Subtle beacon pulse */}
          <div className="absolute -inset-2 rounded-2xl bg-cyan-400/20 blur-md animate-ping pointer-events-none" />
        </div>

        {/* Brand Name */}
        <div className="space-y-1 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
            TechSoftware<span className="text-cyan-400">.digital</span>
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center justify-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Next-Gen Architecture // Booting System</span>
          </p>
        </div>

        {/* High-Tech Progress Bar */}
        <div className="w-64 sm:w-80">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>CORE_SERVICES_INIT</span>
            </span>
            <span className="text-cyan-400 font-semibold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-75 shadow-sm shadow-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip hint */}
        <p className="mt-8 text-[11px] font-mono text-slate-600 hover:text-slate-400 transition-colors">
          Click anywhere to skip
        </p>
      </div>
    </div>
  );
};
