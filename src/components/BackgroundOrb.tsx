import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'motion/react';

// Single 3D Translucent Floating Orb
interface OrbMeshProps {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distortSpeed?: number;
}

const OrbMesh: React.FC<OrbMeshProps> = ({
  position,
  color,
  size,
  speed,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.5;
    meshRef.current.rotation.y = Math.cos(t * 0.3) * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.35;
    meshRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.25;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshPhysicalMaterial
          color={color}
          transparent={true}
          opacity={0.32}
          roughness={0.12}
          metalness={0.1}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          transmission={0.65}
          ior={1.3}
          wireframe={false}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
};

// Internal 3D Scene containing multiple translucent orbs
const OrbScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#67e8f9" />
      <pointLight position={[-10, -5, -5]} intensity={0.6} color="#818cf8" />

      {/* Orb 1: Cyan orb on upper right */}
      <OrbMesh
        position={[3.8, 1.2, -2]}
        color="#06b6d4"
        size={1.6}
        speed={0.6}
      />

      {/* Orb 2: Deep sapphire orb on mid-left */}
      <OrbMesh
        position={[-3.6, -1.0, -3]}
        color="#3b82f6"
        size={2.2}
        speed={0.45}
      />

      {/* Orb 3: Soft violet orb on lower center-right */}
      <OrbMesh
        position={[2.4, -2.8, -4]}
        color="#8b5cf6"
        size={1.8}
        speed={0.5}
      />

      {/* Orb 4: Subtle ambient turquoise core */}
      <OrbMesh
        position={[-2.2, 2.4, -4.5]}
        color="#2dd4bf"
        size={1.4}
        speed={0.55}
      />
    </>
  );
};

export const BackgroundOrb: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Framer Motion transforms reacting to scroll progress
  // As the user scrolls past sections, the container drifts vertically and horizontally with subtle breathing opacity
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], ['0px', '-80px', '40px']);
  const translateX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['0px', '30px', '-25px', '10px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.65, 0.85, 0.6, 0.8, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 0.96]);

  return (
    <motion.div
      style={{
        y: translateY,
        x: translateX,
        opacity: opacity,
        scale: scale,
      }}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <OrbScene />
      </Canvas>
    </motion.div>
  );
};
export default BackgroundOrb;
