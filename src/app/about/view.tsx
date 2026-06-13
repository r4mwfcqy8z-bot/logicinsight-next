"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/wow/spotlight-card";
import { TiltCard } from "@/components/wow/tilt-card";
import { FinalCTA } from "@/components/sections/why-and-cta";

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
  { num: "10+", label: "Years of Nutanix at scale" },
  { num: "11", label: "Engines on day one" },
  { num: "1", label: "Appliance, no add-ons" },
];

const CONTACT = [
  { icon: Mail, label: "Email", value: "contact@logicinsight.io", href: "mailto:contact@logicinsight.io" },
  { icon: Phone, label: "Phone", value: "+1 (407) 513-2359", href: "tel:+14075132359" },
  { icon: MapPin, label: "Office", value: "Orlando, FL", href: null },
];

export default function AboutView() {
  return (
    <>
      {/* HERO, manifesto. */}
      <section className="relative min-h-[62dvh] flex items-center pt-28 md:pt-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60vw 60vh at 50% 38%, rgba(139,92,246,0.16), transparent 62%)" }}
        />
        <div className="editorial-shell w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="editorial-display balance mx-auto max-w-[20ch]"
          >
            We got tired of{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              the same monitoring problems
            </span>{" "}
            you have.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-7 editorial-sub mx-auto max-w-[52ch]"
          >
            Five consoles for one environment felt broken. So we built the appliance we wished existed.
          </motion.p>
        </div>
      </section>

      {/* STORY, editorial manifesto. */}
      <section className="relative py-24 md:py-36">
        <div className="editorial-shell">
          <div className="mx-auto max-w-[60ch]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="editorial-lede balance text-[var(--color-ink)]"
            >
              Enterprise infrastructure operations got harder, not easier.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="mt-8 space-y-6"
            >
              <p className="body-l">
                Each domain ended up with its own console. Nutanix in one, backups in another, storage in a third, network somewhere else. The cost of stitching them together fell on the operators in the middle of the night.
              </p>
              <p className="body-l">
                Overwatch starts with deep Nutanix coverage and extends the same operating model across bare-metal hardware, SNMP devices, protection posture, storage context, and network flows, inside one local appliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDERS, the humans. */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="editorial-statement balance mx-auto max-w-[20ch] text-center mb-14 md:mb-20"
          >
            Two people who{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              lived the problem.
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[920px] mx-auto">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.85, delay: i * 0.12, ease: EASE }}
              >
                <TiltCard strength={6} scale={1.015}>
                  <SpotlightCard glow="violet" className="relative h-full p-8 md:p-10 rounded-[24px] signature-glass">
                    <div
                      className="absolute -top-6 -left-1 italic font-bold leading-none"
                      style={{
                        fontSize: "clamp(4rem, 7vw, 6rem)",
                        letterSpacing: "-0.05em",
                        color: "var(--color-p-300)",
                        textShadow: "0 0 40px rgba(139,92,246,0.5)",
                      }}
                    >
                      {f.initials}
                    </div>
                    <div className="pt-16 md:pt-20">
                      <h3 className="editorial-lede text-[var(--color-ink)] mb-1">{f.name}</h3>
                      <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--color-p-300)] uppercase mb-5">
                        {f.role}
                      </p>
                      <p className="body-l text-[var(--color-ink-soft)] leading-[1.55]">{f.bio}</p>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS band. */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="grid grid-cols-1 sm:grid-cols-3 max-w-[820px] mx-auto rounded-[24px] matte overflow-hidden"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-9 text-center ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-[rgba(167,139,250,0.16)]" : ""}`}
              >
                <div className="numeral text-[var(--color-ink)]" style={{ fontSize: "clamp(2.75rem, 4.4vw, 3.75rem)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div className="mt-3 font-mono text-[11px] tracking-[0.16em] text-[var(--color-ink-mute)] uppercase leading-[1.6] max-w-[22ch] mx-auto">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT. */}
      <section id="contact" className="relative py-24 md:py-36">
        <div className="editorial-shell">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="editorial-statement balance mx-auto max-w-[22ch] text-center mb-14 md:mb-16"
          >
            If you are trying to{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              reduce console sprawl,
            </span>{" "}
            we should talk.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[920px] mx-auto">
            {CONTACT.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <SpotlightCard glow="violet" className="block h-full p-8 rounded-[22px] matte depth-1 hover:depth-2 transition-shadow duration-500">
                  <div className="flex items-center justify-between mb-7">
                    <Icon size={22} strokeWidth={1.5} className="text-[var(--color-p-300)]" />
                    {c.href && <ArrowUpRight size={16} className="text-[var(--color-ink-faint)]" />}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)] mb-2">{c.label}</div>
                  <div className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">{c.value}</div>
                </SpotlightCard>
              );
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                >
                  {c.href ? <a href={c.href} className="block group">{inner}</a> : inner}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/demo" className="btn-primary group inline-flex items-center gap-2">
              Book a demo
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
