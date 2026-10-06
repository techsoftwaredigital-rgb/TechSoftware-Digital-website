import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, FolderGit2, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from '../components/ProjectDetailModal';

interface PortfolioSectionProps {
  onContactAboutSimilar: (projectTitle: string) => void;
  onViewAllProjects?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onContactAboutSimilar,
  onViewAllProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Websites', 'Web Apps', 'Mobile Apps', 'Business Software', 'AI Systems'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Anchor for both #work and #portfolio */}
      <div id="portfolio" className="absolute -top-24 left-0 pointer-events-none" />
      
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proven Deliverables</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          Selected Projects & Work
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          A showcase of recent digital platforms engineered for velocity, security, and measurable enterprise impact.
        </p>
      </div>

      {/* Modern Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-14 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-950'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            {/* Visual Project Image or Screen Render */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className={`relative h-full w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className="w-2/3 h-2 rounded bg-white/20" />
                    <div className="w-1/2 h-2 rounded bg-white/10" />
                  </div>
                </div>
              )}

              {/* Category pill on top of image */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[11px] font-mono text-cyan-200 bg-slate-950/80 border border-slate-700/80 px-2.5 py-1 rounded-md backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Hover overlay with Inspect Architecture CTA */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Metric Proof Badge */}
                <div className="mb-2 text-xs font-mono text-cyan-400 truncate">
                  {project.metrics}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/60">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Action */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>ts-devloper</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL PROJECTS Button */}
      <div className="mt-14 text-center">
        <button
          onClick={() => {
            if (onViewAllProjects) {
              onViewAllProjects();
            } else {
              setActiveCategory('All');
            }
          }}
          className="group px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl shadow-lg transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactAboutSimilar={onContactAboutSimilar}
      />
    </section>
  );
};
