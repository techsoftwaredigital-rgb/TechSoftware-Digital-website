import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Clock } from 'lucide-react';
import { DemoProject } from '../data/demoProjects';

interface DemoProjectDetailModalProps {
  project: DemoProject | null;
  onClose: () => void;
  onRequestProject: (projectName: string, projectCategory: string) => void;
}

export const DemoProjectDetailModal: React.FC<DemoProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isLive = project.status === 'live' && Boolean(project.demoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold">
              {project.demoLabel}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-thin">
          {/* Top Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                {project.platformBadge}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                {project.industry}
              </span>
              {isLive ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE DEMO AVAILABLE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-800/80 text-slate-400 border border-slate-700">
                  <Clock className="w-3 h-3 text-slate-400" />
                  DEMO URL COMING SOON
                </span>
              )}
            </div>

            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display"
            >
              {project.name}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Visual UI Preview Container */}
          <div className="relative rounded-xl border border-slate-700/60 overflow-hidden bg-slate-950 shadow-inner">
            {/* Window bar */}
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400 font-mono text-[11px]">
                  {project.id}.techsoftware.digital
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">
                Architecture Preview
              </span>
            </div>

            {/* Preview Image or High-Fidelity Blueprint Graphic */}
            <div className={`relative min-h-[190px] sm:min-h-[240px] flex items-center justify-center p-6 bg-gradient-to-br ${project.gradient}`}>
              {project.image && project.image.trim() !== '' ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full max-h-64 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    // Fallback to stylized SVG layout if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : null}

              {/* Decorative Blueprint Overlay */}
              <div className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                  {project.name} System Blueprint
                </div>
                <div className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  Engineered with production-grade modular components, reactive state flow, and low-latency API endpoints.
                </div>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Core Engineered Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Tech Stack badges */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Production Specifications</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Concept Project Disclosure Box */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 flex items-start gap-3">
            <span className="text-cyan-400 font-bold text-sm shrink-0">ℹ</span>
            <p className="leading-relaxed">
              <strong className="text-white">{project.demoLabel}:</strong> This project represents a turnkey software solution designed and engineered by TechSoftware.digital. Source code, bespoke customization, and enterprise deployment are available upon request.
            </p>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            {isLive ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-cyan-500/40 hover:border-cyan-400 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            ) : (
              <button
                disabled
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono text-slate-500 bg-slate-800/40 border border-slate-700/50 rounded-lg cursor-not-allowed flex items-center justify-center gap-1.5"
                title="Demo sandbox environment is currently being provisioned"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Demo URL Coming Soon</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onRequestProject(project.name, project.category);
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-md shadow-cyan-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans"
            >
              <span>Request Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
