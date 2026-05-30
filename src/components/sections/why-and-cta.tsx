"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Magnetic } from "@/components/magnetic";

const FOUNDERS = [
  {
    initials: "DL",
    name: "David Lira",
    role: "Co-Founder · CEO / COO",
    bio: "Two decades running and selling infrastructure in regulated environments. Decides what we ship and to whom.",
  },
  {
    initials: "JR",
    name: "Jason Richmond",
    role: "Co-Founder · Principal Platform Architect",
    bio: "Designed the Overwatch data path. Writes the editorial. Holds the line on evidence-grounded telemetry.",
  },
];

export function WhyLogicInsight() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
              Why Logic Insight exists
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="display-2 mb-6"
            >
              Built by engineers who spent{" "}
              <span className="serif-italic gradient-text">a decade</span>{" "}
              managing Nutanix at scale.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="space-y-5 text-[var(--color-ink-soft)] leading-relaxed max-w-[540px]"
            >
              <p>
                Enterprise infrastructure operations got harder, not easier. Each domain ended up with its own console — Nutanix
                in one, backups in another, storage in a third, network somewhere else. The cost of stitching them together fell
                on the operators in the middle of the night.
              </p>
              <p>
                Overwatch starts with deep Nutanix coverage and extends the same operating model across bare-metal hardware, SNMP
                devices, protection posture, storage context, and network flows — inside one local Ubuntu appliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex gap-8 mt-10"
            >
              {[
                { num: "10+",  label: "Years of Nutanix at scale" },
                { num: "11",   label: "Engines on day one"        },
                { num: "1",    label: "Appliance · no add-ons"    },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="serif-italic gradient-text"
                    style={{ fontSize: "clamp(2.25rem, 3vw, 3rem)", lineHeight: 0.92, fontFeatureSettings: "'tnum'" }}
                  >
                    {s.num}
                  </div>
                  <div className="mono-eyebrow text-[var(--color-ink-mute)] mt-1.5 max-w-[140px]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Founders */}
          <div className="grid gap-4">
            {FOUNDERS.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="relative group p-6 md:p-7 rounded-3xl glass hover:border-[var(--color-p-400)]/30 transition-colors overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(360px circle at 30% 30%, rgba(167,139,250,0.18), transparent 60%)" }}
                />
                <div className="relative flex items-start gap-5">
                  <div
                    className="grid place-items-center w-16 h-16 rounded-2xl font-bold tracking-tight text-white shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6 0%, #FF6B9C 100%)",
                      boxShadow: "0 20px 50px -10px rgba(124,58,237,0.45)",
                    }}
                  >
                    {f.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold tracking-tight">{f.name}</h3>
                    <p className="mono-eyebrow text-[var(--color-p-300)] mt-1 mb-3">{f.role}</p>
                    <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{f.bio}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] overflow-hidden px-6 py-20 md:px-12 md:py-28 text-center"
          style={{
            background:
              "radial-gradient(700px 480px at 50% 30%, rgba(167,139,250,0.28), transparent 60%), linear-gradient(180deg, var(--color-elevated), var(--color-surface))",
            border: "1px solid rgba(167,139,250,0.25)",
            boxShadow: "0 40px 100px -28px rgba(124,58,237,0.45)",
          }}
        >
          {/* Particle field */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {Array.from({ length: 28 }).map((_, i) => {
              const left = (i * 37) % 100;
              const top  = (i * 23) % 100;
              const delay = (i % 8) * 0.4;
              const size = (i % 3) + 1;
              return (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left:  `${left}%`,
                    top:   `${top}%`,
                    width: size,
                    height: size,
                    background: i % 4 === 0 ? "#FF6B9C" : "#BC9CFF",
                    boxShadow: i % 4 === 0 ? "0 0 8px #FF6B9C" : "0 0 8px #BC9CFF",
                  }}
                  animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -16, 0] }}
                  transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut", delay }}
                />
              );
            })}
          </div>

          <div className="relative">
            <span className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-p-500)]/15 border border-[var(--color-p-400)]/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
              Get the appliance in front of your team
            </span>

            <h2 className="display-2 mb-5 max-w-[820px] mx-auto">
              See what your infrastructure looks like{" "}
              <span className="serif-italic gradient-text">in one console.</span>
            </h2>

            <p className="text-lg text-[var(--color-ink-soft)] max-w-[600px] mx-auto mb-9">
              Deploy Overwatch into a single Nutanix cluster in under an hour. Keep telemetry on-prem. Forward only what you choose.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).classList.add("is-sent"); }}
              className="flex flex-wrap gap-2 p-2 max-w-[580px] mx-auto rounded-full glass [&.is-sent>input]:hidden [&.is-sent>div]:hidden [&.is-sent>.sent]:!flex"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
                className="flex-1 min-w-0 bg-transparent border-0 outline-none text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] px-5"
              />
              <Magnetic strength={0.3}>
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-white overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 60%, #FF6B9C 130%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 1px rgba(76,29,149,0.4), 0 16px 40px -12px rgba(124,58,237,0.7)",
                  }}
                >
                  <span className="relative z-10">Free Trial</span>
                  <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Magnetic>
              <div className="hidden md:flex items-center pl-1 pr-2">
                <Link
                  href="/about#contact"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[var(--color-ink-soft)] hover:text-white transition-colors"
                >
                  <Calendar size={14} />
                  Book demo
                </Link>
              </div>
              <span className="sent hidden w-full justify-center py-3 text-sm text-[var(--color-emerald-400)]">
                Thanks — we&apos;ll be in touch within one business day.
              </span>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
