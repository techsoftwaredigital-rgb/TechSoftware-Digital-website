import React, { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Server, Layers, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    websites: 0,
    apps: 0,
    systems: 0,
    solutions: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate count-up
          const duration = 1500;
          const startTime = performance.now();

          const targetCounts = {
            websites: 100, // % Custom Engineered Architecture
            apps: 99, // % Sub-second Response Benchmarks
            systems: 100, // % Code & Intellectual Property Ownership
            solutions: 24, // /7 Continuous Technical Support Available
          };

          const animateNumbers = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts({
              websites: Math.floor(easeProgress * targetCounts.websites),
              apps: Math.floor(easeProgress * targetCounts.apps),
              systems: Math.floor(easeProgress * targetCounts.systems),
              solutions: Math.floor(easeProgress * targetCounts.solutions),
            });

            if (progress < 1) {
              requestAnimationFrame(animateNumbers);
            }
          };

          requestAnimationFrame(animateNumbers);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statCards = [
    {
      label: 'WEBSITES & WEB PLATFORMS',
      value: `${counts.websites}%`,
      subtext: 'Bespoke UI/UX & Responsive Engineering',
      icon: Globe,
      accent: 'cyan'
    },
    {
      label: 'MOBILE APPLICATIONS',
      value: `${counts.apps}%`,
      subtext: 'Sub-Second Fluid 60fps Native Runtimes',
      icon: Smartphone,
      accent: 'sky'
    },
    {
      label: 'BUSINESS SOFTWARE & ERP',
      value: `${counts.systems}%`,
      subtext: 'Full Source Code & Database Ownership',
      icon: Server,
      accent: 'indigo'
    },
    {
      label: 'ENTERPRISE SOLUTIONS',
      value: `${counts.solutions}/7`,
      subtext: 'Dedicated Support & Direct Developer Access',
      icon: Layers,
      accent: 'emerald'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-48 bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid of Capability Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  0{idx + 1} // CAPABILITY
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight tabular-nums mb-2">
                {card.value}
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                {card.label}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {card.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
