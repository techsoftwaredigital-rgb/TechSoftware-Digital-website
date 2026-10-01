import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, ArrowRight, Layers, SlidersHorizontal } from 'lucide-react';
import { solutionsData, SolutionItem } from '../data/solutionsData';
import { DataStreamBackground } from '../components/DataStreamBackground';

interface SolutionsSectionProps {
  onSelectSolutionForEnquiry: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Operations', 'Finance & Sales', 'Hospitality & Education', 'Workforce'];

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyHighlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="solutions" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* High-Tech Animated Matrix Data Stream */}
      <DataStreamBackground />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-950/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Industry Systems</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Business Solutions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Turnkey and customizable software architectures tailored to specialized industry operations.
        </p>
      </div>

      {/* Interactive Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
        
        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
                  : 'text-slate-400 hover:text-white bg-slate-900/50 border border-slate-800/60 hover:bg-slate-800/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search CRM, POS, School..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900/70 border border-slate-700/60 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Solutions Cards Grid */}
      {filteredSolutions.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl border border-slate-800 bg-slate-900/30">
          <p className="text-slate-400 text-sm">No solutions found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs text-cyan-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-cyan-400 text-[11px] uppercase tracking-wider">
                    {solution.category}
                  </span>
                  <span className="text-slate-500 text-[11px] font-mono">
                    Ready to Deploy
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {solution.name}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {solution.shortDesc}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                  {solution.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 truncate max-w-[170px]">
                  Customizable Logic
                </span>
                <button
                  onClick={() => onSelectSolutionForEnquiry(solution.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Deploy Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
