import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Terminal } from 'lucide-react';
import { Scene3D } from './Scene3D';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-pattern"
    >
      {/* Interactive 3D WebGL Background Scene */}
      <Scene3D />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Trust Badge / Category Lead */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Software Engineering Agency</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Next-Gen Architecture</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] max-w-4xl text-balance">
          BUILD DIGITAL.{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            BUILD SMARTER.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-2xl font-medium text-slate-200 tracking-tight max-w-2xl font-display">
          Websites, Apps & Business Software Solutions
        </p>

        {/* Supporting text */}
        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          We design and develop modern websites, mobile applications, web applications and custom business software that help businesses grow digitally.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Unboxed Clean Trust Statement */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-400">
          <span className="text-slate-300">Web</span>
          <span className="text-cyan-500" aria-hidden="true">•</span>
          <span className="text-slate-300">Mobile</span>
          <span className="text-cyan-500" aria-hidden="true">•</span>
          <span className="text-slate-300">Software</span>
          <span className="text-cyan-500" aria-hidden="true">•</span>
          <span className="text-slate-300">AI</span>
        </div>

        {/* Ambient Subtle Tech Ribbon */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 w-full max-w-3xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 inline-block" />
            <span className="text-slate-400">Available For New Projects</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Clean Architecture · High Scalability</span>
          </div>
          <div className="text-slate-400">
            Direct Line: <a href="tel:8169401877" className="text-cyan-400 hover:underline">8169401877</a>
          </div>
        </div>
      </div>
    </section>
  );
};
