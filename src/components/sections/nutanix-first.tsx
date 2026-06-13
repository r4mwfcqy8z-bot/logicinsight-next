"use client";

import { motion } from "motion/react";
import { ConstellationExplorer } from "@/components/wow/constellation-explorer";

const EASE = [0.22, 1, 0.36, 1] as const;

export function NutanixFirst() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[70vh] -z-10 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.10), transparent 70%)" }}
      />

      <div className="editorial-shell relative">
        {/* Header */}
        <div className="max-w-[820px] mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6"
          >
            <span className="kicker">Nutanix-first operations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="editorial-statement balance max-w-[18ch]"
          >
            Nutanix is the anchor.{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Everything around it
            </span>{" "}
            stops feeling disconnected.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
            className="editorial-sub max-w-[58ch] mt-8"
          >
            Prism is the source of truth for the cluster itself. Hardware, network gear, backup posture, and
            storage dependencies usually live in their own consoles. Overwatch keeps Nutanix at the center and
            extends the same operating model outward, so every signal sits next to the workload it affects.
          </motion.p>
        </div>

        {/* Interactive constellation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <ConstellationExplorer />
        </motion.div>
      </div>
    </section>
  );
}
