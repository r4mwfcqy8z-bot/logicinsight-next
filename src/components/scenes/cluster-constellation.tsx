"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/**
 * Cluster constellation — second 3D moment.
 * Nutanix anchor in the center; rings of Hardware, Network, Backup, Storage
 * satellites orbiting on different planes.
 */

function Anchor() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.25}>
      <group ref={ref}>
        {/* Glowing inner sphere */}
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color={"#C39BFF"}
            emissive={"#7C3AED"}
            emissiveIntensity={1.8}
            roughness={0.2}
            metalness={0.4}
          />
        </mesh>
        {/* Outer wireframe shell */}
        <mesh>
          <octahedronGeometry args={[1.05, 0]} />
          <meshBasicMaterial color={"#A78BFA"} wireframe transparent opacity={0.35} />
        </mesh>
        <mesh>
          <octahedronGeometry args={[1.4, 0]} />
          <meshBasicMaterial color={"#A78BFA"} wireframe transparent opacity={0.16} />
        </mesh>
      </group>
    </Float>
  );
}

interface Sat {
  ringRadius: number;
  speed: number;
  startAngle: number;
  tiltX: number;
  tiltZ: number;
  color: string;
  scale: number;
}

function Satellite({ s }: { s: Sat }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const a = s.startAngle + t * s.speed;
    const x = Math.cos(a) * s.ringRadius;
    const z = Math.sin(a) * s.ringRadius;
    // Apply ring tilt
    const cosX = Math.cos(s.tiltX), sinX = Math.sin(s.tiltX);
    const cosZ = Math.cos(s.tiltZ), sinZ = Math.sin(s.tiltZ);
    const y = z * sinX;
    const z2 = z * cosX;
    const x2 = x * cosZ - y * sinZ;
    const y2 = x * sinZ + y * cosZ;
    ref.current.position.set(x2, y2, z2);
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.4;
  });

  return (
    <mesh ref={ref} scale={s.scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={s.color}
        emissive={s.color}
        emissiveIntensity={1.1}
        roughness={0.3}
        metalness={0.65}
      />
    </mesh>
  );
}

function Ring({ radius, opacity = 0.18, tiltX = 0, tiltZ = 0 }: {
  radius: number; opacity?: number; tiltX?: number; tiltZ?: number;
}) {
  return (
    <mesh rotation={[tiltX + Math.PI / 2, 0, tiltZ]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 96]} />
      <meshBasicMaterial color={"#A78BFA"} transparent opacity={opacity} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Constellation() {
  const sats = useMemo<Sat[]>(
    () => [
      // Ring 1 — Hardware (inner)
      { ringRadius: 2.2, speed: 0.22, startAngle: 0,           tiltX: 0.18,  tiltZ: 0.05,  color: "#A78BFA", scale: 0.18 },
      { ringRadius: 2.2, speed: 0.22, startAngle: Math.PI,     tiltX: 0.18,  tiltZ: 0.05,  color: "#A78BFA", scale: 0.14 },
      // Ring 2 — Network
      { ringRadius: 2.9, speed: -0.16, startAngle: 0.5,        tiltX: -0.22, tiltZ: 0.18,  color: "#FF6B9C", scale: 0.16 },
      { ringRadius: 2.9, speed: -0.16, startAngle: Math.PI*0.9,tiltX: -0.22, tiltZ: 0.18,  color: "#FF6B9C", scale: 0.20 },
      { ringRadius: 2.9, speed: -0.16, startAngle: Math.PI*1.5,tiltX: -0.22, tiltZ: 0.18,  color: "#FFA3C2", scale: 0.13 },
      // Ring 3 — Backup
      { ringRadius: 3.6, speed: 0.12,  startAngle: 0.2,        tiltX: 0.32,  tiltZ: -0.20, color: "#C39BFF", scale: 0.18 },
      { ringRadius: 3.6, speed: 0.12,  startAngle: Math.PI*0.8,tiltX: 0.32,  tiltZ: -0.20, color: "#C39BFF", scale: 0.15 },
      // Ring 4 — Storage (outer)
      { ringRadius: 4.4, speed: -0.08, startAngle: 0,          tiltX: -0.08, tiltZ: 0.30,  color: "#8B5CF6", scale: 0.22 },
      { ringRadius: 4.4, speed: -0.08, startAngle: Math.PI*0.6,tiltX: -0.08, tiltZ: 0.30,  color: "#8B5CF6", scale: 0.17 },
      { ringRadius: 4.4, speed: -0.08, startAngle: Math.PI*1.3,tiltX: -0.08, tiltZ: 0.30,  color: "#D7C2FF", scale: 0.14 },
    ],
    []
  );

  return (
    <>
      <Anchor />
      {/* Rings */}
      <Ring radius={2.2} opacity={0.20} tiltX={0.18}  tiltZ={0.05} />
      <Ring radius={2.9} opacity={0.16} tiltX={-0.22} tiltZ={0.18} />
      <Ring radius={3.6} opacity={0.13} tiltX={0.32}  tiltZ={-0.20} />
      <Ring radius={4.4} opacity={0.10} tiltX={-0.08} tiltZ={0.30} />
      {/* Satellites */}
      {sats.map((s, i) => <Satellite key={i} s={s} />)}
    </>
  );
}

function Dust() {
  const positions = useMemo(() => {
    const n = 300;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi);
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} sizeAttenuation transparent opacity={0.5} color={"#BC9CFF"} depthWrite={false} />
    </points>
  );
}

export function ClusterConstellation() {
  return (
    <div className="absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.4, 8], fov: 50 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 4, 5]}   intensity={1.4} color={"#A78BFA"} />
          <pointLight position={[-5, -3, -3]} intensity={0.9} color={"#FF6B9C"} />

          <Constellation />
          <Dust />

          <EffectComposer multisampling={0}>
            <Bloom intensity={1.0} luminanceThreshold={0.25} luminanceSmoothing={0.6} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
