import React, { useState } from 'react';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePWA } from '../context/PWAContext';

export const PWAFloatingButton: React.FC = () => {
  const { isInstalled, openInstallFlow, toastMessage } = usePWA();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Toast Notification Banner (for "App already installed..." or success messages) */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-6 z-50 p-4 rounded-xl glass-panel border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 bg-slate-900/95 text-xs font-mono text-cyan-300 flex items-center gap-2.5 max-w-sm animate-in slide-in-from-top-4 duration-300"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </aside>
      )}

      {/* Floating Action Button */}
      <div
        className="fixed right-4 sm:right-6 bottom-24 z-40 flex items-center select-none"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Desktop Tooltip */}
        <div
          role="tooltip"
          className={`hidden md:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-cyan-500/30 text-white text-[11px] font-mono whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          {isInstalled
            ? 'TechSoftware App Active'
            : 'Install TechSoftware.digital Web App'}
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900/95" />
        </div>

        {/* Floating Button */}
        <button
          onClick={openInstallFlow}
          type="button"
          aria-label={isInstalled ? 'Web App Installed' : 'Install TechSoftware.digital Web App'}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 hover:from-cyan-950 hover:via-slate-900 hover:to-indigo-950 border border-cyan-500/30 hover:border-cyan-400 text-white shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-[gentle-float_4s_ease-in-out_infinite]"
        >
          {/* Subtle Ambient Pulse Glow */}
          <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm group-hover:opacity-100 opacity-60 transition duration-300 pointer-events-none" />

          {/* Icon with Mini Glow */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/30 shrink-0">
            {isInstalled ? (
              <CheckCircle2 className="w-4 h-4 text-black font-black" />
            ) : (
              <Download className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform font-bold" />
            )}
          </div>

          {/* Label */}
          <div className="relative flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold leading-none">
              {isInstalled ? 'Installed' : 'PWA'}
            </span>
            <span className="text-xs sm:text-sm font-display font-bold text-white tracking-tight leading-snug">
              {isInstalled ? 'Ready' : 'Install App'}
            </span>
          </div>

          {/* Accent Sparkle */}
          {!isInstalled && (
            <Sparkles className="relative w-3 h-3 text-cyan-400/80 group-hover:text-cyan-300 transition-colors ml-0.5 hidden sm:block" />
          )}
        </button>
      </div>
    </>
  );
};
