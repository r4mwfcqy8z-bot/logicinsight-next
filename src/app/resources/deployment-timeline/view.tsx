"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Box, PlugZap, Network, Gauge, BarChart3, Send } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

// Times are drawn from stated facts: a single cluster deploys in under an hour,
// self-hosted setup runs one to two hours, managed turnkey runs three to five days.
const PATHS = [
  { stat: "< 1 hr", label: "First signal", body: "Deploy Overwatch into a single Nutanix cluster and reach a live, cluster-wide view." },
  { stat: "1 to 2 hr", label: "Full self-hosted setup", body: "Every source connected, baselines learning, dashboards and reports online." },
  { stat: "3 to 5 days", label: "Managed turnkey", body: "We stand up and operate the appliance for you, end to end.", href: "/solutions/monitoring-as-a-service" },
];

const STEPS = [
  {
    time: "T + 0",
    icon: Box,
    title: "Deploy the appliance",
    body: "Stand up the single Overwatch appliance. Internal services are containerized behind one HTTPS front door, so there is one footprint to manage.",
    note: "One local appliance footprint",
  },
  {
    time: "~ 10 min",
    icon: PlugZap,
    title: "Connect Prism",
    body: "Point Overwatch at Prism Element and Prism Central. Collection starts immediately across 818+ Nutanix metrics, inventory, alerts, and tasks.",
    note: "Prism Element and Prism Central",
  },
  {
    time: "~ 25 min",
    icon: Network,
    title: "Add hardware and network",
    body: "Bring Redfish and IPMI, SNMP, IPFIX or NetFlow, and HYCU through the same appliance boundary instead of separate collectors and consoles.",
    note: "Hardware, network, and backup sources",
  },
  {
    time: "Under 1 hr",
    icon: Gauge,
    title: "First cluster-wide signal",
    body: "Live dashboards light up. You are under an hour from deploy to a single operator console covering the whole stack.",
    note: "Deploy to first view",
  },
  {
    time: "1 to 2 hr",
    icon: BarChart3,
    title: "Baselines and reports",
    body: "Seasonal 7×24 modeling begins and health scoring comes online. 50+ pre-built dashboards and 9 scheduled report types are ready to use.",
    note: "Baselines, dashboards, and reports",
  },
  {
    time: "When you choose",
    icon: Send,
    title: "Enable forwarding",
    body: "Optionally forward filtered, enriched signals out to Datadog, Grafana Cloud, or Coralogix. Off until you turn it on, so telemetry stays local by default.",
    note: "Optional and off by default",
  },
];

function Step({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative pl-16 md:pl-24 pb-12 last:pb-0"
    >
      {/* Node marker on the rail */}
      <span className="absolute left-[18px] md:left-[26px] top-1 -translate-x-1/2 grid place-items-center w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[rgba(167,139,250,0.30)] text-[var(--color-p-300)] z-10">
        <Icon size={17} strokeWidth={1.6} />
      </span>

      <div className="rounded-[22px] matte depth-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-p-300)] tabular-nums">
            {step.time}
          </span>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-ink-faint)] px-2.5 py-1 rounded-full border border-white/8">
            {step.note}
          </span>
        </div>
        <h3 className="editorial-lede text-[var(--color-ink)] mb-3">{step.title}</h3>
        <p className="body-l max-w-[56ch]">{step.body}</p>
      </div>
    </motion.div>
  );
}

export default function DeploymentTimelineView() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <PageHead
        eyebrow="Deployment"
        title={
          <>
            From appliance to{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              first signal in under an hour.
            </span>
          </>
        }
        sub="Overwatch is a single self-hosted appliance, not a stack of collectors to assemble. Here is the self-hosted path, step by step, with the managed turnkey option alongside it."
      />

      {/* Three paths band */}
      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-[24px] overflow-hidden matte-strong">
            {PATHS.map((p) => (
              <div key={p.label} className="p-7 md:p-9 bg-[rgba(255,255,255,0.012)]">
                <div className="numeral text-[var(--color-ink)]" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", lineHeight: 0.9 }}>
                  {p.stat}
                </div>
                <div className="kicker text-[var(--color-p-300)] mt-4 mb-3">{p.label}</div>
                <p className="body-m max-w-[34ch]">{p.body}</p>
                {p.href && (
                  <Link href={p.href} className="inline-block mt-4 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-p-200)] hover:text-[var(--color-p-100)] transition-colors">
                    See managed path
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="The self-hosted path"
            title={
              <>
                Six steps,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  one appliance.
                </span>
              </>
            }
          />

          <div ref={railRef} className="relative max-w-[860px]">
            {/* Static rail track */}
            <span aria-hidden className="absolute left-[18px] md:left-[26px] top-2 bottom-2 w-px bg-[rgba(167,139,250,0.14)]" />
            {/* Scroll-progress fill */}
            <motion.span
              aria-hidden
              className="absolute left-[18px] md:left-[26px] top-2 bottom-2 w-px origin-top"
              style={{
                scaleY,
                background: "linear-gradient(180deg, var(--color-p-300), var(--color-p-500))",
                boxShadow: "0 0 12px rgba(167,139,250,0.5)",
              }}
            />
            {STEPS.map((s) => (
              <Step key={s.title} step={s} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
