import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from '@/hooks/useInView';

const SKILLS_LIST = [
  'React 19',
  'Three.js',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Docker',
  'AWS',
  'PostgreSQL',
  'MongoDB',
  'Java',
  'Spring Boot',
  'FastAPI',
  'Tailwind CSS',
  'Framer Motion',
  'WebGL',
  'GraphQL',
];

interface SphereGroupProps {
  reducedMotion?: boolean;
}

const SphereGroup: React.FC<SphereGroupProps> = React.memo(({ reducedMotion }) => {
  const groupRef = useRef<THREE.Group>(null!);

  const points = useMemo(() => {
    const list: [number, number, number, string][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < SKILLS_LIST.length; i++) {
      const y = 1 - (i / (SKILLS_LIST.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const scale = 2.4;
      list.push([x * scale, y * scale, z * scale, SKILLS_LIST[i]]);
    }
    return list;
  }, []);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.16;
    groupRef.current.rotation.x += delta * 0.07;
  });

  return (
    <group ref={groupRef}>
      {points.map(([x, y, z, skill], idx) => (
        <group key={idx} position={[x, y, z]}>
          <Html center distanceFactor={8} className="pointer-events-none select-none">
            <span className="px-2.5 py-1 rounded-full bg-black/85 border border-[#39FF14]/40 text-white font-mono text-xs font-semibold whitespace-nowrap shadow-[0_0_12px_rgba(57,255,20,0.25)] hover:border-[#39FF14] transition-colors">
              {skill}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
});

SphereGroup.displayName = 'SphereGroup';

export const SkillSphere: React.FC = React.memo(() => {
  const [containerRef, inView] = useInView<HTMLDivElement>(0.05);

  return (
    <div ref={containerRef} className="w-full h-[360px] sm:h-[440px] relative">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ powerPreference: 'high-performance', alpha: true, antialias: true }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <SphereGroup />
        </Suspense>
      </Canvas>
    </div>
  );
});

SkillSphere.displayName = 'SkillSphere';
