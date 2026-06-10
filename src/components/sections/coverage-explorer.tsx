"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { Boxes, Server, Network, ShieldCheck, Activity, ArrowRight, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Domain {
  key: string;
  name: string;
  icon: typeof Boxes;
  stat: string;
  statLabel: string;
  color: string;
  glow: string;
  body: string;
  signals: string[];
  href: string;
  hrefLabel: string;
}

// Counts and signals are verbatim from the homepage coverage and architecture content.
const DOMAINS: Domain[] = [
  {
    key: "cluster",
    name: "Nutanix Cluster",
    icon: Boxes,
    stat: "818+",
    statLabel: "Nutanix metrics",
    color: "var(--color-p-200)",
    glow: "rgba(167,139,250,0.22)",
    body: "Every layer of the Nutanix stack, read from both Prism Central and Prism Element and held in one operator console.",
    signals: [
      "Prism Element and Prism Central metrics",
      "Inventory, alerts, and tasks",
      "VMs, hosts, storage containers, and vDisks",
      "Protection and replication signals",
    ],
    href: "/product/cluster-monitoring",
    hrefLabel: "Cluster monitoring",
  },
  {
    key: "hardware",
    name: "Hardware",
    icon: Server,
    stat: "Redfish",
    statLabel: "plus IPMI",
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.20)",
    body: "Server health pulled straight from the baseboard controller, tied back to the cluster events it explains.",
    signals: [
      "Power and thermal telemetry",
      "Firmware and disk context",
      "iDRAC, iLO, and XClarity endpoints",
      "Hardware signal before tickets get filed",
    ],
    href: "/product/redfish-monitoring",
    hrefLabel: "Redfish monitoring",
  },
  {
    key: "network",
    name: "Network and Flow",
    icon: Network,
    stat: "210+",
    statLabel: "vendor profiles",
    color: "#FF6B9C",
    glow: "rgba(255,107,156,0.20)",
    body: "Every device on the wire, plus optional flow output, kept next to cluster operations instead of stranded in a separate tool.",
    signals: [
      "SNMP polling and trap ingestion",
      "Topology, interfaces, and config backup",
      "IPFIX and NetFlow analysis",
      "Top talkers across the network",
    ],
    href: "/product/network-flow-analysis",
    hrefLabel: "Network flow analysis",
  },
  {
    key: "backup",
    name: "Backup",
    icon: ShieldCheck,
    stat: "HYCU",
    statLabel: "protection posture",
    color: "#5EEAD4",
    glow: "rgba(94,234,212,0.18)",
    body: "Backup posture sitting alongside the cluster it protects, so compliance and job health are never a separate investigation.",
    signals: [
      "Protection compliance tracking",
      "Targets and job health",
      "Restore test verification",
      "Posture next to the protected cluster",
    ],
    href: "/product/hycu-monitoring",
    hrefLabel: "HYCU monitoring",
  },
  {
    key: "analysis",
    name: "Analysis",
    icon: Activity,
    stat: "7×24",
    statLabel: "baseline modeling",
    color: "var(--color-p-300)",
    glow: "rgba(167,139,250,0.20)",
    body: "Cross-domain intelligence applied over every source at once, not just within a single data feed.",
    signals: [
      "Seasonal baselines and anomaly detection",
      "Health scoring across domains",
      "Forecasts and right-sizing signals",
      "Correlation across compute, network, and backup",
    ],
    href: "/product/predictive-analytics",
    hrefLabel: "Predictive analytics",
  },
];

export function CoverageExplorer({ heading, blurb }: { heading?: React.ReactNode; blurb?: string } = {}) {
  const [active, setActive] = useState(0);
  const d = DOMAINS[active];
  const Icon = d.icon;

  return (
    <section className="relative py-16 md:py-24">
      <div className="editorial-shell">
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 md:mb-16 max-w-[24ch]"
          >
            <h2 className="editorial-statement balance">{heading}</h2>
            {blurb && <p className="mt-6 editorial-sub max-w-[52ch]">{blurb}</p>}
          </motion.div>
        )}
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {/* Selector rail */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-2.5">
            {DOMAINS.map((item, i) => {
              const ItemIcon = item.icon;
              const isActive = i === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative text-left rounded-[18px] p-5 transition-colors duration-300 ${
                    isActive ? "matte depth-2" : "matte hover:depth-1"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="coverage-rail"
                      className="absolute inset-0 rounded-[18px] ring-1 ring-inset"
                      style={{ boxShadow: `inset 0 0 0 1px ${item.color}`, background: item.glow }}
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-4">
                    <span
                      className="grid place-items-center w-11 h-11 rounded-xl border shrink-0 transition-colors"
                      style={{
                        borderColor: isActive ? item.color : "rgba(167,139,250,0.16)",
                        color: isActive ? item.color : "var(--color-ink-mute)",
                        background: isActive ? item.glow : "transparent",
                      }}
                    >
                      <ItemIcon size={19} strokeWidth={1.6} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold tracking-[-0.01em] text-[var(--color-ink)]">{item.name}</span>
                      <span className="block font-mono text-[11px] tracking-[0.06em] text-[var(--color-ink-mute)] mt-0.5">
                        {item.stat} {item.statLabel}
                      </span>
                    </span>
                    <ArrowRight
                      size={15}
                      className={`shrink-0 transition-all ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}
                      style={{ color: item.color }}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative h-full rounded-[26px] matte-strong overflow-hidden p-8 md:p-12 min-h-[420px]">
              <div
                aria-hidden
                className="absolute -top-24 -right-16 w-[440px] h-[440px] rounded-full blur-3xl pointer-events-none transition-colors duration-700"
                style={{ background: `radial-gradient(circle, ${d.glow}, transparent 65%)` }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={d.key}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="grid place-items-center w-12 h-12 rounded-2xl border"
                      style={{ borderColor: d.color, color: d.color, background: d.glow }}
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="kicker" style={{ color: d.color }}>{d.name}</span>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-7">
                    <span className="numeral text-[var(--color-ink)]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.85 }}>
                      {d.stat}
                    </span>
                    <span className="font-mono text-[12px] tracking-[0.10em] uppercase text-[var(--color-ink-mute)]">
                      {d.statLabel}
                    </span>
                  </div>

                  <p className="body-l max-w-[52ch] mb-8">{d.body}</p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-0 mb-9">
                    {d.signals.map((s, j) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 + j * 0.06, ease: EASE }}
                        className="flex items-start gap-3 py-3 border-b border-[rgba(167,139,250,0.12)]"
                      >
                        <Check size={15} strokeWidth={2.2} className="mt-1 shrink-0" style={{ color: d.color }} />
                        <span className="text-[0.95rem] text-[var(--color-ink-soft)] leading-[1.5]">{s}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href={d.href}
                    className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink)] hover:text-[var(--color-p-100)] transition-colors"
                  >
                    Explore {d.hrefLabel}
                    <ArrowRight size={13} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
