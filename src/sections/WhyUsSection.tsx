import React from 'react';
import {
  Wrench,
  Cpu,
  Smartphone,
  Network,
  TrendingUp,
  LifeBuoy,
  ShieldCheck,
} from 'lucide-react';
import { RadarTelemetryBackground } from '../components/RadarTelemetryBackground';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Zero bloatware. Every feature, database entity, and user flow is built specifically around your operating model and business rules.',
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'Engineered with TypeScript, modern component architectures, and serverless/containerized clouds for performance and long-term maintainability.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Tested across devices and screen resolutions. Touch-first ergonomics, readable typography, and fluid responsive layouts.',
    },
    {
      icon: Network,
      title: 'Scalable Architecture',
      description: 'Modular code separation, indexed database design, and cache-friendly API structures prepared to support transactional growth without rewrites.',
    },
    {
      icon: TrendingUp,
      title: 'Business-Focused Development',
      description: 'We prioritize measurable outcomes: faster checkout cycles, reduced operational hours, lower error rates, and increased conversion rates.',
    },
    {
      icon: LifeBuoy,
      title: 'Post-Launch Support',
      description: 'Continuous monitoring, software upgrades, database backups, and direct developer communication whenever you need technical guidance.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Radar Telemetry & Concentric Coordinate Rings */}
      <RadarTelemetryBackground />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Core Engineering Principles</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Why TechSoftware.digital
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Reliable engineering practices and transparent technical partnerships designed to build lasting digital infrastructure.
        </p>
      </div>

      {/* Grid of Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-5 shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Standard Commitment</span>
                <span className="text-cyan-400">0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
