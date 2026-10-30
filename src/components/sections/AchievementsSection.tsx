import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, Users, Flame, Star, Sparkles } from 'lucide-react';

const HONORS_LIST = [
  {
    title: 'Flagship Hackathon Lead & Host',
    organization: 'INFORIA Tech Summit',
    badge: 'Co-Curricular Lead',
    description: 'Organized and hosted the premier regional hackathon, guiding 200+ developer participants and mentoring finalist engineering teams.',
    icon: Trophy,
    highlight: '200+ Participants',
  },
  {
    title: 'International Racing Team Coordinator',
    organization: 'Go-Kart International Racing 2K25',
    badge: 'Operations & Logistics',
    description: 'Directed multi-disciplinary engineering logistics, budgeting, and race track operations in high-pressure competition environments.',
    icon: Flag,
    highlight: 'Team Coordination',
  },
  {
    title: 'Digital Outreach Lead',
    organization: 'IEEE Madhya Pradesh Section',
    badge: 'Volunteer Leader',
    description: 'Spearheaded technical media campaigns and live event broadcasts, accelerating community engagement by over 140%.',
    icon: Users,
    highlight: '140% Growth',
  },
  {
    title: 'Creative Tech & Video Direction',
    organization: 'Cinematic Visual Media',
    badge: 'Creative Director',
    description: 'Engineered high-impact tech tutorials, motion graphic breakdowns, and cinematic reels garnering over 100k+ organic views.',
    icon: Flame,
    highlight: '100k+ Views',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#00C853]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Star className="w-3.5 h-3.5" />
            <span>07 // Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Leadership & <span className="text-neon-gradient">Achievements.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Demonstrated capability in driving high-stakes technical projects, hackathons, and creative digital campaigns.
          </p>
        </div>

        {/* 4-Card Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HONORS_LIST.map((honor, idx) => {
            const IconComponent = honor.icon;

            return (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-8 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/40 hover:shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-black border border-[#2A2A2A] group-hover:border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/80 border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]">
                      {honor.highlight}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#BDBDBD] mb-1">{honor.organization}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">
                    {honor.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed">
                    {honor.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A2A2A] mt-6 flex items-center gap-2 text-xs font-mono text-[#757575]">
                  <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>{honor.badge}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

