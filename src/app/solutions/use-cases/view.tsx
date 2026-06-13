"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Activity, AlertOctagon, GitMerge, Bell, FileText, Eye, Cpu, Check, type LucideIcon } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

interface UseCase {
  icon: LucideIcon;
  short: string;
  name: string;
  challenge: string;
  help: string;
  outcome: string[];
}

const CASES: UseCase[] = [
  {
    icon: Activity,
    short: "Health & capacity",
    name: "Infrastructure health and capacity planning",
    challenge: "Generic metrics arrive without context. Teams cannot tell whether a cluster is genuinely healthy or just within nominal thresholds, and capacity forecasting becomes guesswork.",
    help: "Overwatch reads compute, storage, and network signals together, scores cluster health continuously, and projects capacity runway based on seasonal patterns, not averages.",
    outcome: ["Clear health visibility across clusters", "Proactive capacity forecasting", "Reduced risk of resource exhaustion"],
  },
  {
    icon: AlertOctagon,
    short: "Root cause analysis",
    name: "Performance degradation and root cause analysis",
    challenge: "Operators correlate metrics across tools manually every time something slows down, burning hours per incident on context-switching.",
    help: "Overwatch links metrics, events, and behavioral patterns across compute, storage, and network in real time, and surfaces probable cause with the chain that produced it.",
    outcome: ["Faster incident resolution", "Reduced MTTR by up to 70%", "Eliminated manual log correlation"],
  },
  {
    icon: GitMerge,
    short: "Change and upgrade risk",
    name: "Change impact and upgrade risk",
    challenge: "Upgrades and configuration changes ship with limited visibility into how they actually behave in production until something breaks.",
    help: "Overwatch compares the environment's behavior before, during, and after every change window against the seasonal baseline so deviation surfaces immediately.",
    outcome: ["Safer upgrades and maintenance windows", "Early detection of unintended side effects", "Data-backed change management decisions"],
  },
  {
    icon: Bell,
    short: "Alert noise reduction",
    name: "Alert noise reduction",
    challenge: "Alert floods obscure the signals that matter. Critical issues sit in the queue while teams triage noise.",
    help: "Overwatch correlates and clusters alerts in real time so the operator sees one tracked issue per root cause, not the dozens of symptoms it generated.",
    outcome: ["Up to 85% fewer false positives", "Clear alert prioritization by impact", "More effective on-call rotations"],
  },
  {
    icon: FileText,
    short: "Executive visibility",
    name: "Executive and operational visibility",
    challenge: "Leadership gets either too much technical detail or no visibility at all. Neither maps cleanly to investment decisions.",
    help: "Overwatch generates summarized infrastructure intelligence designed for executive consumption: uptime, incidents, runway, and trends, translated from telemetry to outcomes.",
    outcome: ["Board-ready infrastructure reports", "Technical-to-business translation", "Data-driven investment decisions"],
  },
  {
    icon: Eye,
    short: "Pre-incident detection",
    name: "Pre-incident detection",
    challenge: "Most tools detect issues only after impact. Users complain before the dashboard does.",
    help: "Overwatch uses ML-driven analysis of behavioral signals to surface early indicators before they cross alarm thresholds, projecting trajectory, not just current state.",
    outcome: ["Issues detected before user impact", "Reduced unplanned downtime", "Shift from reactive to proactive operations"],
  },
  {
    icon: Cpu,
    short: "Hardware health",
    name: "Physical layer visibility and hardware health",
    challenge: "Plenty of infrastructure problems start at the physical layer. Without hardware telemetry, teams diagnose software symptoms while the real cause goes unseen.",
    help: "Overwatch connects directly to BMC, IPMI, and Redfish APIs to monitor bare-metal health before it impacts virtualized workloads, and maps physical signals to the workloads above.",
    outcome: ["Proactive hardware failure alerting", "Physical-to-virtual root cause mapping", "Firmware visibility and lifecycle tracking"],
  },
];

function Explorer() {
  const [active, setActive] = useState(0);
  const c = CASES[active];
  const Icon = c.icon;

  return (
    <section className="relative py-16 md:py-24">
      <div className="editorial-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="editorial-statement balance mx-auto max-w-[22ch] text-center mb-14 md:mb-20"
        >
          The problems Overwatch was{" "}
          <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
            built to solve.
          </span>
        </motion.h2>

        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {/* Selector rail */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
            {CASES.map((item, i) => {
              const ItemIcon = item.icon;
              const isActive = i === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative text-left rounded-2xl p-4 transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="uc-rail"
                      className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--color-p-400)]/40 bg-[rgba(167,139,250,0.07)]"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-3.5">
                    <span
                      className="grid place-items-center w-10 h-10 rounded-xl border shrink-0 transition-colors"
                      style={{
                        borderColor: isActive ? "var(--color-p-400)" : "rgba(167,139,250,0.16)",
                        color: isActive ? "var(--color-p-200)" : "var(--color-ink-mute)",
                        background: isActive ? "rgba(167,139,250,0.10)" : "transparent",
                      }}
                    >
                      <ItemIcon size={17} strokeWidth={1.6} />
                    </span>
                    <span className={`text-[0.95rem] font-medium leading-tight ${isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"}`}>
                      {item.short}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative rounded-[26px] matte-strong overflow-hidden p-8 md:p-12 min-h-[480px]">
              <div
                aria-hidden
                className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.16), transparent 65%)" }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="grid place-items-center w-12 h-12 rounded-2xl border border-[var(--color-p-400)]/40 text-[var(--color-p-200)] bg-[rgba(167,139,250,0.1)]">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3 className="editorial-lede text-[var(--color-ink)] balance">{c.name}</h3>
                  </div>

                  <div className="grid gap-7">
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-pink-400)] mb-2">The challenge</div>
                      <p className="body-l max-w-[62ch]">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-p-300)] mb-2">With Overwatch</div>
                      <p className="body-l max-w-[62ch]">{c.help}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-emerald-400)] mb-3">What changes</div>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
                        {c.outcome.map((o, j) => (
                          <motion.li
                            key={o}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.12 + j * 0.07, ease: EASE }}
                            className="flex items-start gap-3 py-2.5 border-b border-[rgba(167,139,250,0.1)] text-[0.95rem] text-[var(--color-ink-soft)] leading-[1.5]"
                          >
                            <Check size={15} strokeWidth={2.2} className="mt-1 shrink-0 text-[var(--color-emerald-400)]" />
                            <span>{o}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UseCasesView() {
  return (
    <>
      <PageHead
        eyebrow="Use cases"
        title={
          <>
            Real-world observability{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              for real infrastructure.
            </span>
          </>
        }
        sub="From alert fatigue to hardware blind spots, the problems your team faces every day, and what changes when one platform watches the whole stack."
      />
      <Explorer />
      <FinalCTA />
    </>
  );
}
