import React from 'react';
import { ShieldAlert, ArrowLeft, ExternalLink, Lock } from 'lucide-react';

interface PrivatePortalNoticeProps {
  path: string;
  onReturnHome: () => void;
}

export const PrivatePortalNotice: React.FC<PrivatePortalNoticeProps> = ({ path, onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-slate-800 text-center space-y-6 shadow-2xl shadow-black/80">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto shadow-lg shadow-cyan-950/40">
          <Lock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-400">
            <ShieldAlert className="w-3 h-3 text-amber-400" />
            <span>RESTRICTED INTERNAL ENDPOINT</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
            TechSoftware Business OS
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The endpoint <code className="text-cyan-400 font-mono">{path}</code> is an internal operational management portal. Internal staff access is isolated to authorized workspaces.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-left font-mono space-y-2 text-slate-400">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-500">ROBOTS DIRECTIVE:</span>
            <span className="text-rose-400 font-semibold">NOINDEX, NOFOLLOW</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-500">PUBLIC SITE:</span>
            <span className="text-cyan-400">techsoftwaredigital.in</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <button
            onClick={onReturnHome}
            className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Public Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
