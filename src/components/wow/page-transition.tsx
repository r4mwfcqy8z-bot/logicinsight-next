"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

/**
 * Lightweight route transition. Opacity-only (no transform) so it never creates
 * a containing block that would break position:fixed children (nav, loaders,
 * ambient). Keyed on pathname so each navigation re-plays the fade.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
