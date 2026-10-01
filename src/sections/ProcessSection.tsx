import React, { useState } from 'react';
import { GitBranch, Clock, CheckCircle2, ChevronRight, ChevronDown } from 'lucide-react';
import { processData, ProcessStepItem } from '../data/processData';
import { EnergyConduitBackground } from '../components/EnergyConduitBackground';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Energy Conduit Electrical Flow */}
      <EnergyConduitBackground />

      {/* Background line accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-950/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <GitBranch className="w-3.5 h-3.5" />
          <span>Engineering Lifecycle</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          From Idea to Launch
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          A disciplined, transparent delivery framework designed for predictability, clean code, and zero production surprises.
        </p>
      </div>

      {/* Interactive Process Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Numbered Step Navigation */}
        <div className="lg:col-span-5 space-y-3">
          {processData.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/40 translate-x-1'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-cyan-400 text-black'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-bold font-display ${
                          isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {step.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-cyan-400 rotate-90 lg:rotate-0' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Active Step Viewport */}
        <div className="lg:col-span-7">
          <div className="sticky top-28 p-7 sm:p-9 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 relative overflow-hidden">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Step Top Bar */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>Phase {processData[activeStep].number} of 07</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>{processData[activeStep].durationEstimate}</span>
              </div>
            </div>

            {/* Step Title & Core Description */}
            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {processData[activeStep].number} — {processData[activeStep].title}
              </h3>
              <p className="mt-2 text-base text-cyan-300 font-medium">
                {processData[activeStep].shortDesc}
              </p>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {processData[activeStep].details}
              </p>
            </div>

            {/* Tangible Deliverables for This Phase */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Phase Deliverables</span>
              </h4>
              <div className="space-y-2.5">
                {processData[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step Quick Selector */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className={`text-xs font-mono ${
                  activeStep === 0
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'text-slate-400 hover:text-white cursor-pointer'
                }`}
              >
                ← Previous Phase
              </button>

              <button
                disabled={activeStep === processData.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(processData.length - 1, prev + 1))}
                className={`text-xs font-mono flex items-center gap-1 ${
                  activeStep === processData.length - 1
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'text-cyan-400 hover:text-cyan-300 cursor-pointer font-semibold'
                }`}
              >
                <span>Next Phase</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
