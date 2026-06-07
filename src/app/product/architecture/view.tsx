"use client";

import { motion } from "motion/react";
import { Antenna, GitMerge, Activity, Database, Send } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { Forwarding } from "@/components/sections/forwarding";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const STAGES = [
  {
    n: "01",
    icon: Antenna,
    name: "Unified collection fabric",
    body: "Prism Element, Prism Central, Redfish, IPMI, SNMP, HYCU, IPFIX, and NetFlow all enter through one appliance boundary instead of separate collectors and consoles.",
    items: [
      "Prism Element and Prism Central collection",
      "Redfish and IPMI hardware collection",
      "SNMP polling and trap ingestion",
      "HYCU and IPFIX or NetFlow ingestion",
    ],
  },
  {
    n: "02",
    icon: GitMerge,
    name: "Local operations graph",
    body: "Metrics, logs, dashboards, APIs, and reports live inside one local stack, so teams stop stitching context back together by hand.",
    items: [
      "VictoriaMetrics for metrics",
      "VictoriaLogs for logs",
      "Grafana for dashboards",
      "React and API services behind one HTTPS front door",
    ],
  },
  {
    n: "03",
    icon: Activity,
    name: "Cross-domain analysis",
    body: "Overwatch applies seasonal baselines, anomaly detection, health scoring, and forecasting across infrastructure domains, not just within one data source.",
    items: [
      "7×24 baseline modeling",
      "Anomaly and health score generation",
      "Forecasts, reports, and right-sizing signals",
      "Cross-layer correlation across backups, network, and compute",
    ],
  },
  {
    n: "04",
    icon: Database,
    name: "Dashboards and forwarding",
    body: "Operators can work from the local dashboards and reports on the appliance, then forward filtered data to Datadog, Grafana Cloud, or Coralogix if needed.",
    items: [
      "50+ pre-built dashboards",
      "9 scheduled HTML report types",
      "Selective external forwarding",
      "Open API for automation and downstream tooling",
    ],
  },
  {
    n: "05",
    icon: Send,
    name: "Operating model",
    body: "The appliance is designed for on-prem data sovereignty first, with optional managed assistance around it if a team wants help operating the platform.",
    items: [
      "Single local appliance footprint",
      "Containerized internal services",
      "Local-first storage and retention",
      "MaaS available without changing the product architecture",
    ],
  },
];

const FLOW = [
  { i: "01", l: "Nutanix Prism",     d: "Prism Element & Central, Redfish, IPMI, SNMP, HYCU, NetFlow" },
  { i: "02", l: "Collection",        d: "Unified ingestion fabric normalizes all telemetry sources" },
  { i: "03", l: "Processing",        d: "Baselines, anomaly detection, health scoring, forecasting" },
  { i: "04", l: "Storage",           d: "VictoriaMetrics & VictoriaLogs with local-first retention" },
  { i: "05", l: "Dashboards",        d: "Pre-built views, scheduled reports, optional forwarding" },
];

const PRINCIPLES = [
  "Telemetry stays local unless you explicitly configure an output destination.",
  "Internal services stay behind one controlled HTTPS entry point.",
  "Operators get one appliance to manage instead of a stack of sidecar tooling.",
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHead
        eyebrow="Platform architecture"
        title={
          <>
            One platform boundary for Nutanix,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              and everything around it.
            </span>
          </>
        }
        sub="Overwatch is architected as a self-contained on-prem operations platform. Nutanix stays the center of gravity; hardware, network, backup, and flow context all enter through the same boundary."
      />

      {/* Principles — editorial vertical run, no 3-up glass cards. */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <div className="grid-edit">
            <div className="col-span-12 lg:col-span-3">
              <span className="kicker">Operating principles</span>
            </div>
            <div className="col-span-12 lg:col-span-9 border-t border-[rgba(167,139,250,0.16)]">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  className="py-6 border-b border-[rgba(167,139,250,0.16)]"
                >
                  <p className="editorial-lede text-[var(--color-ink)] balance max-w-[60ch]">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flow band — editorial 5-step linear flow. */}
      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Architecture flow"
            title={
              <>
                How Overwatch turns signals into{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  one operational console.
                </span>
              </>
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="rounded-[28px] signature-glass p-6 md:p-10"
          >
            <div className="kicker text-[var(--color-p-300)] mb-7">Local-first</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {FLOW.map((s, i) => (
                <motion.div
                  key={s.i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="relative px-4 py-5 rounded-xl matte"
                >
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)] mb-2 tabular-nums">{s.i}</div>
                  <div className="font-semibold text-[var(--color-ink)] mb-2 tracking-[-0.01em]">{s.l}</div>
                  <div className="text-[12px] text-[var(--color-ink-mute)] leading-[1.5]">{s.d}</div>
                  {i < FLOW.length - 1 && (
                    <span aria-hidden className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block text-[var(--color-p-400)]/55 text-lg">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Five stages — editorial vertical run. */}
      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Five stages inside the appliance"
            title={
              <>
                Opinionated, because{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  operations work is messy enough already.
                </span>
              </>
            }
            sub="Each stage in the appliance is designed to reduce handoffs: collect once, enrich locally, analyze with context, then decide what stays on-prem and what gets forwarded."
          />

          <div className="grid gap-5">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.75, delay: i * 0.05, ease: EASE }}
                >
                  <SpotlightCard glow="violet" className="grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-10 items-start p-7 md:p-9 rounded-[24px] matte depth-1 hover:depth-2 transition-shadow duration-500">
                    <div className="flex items-start gap-4 md:max-w-[280px]">
                      <Icon size={22} strokeWidth={1.5} className="text-[var(--color-p-300)] shrink-0 mt-1" />
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-[var(--color-ink-faint)] tabular-nums mb-2">
                          Stage {s.n}
                        </div>
                        <h3 className="editorial-lede text-[var(--color-ink)]">{s.name}</h3>
                      </div>
                    </div>
                    <p className="body-l max-w-[44ch]">{s.body}</p>
                    <ul className="grid gap-0 border-t border-[rgba(167,139,250,0.14)] md:border-t-0 md:border-l md:border-l-[rgba(167,139,250,0.14)] md:pl-7">
                      {s.items.map((it, j) => (
                        <li key={it} className={`text-[0.875rem] text-[var(--color-ink-soft)] py-2 ${j < s.items.length - 1 ? "border-b border-[rgba(167,139,250,0.10)]" : ""}`}>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Forwarding />

      <FinalCTA />
    </>
  );
}
