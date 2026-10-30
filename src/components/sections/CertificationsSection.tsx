import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATES } from '@/data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-[#39FF14]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>06 // Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Verified <span className="text-neon-gradient">Certifications.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Formal recognition in full stack architectures, distributed systems, and technical entrepreneurship.
          </p>
        </div>

        {/* 3-Column Glass Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-7 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-md hover:border-[#39FF14]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Shield Icon */}
                <div className="w-12 h-12 rounded-2xl bg-black border border-[#2A2A2A] group-hover:border-[#39FF14]/40 flex items-center justify-center mb-6 text-[#39FF14] transition-colors shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono text-[#39FF14] mb-2">{cert.date}</div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#BDBDBD] font-mono leading-relaxed mb-6">
                  Issued by {cert.issuer}
                </p>
              </div>

              {/* Verification Link */}
              <div className="pt-4 border-t border-[#2A2A2A]">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#39FF14] transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

