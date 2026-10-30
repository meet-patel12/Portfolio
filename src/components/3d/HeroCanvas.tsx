import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { ConcentricRings } from './ConcentricRings';
import { OrbitingIcons } from './OrbitingIcons';
import { ParticleField } from './ParticleField';
import { useInView } from '@/hooks/useInView';

export interface HeroCanvasProps {
  isHovered?: boolean;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = React.memo(({ isHovered = false }) => {
  const [containerRef, inView] = useInView<HTMLDivElement>(0.05);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        gl={{
          powerPreference: 'high-performance',
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          preserveDrawingBuffer: false,
        }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 6], fov: 48, near: 0.1, far: 50 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFFFFF" />
          <pointLight position={[-4, 2, -2]} intensity={2.5} color="#39FF14" distance={10} />
          <pointLight position={[3, -3, 2]} intensity={1.5} color="#00C853" distance={8} />

          <ParticleField count={200} />
          <ConcentricRings isHovered={isHovered} />
          <OrbitingIcons isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  );
});

HeroCanvas.displayName = 'HeroCanvas';
