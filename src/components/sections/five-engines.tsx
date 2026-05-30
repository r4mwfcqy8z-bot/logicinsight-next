"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Antenna, Sparkles, Activity, Database, Send } from "lucide-react";

const ENGINES = [
  {
    n: "01",
    name: "Collect",
    icon: Antenna,
    summary: "Agentless collection that begins with Nutanix and expands outward.",
    items: ["Prism Central & Element", "Redfish · IPMI", "SNMP devices", "IPFIX · NetFlow", "HYCU backup posture"],
  },
  {
    n: "02",
    name: "Enrich",
    icon: Sparkles,
    summary: "Metadata sticks to every metric before it lands.",
    items: ["DNS reverse-lookups", "GeoIP + ASN tags", "Workload labels", "Asset inventory join"],
  },
  {
    n: "03",
    name: "Analyze",
    icon: Activity,
    summary: "ML baselines learn each cluster. Anomalies surface against its own history.",
    items: ["Per-cluster baselines", "Cross-layer correlation", "Capacity forecasting", "Threshold-free anomalies"],
  },
  {
    n: "04",
    name: "Store",
    icon: Database,
    summary: "Local time-series + object-tier. Your data stays inside the perimeter.",
    items: ["On-box TSDB", "Tiered hot / cold", "Optional S3 archive", "Immutability windows"],
  },
  {
    n: "05",
    name: "Publish",
    icon: Send,
    summary: "Where the signal terminates is your choice.",
    items: ["50+ on-box dashboards", "Datadog Marketplace", "Grafana · Prometheus", "REST API · webhooks"],
  },
];

function EngineCard({ engine, index, total }: { engine: typeof ENGINES[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Each card lifts + fades as it enters viewport
  const y       = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.5]);
  const scale   = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.96, 1, 1, 0.98]);

  const Icon = engine.icon;
  const reverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      style={{ y, opacity, scale }}
      className={`relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center min-h-[60vh] py-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-sm text-[var(--color-ink-mute)] tabular-nums"
            style={{ fontFeatureSettings: "'tnum'" }}
          >
            {engine.n} / {String(total).padStart(2, "0")}
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-[var(--color-p-400)]/30 to-transparent" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-p-400)]/20 to-[var(--color-p-400)]/5 border border-[var(--color-p-400)]/25 text-[var(--color-p-300)]">
            <Icon size={20} />
          </span>
          <h3 className="display-3 mb-0">
            <span className="serif-italic gradient-text">{engine.name}</span>
          </h3>
        </div>

        <p className="text-lg text-[var(--color-ink-soft)] mb-6 max-w-[480px] leading-relaxed">
          {engine.summary}
        </p>

        <ul className="grid gap-2 max-w-[460px]">
          {engine.items.map((it) => (
            <li key={it} className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <span className="w-1 h-1 rounded-full bg-[var(--color-p-300)]" style={{ boxShadow: "0 0 6px #BC9CFF" }} />
              {it}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side — large mono numeral with glass card */}
      <div className="relative">
        <div className="relative rounded-3xl glass-strong p-10 md:p-14 overflow-hidden">
          <div
            className="absolute -inset-12 -z-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 60%)" }}
            aria-hidden
          />
          {/* Mono numeral as background */}
          <div
            className="absolute -top-4 -right-4 select-none pointer-events-none opacity-[0.06] font-bold tracking-tighter"
            style={{ fontSize: "clamp(10rem, 24vw, 22rem)", lineHeight: 0.8, color: "#A78BFA" }}
            aria-hidden
          >
            {engine.n}
          </div>

          <div className="relative">
            <Icon className="text-[var(--color-p-300)] mb-6" size={48} />
            <h4 className="display-3 mb-2">{engine.name}</h4>
            <p className="text-sm font-mono text-[var(--color-ink-mute)] tracking-wide uppercase">
              Stage {engine.n} of {String(total).padStart(2, "0")}
            </p>

            {/* Mini "wire" between engines */}
            {index < total - 1 && (
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[var(--color-p-400)]/50 to-transparent" />
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FiveEngines() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mx-auto text-center mb-16"
        >
          <span className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
            Inside the appliance
          </span>
          <h2 className="display-2 mb-4">
            Five engines.{" "}
            <span className="serif-italic gradient-text">One console.</span>
            <br />
            Here&apos;s what&apos;s inside.
          </h2>
          <p className="text-lg text-[var(--color-ink-soft)]">
            Overwatch is a local operations stack — collect, enrich, analyze, store, publish — running from a single appliance.
          </p>
        </motion.header>

        <div className="relative">
          {/* Vertical guide line */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(167,139,250,0.18) 10%, rgba(167,139,250,0.18) 90%, transparent 100%)",
            }}
          />

          <div className="grid gap-2">
            {ENGINES.map((e, i) => (
              <EngineCard key={e.n} engine={e} index={i} total={ENGINES.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
