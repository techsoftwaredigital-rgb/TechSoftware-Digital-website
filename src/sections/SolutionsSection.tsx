import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users,
  Receipt,
  Boxes,
  Hotel,
  Utensils,
  GraduationCap,
  Calculator,
  CalendarCheck,
  UserCheck,
  Briefcase,
  Code,
  Sparkles,
} from 'lucide-react';
import { solutionsData, SolutionItem } from '../data/solutionsData';

interface SolutionsSectionProps {
  onSelectSolutionForEnquiry: (solutionName: string) => void;
}

const solutionIconMap: Record<string, React.FC<{ className?: string }>> = {
  Users,
  Layers,
  Receipt,
  Boxes,
  Hotel,
  Utensils,
  GraduationCap,
  Calculator,
  CalendarCheck,
  UserCheck,
  Briefcase,
  Code,
};

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
    <section id="solutions" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-950/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Turnkey Business Web Platforms</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          Business Web Apps & Solutions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Turnkey and customizable software architectures tailored to specialized industry operations.
        </p>
      </div>

      {/* Interactive Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-800/80">
        
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Solutions Cards Grid with Profile Visuals */}
      {filteredSolutions.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl border border-slate-800 bg-slate-900/30">
          <p className="text-slate-400 text-sm">No solutions found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredSolutions.map((solution) => {
            const IconComp = solutionIconMap[solution.iconName] || Layers;

            return (
              <div
                key={solution.id}
                className="group relative flex flex-col justify-between rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Profile Image & Header Stage */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  {solution.imageUrl ? (
                    <img
                      src={solution.imageUrl}
                      alt={solution.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center p-6`}>
                      <IconComp className="w-12 h-12 text-cyan-400/60" />
                    </div>
                  )}

                  {/* Gradient Scrim for readable overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Top Bar on Image: Category Badge + Status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-200 bg-slate-950/80 border border-slate-700/80 backdrop-blur-md">
                      <IconComp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{solution.category}</span>
                    </span>

                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded backdrop-blur-md">
                      Active Web App
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm line-clamp-1">
                      {solution.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Deploy Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
