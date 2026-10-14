import React from 'react';
import { X, Download, Smartphone, Zap, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePWA } from '../context/PWAContext';

export const PWAInstallModal: React.FC = () => {
  const { showPopup, isInstalled, dismissPopup, promptInstall } = usePWA();

  if (!showPopup || isInstalled) {
    return null;
  }

  const benefits = [
    {
      icon: <Smartphone className="w-4 h-4 text-cyan-400" />,
      text: 'Quick access from your home screen.',
    },
    {
      icon: <Zap className="w-4 h-4 text-sky-400" />,
      text: 'App-like browsing experience.',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-blue-400" />,
      text: 'Easy access with one tap.',
    },
    {
      icon: <Monitor className="w-4 h-4 text-indigo-400" />,
      text: 'Responsive experience across supported devices.',
    },
  ];

  const handleInstallClick = async () => {
    await promptInstall();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-md p-6 sm:p-7 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden transform animate-in zoom-in-95 duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(3, 7, 18, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
        }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={dismissPopup}
          aria-label="Close install prompt"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/30 shrink-0">
            <span className="text-sm font-mono font-black text-black">TS</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-display font-bold text-white tracking-tight">
                TechSoftware<span className="text-cyan-400">.digital</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                Web App
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">Official Progressive Web Application</p>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="mb-5">
          <h2 id="pwa-install-title" className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            Install Our Web App
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-cyan-300 font-medium">
            A smarter way to explore TechSoftware.digital.
          </p>
        </div>

        {/* Benefit Items */}
        <div className="space-y-2.5 mb-6 bg-slate-900/60 rounded-xl p-3.5 border border-slate-800">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs text-slate-200">
              <div className="w-6 h-6 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <span className="leading-snug">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleInstallClick}
            type="button"
            className="group relative overflow-hidden w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Install App</span>
          </button>

          <button
            onClick={dismissPopup}
            type="button"
            className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center cursor-pointer"
          >
            Explore Website
          </button>
        </div>
      </div>
    </div>
  );
};
