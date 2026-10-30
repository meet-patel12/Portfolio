import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-[#39FF14]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Professional <span className="text-neon-gradient">Experience & Roles.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Delivering high-concurrency systems, 3D WebGL modules, and full-stack software across diverse engineering environments.
          </p>
        </div>

        {/* Timeline Container with Glowing Vertical Center Line */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#39FF14] via-[#00C853] to-transparent shadow-[0_0_12px_#39FF14] pointer-events-none opacity-80" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#000000] border-2 border-[#39FF14] shadow-[0_0_12px_#39FF14] z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                  </div>

                  {/* Card Content (Occupies half width on desktop) */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-3xl p-6 sm:p-7 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/40 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300"
                    >
                      {/* Period Badge & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#757575]">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-display font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-[#BDBDBD] mb-4">
                        {exp.company}
                      </h4>

                      {/* Bulleted Accomplishments */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, bulletIdx) => (
                          <li
                            key={bulletIdx}
                            className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed flex items-start gap-2"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2A2A2A]">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-[#121212] border border-[#2A2A2A] text-[11px] font-mono text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

