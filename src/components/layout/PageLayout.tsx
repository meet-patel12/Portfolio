import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundGlow } from './BackgroundGlow';
import { ScrollProgress } from '../ui/ScrollProgress';
import { CustomCursor } from '../ui/CustomCursor';
import { Loader } from '../ui/Loader';
import { SmoothScrollProvider } from './SmoothScroll';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SmoothScrollProvider>
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#39FF14] focus:text-black focus:font-bold focus:rounded-lg focus:shadow-[0_0_20px_#39FF14]"
      >
        Skip to main content
      </a>

      {/* Global Interactive Utilities */}
      <CustomCursor />
      <ScrollProgress />
      <Loader />
      <BackgroundGlow />

      <div className="relative min-h-screen flex flex-col bg-[#000000] text-white">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

