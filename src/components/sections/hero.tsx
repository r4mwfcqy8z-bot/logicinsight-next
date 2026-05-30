"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { AuroraBg, GridBg } from "@/components/aurora-bg";
import { Magnetic } from "@/components/magnetic";

const HeroPolyhedron = dynamic(
  () => import("@/components/scenes/hero-polyhedron").then((m) => m.HeroPolyhedron),
  { ssr: false }
);

const BULLETS = [
  "818+ Nutanix metrics across Prism Central and Prism Element",
  "One local console for backups, hardware, network devices, and flow evidence",
  "ML-driven anomaly detection with optional Datadog or Grafana forwarding",
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-24 overflow-hidden">
      <AuroraBg />
      <GridBg />

      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass mono-eyebrow"
            >
              <span className="relative inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
                <span className="absolute -inset-1 rounded-full bg-[var(--color-p-300)]/40 animate-ping" />
              </span>
              <span>Overwatch by Logic Insight</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="display-1 mb-6"
            >
              Overwatch keeps your{" "}
              <span className="serif-italic gradient-text">Nutanix stack</span>
              <br />
              in one operational view.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="max-w-[560px] mb-8 text-lg leading-relaxed text-[var(--color-ink-soft)]"
            >
              One appliance. Full-stack visibility across Nutanix clusters, hardware,
              network devices, and backups — with ML-driven anomaly detection and
              optional Datadog or Grafana forwarding.
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
              }}
              className="grid gap-2.5 mb-10 max-w-[560px]"
            >
              {BULLETS.map((b) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show:   { opacity: 1, x: 0,  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="flex items-start gap-3 text-sm md:text-[15px] text-[var(--color-ink-soft)]"
                >
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)]" style={{ boxShadow: "0 0 10px rgba(52,211,153,0.85)" }} />
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.3}>
                <Link
                  href="/pricing"
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-full text-white overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 60%, #FF6B9C 130%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 1px rgba(76,29,149,0.4), 0 20px 50px -12px rgba(124,58,237,0.7)",
                  }}
                >
                  <span className="relative z-10">Free Trial</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{
                      background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)",
                      transitionTimingFunction: "var(--ease-out-expo)",
                    }}
                    aria-hidden
                  />
                </Link>
              </Magnetic>

              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[var(--color-p-300)]/40 transition-all"
              >
                <Calendar size={16} />
                <span>Demo</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — R3F polyhedron */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto lg:max-w-none">
            <div className="absolute inset-0">
              <HeroPolyhedron />
            </div>
            {/* Soft glow under canvas */}
            <div
              className="absolute -inset-8 -z-10 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 60%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
