import React from 'react';
import { motion } from 'framer-motion';
import { Box, Check, Cloud, Layers, Sparkles, Wrench, Zap } from 'lucide-react';
import { SERVICES, ServiceItem } from '@/data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#39FF14]" />;
      case 'Box':
        return <Box className="w-6 h-6 text-[#39FF14]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#39FF14]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#39FF14]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#39FF14]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#00C853]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // Capabilities & Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            High-Impact <span className="text-neon-gradient">Engineering Services.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            From greenfield 3D web applications to cloud architecture and extreme performance audits.
          </p>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-8 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/40 hover:shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon */}
                <div className="w-14 h-14 rounded-2xl bg-black border border-[#2A2A2A] group-hover:border-[#39FF14]/40 flex items-center justify-center mb-6 shadow-inner transition-colors">
                  {getIcon(service.icon)}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#BDBDBD] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-6 border-t border-[#2A2A2A] space-y-2.5">
                {service.capabilities.map((cap, capIdx) => (
                  <div key={capIdx} className="flex items-center gap-2.5 text-xs font-mono text-[#FFFFFF]">
                    <div className="w-4 h-4 rounded-full bg-black border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14]">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

