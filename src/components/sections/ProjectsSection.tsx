import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/data/portfolioData';
import { GithubIcon } from '@/components/ui/SocialIcons';

const CATEGORIES = ['All', 'Full Stack', '3D & WebGL'] as const;

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#39FF14]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Featured <span className="text-neon-gradient">Engineering Projects.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 rounded-full bg-[#121212] border border-[#2A2A2A] p-1.5 backdrop-blur-md">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#39FF14] text-black font-bold shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                    : 'text-[#BDBDBD] hover:text-white hover:bg-[#1A1A1A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-5 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Mockup Preview */}
                <div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#121212] border border-[#2A2A2A] mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    {/* Category & Metric Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                        {project.category}
                      </span>
                    </div>

                    {project.metrics && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md border border-[#39FF14]/30 text-[10px] font-mono text-[#39FF14]">
                        {project.metrics}
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BDBDBD] line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-[#121212] border border-[#2A2A2A] text-[11px] font-mono text-[#BDBDBD]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-[#BDBDBD] hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#39FF14] text-xs font-mono font-semibold text-white hover:text-[#39FF14] transition-all shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
