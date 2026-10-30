import React, { useRef, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = React.memo(({
  children,
  className,
  onClick,
  strength = 0.28,
}) => {
  const ref = useRef<HTMLDivElement>(null!);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  // Snappy, immediate spring response (no lag or floating feeling)
  const x = useSpring(0, { stiffness: 400, damping: 22, mass: 0.1 });
  const y = useSpring(0, { stiffness: 400, damping: 22, mass: 0.1 });

  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      rectRef.current = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  }, [strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      onClick={onClick}
      className={`will-change-transform ${className || ''}`}
    >
      {children}
    </motion.div>
  );
});

MagneticButton.displayName = 'MagneticButton';
