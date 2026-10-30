import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { CORE_TECH } from '@/data/portfolioData';

export interface OrbitingIconsProps {
  isHovered?: boolean;
  reducedMotion?: boolean;
}

export const OrbitingIcons: React.FC<OrbitingIconsProps> = ({
  isHovered = false,
  reducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    const speed = isHovered ? delta * 0.55 : delta * 0.22;
    groupRef.current.rotation.y += speed;
  });

  return (
    <group ref={groupRef} rotation={[0.35, 0, 0.2]}>
      {CORE_TECH.map((tech, i) => {
        const angle = (i / CORE_TECH.length) * Math.PI * 2;
        const radius = 2.85;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={tech.name} position={[x, 0, z]}>
            <Html center distanceFactor={9} className="pointer-events-none select-none">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000]/85 border border-[#39FF14]/40 backdrop-blur-md shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

