import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ThemeProvider } from '@/context/ThemeContext';
import { HeroSection } from '@/components/sections/HeroSection';
import { Hero3DCard } from '@/components/ui/Hero3DCard';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PageLayout>
        <HeroSection rightSlot={<Hero3DCard />} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <ServicesSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
