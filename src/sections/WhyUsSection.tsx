import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Cpu,
  Smartphone,
  Network,
  TrendingUp,
  LifeBuoy,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { RadarTelemetryBackground } from '../components/RadarTelemetryBackground';

export const WhyUsSection: React.FC = () => {
  const [counts, setCounts] = useState({
    websites: 0,
    apps: 0,
    systems: 0,
    uptime: 0,
  });

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        websites: Math.floor(progress * 100),
        apps: Math.floor(progress * 100),
        systems: Math.floor(progress * 100),
        uptime: Math.min(99.9, Number((progress * 99.9).toFixed(1))),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          websites: 100,
          apps: 100,
          systems: 100,
          uptime: 99.9,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: 'WEBSITES ARCHITECTURE',
      value: `${counts.websites}%`,
      sub: 'Responsive & SEO Hardened',
    },
    {
      label: 'APPLICATIONS SUITE',
      value: `${counts.apps}%`,
      sub: 'Native Android & iOS Core',
    },
    {
      label: 'BUSINESS SYSTEMS',
      value: `${counts.systems}%`,
      sub: 'Custom Logic & Zero Bloat',
    },
    {
      label: 'INFRASTRUCTURE UPTIME',
      value: `${counts.uptime}%`,
      sub: 'Cloud-Native Availability',
    },
  ];

  const pillars = [
    {
      icon: Wrench,
      title: 'Custom Engineering & Zero Bloat',
      description: 'Every database entity, API handler, and user flow is built specifically around your operating model without unnecessary legacy bloatware.',
    },
    {
      icon: Cpu,
      title: 'Modern Technology Arsenal',
      description: 'Engineered with TypeScript, modern reactive component trees, and serverless containerized clouds for performance and long-term maintainability.',
    },
    {
      icon: Smartphone,
      title: 'Fluid Responsive Precision',
      description: 'Tested across devices, orientations, and screen resolutions. Touch-first ergonomics, readable typography, and fluid 60fps responsive layouts.',
    },
    {
      icon: Network,
      title: 'Scalable Distributed Architecture',
      description: 'Modular code separation, indexed database schematics, and cache-friendly API structures prepared to support transaction growth without rewrites.',
    },
    {
      icon: TrendingUp,
      title: 'Business-Focused Engineering',
      description: 'We prioritize measurable outcomes: faster checkout cycles, reduced operational hours, lower error rates, and increased conversion velocity.',
    },
    {
      icon: LifeBuoy,
      title: 'Post-Launch Continuity & Scaling',
      description: 'Continuous monitoring, software upgrades, automated database backups, and direct developer communication whenever you need technical guidance.',
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Radar Telemetry & Concentric Coordinate Rings */}
      <RadarTelemetryBackground />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Animated Company Capabilities & Statistics Banner (Requirement 14) */}
      <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/25 relative overflow-hidden"
          >
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1 truncate">
              {stat.label}
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 mt-1 truncate">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Header (Requirement 15: WHY BUSINESSES CHOOSE TECHSOFTWARE.DIGITAL) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VERIFIED PARTNERSHIP STANDARDS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Why Businesses Choose TechSoftware.digital
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
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Guaranteed Code Quality</span>
                </span>
                <span className="text-cyan-400 font-bold">0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
