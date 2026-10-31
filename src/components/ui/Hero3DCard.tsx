import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { HeroCanvas } from '@/components/3d/HeroCanvas';

export const Hero3DCard: React.FC = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null!);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-stiffness, zero-lag spring physics for instant 3D response
  const springConfig = { stiffness: 450, damping: 28, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      rectRef.current = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }
    setIsHovered(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative flex items-center justify-center w-full max-w-[480px] h-[520px] sm:h-[580px] select-none"
    >
      {/* 3D WebGL Canvas Layer (Rings, Orbiting Icons, Particle Field) */}
      <HeroCanvas isHovered={isHovered} />

      {/* Pulsing Neon Glow behind Portrait (Hardware accelerated opacity transform) */}
      <div
        className={`absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#39FF14]/15 blur-[80px] transition-all duration-300 pointer-events-none will-change-transform ${
          isHovered ? 'scale-115 opacity-100 bg-[#39FF14]/25' : 'scale-100 opacity-60'
        }`}
      />

      {/* 3D Interactive Card */}
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="relative z-10 w-[280px] sm:w-[320px] h-[390px] sm:h-[450px] rounded-3xl p-2 bg-gradient-to-b from-[#39FF14]/35 via-white/10 to-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(57,255,20,0.18)] cursor-pointer will-change-transform group"
      >
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#1A1A1A]">
          {/* Portrait Image (Optimized WebP) */}
          <img
            src="/images/meet-avatar.webp"
            alt={PERSONAL_INFO.fullName}
            width={320}
            height={450}
            className="w-full h-full object-cover object-[45%_top] filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
            loading="eager"
            decoding="async"
          />

          {/* Frosted Glass Shadow Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-90 pointer-events-none" />

          {/* Green Rim Light Overlay */}
          <div className="absolute inset-0 rounded-[22px] border-2 border-transparent group-hover:border-[#39FF14]/40 transition-colors duration-200 pointer-events-none" />

          {/* Bottom Floating Glass Badge Overlay */}
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#000000]/80 border border-white/10 backdrop-blur-md shadow-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-display font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-[#39FF14]">
                {PERSONAL_INFO.role.split('&')[0].trim()}
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#39FF14]/30 text-[10px] font-mono text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span>Available</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Hero3DCard.displayName = 'Hero3DCard';
