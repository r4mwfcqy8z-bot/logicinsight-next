"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/**
 * Hero polyhedron — first-paint 3D signature.
 * - Distorted icosahedron core with bloom
 * - 8 orbiting low-poly satellites
 * - 400-point starfield
 * - Mouse parallax
 * - Auto-rotate
 */

function Polyhedron() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.12;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18;
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      state.pointer.x * 0.6,
      0.05
    );
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      state.pointer.y * 0.4,
      0.05
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.8, 4]} />
        <MeshDistortMaterial
          color={"#8B5CF6"}
          distort={0.4}
          speed={1.4}
          roughness={0.18}
          metalness={0.6}
          emissive={"#7C3AED"}
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial
          color={"#A78BFA"}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
}

function Satellite({ angle, radius, y, color, scale }: {
  angle: number; radius: number; y: number; color: string; scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const a = angle + state.clock.elapsedTime * 0.18;
    ref.current.position.x = Math.cos(a) * radius;
    ref.current.position.z = Math.sin(a) * radius;
    ref.current.position.y = y + Math.sin(state.clock.elapsedTime * 0.8 + angle) * 0.18;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <mesh ref={ref} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

function Satellites() {
  const items = useMemo(
    () => [
      { angle: 0,                  radius: 3.6, y:  0.5, color: "#A78BFA", scale: 0.20 },
      { angle: Math.PI * 0.25,     radius: 3.9, y: -0.4, color: "#FF6B9C", scale: 0.16 },
      { angle: Math.PI * 0.5,      radius: 3.7, y:  0.8, color: "#C39BFF", scale: 0.18 },
      { angle: Math.PI * 0.75,     radius: 3.6, y: -0.7, color: "#8B5CF6", scale: 0.14 },
      { angle: Math.PI,            radius: 3.8, y:  0.3, color: "#FFD2E5", scale: 0.16 },
      { angle: Math.PI * 1.25,     radius: 3.5, y: -0.5, color: "#A78BFA", scale: 0.18 },
      { angle: Math.PI * 1.5,      radius: 3.7, y:  0.6, color: "#C8AAFF", scale: 0.20 },
      { angle: Math.PI * 1.75,     radius: 3.6, y: -0.3, color: "#FF6B9C", scale: 0.15 },
    ],
    []
  );
  return (
    <>
      {items.map((it, i) => <Satellite key={i} {...it} />)}
    </>
  );
}

function StarsField() {
  const positions = useMemo(() => {
    const n = 400;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 6;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.7}
        color={"#D7C2FF"}
        depthWrite={false}
      />
    </Points>
  );
}

export function HeroPolyhedron() {
  return (
    <div className="absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[6, 4, 6]}  intensity={1.6} color={"#A78BFA"} />
          <pointLight position={[-6, -3, -4]} intensity={1.0} color={"#FF6B9C"} />
          <directionalLight position={[2, 4, 4]} intensity={0.6} />

          <Polyhedron />
          <Satellites />
          <StarsField />

          <EffectComposer multisampling={0}>
            <Bloom intensity={0.9} luminanceThreshold={0.25} luminanceSmoothing={0.6} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
