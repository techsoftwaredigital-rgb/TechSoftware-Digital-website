import React from 'react';
import { ArrowRight, ChevronDown, Terminal, Shield, Sparkles } from 'lucide-react';
import { Scene3D } from './Scene3D';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreSolutions,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden select-none scroll-mt-24"
    >
      {/* Interactive 3D WebGL Digital Core Background Scene */}
      <Scene3D />

      {/* Hero Foreground Content with cinematic depth */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Futuristic Trust Node */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next-Generation Software Engineering</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Enterprise Ready</span>
        </div>

        {/* Cinematic Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.05] max-w-4xl text-balance">
          BUILD THE FUTURE.{' '}
          <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            DIGITALLY.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl md:text-2xl font-medium text-slate-200 tracking-tight max-w-3xl font-display leading-snug">
          Websites, Apps, Business Software & AI Solutions engineered for the next generation.
        </p>

        {/* Action Buttons with magnetic & light sweep styling */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {/* Button light sweep effect */}
            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 pointer-events-none" />

            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreSolutions}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>EXPLORE OUR SOLUTIONS</span>
            <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Unboxed Metadata Discipline with typographic separators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-400">
          <span className="text-slate-300">Web Platforms</span>
          <span className="text-cyan-500" aria-hidden="true">·</span>
          <span className="text-slate-300">Mobile Apps</span>
          <span className="text-cyan-500" aria-hidden="true">·</span>
          <span className="text-slate-300">Business ERP</span>
          <span className="text-cyan-500" aria-hidden="true">·</span>
          <span className="text-slate-300">SaaS Systems</span>
          <span className="text-cyan-500" aria-hidden="true">·</span>
          <span className="text-slate-300">AI Automation</span>
        </div>

        {/* Ambient Subtle Tech Ribbon */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 w-full max-w-3xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400/90 inline-block shadow-xs shadow-emerald-400" />
            <span className="text-slate-400">Available For Client Engineering</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Availability Architecture</span>
          </div>
          <div className="text-slate-400">
            Direct Line: <a href="tel:8169401877" className="text-cyan-400 hover:underline">8169401877</a>
          </div>
        </div>
      </div>
    </section>
  );
};
