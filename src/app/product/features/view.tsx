"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Antenna, Sparkles, Activity, BarChart3, Settings, ArrowRight, Server, Network, ShieldCheck, Boxes, Cpu, Cloud } from "lucide-react";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const STAGES = [
  { icon: Antenna, name: "Collect once", body: "Start with Prism Element and Prism Central, then extend the same collection edge into Redfish, IPMI, SNMP, HYCU, IPFIX, and NetFlow." },
  { icon: Sparkles, name: "Enrich locally", body: "Tag every signal with cluster, host, VM, hardware, backup, and network context, so operators stop correlating raw data by hand." },
  { icon: Activity, name: "Analyze with context", body: "Baselines, anomaly detection, health scoring, and forecasting that understand how those domains fit together, not in isolation." },
  { icon: BarChart3, name: "Visualize and report", body: "Local dashboards and scheduled reports run from the appliance. Forward filtered telemetry to external tools only when you choose to." },
  { icon: Settings, name: "Operate one platform", body: "Fewer consoles for teams to live in, without giving up the systems they still need downstream." },
];

const COVERAGE = [
  { icon: Boxes, name: "Nutanix core", detail: "818+ metrics across Prism Central and Element, plus inventory, protection state, and alerts." },
  { icon: Cpu, name: "Hardware", detail: "Redfish and IPMI: power, thermal, firmware, and disk from iDRAC, iLO, and XClarity." },
  { icon: Network, name: "Network and flow", detail: "SNMP devices plus IPFIX and NetFlow, with DNS, GeoIP, and top-talker analysis." },
  { icon: ShieldCheck, name: "Backup posture", detail: "HYCU job health, targets, and protection compliance, tied back to the cluster." },
];

const DEPLOY = [
  { icon: Server, name: "You run the appliance", body: "Keep full control over retention, network paths, certificates, and integrations in your own environment." },
  { icon: Cloud, name: "We help operate it", body: "The same appliance and data model, with Logic Insight handling tuning, reporting, and ongoing platform operations." },
];

function Hero() {
  return (
    <section className="relative min-h-[60dvh] flex items-center pt-28 md:pt-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(56vw 56vh at 50% 36%, rgba(139,92,246,0.16), transparent 62%)" }}
      />
      <div className="editorial-shell w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="editorial-display balance mx-auto max-w-[18ch]"
        >
          One appliance,{" "}
          <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
            five engines
          </span>{" "}
          working as one.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="mt-7 editorial-sub mx-auto max-w-[54ch]"
        >
          A self-contained local appliance that collects, enriches, analyzes, publishes, and operates, purpose-built for Nutanix and everything around it.
        </motion.p>
      </div>
    </section>
  );
}

function OperatingModel() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 md:py-36">
      <div className="editorial-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="editorial-statement balance mx-auto max-w-[20ch] text-center mb-16 md:mb-24"
        >
          One operating model,{" "}
          <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
            start to finish.
          </span>
        </motion.h2>

        <div ref={railRef} className="relative max-w-[760px] mx-auto">
          <span aria-hidden className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px bg-[rgba(167,139,250,0.14)]" />
          {!reduce && (
            <motion.span
              aria-hidden
              className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px origin-top"
              style={{ scaleY, background: "linear-gradient(180deg, var(--color-p-300), var(--color-p-500))", boxShadow: "0 0 12px rgba(167,139,250,0.5)" }}
            />
          )}
          {STAGES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -14% 0px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative pl-14 md:pl-20 pb-12 last:pb-0"
              >
                <span className="absolute left-[18px] md:left-[22px] top-1 -translate-x-1/2 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-bg)] border border-[rgba(167,139,250,0.3)] text-[var(--color-p-300)] z-10">
                  <Icon size={16} strokeWidth={1.6} />
                </span>
                <h3 className="editorial-lede text-[var(--color-ink)] mb-3">{s.name}</h3>
                <p className="body-l max-w-[52ch]">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="editorial-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="editorial-statement balance mx-auto max-w-[22ch]">
            Agentless collection that starts with Nutanix and{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              expands outward.
            </span>
          </h2>
        </motion.div>

        <div className="max-w-[760px] mx-auto border-t border-[rgba(167,139,250,0.16)]">
          {COVERAGE.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                className="flex items-start gap-5 py-7 border-b border-[rgba(167,139,250,0.12)]"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl text-[var(--color-p-300)] border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)] shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] mb-1">{c.name}</h3>
                  <p className="body-m text-[var(--color-ink-soft)] max-w-[58ch]">{c.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Deployment() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="editorial-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="editorial-statement balance mx-auto max-w-[20ch] text-center mb-14 md:mb-16"
        >
          One architecture,{" "}
          <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
            two ways to run it.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
          {DEPLOY.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              >
                <SpotlightCard glow="violet" className="h-full p-8 md:p-10 rounded-[24px] matte depth-1 hover:depth-2 transition-shadow duration-500">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl text-[var(--color-p-300)] mb-6 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="editorial-lede text-[var(--color-ink)] mb-3">{d.name}</h3>
                  <p className="body-l text-[var(--color-ink-soft)] max-w-[44ch]">{d.body}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing" className="btn-ghost group inline-flex items-center gap-2">
            See pricing
            <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesView() {
  return (
    <>
      <Hero />
      <OperatingModel />
      <Coverage />
      <Deployment />
      <FinalCTA />
    </>
  );
}
