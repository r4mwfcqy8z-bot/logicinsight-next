"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { SectionAmbient } from "@/components/wow/scroll-ambient";
import { SpotlightCard } from "@/components/wow/spotlight-card";
import { KineticHeadline } from "@/components/wow/kinetic-headline";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  /** Optional accent glow color for the section ambient. */
  glow?: "violet" | "pink" | "amber" | "cool";
}

/**
 * Editorial page-head, asymmetric, scroll-ambient, kinetic headline.
 * Replaces the centered-pill + display-1 pattern across 26 subpages.
 */
export function PageHead({ eyebrow, title, sub, glow = "violet" }: PageHeadProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
      <SectionAmbient targetRef={ref} glow={glow} intensity={1} />

      {/* Hairline grid backdrop, subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="editorial-shell relative">
        <div className="grid-edit">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="col-span-12 mb-7 md:mb-10"
          >
            <span className="kicker">{eyebrow}</span>
          </motion.div>

          <KineticHeadline
            as="h1"
            trigger="mount"
            stagger={0.04}
            delay={0.05}
            className="col-span-12 lg:col-span-10 editorial-display balance max-w-[20ch]"
          >
            {title}
          </KineticHeadline>

          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.55 }}
              className="col-span-12 lg:col-start-2 lg:col-span-8 editorial-sub max-w-[60ch] mt-8 md:mt-10"
            >
              {sub}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * SectionHead, left-aligned editorial spread.
 * Kicker + title on left col, body on right col (asymmetric).
 * Replaces the centered-pill SectionHead across all subpages.
 */
export function SectionHead({ eyebrow, title, sub }: PageHeadProps) {
  return (
    <div className="grid-edit mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.75, ease: EASE }}
        className={`col-span-12 ${sub ? "lg:col-span-7" : "lg:col-span-10"}`}
      >
        <div className="kicker mb-5">{eyebrow}</div>
        <h2 className={`editorial-statement balance ${sub ? "max-w-[22ch]" : "max-w-[28ch]"}`}>{title}</h2>
      </motion.div>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
          className="col-span-12 lg:col-start-9 lg:col-span-4 self-end editorial-sub max-w-[44ch]"
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
    <div className="relative overflow-hidden rounded-[28px] matte depth-2 px-8 md:px-14 py-14 md:py-20">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-28 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.16), transparent 65%)" }}
      />
      <div className="grid-edit items-center relative">
        <div className="col-span-12 lg:col-span-7">
          {eyebrow && <div className="kicker mb-5">{eyebrow}</div>}
          <h2 className="editorial-statement balance">{title}</h2>
        </div>
        {sub && (
          <p className="col-span-12 lg:col-start-9 lg:col-span-4 self-end editorial-sub mt-6 lg:mt-0">
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
