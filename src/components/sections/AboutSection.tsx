import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, CheckCircle2, Code2, Cpu, Globe2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Neon Accent Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-[#39FF14]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Architecting Scalable Systems with{' '}
            <span className="text-neon-gradient">Creative Precision.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Bridging the gap between robust distributed backends and cinematic, high-framerate interactive web experiences.
          </p>
        </div>

        {/* Top Grid: Bio Card & Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Bio Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-8 bg-gradient-to-br from-[#1A1A1A]/80 via-[#141414]/80 to-[#121212]/90 border border-[#2A2A2A] backdrop-blur-xl shadow-2xl relative group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#2A2A2A] flex items-center justify-center text-[#39FF14]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">Full Stack Philosophy</h3>
                <p className="text-xs font-mono text-[#BDBDBD]">Clean Code • 60 FPS • High Concurrency</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">{PERSONAL_INFO.fullName}</span>, a full stack software engineer dedicated to building resilient enterprise architectures, modern reactive frontends, and GPU-optimized WebGL environments.
              </p>
              <p>
                My engineering ethos centers on clean abstraction boundaries, strict type safety with TypeScript, and performance budgeting. Whether optimizing database query indices in PostgreSQL or minimizing draw calls in Three.js, I treat responsiveness and framerate as core features.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#2A2A2A]">
              <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                <span>Zero Latency Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                <span>WCAG 2.1 AA Accessibility</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                <span>Microservice Modular Design</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                <span>Cinematic 3D Interactions</span>
              </div>
            </div>
          </motion.div>

          {/* Stats 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-6 bg-[#1A1A1A]/60 border border-[#2A2A2A] backdrop-blur-md flex flex-col justify-between hover:border-[#39FF14]/40 hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white group-hover:text-[#39FF14] transition-colors">
                  {item.metric}
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white mb-1">{item.label}</h4>
                  <p className="text-xs text-[#757575] leading-snug">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Cards: Education, Leadership & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 bg-[#1A1A1A]/40 border border-[#2A2A2A] backdrop-blur-md hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-black border border-[#2A2A2A] text-[#39FF14]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-white">Education</h3>
            </div>
            <h4 className="text-sm font-semibold text-white">B.Tech in Computer Science</h4>
            <p className="text-xs text-[#39FF14] font-mono mt-0.5">Bhopal, India</p>
            <p className="text-xs text-[#BDBDBD] mt-3 leading-relaxed">
              In-depth coursework in Data Structures, Algorithms, Distributed Systems, DBMS, and Software Engineering.
            </p>
          </motion.div>

          {/* Innovation & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 bg-[#1A1A1A]/40 border border-[#2A2A2A] backdrop-blur-md hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-black border border-[#2A2A2A] text-[#00C853]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-white">Innovation & Hackathons</h3>
            </div>
            <h4 className="text-sm font-semibold text-white">MOE IDE Bootcamp, IIT Roorkee</h4>
            <p className="text-xs text-[#00C853] font-mono mt-0.5">Innovation Graduate</p>
            <p className="text-xs text-[#BDBDBD] mt-3 leading-relaxed">
              Completed intensive Innovation, Design & Entrepreneurship bootcamp; hosted INFORIA Tech Summit Hackathon.
            </p>
          </motion.div>

          {/* Global Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-6 bg-[#1A1A1A]/40 border border-[#2A2A2A] backdrop-blur-md hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-black border border-[#2A2A2A] text-[#39FF14]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-white">IEEE Leadership</h3>
            </div>
            <h4 className="text-sm font-semibold text-white">IEEE MP Section Volunteer</h4>
            <p className="text-xs text-[#39FF14] font-mono mt-0.5">Media & Technical Coordinator</p>
            <p className="text-xs text-[#BDBDBD] mt-3 leading-relaxed">
              Spearheaded visual campaigns and digital outreach, communicating software advancements to over 50k+ viewers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

