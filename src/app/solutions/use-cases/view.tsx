"use client";

import { motion } from "motion/react";
import { Activity, AlertOctagon, GitMerge, Bell, FileText, Eye, Cpu, Check } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const CASES = [
  {
    n: "01",
    icon: Activity,
    name: "Infrastructure Health & Capacity Planning",
    challenge: "Generic metrics arrive without context. Teams cannot tell whether a cluster is genuinely healthy or just within nominal thresholds, and capacity forecasting becomes guesswork.",
    help: "Overwatch reads compute, storage, and network signals together, scores cluster health continuously, and projects capacity runway based on seasonal patterns, not averages.",
    outcome: [
      "Clear health visibility across clusters",
      "Proactive capacity forecasting",
      "Reduced risk of resource exhaustion",
    ],
    visual: (
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <span className="kicker text-[var(--color-ink-mute)]">Cluster Health Score</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[var(--color-emerald-400)]/15 text-[var(--color-emerald-400)] tracking-[0.05em]">Healthy</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="numeral text-[3rem] leading-none text-[var(--color-ink)]">87</span>
          <span className="font-mono text-[11px] tracking-[0.10em] text-[var(--color-ink-mute)]">/ 100 · PROD-CLU01</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1">
          {[["CPU", 42], ["Memory", 68], ["Storage", 55]].map(([k, v]) => (
            <div key={k as string} className="px-3 py-2.5 rounded-xl matte">
              <div className="kicker text-[var(--color-ink-mute)] text-[9px]">{k}</div>
              <div className="font-semibold mt-1 text-[var(--color-ink)]">{v}%</div>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-3 border-t border-[rgba(167,139,250,0.16)] text-xs text-[var(--color-ink-mute)]">
          <div className="flex justify-between"><span>Capacity Forecast</span><span className="text-[var(--color-amber-400)]">Storage threshold in 94 days</span></div>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    icon: AlertOctagon,
    name: "Performance Degradation & Root Cause Analysis",
    challenge: "Operators correlate metrics across tools manually every time something slows down, burning hours per incident on context-switching.",
    help: "Overwatch links metrics, events, and behavioral patterns across compute, storage, and network in real time, and surfaces probable cause with the chain that produced it.",
    outcome: [
      "Faster incident resolution",
      "Reduced MTTR by up to 70%",
      "Eliminated manual log correlation",
    ],
    visual: (
      <div className="grid gap-2.5">
        <div className="kicker text-[var(--color-ink-mute)]">Incident Analysis · Performance Degradation</div>
        <ol className="grid gap-2.5 mt-1">
          {[
            ["02:14 UTC", "Backup job started on backup-proxy-04"],
            ["02:31 UTC", "Memory spike on DR-CLU01 (87%)"],
            ["02:45 UTC", "Storage latency increased 3.2× on DR-CLU01"],
          ].map(([t, msg]) => (
            <li key={t} className="flex items-start gap-3 text-xs">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-p-300)] shrink-0 pt-0.5">{t}</span>
              <span className="text-[var(--color-ink-soft)]">{msg}</span>
            </li>
          ))}
        </ol>
        <div className="mt-2 px-3.5 py-3 rounded-xl border border-[var(--color-p-400)]/30 bg-[var(--color-p-500)]/10 text-xs">
          <div className="kicker text-[var(--color-p-300)] mb-1.5">02:47 UTC · Root cause</div>
          <div className="text-[var(--color-ink)]">Backup job running 3.2× longer than 30-day average.</div>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    icon: GitMerge,
    name: "Change Impact & Upgrade Risk",
    challenge: "Upgrades and configuration changes ship with limited visibility into how they actually behave in production until something breaks.",
    help: "Overwatch compares the environment's behavior before, during, and after every change window against the seasonal baseline so deviation surfaces immediately.",
    outcome: [
      "Safer upgrades and maintenance windows",
      "Early detection of unintended side effects",
      "Data-backed change management decisions",
    ],
    visual: (
      <div className="grid gap-3">
        <div className="kicker text-[var(--color-ink-mute)]">Change Impact · AOS 6.5.2 to 6.5.3</div>
        <div className="grid grid-cols-2 gap-3">
          {[["Before", [["CPU", "38%"], ["Memory", "62%"], ["Latency", "1.2ms"]]],
            ["After",  [["CPU", "41%"], ["Memory", "71%"], ["Latency", "1.4ms"]]]].map(([label, rows]) => (
            <div key={label as string} className="px-3.5 py-3 rounded-xl matte">
              <div className="kicker text-[var(--color-ink-mute)] text-[9px] mb-2">{label}</div>
              {(rows as [string, string][]).map(([k, v]) => (
                <div key={k} className="flex justify-between text-xs py-0.5"><span className="text-[var(--color-ink-mute)]">{k}</span><span className="font-semibold text-[var(--color-ink)]">{v}</span></div>
              ))}
            </div>
          ))}
        </div>
        <div className="px-3.5 py-3 rounded-xl border border-[var(--color-emerald-400)]/25 bg-[var(--color-emerald-400)]/10 text-xs flex items-center gap-2.5">
          <Check size={14} strokeWidth={2.2} className="text-[var(--color-emerald-400)]" />
          <span className="text-[var(--color-ink-soft)]">Minor: within baseline tolerance (+8% memory, +0.2ms latency)</span>
        </div>
      </div>
    ),
  },
  {
    n: "04",
    icon: Bell,
    name: "Alert Noise Reduction",
    challenge: "Alert floods obscure the signals that matter. Critical issues sit in the queue while teams triage noise.",
    help: "Overwatch correlates and clusters alerts in real time so the operator sees one tracked issue per root cause, not the dozens of symptoms it generated.",
    outcome: [
      "Up to 85% fewer false positives",
      "Clear alert prioritization by impact",
      "More effective on-call rotations",
    ],
    visual: (
      <div className="grid grid-cols-2 gap-3">
        <div className="px-3.5 py-3 rounded-xl matte">
          <div className="kicker text-[var(--color-ink-mute)] text-[9px] mb-2">Before</div>
          <div className="text-[1.5rem] font-semibold tracking-tight">47 alerts <span className="text-xs font-normal text-[var(--color-ink-mute)]">/ 1hr</span></div>
          <div className="mt-2 grid gap-1 text-[10px] text-[var(--color-ink-mute)]">
            <div>CPU Warning · host-04</div>
            <div>Memory Alert · VM-12</div>
            <div>Disk Latency · host-04</div>
            <div className="text-[var(--color-ink-faint)]">+ 44 more</div>
          </div>
        </div>
        <div className="px-3.5 py-3 rounded-xl border border-[var(--color-p-400)]/30 bg-[var(--color-p-500)]/10">
          <div className="kicker text-[var(--color-p-300)] text-[9px] mb-2">After Overwatch</div>
          <div className="text-[1.5rem] font-semibold tracking-tight">2 actionable alerts</div>
          <div className="mt-2 grid gap-2 text-[10.5px]">
            <div className="text-[var(--color-ink)]"><strong>Host-04 · degraded</strong><div className="text-[var(--color-ink-mute)] mt-0.5">CPU + memory + disk + net correlated to runaway VM-12.</div></div>
            <div className="text-[var(--color-ink)]"><strong>Backup-proxy-02 · delayed</strong></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "05",
    icon: FileText,
    name: "Executive & Operational Visibility",
    challenge: "Leadership gets either too much technical detail or no visibility at all. Neither maps cleanly to investment decisions.",
    help: "Overwatch generates summarized infrastructure intelligence designed for executive consumption: uptime, incidents, runway, trends, translated from telemetry to outcomes.",
    outcome: [
      "Board-ready infrastructure reports",
      "Technical-to-business translation",
      "Data-driven infrastructure investment decisions",
    ],
    visual: (
      <div className="grid gap-2.5">
        <div className="kicker text-[var(--color-ink-mute)]">Executive Summary · January 2026</div>
        <div className="grid grid-cols-3 gap-2.5">
          {[["99.97%", "Uptime"], ["3", "Incidents"], ["94", "Days Runway"]].map(([v, k]) => (
            <div key={k} className="px-3 py-3 rounded-xl matte text-center">
              <div className="numeral text-[1.5rem] text-[var(--color-p-200)] leading-none">{v}</div>
              <div className="kicker text-[var(--color-ink-mute)] text-[9px] mt-1.5">{k}</div>
            </div>
          ))}
        </div>
        <div className="px-3.5 py-3 rounded-xl matte text-xs text-[var(--color-ink-mute)]">
          Cluster Health Trend · 30 Days, generated automatically by Overwatch.
        </div>
      </div>
    ),
  },
  {
    n: "06",
    icon: Eye,
    name: "Pre-Incident Detection",
    challenge: "Most tools detect issues only after impact. Users complain before the dashboard does.",
    help: "Overwatch uses ML-driven analysis of behavioral signals to surface early indicators before they cross alarm thresholds, projecting trajectory, not just current state.",
    outcome: [
      "Issues detected before user impact",
      "Reduced unplanned downtime",
      "Shift from reactive to proactive operations",
    ],
    visual: (
      <div className="grid gap-2.5">
        <div className="kicker text-[var(--color-ink-mute)]">Pre-Incident · Storage Capacity · PROD-CLU02</div>
        <div className="px-3.5 py-3.5 rounded-xl border border-[var(--color-amber-400)]/30 bg-[var(--color-amber-400)]/8">
          <div className="flex items-baseline justify-between text-xs">
            <span className="text-[var(--color-ink-mute)]">Current</span>
            <span className="font-semibold text-[var(--color-ink)]">71%</span>
          </div>
          <div className="mt-1.5 mb-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-amber-400)]" style={{ width: "71%" }}/>
          </div>
          <div className="text-xs text-[var(--color-amber-400)] font-medium">Predicted to breach threshold (85%) in 12 days</div>
        </div>
        <div className="px-3.5 py-3 rounded-xl matte text-xs">
          <div className="kicker text-[var(--color-ink-mute)] mb-1">Recommended action</div>
          <div className="text-[var(--color-ink)]">Review storage allocation on PROD-CLU02</div>
        </div>
      </div>
    ),
  },
  {
    n: "07",
    icon: Cpu,
    name: "Physical Layer Visibility & Hardware Health",
    challenge: "Plenty of infrastructure problems start at the physical layer. Without hardware telemetry, teams diagnose software symptoms while the real cause goes unseen.",
    help: "Overwatch connects directly to BMC, IPMI, and Redfish APIs to monitor bare-metal health before it impacts virtualized workloads, and maps physical signals to the workloads above.",
    outcome: [
      "Proactive hardware failure alerting",
      "Physical-to-virtual root cause mapping",
      "Firmware visibility and lifecycle tracking",
    ],
    visual: (
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="kicker text-[var(--color-ink-mute)]">Hardware · PROD-HOST-04</div>
            <div className="text-sm font-semibold text-[var(--color-ink)] mt-1">HPE DL380 Gen10</div>
          </div>
          <div className="kicker text-[var(--color-p-300)]">iLO 5 · v2.81</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[["CPU Temp","62°C"],["Inlet","24°C"],["Fan 1","4,200 RPM"],["Fan 2","4,180 RPM"],["PSU 1","480W"],["PSU 2","475W"]].map(([k, v]) => (
            <div key={k} className="px-2.5 py-2 rounded-lg matte text-[10.5px]">
              <div className="text-[var(--color-ink-mute)]">{k}</div>
              <div className="font-semibold text-[var(--color-ink)] mt-0.5">{v}</div>
            </div>
          ))}
        </div>
        <div className="px-3.5 py-3 rounded-xl border border-[var(--color-amber-400)]/30 bg-[var(--color-amber-400)]/8 text-xs">
          <div className="font-semibold text-[var(--color-amber-400)] mb-1">DIMM 8A · Correctable ECC errors increasing</div>
          <div className="text-[var(--color-ink-mute)]">47 errors in last 24h (baseline: 2). Recommend module replacement.</div>
        </div>
      </div>
    ),
  },
];

const PILLS = [
  "Infrastructure Health",
  "Performance Degradation",
  "Change Impact",
  "Alert Noise Reduction",
  "Executive",
  "Pre-Incident Detection",
  "Physical Layer Visibility",
];

function Act({ kicker, color, children }: { kicker: string; color: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-4 items-baseline">
      <div className="kicker pt-1" style={{ color }}>{kicker}</div>
      <div>{children}</div>
    </div>
  );
}

function UseCase({ c, i }: { c: typeof CASES[number]; i: number }) {
  const Icon = c.icon;
  const visualSide = i % 2 === 0 ? "right" : "left";

  const copyBlock = (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-4">
        <span className="grid place-items-center w-11 h-11 rounded-xl border border-[rgba(167,139,250,0.20)] bg-[rgba(167,139,250,0.05)] text-[var(--color-p-300)]">
          <Icon size={18} strokeWidth={1.5} />
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.20em] uppercase text-[var(--color-ink-faint)] tabular-nums">
          {c.n} / 07
        </span>
      </div>
      <h2 className="editorial-lede balance text-[var(--color-ink)]">{c.name}</h2>

      <div className="grid gap-5 border-t border-[rgba(167,139,250,0.14)] pt-6">
        <Act kicker="Challenge" color="var(--color-pink-400)">
          <p className="body-l">{c.challenge}</p>
        </Act>
        <Act kicker="Overwatch" color="var(--color-p-300)">
          <p className="body-l">{c.help}</p>
        </Act>
        <Act kicker="Outcome" color="var(--color-emerald-400)">
          <ul className="grid gap-2">
            {c.outcome.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]"
              >
                <Check size={14} strokeWidth={2.2} className="text-[var(--color-emerald-400)] shrink-0 mt-1" />
                {o}
              </li>
            ))}
          </ul>
        </Act>
      </div>
    </div>
  );

  const visualBlock = (
    <SpotlightCard glow="violet" className="relative h-full p-6 md:p-8 rounded-[24px] matte-strong depth-2 flex items-center">
      <div className="w-full">{c.visual}</div>
    </SpotlightCard>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
    >
      {visualSide === "left" ? (
        <>
          <div className="lg:order-1">{visualBlock}</div>
          <div className="lg:order-2">{copyBlock}</div>
        </>
      ) : (
        <>
          <div className="lg:order-1">{copyBlock}</div>
          <div className="lg:order-2">{visualBlock}</div>
        </>
      )}
    </motion.article>
  );
}

export default function UseCasesPage() {
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
        sub="Purpose-built to solve the problems your team faces every day, from alert fatigue to hardware blind spots."
      />

      {/* Editorial table-of-contents pills. */}
      <section className="relative pb-8">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap gap-2.5"
          >
            {PILLS.map((p) => (
              <span
                key={p}
                className="px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.16em] uppercase rounded-full border border-[rgba(167,139,250,0.16)] text-[var(--color-ink-soft)] hover:border-[var(--color-p-300)]/40 hover:text-[var(--color-p-200)] transition-colors"
              >
                {p}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <div className="grid gap-16 md:gap-24">
            {CASES.map((c, i) => <UseCase key={c.n} c={c} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
