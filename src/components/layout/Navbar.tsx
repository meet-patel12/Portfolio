import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = NAV_LINKS.map((link) => link.href.substring(1));
          const scrollPosition = window.scrollY + 250;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection((prev) => (prev === sections[i] ? prev : sections[i]));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/80 backdrop-blur-md border-b border-[#2A2A2A]/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo - Left Column */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 text-lg sm:text-xl font-display font-bold text-white tracking-tight focus-neon rounded-lg px-2 py-1 -ml-2 transition-transform duration-150 hover:scale-[1.02]"
            aria-label="Meet Portfolio Homepage"
          >
            <span className="w-8 h-8 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#39FF14]/50 flex items-center justify-center text-sm font-mono text-[#39FF14] transition-all shadow-[0_0_10px_rgba(57,255,20,0.1)]">
              M
            </span>
            <span>
              {PERSONAL_INFO.name}
              <span className="text-[#39FF14] inline-block animate-pulse">.</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links - Centered Column */}
        <nav
          className="hidden md:flex items-center gap-1.5 lg:gap-2.5 rounded-full bg-[#121212]/90 border border-[#2A2A2A] p-1.5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full group focus-neon ${
                  isActive
                    ? 'text-[#FFFFFF] bg-[#1A1A1A] border border-[#39FF14]/40 shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                    : 'text-[#BDBDBD] hover:text-[#FFFFFF] hover:bg-[#1A1A1A]/60 border border-transparent'
                }`}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#39FF14] rounded-full shadow-[0_0_6px_#39FF14]" />
                ) : (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#39FF14]/80 rounded-full transition-all duration-200 group-hover:w-3/5" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA & Availability Status - Right Column */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-3 lg:gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-[#2A2A2A] text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
            </span>
            <span className="text-[#BDBDBD]">{PERSONAL_INFO.availability}</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#39FF14] text-black text-xs font-semibold hover:bg-[#00E676] hover:shadow-[0_0_15px_#39FF14] transition-all duration-200 focus-neon"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white focus-neon"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#000000]/95 backdrop-blur-xl border-b border-[#2A2A2A] p-6 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-medium text-[#BDBDBD] hover:text-[#39FF14] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#BDBDBD] px-4">
                <span className="h-2 w-2 rounded-full bg-[#39FF14]" />
                {PERSONAL_INFO.availability}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[#39FF14] text-black font-semibold text-sm shadow-[0_0_15px_rgba(57,255,20,0.3)]"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

