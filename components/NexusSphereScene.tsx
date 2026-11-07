"use client";

import React, { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

interface NexusSphereSceneProps {
  isPaused?: boolean;
}

// Deterministic particle positions for pure rendering
function generateParticles(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const seed1 = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
    const pseudo1 = Math.abs(seed1);
    const seed2 = (Math.sin((i + 1) * 39.346 + 11.135) * 23421.631) % 1;
    const pseudo2 = Math.abs(seed2);

    const r = 4.0 + pseudo1 * 9.0;
    const theta = pseudo2 * Math.PI * 2;
    const phi = Math.acos(2 * pseudo1 - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

const STATIC_PARTICLES = generateParticles(380);

function StitchKineticCore({ isPaused }: { isPaused: boolean }) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const coreWireRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const particlesPositions = useMemo(() => STATIC_PARTICLES, []);

  useFrame((state, delta) => {
    if (!mainGroupRef.current) return;

    // Smooth pointer parallax
    mainGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      mainGroupRef.current.rotation.y,
      targetMouse.current.x * 0.25,
      0.04
    );
    mainGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      mainGroupRef.current.rotation.x,
      -targetMouse.current.y * 0.2,
      0.04
    );

    if (isPaused) return;

    const elapsed = state.clock.getElapsedTime();

    if (coreWireRef.current) {
      coreWireRef.current.rotation.y += delta * 0.2;
      coreWireRef.current.rotation.x += delta * 0.12;
    }

    if (innerCoreRef.current) {
      const pulse = 1.0 + Math.sin(elapsed * 2.2) * 0.05;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x += delta * 0.17;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
      ring2Ref.current.rotation.x -= delta * 0.12;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.2;
      ring3Ref.current.rotation.x += delta * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -elapsed * 0.08;
      particlesRef.current.rotation.z = elapsed * 0.04;
    }
  });

  return (
    <group ref={mainGroupRef}>
      {/* 1. Central Wireframe Luminous Sphere */}
      <mesh ref={coreWireRef}>
        <sphereGeometry args={[3.6, 48, 48]} />
        <meshBasicMaterial
          color={0xccff00}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Solid Glow Core */}
      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial
          color={0xd8ff33}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* 2. Orbital Rings from approved Stitch spec */}
      {/* Ring 1 */}
      <mesh ref={ring1Ref} rotation={[1.1, 0.3, 0]}>
        <torusGeometry args={[6.8, 0.035, 16, 128]} />
        <meshBasicMaterial
          color={0xccff00}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-0.8, 1.2, 0]}>
        <torusGeometry args={[8.4, 0.03, 16, 128]} />
        <meshBasicMaterial
          color={0xa6e22e}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} rotation={[0.4, -0.9, 0]}>
        <torusGeometry args={[10.2, 0.025, 16, 128]} />
        <meshBasicMaterial
          color={0x88cc00}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* 3. Floating Quantum Particles Swarm */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color={0xccff00}
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
}

export default function NexusSphereScene({ isPaused = false }: NexusSphereSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 24], fov: 50, near: 0.1, far: 1000 }}
      dpr={[1, 1.5]}
      gl={{
        powerPreference: "low-power",
        antialias: true,
        alpha: true,
      }}
      className="w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} color={0xffffff} />
      <pointLight position={[0, 0, 5]} color={0xccff00} intensity={2.5} distance={40} />
      <StitchKineticCore isPaused={isPaused} />
    </Canvas>
  );
}
