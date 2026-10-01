import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { CyberGridFloorBackground } from '../components/CyberGridFloorBackground';

interface PortfolioSectionProps {
  onContactAboutSimilar: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onContactAboutSimilar,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Websites', 'Web Apps', 'Mobile Apps', 'Business Software'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 3D Perspective Cyber Grid Floor Animation */}
      <CyberGridFloorBackground />

      {/* Glow background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-950/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proven Deliverables</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Selected Projects
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          A showcase of recent digital products engineered for efficiency, speed, and real-world business impact.
        </p>
      </div>

      {/* Modern Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30"
          >
            {/* Visual Project Graphic / Screen simulation */}
            <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}>
              {/* Subtle grid lines in graphic */}
              <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

              {/* Graphic Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[11px] font-mono text-cyan-200/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Simulated UI Wireframe / Graphic preview */}
              <div className="relative z-10 space-y-2">
                <div className="w-2/3 h-2.5 rounded-full bg-white/20" />
                <div className="w-1/2 h-2 rounded-full bg-white/10" />
                <div className="flex gap-2 pt-1">
                  <div className="w-14 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
                    <div className="w-6 h-1.5 rounded-full bg-cyan-400/60" />
                  </div>
                  <div className="w-14 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
                    <div className="w-6 h-1.5 rounded-full bg-emerald-400/60" />
                  </div>
                </div>
              </div>

              {/* Hover overlay with Quick Preview button */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105"
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
                <div className="mb-2 text-xs font-mono text-emerald-400 truncate">
                  {project.metrics}
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
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
                    className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>ts-devloper</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactAboutSimilar={onContactAboutSimilar}
      />
    </section>
  );
};
