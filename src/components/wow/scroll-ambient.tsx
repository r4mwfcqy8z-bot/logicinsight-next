"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Scroll-bound evolving ambient backdrop.
 * Three blurred radial blobs that shift hue + position smoothly as the user scrolls.
 * Lives behind everything; pointer-events-none.
 *
 * Drop at the top of a section (or page-level) with absolute positioning.
 */
export function ScrollAmbient({
  intensity = 1,
  variant = "default",
}: {
  intensity?: number;
  variant?: "default" | "cool" | "warm";
}) {
  const { scrollYProgress } = useScroll();

  // Top blob, drifts down + violet → magenta
  const topY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const topX = useTransform(scrollYProgress, [0, 1], ["72%", "60%"]);
  const topOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.28, 0.18, 0.10]);
  const topHue = useTransform(scrollYProgress, [0, 1], [275, 305]);

  // Bottom blob, drifts up + pink → cyan
  const botY = useTransform(scrollYProgress, [0, 1], ["108%", "78%"]);
  const botX = useTransform(scrollYProgress, [0, 1], ["18%", "32%"]);
  const botOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.10, 0.16, 0.20]);
  const botHue = useTransform(scrollYProgress, [0, 1], [340, 200]);

  const sat = variant === "warm" ? 70 : variant === "cool" ? 50 : 60;
  const light = 60;

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <motion.span
        className="absolute rounded-full will-change-transform"
        style={{
          left: topX,
          top: topY,
          width: "48vmax",
          height: "48vmax",
          background: useTransform(
            topHue,
            (h) => `radial-gradient(circle, hsla(${h}, ${sat}%, ${light}%, 1), transparent 62%)`
          ),
          opacity: useTransform(topOpacity, (o) => o * intensity),
          filter: "blur(44px)",
          translate: "-50% -50%",
        }}
      />
      <motion.span
        className="absolute rounded-full will-change-transform"
        style={{
          left: botX,
          top: botY,
          width: "52vmax",
          height: "52vmax",
          background: useTransform(
            botHue,
            (h) => `radial-gradient(circle, hsla(${h}, ${sat}%, ${light}%, 1), transparent 62%)`
          ),
          opacity: useTransform(botOpacity, (o) => o * intensity),
          filter: "blur(52px)",
          translate: "-50% -50%",
        }}
      />
    </div>
  );
}

/**
 * Section-local ambient that responds to a section's own scroll progress (not the page's).
 * Use this for hero-like sections where you want the glow to react to entering/leaving the section.
 */
export function SectionAmbient({
  targetRef,
  glow = "violet",
  intensity = 1,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  glow?: "violet" | "pink" | "amber" | "cool";
  intensity?: number;
}) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.7, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.95]);

  const COLORS: Record<string, string> = {
    violet: "rgba(139,92,246,0.32)",
    pink:   "rgba(255,107,156,0.32)",
    amber:  "rgba(251,191,36,0.26)",
    cool:   "rgba(94,234,212,0.24)",
  };

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ opacity: useTransform(opacity, (o) => o * intensity) }}
    >
      <motion.span
        className="absolute left-1/2 top-1/2 w-[90vmax] h-[90vmax] rounded-full"
        style={{
          translate: "-50% -50%",
          background: `radial-gradient(circle, ${COLORS[glow]}, transparent 60%)`,
          filter: "blur(80px)",
          scale,
        }}
      />
    </motion.div>
  );
}
