"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
      meshRef.current.position.x = mouse.x * 0.3;
      meshRef.current.position.y = mouse.y * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = Math.sin(t * 0.2 + 1) * 0.2;
      meshRef2.current.rotation.y = Math.cos(t * 0.4 + 1) * 0.3;
      meshRef2.current.position.x = mouse.x * 0.2;
      meshRef2.current.position.y = mouse.y * 0.2;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x = Math.sin(t * 0.25 + 2) * 0.15;
      meshRef3.current.rotation.y = Math.cos(t * 0.35 + 2) * 0.25;
      meshRef3.current.position.x = mouse.x * 0.15;
      meshRef3.current.position.y = mouse.y * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 0, 5]} intensity={0.5} color="#6366f1" />
      <pointLight position={[5, 0, -5]} intensity={0.5} color="#a855f7" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[-2, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#6366f1"
            roughness={0.3}
            metalness={0.8}
            distort={0.2}
            speed={1.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={meshRef2} position={[2.5, -0.5, -1]}>
          <octahedronGeometry args={[0.9, 0]} />
          <MeshDistortMaterial
            color="#a855f7"
            roughness={0.4}
            metalness={0.6}
            distort={0.15}
            speed={1.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh ref={meshRef3} position={[0, 1.2, -2]}>
          <torusKnotGeometry args={[0.7, 0.25, 100, 16]} />
          <MeshDistortMaterial
            color="#818cf8"
            roughness={0.2}
            metalness={0.7}
            distort={0.1}
            speed={1}
            transparent
            opacity={0.5}
            wireframe
          />
        </mesh>
      </Float>

      <Particles count={100} />
    </>
  );
}

function Particles({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
