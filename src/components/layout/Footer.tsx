import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';

const FOOTER_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#2A2A2A] bg-[#000000] py-14 lg:py-18 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2A2A2A] items-center">
          {/* Logo & Headline */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
            <a href="#" className="flex items-center gap-2 text-xl font-display font-bold text-white focus-neon rounded-md">
              <span className="w-8 h-8 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-sm font-mono text-[#39FF14]">
                M
              </span>
              <span>
                {PERSONAL_INFO.name}
                <span className="text-[#39FF14]">.</span>
              </span>
            </a>
            <p className="text-xs text-[#BDBDBD] max-w-sm leading-relaxed">
              Engineering AI-startup tier 3D interactive web experiences with modern architecture and sustained 60 FPS performance.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-mono">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#757575] hover:text-[#39FF14] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back To Top */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.emails.primary}`}
                className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#2A2A2A] text-xs font-mono text-[#BDBDBD] hover:text-white hover:border-[#39FF14]/40 transition-all group cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#39FF14]" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#757575] gap-4">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with</span>
            <span className="text-[#39FF14]">Three.js</span>
            <span>•</span>
            <span className="text-[#39FF14]">React 19</span>
            <span>•</span>
            <span className="text-[#39FF14]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
