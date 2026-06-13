"use client";

import { motion } from "motion/react";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  /** Optional accent glow color for the section ambient. */
  glow?: "violet" | "pink" | "amber" | "cool";
}

/**
 * Cinematic page head: one bold statement, centered in a luminous field.
 * Clean, no eyebrow, consistent with the home / about / features / pricing heroes.
 */
export function PageHead({ title, sub }: PageHeadProps) {
  return (
    <section className="relative min-h-[58dvh] flex items-center pt-28 md:pt-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(56vw 54vh at 50% 38%, rgba(139,92,246,0.16), transparent 62%)" }}
      />
      <div className="editorial-shell w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="editorial-display balance mx-auto max-w-[20ch]"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-7 editorial-sub mx-auto max-w-[56ch]"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}

/**
 * Section head: clean, centered, stacked. No eyebrow, no split-header.
 */
export function SectionHead({ title, sub }: PageHeadProps) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="editorial-statement balance mx-auto max-w-[24ch]"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mt-5 editorial-sub mx-auto max-w-[56ch]"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/**
 * StatementBand — a contained, premium editorial statement.
 * Replaces floating centered SectionHeads that left big empty space.
 * Fills its area with a matte panel + accent glow; left-aligned, asymmetric.
 */
export function StatementBand({ eyebrow, title, sub }: PageHeadProps) {
  return (
    <div className="relative rounded-[28px] matte depth-2 px-8 md:px-14 py-14 md:py-20">
      {/* Glow lives in its own clipped layer so the panel never clips the heading. */}
      <div aria-hidden className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
        <div
          className="absolute -right-24 -bottom-28 w-[380px] h-[380px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.16), transparent 65%)" }}
        />
      </div>
      <div className="grid-edit items-start relative">
        <div className="col-span-12 lg:col-span-7">
          {eyebrow && <div className="kicker mb-5">{eyebrow}</div>}
          <h2 className="editorial-statement balance">{title}</h2>
        </div>
        {sub && (
          <p className="col-span-12 lg:col-start-8 lg:col-span-5 self-start editorial-sub mt-6 lg:mt-2">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

interface FeatGridItem {
  icon?: React.ReactNode;
  name: string;
  sub?: string;
  body: string;
  bullets?: string[];
}

/**
 * FeatGrid, editorial spotlight-card grid.
 * Cards are quiet by default, dramatic on hover (cursor-following violet glow).
 * No decorative dots, no AI tells.
 */
export function FeatGrid({ items, cols = 3 }: { items: FeatGridItem[]; cols?: 2 | 3 | 4 }) {
  const colsClass =
    cols === 2 ? "md:grid-cols-2" :
    cols === 3 ? "md:grid-cols-2 lg:grid-cols-3" :
                 "md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-4 md:gap-5`}>
      {items.map((it, i) => (
        <motion.div
          key={it.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
        >
          <SpotlightCard
            glow="violet"
            className="h-full p-7 md:p-8 rounded-[22px] matte depth-1 hover:depth-2 transition-shadow duration-500"
          >
            {it.icon && (
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-[var(--color-p-300)] mb-5 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
                {it.icon}
              </span>
            )}
            <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] mb-2 text-[var(--color-ink)]">
              {it.name}
            </h3>
            {it.sub && (
              <p className="font-mono text-[10.5px] tracking-[0.18em] text-[var(--color-p-300)] uppercase mb-3">
                {it.sub}
              </p>
            )}
            <p className="text-[0.9375rem] leading-[1.55] text-[var(--color-ink-soft)]">
              {it.body}
            </p>
            {it.bullets && (
              <ul className="mt-5 grid gap-2 border-t border-[rgba(167,139,250,0.14)] pt-4">
                {it.bullets.map((b) => (
                  <li key={b} className="text-[12.5px] text-[var(--color-ink-mute)] tracking-[-0.005em] leading-[1.45]">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
