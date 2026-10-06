import React, { useState } from 'react';
import { Cpu, Bot, Cloud, Database, Network, ArrowRight, Layers, Workflow, Sparkles } from 'lucide-react';

interface AITechnologySectionProps {
  onStartProject?: () => void;
}

export const AITechnologySection: React.FC<AITechnologySectionProps> = ({ onStartProject }) => {
  const [activeLayer, setActiveLayer] = useState<'ai' | 'automation' | 'cloud' | 'data' | 'software' | 'systems'>('ai');

  const operatingLayers = [
    {
      id: 'ai' as const,
      name: 'Artificial Intelligence',
      tagline: 'Autonomous Agents & LLM Pipelines',
      description: 'Domain-fine-tuned conversational AI, semantic document understanding, automated synthesis, and intelligent query routing powered by next-generation foundation models.',
      icon: Bot,
      capabilities: ['Gemini API Integration', 'Private Vector Embeddings', 'Autonomous Agentic Tool-Use', 'Multi-Modal Vision Inspection'],
      metric: 'Sub-second Inference',
      accent: '#a855f7'
    },
    {
      id: 'automation' as const,
      name: 'Intelligent Automation',
      tagline: 'Zero-Touch Business Pipelines',
      description: 'Event-driven background workflows that trigger upon transactional events: automatic PDF invoice generation, multi-stage approval loops, and automated CRM reconciliations.',
      icon: Workflow,
      capabilities: ['Asynchronous Event Queues', 'Webhook Mesh Infrastructure', 'Multi-System Synchronization', 'Realtime Alert Routing'],
      metric: 'Zero Manual Interventions',
      accent: '#06b6d4'
    },
    {
      id: 'cloud' as const,
      name: 'Cloud Infrastructure',
      tagline: 'Serverless Multi-Region Resilience',
      description: 'Elastic compute platforms that dynamically scale from zero to millions of requests without manual provisioning. Global CDN edge routing ensures microsecond response times.',
      icon: Cloud,
      capabilities: ['Google Cloud & Firebase', 'Containerized Cloud Run', 'Global Anycast CDN', 'Automated Daily Backups'],
      metric: '99.99% Availability SLA',
      accent: '#38bdf8'
    },
    {
      id: 'data' as const,
      name: 'Data Architecture',
      tagline: 'ACID-Compliant Distributed Systems',
      description: 'Relational PostgreSQL architectures coupled with ultra-fast Redis memory caches and NoSQL document stores engineered for high concurrency and strict data integrity.',
      icon: Database,
      capabilities: ['PostgreSQL & Cloud SQL', 'Indexed Query Optimization', 'Realtime Snapshot Streams', 'Encrypted-At-Rest Storage'],
      metric: '< 10ms Query Latency',
      accent: '#10b981'
    },
    {
      id: 'software' as const,
      name: 'Modern Web & Mobile',
      tagline: 'Fluid Reactive Ergonomics',
      description: 'Cross-platform applications engineered with React 19, TypeScript, and native mobile shells that execute 60fps animations with zero layout jitter.',
      icon: Layers,
      capabilities: ['React & Next.js SPAs', 'iOS & Android Native Shells', 'Offline-First Local Storage', 'Accessible WCAG Compliance'],
      metric: '100/100 Core Web Vitals',
      accent: '#6366f1'
    },
    {
      id: 'systems' as const,
      name: 'Business Operating Systems',
      tagline: 'Cohesive Enterprise ERP & POS',
      description: 'Comprehensive software engines integrating point-of-sale, warehouse inventory, payroll, and customer relationships into one cohesive digital nervous system.',
      icon: Network,
      capabilities: ['Unified Management Console', 'Granular Role Permissions', 'Audit Logging & Compliance', 'Custom Business Schemas'],
      metric: '100% Tailored Logic',
      accent: '#f59e0b'
    }
  ];

  const currentModule = operatingLayers.find((l) => l.id === activeLayer) || operatingLayers[0];
  const CurrentIcon = currentModule.icon;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Advanced Digital Operating Matrix</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1] uppercase">
          ENGINEERED FOR{' '}
          <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
            WHAT'S NEXT.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          An integrated technology architecture that converges artificial intelligence, automated pipelines, resilient cloud runtimes, and purpose-built business systems.
        </p>
      </div>

      {/* Digital Operating Matrix Interactive Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: 6 Stacked Module Tabs */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
          {operatingLayers.map((layer) => {
            const Icon = layer.icon;
            const isSelected = activeLayer === layer.id;

            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-900/90 border-purple-500/50 shadow-lg shadow-purple-950/40 translate-x-1'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-purple-950/60 border-purple-400/60 text-purple-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {layer.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                      {layer.tagline}
                    </p>
                  </div>
                </div>

                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-purple-400 shadow-sm shadow-purple-400 scale-125' : 'bg-slate-700'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Node Inspector */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-2xl glass-panel border border-purple-500/30 p-7 sm:p-9 shadow-2xl shadow-purple-950/20 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Matrix Lines */}
            <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                      Sub-System Protocol
                    </span>
                    <h4 className="text-xl font-bold font-display text-white">
                      {currentModule.name}
                    </h4>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-300">
                  {currentModule.metric}
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentModule.description}
              </p>

              {/* Capabilities Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  Production Engineering Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentModule.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-500">
                Ready for Custom Enterprise Deployment
              </span>
              {onStartProject && (
                <button
                  onClick={onStartProject}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-400 rounded-lg shadow-md shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Engineer This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
