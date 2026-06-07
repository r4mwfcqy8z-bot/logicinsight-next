"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Homepage-only loading curtain.
 * Fires ONCE on first mount, never on subsequent navigation.
 * Shows the brand mark + a thin progress bar that fills, then dissolves upward.
 */
export function HomepageLoader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setActive(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none fixed inset-0 z-[200]"
          style={{
            background:
              "linear-gradient(180deg, #0E0A1C 0%, #1B1640 50%, #0E0A1C 100%)",
          }}
        >
          {/* Brand mark — centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-7"
          >
            <span
              className="font-mono text-[12px] tracking-[0.42em] uppercase"
              style={{ color: "rgba(167,139,250,0.75)" }}
            >
              Logic Insight
            </span>

            {/* Progress bar */}
            <div className="w-[180px] h-px bg-[rgba(167,139,250,0.18)] overflow-hidden">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="block w-full h-px bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-pink-400)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
