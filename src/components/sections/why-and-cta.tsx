"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { SpotlightCard } from "@/components/wow/spotlight-card";
import { TiltCard } from "@/components/wow/tilt-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOUNDERS = [
  {
    initials: "DL",
    name: "David Lira",
    role: "Co-Founder · Principal Platform Architect",
    bio: "Designed the Overwatch data path. Writes the editorial. Holds the line on evidence-grounded telemetry.",
  },
  {
    initials: "JR",
    name: "Jason Richmond",
    role: "Co-Founder · CEO / COO",
    bio: "Two decades running and selling infrastructure in regulated environments. Decides what we ship and to whom.",
  },
];

const STATS = [
  { num: "10+",  label: "Years of Nutanix at scale" },
  { num: "11",   label: "Engines on day one" },
  { num: "1",    label: "Appliance · no add-ons" },
];

export function WhyLogicInsight() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="editorial-shell">
        {/* Header row, editorial spread. */}
        <div className="grid-edit mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="mb-7">
              <span className="kicker">Why Logic Insight exists</span>
            </div>
            <h2 className="editorial-statement balance">
              Built by engineers who spent{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                a decade
              </span>{" "}
              managing Nutanix at scale.
            </h2>
          </motion.div>

          {/* 3 stats, editorial sidebar, NOT a separate row. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="col-span-12 lg:col-start-9 lg:col-span-4 lg:pt-12 space-y-6"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-baseline justify-between gap-6 ${i > 0 ? "border-t border-[rgba(167,139,250,0.16)] pt-6" : ""}`}
              >
                <span
                  className="numeral text-[var(--color-ink)]"
                  style={{ fontSize: "clamp(2rem, 3.6vw, 3.5rem)", lineHeight: 0.9 }}
                >
                  {s.num}
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--color-ink-mute)] uppercase text-right max-w-[20ch] leading-[1.6]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Body run, editorial paragraphs, wide column. */}
        <div className="grid-edit mb-24 md:mb-32">
          <div className="col-span-12 lg:col-start-2 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease: EASE }}
              className="space-y-8"
            >
              <p className="editorial-lede balance max-w-[58ch] text-[var(--color-ink)]">
                Enterprise infrastructure operations got harder, not easier.
              </p>
              <p className="body-l max-w-[68ch]">
                Each domain ended up with its own console. Nutanix in one, backups in another, storage in a third, network somewhere else. The cost of stitching them together fell on the operators in the middle of the night.
              </p>
              <p className="body-l max-w-[68ch]">
                Overwatch starts with deep Nutanix coverage and extends the same operating model across bare-metal hardware, SNMP devices, protection posture, storage context, and network flows, inside one local appliance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Founders, offset asymmetric pair. */}
        <div className="grid-edit">
          <div className="col-span-12 grid md:grid-cols-2 gap-6 md:gap-10">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.85, delay: i * 0.12, ease: EASE }}
                className={`relative ${
                  i === 0 ? "md:mt-0 md:rotate-[-1.2deg]" : "md:mt-16 md:rotate-[1deg]"
                }`}
              >
                <TiltCard strength={6} scale={1.015}>
                  <SpotlightCard glow="violet" className="relative p-8 md:p-10 rounded-[24px] signature-glass">
                    <div
                      className="absolute -top-6 -left-2 italic font-bold leading-none"
                      style={{
                        fontSize: "clamp(4rem, 7vw, 6.5rem)",
                        letterSpacing: "-0.05em",
                        color: "var(--color-p-300)",
                        textShadow: "0 0 40px rgba(139,92,246,0.55)",
                      }}
                    >
                      {f.initials}
                    </div>
                    <div className="pt-16 md:pt-20">
                      <h3 className="editorial-lede text-[var(--color-ink)] mb-1">
                        {f.name}
                      </h3>
                      <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--color-p-300)] uppercase mb-5">
                        {f.role}
                      </p>
                      <p className="body-l text-[var(--color-ink-soft)] leading-[1.55]">
                        {f.bio}
                      </p>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Soft ambient behind, no particle field. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vh] -z-10 blur-3xl"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(139,92,246,0.22), transparent 70%)" }}
      />

      <div className="editorial-shell">
        <div className="grid-edit items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.95, ease: EASE }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="mb-7">
              <span className="kicker">Get the appliance in front of your team</span>
            </div>
            <h2 className="editorial-display balance max-w-[18ch]">
              See what your infrastructure looks like{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                in one console.
              </span>
            </h2>
            <p className="editorial-sub max-w-[52ch] mt-10">
              Deploy Overwatch into a single Nutanix cluster in under an hour. Keep telemetry on-prem. Forward only what you choose.
            </p>
          </motion.div>

          {/* Right column, inline form, hung against the edge. */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.2 }}
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).classList.add("is-sent"); }}
            className="col-span-12 lg:col-start-9 lg:col-span-4 [&.is-sent>div]:hidden [&.is-sent>.sent]:!flex"
          >
            <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-ink-mute)] uppercase mb-4 leading-[1.5] max-w-[28ch]">
              Get the appliance in front of your team
            </div>
            <div className="border-t border-[rgba(167,139,250,0.32)] pt-5 mb-5">
              <input
                type="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
                className="w-full bg-transparent border-0 outline-none text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] py-3 text-[1.0625rem] tracking-[-0.005em] focus:border-[var(--color-p-300)]"
                style={{
                  borderBottom: "1px solid rgba(167,139,250,0.32)",
                  transition: "border-color 0.3s var(--ease-editorial)",
                }}
              />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Magnetic strength={0.22}>
                <button type="submit" className="btn-primary group">
                  <span>Start free trial</span>
                  <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={2} />
                </button>
              </Magnetic>
              <Link href="/demo" className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors tracking-[-0.005em]">
                Or book a demo →
              </Link>
            </div>
            <span className="sent hidden mt-6 text-sm tracking-[-0.005em] text-[var(--color-emerald-400)]">
              Thanks. We&apos;ll be in touch within one business day.
            </span>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
