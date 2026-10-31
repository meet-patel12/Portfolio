import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Download, Eye, Sparkles, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GlassButton } from '@/components/ui/GlassButton';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';

interface HeroSectionProps {
  rightSlot?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ rightSlot }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Lighting Effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-[#39FF14]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-[#00C853]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative, Typography & CTAs with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Greeting Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#2A2A2A] text-xs font-mono text-[#BDBDBD] mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span>{PERSONAL_INFO.greeting}</span>
              <span className="text-[#39FF14] font-semibold">{PERSONAL_INFO.name}</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-4">
              Crafting <span className="text-white">Scalable</span>
              <br />
              <span className="text-white">Systems &</span>{' '}
              <span className="text-neon-gradient">3D Worlds.</span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div variants={itemVariants} className="text-xl sm:text-2xl font-display font-medium text-[#BDBDBD] mb-6 flex flex-wrap items-center gap-2">
              <span>Specialized in</span>
              <TypewriterText />
            </motion.div>

            {/* Narrative Description */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#BDBDBD] max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <MagneticButton>
                <GlassButton
                  variant="primary"
                  size="lg"
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </GlassButton>
              </MagneticButton>

              <MagneticButton>
                <GlassButton
                  variant="secondary"
                  size="lg"
                  href="#projects"
                  rightIcon={<Eye className="w-4 h-4 text-[#39FF14]" />}
                >
                  View Projects
                </GlassButton>
              </MagneticButton>
            </motion.div>

            {/* Social Links & Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-[#2A2A2A]/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#121212] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#121212] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#121212] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                  aria-label="Twitter Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.emails.primary}`}
                  className="p-2.5 rounded-full bg-[#121212] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#757575]">
                <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>60 FPS • WebGL Shaders • Clean Architecture</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Photo & Graphic Presentation Slot */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {rightSlot}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-xs font-mono text-[#757575] hover:text-[#39FF14] transition-colors focus-neon p-2"
        aria-label="Scroll to About section"
      >
        <span className="tracking-wider uppercase text-[10px]">Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#39FF14]" />
      </a>
    </section>
  );
};
