import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useInView } from '@/hooks/useInView';

interface GlobeSphereProps {
  reducedMotion?: boolean;
}

const GlobeSphere: React.FC<GlobeSphereProps> = React.memo(({ reducedMotion }) => {
  const globeRef = useRef<THREE.Group>(null!);
  const markerRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (reducedMotion || !globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.14;
    if (markerRef.current) {
      markerRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 4) * 0.15);
    }
  });

  return (
    <group ref={globeRef}>
      {/* Outer Wireframe Grid Sphere */}
      <mesh>
        <sphereGeometry args={[2.0, 24, 24]} />
        <meshBasicMaterial
          color="#39FF14"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner Solid Obsidian Core */}
      <mesh>
        <sphereGeometry args={[1.96, 32, 32]} />
        <meshStandardMaterial
          color="#121212"
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {/* Latitudinal Glowing Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.22, 64]} />
        <meshBasicMaterial
          color="#00C853"
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Meet's Coordinate Pin (Surat, Gujarat, India ~ 21°N, 73°E) */}
      <group position={[0.8, 0.75, 1.55]}>
        <mesh ref={markerRef}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#39FF14" />
        </mesh>
      </group>
    </group>
  );
});

GlobeSphere.displayName = 'GlobeSphere';

export const EarthCanvas: React.FC = React.memo(() => {
  const [containerRef, inView] = useInView<HTMLDivElement>(0.05);

  return (
    <div ref={containerRef} className="w-full h-[360px] sm:h-[440px] relative select-none">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ powerPreference: 'high-performance', alpha: true, antialias: true }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        className="w-full h-full pointer-events-none"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 3]} intensity={1.5} color="#FFFFFF" />
          <pointLight position={[-3, 2, -2]} intensity={2.0} color="#39FF14" />
          <GlobeSphere />
        </Suspense>
      </Canvas>
    </div>
  );
});

EarthCanvas.displayName = 'EarthCanvas';
