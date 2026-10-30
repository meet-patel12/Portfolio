import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw instantaneous mouse position (zero lag for central precision dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ultra-responsive high-stiffness spring for outer atmospheric ring
  const ringX = useSpring(cursorX, { stiffness: 900, damping: 42, mass: 0.1 });
  const ringY = useSpring(cursorY, { stiffness: 900, damping: 42, mass: 0.1 });

  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Disable immediately on touch / coarse devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.matches?.('button, a, input, select, textarea, [role="button"], [data-cursor="pointer"]') ||
        target.closest?.('button, a, input, select, textarea, [role="button"], [data-cursor="pointer"]')
      );

      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Neon Dot (Instantaneous 1:1 hardware tracking) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#39FF14] pointer-events-none z-[999] shadow-[0_0_10px_#39FF14] will-change-transform"
        aria-hidden="true"
      />
      {/* Outer Atmospheric Glow Ring (Responsive spring trailing) */}
      <motion.div
        animate={{
          scale: isHovered ? 1.5 : 1.0,
          opacity: isHovered ? 0.95 : 0.45,
          borderColor: isHovered ? '#00E676' : 'rgba(57, 255, 20, 0.5)',
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#39FF14]/50 pointer-events-none z-[998] will-change-transform"
        aria-hidden="true"
      />
    </>
  );
};
