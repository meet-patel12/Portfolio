import React, { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'Creative Technologist',
  'Three.js WebGL Engineer',
  'System Architect',
];

export const TypewriterText: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(ROLES[0]);
      return;
    }

    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="text-neon-gradient font-bold">{displayedText}</span>
      <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-[#39FF14] animate-pulse rounded-full" />
    </span>
  );
};

