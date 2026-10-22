import React, { useState, useMemo } from 'react';
import {
  FolderGit2,
  Search,
  X,
  ExternalLink,
  Eye,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { demoProjectsData, demoCategories, DemoProject } from '../data/demoProjects';
import { DemoProjectDetailModal } from '../components/DemoProjectDetailModal';

interface PortfolioSectionProps {
  onContactAboutSimilar: (projectName: string, projectCategory?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onContactAboutSimilar,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<DemoProject | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Category project counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Projects': demoProjectsData.length,
    };
    demoProjectsData.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return demoProjectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' || project.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const matchesName = project.name.toLowerCase().includes(query);
      const matchesIndustry = project.industry.toLowerCase().includes(query);
      const matchesDesc = project.description.toLowerCase().includes(query);
      const matchesFeatures = project.features.some((f) =>
        f.toLowerCase().includes(query)
      );

      return matchesName || matchesIndustry || matchesDesc || matchesFeatures;
    });
  }, [activeCategory, searchQuery]);

  // When filtering or searching, show all matching results; otherwise limit to 9 unless expanded
  const isFiltering = activeCategory !== 'All Projects' || searchQuery.trim() !== '';
  const visibleProjects = isFiltering || showAll
    ? filteredProjects
    : filteredProjects.slice(0, 9);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Anchor for both #work and #portfolio */}
      <div id="portfolio" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-600/10 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-950/40 mb-3.5">
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Work: Demo Apps &amp; Production Systems</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-bold">30 Projects</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          Our Work &amp; Demo Projects
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Explore our complete catalog of 30 production concepts, enterprise SaaS systems, business management software, and custom applications. Test live demos or commission a custom version.
        </p>
      </div>

      {/* Search and Category Filter Controls */}
      <div className="max-w-4xl mx-auto mb-10 space-y-4">
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, industry, or features (e.g. Restaurant, POS, CRM, SaaS)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-all outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white rounded-md transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {demoCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-md shadow-cyan-950/60 font-semibold'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive
                      ? 'bg-cyan-400/30 text-cyan-200'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Filter Summary */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Showing <strong className="text-cyan-300">{visibleProjects.length}</strong> of{' '}
            <strong className="text-white">{filteredProjects.length}</strong> matching projects
          </span>
          {(activeCategory !== 'All Projects' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Empty Search State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto">
          <FolderGit2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No Projects Found</h3>
          <p className="text-xs text-slate-400 mb-4">
            No projects matched &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All Projects');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
          >
            Show All 30 Projects
          </button>
        </div>
      )}

      {/* Projects Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {visibleProjects.map((project) => {
          const isLive = project.status === 'live' && Boolean(project.demoUrl);

          return (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-md"
            >
              {/* Card Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                {project.image && project.image.trim() !== '' ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={320}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                  <span className="text-[10px] font-mono font-medium text-cyan-200 bg-slate-950/90 border border-cyan-500/40 px-2 py-0.5 rounded backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded backdrop-blur-md">
                    {project.platformBadge}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-10">
                  {isLive ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-2 py-0.5 rounded backdrop-blur-md shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE DEMO
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-950/90 border border-slate-700/80 px-2 py-0.5 rounded backdrop-blur-md">
                      <Clock className="w-2.5 h-2.5 text-slate-400" />
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Hover Inspect CTA Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture &amp; Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Industry Label & Concept Tag */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono text-cyan-400 truncate">
                      {project.industry}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider px-1.5 py-0.2 rounded bg-slate-800/80 border border-slate-700/60">
                      {project.demoLabel}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* 3 Key Features */}
                  <div className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-800/60">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {isLive ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 inline-flex items-center gap-1 transition-colors"
                        title={`Open live demo for ${project.name}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/60 text-slate-400 border border-slate-700/50 inline-flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 text-slate-500" />
                        <span>Demo Soon</span>
                      </span>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3 text-slate-500" />
                      <span>Details</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onContactAboutSimilar(project.name, project.category)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    title={`Request a custom build similar to ${project.name}`}
                  >
                    <span>Request Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show All / Show Less Toggle (when viewing All Projects without search) */}
      {!isFiltering && filteredProjects.length > 9 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 rounded-xl shadow-lg shadow-cyan-950/40 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>
              {showAll
                ? 'SHOW LESS (FIRST 9 PROJECTS)'
                : `EXPLORE ALL 30 DEMO APPS & PROJECTS`}
            </span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-cyan-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      <DemoProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestProject={(name, category) => {
          setSelectedProject(null);
          onContactAboutSimilar(name, category);
        }}
      />
    </section>
  );
};
