import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Database, ShieldCheck, ArrowRight, Activity, Network } from 'lucide-react';

interface FutureBusinessSectionProps {
  onStartProject?: () => void;
}

export const FutureBusinessSection: React.FC<FutureBusinessSectionProps> = ({ onStartProject }) => {
  const [activeNode, setActiveNode] = useState(0);

  const digitalStreams = [
    {
      id: 'velocity',
      title: 'Automated Operations',
      metric: '10x Execution Speed',
      description: 'Replace fragmented spreadsheets and legacy workflows with integrated real-time pipelines that synchronize sales, operations, and fulfillment automatically.',
      icon: Zap,
      status: 'REALTIME STREAMING',
      accent: 'cyan'
    },
    {
      id: 'intelligence',
      title: 'Predictive Intelligence',
      metric: '99.4% Forecast Precision',
      description: 'Embed domain-trained machine learning and semantic data search to anticipate customer churn, automate inventory reorders, and drive executive decision-making.',
      icon: Cpu,
      status: 'NEURAL CLUSTER ACTIVE',
      accent: 'indigo'
    },
    {
      id: 'architecture',
      title: 'Elastic Cloud Scalability',
      metric: 'Zero-Downtime Migration',
      description: 'Distributed microservices and containerized databases engineered to handle 100x traffic surges without performance degradation or infrastructure rewrites.',
      icon: Database,
      status: 'AUTONOMOUS MULTI-REGION',
      accent: 'sky'
    },
    {
      id: 'integrity',
      title: 'Military-Grade Hardening',
      metric: 'Zero-Trust Protocol',
      description: 'End-to-end cryptographic integrity, automated security audits, encrypted transit, and role-based access control protecting critical enterprise IP.',
      icon: ShieldCheck,
      status: 'CONTINUOUS THREAT GUARD',
      accent: 'emerald'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % digitalStreams.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [digitalStreams.length]);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4 backdrop-blur-md">
          <Network className="w-3.5 h-3.5 text-cyan-400" />
          <span>Strategic Technological Vision</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1] uppercase">
          THE FUTURE OF BUSINESS{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            IS DIGITAL.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We engineer digital products that help businesses move faster, operate smarter and build for what comes next.
        </p>
      </div>

      {/* Futuristic Interactive Network & Core Visualization Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Interactive Node Selectors */}
        <div className="lg:col-span-6 space-y-3.5">
          {digitalStreams.map((stream, idx) => {
            const Icon = stream.icon;
            const isSelected = activeNode === idx;

            return (
              <div
                key={stream.id}
                onClick={() => setActiveNode(idx)}
                className={`group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/40 translate-x-1.5'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20 scale-105'
                        : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`text-base font-bold font-display truncate ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {stream.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400 shrink-0">
                        {stream.metric}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {stream.description}
                    </p>
                  </div>
                </div>

                {/* Active progress indicator bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Futuristic Animated Holographic Cockpit */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl glass-panel border border-cyan-500/30 p-7 sm:p-9 shadow-2xl shadow-cyan-950/30 overflow-hidden min-h-[380px] flex flex-col justify-between">
            {/* Ambient Background Glow Lines */}
            <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Top Cockpit Telemetry Bar */}
            <div className="relative z-10 flex items-center justify-between pb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Neural Business Engine
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                <Activity className="w-3.5 h-3.5" />
                <span>{digitalStreams[activeNode].status}</span>
              </div>
            </div>

            {/* Middle Dynamic Data Visualizer */}
            <div className="relative z-10 my-6 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                0{activeNode + 1} // Active Architectural Stream
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {digitalStreams[activeNode].title}
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {digitalStreams[activeNode].description}
              </p>

              {/* Real-time Visual Streams Simulation */}
              <div className="pt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Architecture</div>
                  <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">Microservices</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Sync Engine</div>
                  <div className="text-xs font-mono font-bold text-cyan-400 mt-0.5">Sub-50ms</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Deployability</div>
                  <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">Continuous</div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Engineered for High-Scale Enterprise
              </span>
              {onStartProject && (
                <button
                  onClick={onStartProject}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
                >
                  <span>Build This Into Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
