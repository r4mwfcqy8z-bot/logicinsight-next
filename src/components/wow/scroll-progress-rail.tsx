"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Vertical reading rail with a violet head that races down as the article scrolls.
 * Lives fixed on the right edge of long-form pages.
 * Also writes a subtle percentage chip at the top.
 */
export function ScrollProgressRail({
  targetRef,
}: {
  targetRef?: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll(
    targetRef?.current ? { target: targetRef } : undefined
  );
  const smooth = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.6 });

  const fillHeight = useTransform(smooth, (v) => `${Math.round(v * 100)}%`);
  const headOpacity = useTransform(smooth, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  const [pct, setPct] = useState(0);
  useEffect(() => smooth.on("change", (v) => setPct(Math.round(v * 100))), [smooth]);

  return (
    <div
      aria-hidden
      className="hidden lg:flex fixed right-7 top-1/2 -translate-y-1/2 z-[50] flex-col items-center gap-3"
    >
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-faint)] tabular-nums">
        {String(pct).padStart(2, "0")} / 100
      </span>
      <div className="relative w-px h-[36vh] bg-[rgba(167,139,250,0.18)]">
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-0 left-0 w-px bg-gradient-to-b from-[var(--color-p-300)] to-[var(--color-pink-400)]"
        />
        <motion.span
          style={{ top: fillHeight, opacity: headOpacity }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-p-200)]"
        >
          <span
            className="absolute -inset-2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.55), transparent 70%)" }}
          />
        </motion.span>
      </div>
    </div>
  );
}
