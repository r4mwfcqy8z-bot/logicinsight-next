"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  strength?: number;
  scale?: number;
  className?: string;
}

/**
 * Perspective-tilt card driven by motion values (no React re-renders).
 * Use sparingly, reserve for premium signature moments.
 */
export function TiltCard({ children, strength = 8, scale = 1.012, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 240, damping: 26, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 240, damping: 26, mass: 0.5 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [strength, -strength]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-strength, strength]);
  const lightX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const lightY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={{ scale }}
      style={{ rotateX, rotateY, transformPerspective: 1400, transformStyle: "preserve-3d" }}
      className={cn("relative will-change-transform", className)}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
      {/* Specular highlight catches the tilt. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [lightX, lightY] as never,
            ([x, y]: [string, string]) =>
              `radial-gradient(420px circle at ${x} ${y}, rgba(255,255,255,0.12), transparent 60%)`
          ),
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
