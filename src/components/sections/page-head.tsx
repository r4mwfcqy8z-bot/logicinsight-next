"use client";

import { motion } from "motion/react";
import { AuroraBg, GridBg } from "@/components/aurora-bg";

interface PageHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}

export function PageHead({ eyebrow, title, sub }: PageHeadProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <AuroraBg />
      <GridBg />

      <div className="mx-auto max-w-[1000px] px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
        >
          <span className="relative inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
            <span className="absolute -inset-1 rounded-full bg-[var(--color-p-300)]/40 animate-ping" />
          </span>
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="display-1 mb-6"
        >
          {title}
        </motion.h1>

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-[680px] mx-auto"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub }: PageHeadProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[760px] mx-auto text-center mb-14"
    >
      <span className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
        {eyebrow}
      </span>
      <h2 className="display-2 mb-4">{title}</h2>
      {sub && <p className="text-lg text-[var(--color-ink-soft)]">{sub}</p>}
    </motion.header>
  );
}

interface FeatGridItem {
  icon?: React.ReactNode;
  name: string;
  sub?: string;
  body: string;
  bullets?: string[];
}

export function FeatGrid({ items, cols = 3 }: { items: FeatGridItem[]; cols?: 2 | 3 | 4 }) {
  const colsClass =
    cols === 2 ? "md:grid-cols-2" :
    cols === 3 ? "md:grid-cols-2 lg:grid-cols-3" :
                 "md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-4`}>
      {items.map((it, i) => (
        <motion.article
          key={it.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          className="group relative p-6 md:p-7 rounded-3xl glass hover:border-[var(--color-p-400)]/30 transition-colors overflow-hidden"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(360px circle at 30% 30%, rgba(167,139,250,0.16), transparent 60%)" }}
          />
          <div className="relative">
            {it.icon && (
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-p-400)]/20 to-[var(--color-p-400)]/5 border border-[var(--color-p-400)]/25 text-[var(--color-p-300)] mb-4">
                {it.icon}
              </span>
            )}
            <h3 className="text-xl font-bold tracking-tight mb-1">{it.name}</h3>
            {it.sub && <p className="mono-eyebrow text-[var(--color-p-300)] mb-3">{it.sub}</p>}
            <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{it.body}</p>
            {it.bullets && (
              <ul className="mt-4 grid gap-1.5">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[var(--color-ink-mute)]">
                    <span
                      className="mt-1 w-1 h-1 rounded-full bg-[var(--color-p-300)] shrink-0"
                      style={{ boxShadow: "0 0 6px #BC9CFF" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
