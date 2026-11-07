"use client";

import React, { useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { Pause, Play } from "lucide-react";

// CSS/SVG Fallback for initial SSR load matching Stitch geometry
function StitchFallback() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Ambient Radial Lime Glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-[#c3f400]/10 blur-[100px]" />

      {/* Outer SVG Orbitals */}
      <svg
        className="absolute w-[440px] h-[440px] text-[#ccff00]/40 animate-[spin_30s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="85"
          ry="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          transform="rotate(25 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="95"
          ry="32"
          fill="none"
          stroke="#a6e22e"
          strokeWidth="0.6"
          strokeDasharray="2 4"
          transform="rotate(-35 100 100)"
        />
      </svg>

      {/* Central Luminous Core */}
      <div className="relative w-28 h-28 rounded-full bg-[#d8ff33] opacity-85 shadow-[0_0_60px_rgba(204,255,0,0.5)] border border-[#ccff00] flex items-center justify-center">
        <div className="w-36 h-36 rounded-full border border-[#ccff00]/40 border-dashed animate-[spin_16s_linear_infinite]" />
      </div>
    </div>
  );
}

// Dynamically import Three.js scene with ssr: false
const NexusSphereScene = dynamic(() => import("./NexusSphereScene"), {
  ssr: false,
  loading: () => <StitchFallback />,
});

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function NexusSphere() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const isPaused = userPaused !== null ? userPaused : prefersReducedMotion;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Canvas container matching Stitch: opacity-85 mix-blend-screen */}
      <div className="absolute inset-0 w-full h-full bg-transparent opacity-85 mix-blend-screen">
        <NexusSphereScene isPaused={isPaused} />
      </div>

      {/* Atmospheric Radial Shadowing from Stitch spec */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d0e13]/80 pointer-events-none" />

      {/* Accessible Pause/Resume 3D Control */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
        <button
          type="button"
          onClick={() => setUserPaused(!isPaused)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1f25]/80 hover:bg-[#292a2f] border border-white/10 hover:border-[#c3f400]/40 transition-colors text-[10px] font-mono text-[#c4c9ac] hover:text-[#c3f400] backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-[#c3f400]"
          title={isPaused ? "Resume 3D animation" : "Pause 3D animation"}
          aria-label={isPaused ? "Resume 3D animation" : "Pause 3D animation"}
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 text-[#c3f400]" />
              <span>RESUME 3D</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 text-[#c4c9ac]" />
              <span>PAUSE 3D</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
