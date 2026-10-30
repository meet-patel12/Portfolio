import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Left Neon Radial Glow */}
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#39FF14]/5 blur-[140px]" />
      
      {/* Center Subtle Aurora Radial Glow */}
      <div className="absolute top-[40%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-[#00C853]/5 blur-[160px]" />
      
      {/* Bottom Grounding Glow */}
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#1A1A1A]/40 blur-[180px]" />

      {/* Subtle Matrix / Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #39FF14 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

