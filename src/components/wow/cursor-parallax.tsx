"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface CursorParallaxProps {
  children: ReactNode;
  /** Max translation in px on each axis. */
  strength?: number;
  className?: string;
}

/**
 * Wraps content so it drifts subtly with the page-wide cursor.
 * Useful for hero scenes, 3D backdrops, or floating editorial elements.
 * Uses motion values to avoid React re-renders.
 */
export function CursorParallax({ children, strength = 16, className }: CursorParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 22, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 80, damping: 22, mass: 0.7 });

  const tx = useTransform(sx, [-1, 1], [-strength, strength]);
  const ty = useTransform(sy, [-1, 1], [-strength, strength]);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      x.set((e.clientX / w) * 2 - 1);
      y.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, [x, y]);

  return (
    <motion.div ref={ref} style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}
