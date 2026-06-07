"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  glow?: "violet" | "pink" | "amber" | "bone";
  tilt?: boolean;
  tiltStrength?: number;
  className?: string;
  borderGlow?: boolean;
  style?: CSSProperties;
}

const GLOWS = {
  violet: "rgba(167,139,250,0.22)",
  pink:   "rgba(255,107,156,0.22)",
  amber:  "rgba(251,191,36,0.20)",
  bone:   "rgba(244,241,234,0.16)",
};

/**
 * Cursor-following radial spotlight + optional perspective tilt.
 * No useState on continuous values, uses Motion's useMotionValue.
 */
export function SpotlightCard({
  children,
  glow = "violet",
  tilt = false,
  tiltStrength = 6,
  borderGlow = true,
  className,
  style,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const mvX = useMotionValue(50);
  const mvY = useMotionValue(50);

  const rotX = useSpring(useTransform(mvY, [0, 100], [tiltStrength, -tiltStrength]), { stiffness: 220, damping: 26 });
  const rotY = useSpring(useTransform(mvX, [0, 100], [-tiltStrength, tiltStrength]), { stiffness: 220, damping: 26 });

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mvX.set(((e.clientX - r.left) / r.width) * 100);
    mvY.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => { setActive(false); mvX.set(50); mvY.set(50); }}
      style={tilt
        ? { ...style, rotateX: rotX, rotateY: rotY, transformPerspective: 1200, transformStyle: "preserve-3d" }
        : style}
      className={cn("group relative overflow-hidden", className)}
    >
      {/* Cursor-glow spotlight. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(520px circle at var(--sx, 50%) var(--sy, 50%), ${GLOWS[glow]}, transparent 60%)`,
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [mvX, mvY] as never,
            ([x, y]: [number, number]) =>
              `radial-gradient(520px circle at ${x}% ${y}%, ${GLOWS[glow]}, transparent 60%)`
          ),
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s var(--ease-editorial)",
        }}
      />

      {/* Inner refraction border that catches the cursor light. */}
      {borderGlow && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useTransform(
              [mvX, mvY] as never,
              ([x, y]: [number, number]) =>
                `radial-gradient(240px circle at ${x}% ${y}%, rgba(255,255,255,0.10), transparent 65%)`
            ),
            opacity: active ? 1 : 0,
            mixBlendMode: "screen",
            transition: "opacity 0.4s var(--ease-editorial)",
          }}
        />
      )}

      <div style={{ transform: tilt ? "translateZ(40px)" : undefined }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}
