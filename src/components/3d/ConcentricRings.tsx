import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface ConcentricRingsProps {
  isHovered?: boolean;
  reducedMotion?: boolean;
}

export const ConcentricRings: React.FC<ConcentricRingsProps> = ({
  isHovered = false,
  reducedMotion = false,
}) => {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    const speed = isHovered ? 2.0 : 1.0;
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.15 * speed;
      ring1.current.rotation.y += delta * 0.22 * speed;
    }
    if (ring2.current) {
      ring2.current.rotation.x -= delta * 0.20 * speed;
      ring2.current.rotation.z += delta * 0.18 * speed;
    }
    if (ring3.current) {
      ring3.current.rotation.y -= delta * 0.12 * speed;
      ring3.current.rotation.z += delta * 0.28 * speed;
    }
  });

  return (
    <group>
      {/* Inner Neon Green Ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.3, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#39FF14"
          emissive="#39FF14"
          emissiveIntensity={1.8}
          roughness={0.2}
        />
      </mesh>

      {/* Middle Emerald Translucent Ring */}
      <mesh ref={ring2}>
        <torusGeometry args={[2.7, 0.014, 16, 120]} />
        <meshStandardMaterial
          color="#00C853"
          emissive="#00C853"
          emissiveIntensity={1.2}
          transparent
          opacity={0.65}
          roughness={0.3}
        />
      </mesh>

      {/* Outer Subtle Tech Ring */}
      <mesh ref={ring3}>
        <torusGeometry args={[3.1, 0.010, 16, 120]} />
        <meshStandardMaterial
          color="#FFFFFF"
          transparent
          opacity={0.35}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};

