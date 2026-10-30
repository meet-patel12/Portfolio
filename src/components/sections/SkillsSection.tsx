import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { SkillSphere } from '@/components/3d/SkillSphere';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-[#00C853]/5 blur-[150px] pointer-events-none" />

      {/* Accessible Crawler & Screen Reader Text Mirror */}
      <div className="sr-only">
        <h2>Technical Skills of Meet (Meet Patel)</h2>
        <ul>
          {SKILL_CATEGORIES.flatMap((c) => c.skills).map((s) => (
            <li key={s.name}>
              {s.name}: {s.level}% proficiency
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Technical Stack & <span className="text-neon-gradient">Architecture.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Full spectrum mastery spanning high-throughput server backends, reactive component trees, and real-time GPU shaders.
          </p>
        </div>

        {/* 2-Column Grid: 3D Interactive Sphere + Categorized Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Interactive Skill Sphere */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#1A1A1A]/40 border border-[#2A2A2A] backdrop-blur-xl relative shadow-2xl">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-[#BDBDBD]">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <span>Interactive 3D Sphere</span>
            </div>

            <SkillSphere />

            <p className="text-xs font-mono text-[#757575] mt-2 text-center">
              Fibonacci Tag Distribution • 60 FPS Three.js
            </p>
          </div>

          {/* Right Column: Skill Categories & Progress */}
          <div className="lg:col-span-7 space-y-6">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Terminal className="w-4 h-4 text-[#39FF14]" />
                  <h3 className="text-base font-display font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                        <span className="text-[#FFFFFF] font-medium">{skill.name}</span>
                        <span className="text-[#39FF14]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#121212] overflow-hidden border border-[#2A2A2A]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#00C853] via-[#39FF14] to-[#00E676] shadow-[0_0_10px_rgba(57,255,20,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

