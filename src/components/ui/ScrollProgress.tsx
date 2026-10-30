import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = React.memo(() => {
  const { scrollYProgress } = useScroll();

  // Ultra-smooth GPU-accelerated scaleX without React re-renders
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="h-full bg-gradient-to-r from-[#00C853] via-[#39FF14] to-[#00E676] shadow-[0_0_12px_#39FF14] will-change-transform"
      />
    </div>
  );
});

ScrollProgress.displayName = 'ScrollProgress';
