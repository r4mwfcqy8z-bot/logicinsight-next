"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SOURCES = [
  { id: "prism",   label: "Prism Element + Central" },
  { id: "redfish", label: "Redfish · IPMI" },
  { id: "snmp",    label: "SNMP devices" },
  { id: "ipfix",   label: "IPFIX · NetFlow" },
  { id: "hycu",    label: "HYCU backups" },
];

const DESTS = [
  { id: "datadog", label: "Datadog Marketplace",       opt: true  },
  { id: "grafana", label: "Grafana · Prometheus",      opt: true  },
  { id: "s3",      label: "S3 · Wasabi (immutable)",   opt: true  },
  { id: "local",   label: "On-box dashboards & API",   opt: false },
];

const POINTS = [
  "Keep telemetry local unless you explicitly enable forwarding",
  "Filter what leaves the appliance so cloud analytics costs stay predictable",
  "Use one local control plane instead of piling new dashboards on top of old ones",
];

const CAPABILITIES = [
  "Cluster health, inventory, protection state, tasks, and multi-cluster context — Prism Element and Prism Central",
  "HYCU jobs, object storage, retention posture, and target utilization in the same operator view",
  "Redfish, IPMI, SNMP, IPFIX, and NetFlow signals tied back to the workloads they actually affect",
  "Local collection, enrichment, analysis, dashboards, reports, and APIs stay inside one controlled boundary",
];

function Pulse({ from, to, color, delay }: { from: { x: number; y: number }; to: { x: number; y: number }; color: string; delay: number }) {
  return (
    <motion.circle
      r="3"
      fill={color}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{ cx: [from.x, to.x], cy: [from.y, to.y], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay, repeatDelay: 0.3 }}
    />
  );
}

export function Forwarding() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const W = 900, H = 460;
  const coreCenter = { x: W / 2, y: H / 2 };

  const sourcePoints = SOURCES.map((_, i) => ({
    x: 100,
    y: 80 + (i * (H - 160)) / (SOURCES.length - 1),
  }));
  const destPoints = DESTS.map((_, i) => ({
    x: W - 100,
    y: 100 + (i * (H - 200)) / (DESTS.length - 1),
  }));

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mx-auto text-center mb-14"
        >
          <span className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
            Local appliance · optional forwarding
          </span>
          <h2 className="display-2 mb-4">
            Replace console sprawl{" "}
            <span className="serif-italic gradient-text">without replacing</span>
            <br />
            the tools your team already trusts.
          </h2>
        </motion.header>

        {/* Diagram */}
        <div className="relative rounded-3xl glass-strong p-6 md:p-10 mb-12">
          <div
            className="absolute -inset-10 -z-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 60%)" }}
            aria-hidden
          />

          <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            <defs>
              <linearGradient id="src-arrow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"  stopColor="#A78BFA" stopOpacity="0" />
                <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="dest-arrow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#FF6B9C" stopOpacity="0" />
                <stop offset="40%" stopColor="#FF6B9C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF6B9C" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="rgba(167,139,250,0.4)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Source → core lines */}
            {sourcePoints.map((p, i) => {
              const d = `M${p.x + 110},${p.y} C${p.x + 200},${p.y} ${coreCenter.x - 140},${coreCenter.y} ${coreCenter.x - 80},${coreCenter.y}`;
              return (
                <motion.path
                  key={`src-${i}`}
                  d={d}
                  stroke="rgba(167,139,250,0.35)"
                  strokeWidth="1.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}

            {/* Core → dest lines */}
            {destPoints.map((p, i) => {
              const d = `M${coreCenter.x + 80},${coreCenter.y} C${coreCenter.x + 200},${coreCenter.y} ${p.x - 200},${p.y} ${p.x - 110},${p.y}`;
              return (
                <motion.path
                  key={`dest-${i}`}
                  d={d}
                  stroke={DESTS[i].opt ? "rgba(255,107,156,0.30)" : "rgba(255,107,156,0.50)"}
                  strokeWidth="1.2"
                  strokeDasharray={DESTS[i].opt ? "4 4" : ""}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}

            {/* Traveling pulses */}
            {sourcePoints.map((p, i) => (
              <Pulse
                key={`pulse-src-${i}`}
                from={{ x: p.x + 110, y: p.y }}
                to={{ x: coreCenter.x - 80, y: coreCenter.y }}
                color="#A78BFA"
                delay={1.2 + i * 0.3}
              />
            ))}
            {destPoints.map((p, i) => (
              <Pulse
                key={`pulse-dest-${i}`}
                from={{ x: coreCenter.x + 80, y: coreCenter.y }}
                to={{ x: p.x - 110, y: p.y }}
                color="#FF6B9C"
                delay={2.0 + i * 0.3}
              />
            ))}

            {/* Source boxes */}
            {SOURCES.map((s, i) => {
              const p = sourcePoints[i];
              return (
                <motion.g
                  key={s.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <rect x={p.x - 10} y={p.y - 18} width="220" height="36" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
                  <circle cx={p.x + 8} cy={p.y} r="3.5" fill="#A78BFA" />
                  <text x={p.x + 22} y={p.y + 4} fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500" fill="#FAF7FF">
                    {s.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Core: Overwatch appliance */}
            <motion.g
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <circle cx={coreCenter.x} cy={coreCenter.y} r="120" fill="url(#core-glow)" />
              <motion.rect
                x={coreCenter.x - 80} y={coreCenter.y - 60}
                width="160" height="120" rx="20"
                fill="rgba(124,58,237,0.22)"
                stroke="rgba(167,139,250,0.6)"
                strokeWidth="1.4"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${coreCenter.x}px ${coreCenter.y}px` }}
              />
              <text x={coreCenter.x} y={coreCenter.y - 8} textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.10em" fill="#D7C2FF">
                OVERWATCH
              </text>
              <text x={coreCenter.x} y={coreCenter.y + 14} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#837AA0">
                Ubuntu 24.04 · single appliance
              </text>
              <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#BC9CFF" textAnchor="middle">
                <rect x={coreCenter.x - 60} y={coreCenter.y + 24} width="56" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
                <text x={coreCenter.x - 32} y={coreCenter.y + 34}>ML</text>
                <rect x={coreCenter.x + 4} y={coreCenter.y + 24} width="56" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
                <text x={coreCenter.x + 32} y={coreCenter.y + 34}>FORECAST</text>
              </g>
            </motion.g>

            {/* Destination boxes */}
            {DESTS.map((d, i) => {
              const p = destPoints[i];
              return (
                <motion.g
                  key={d.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <rect x={p.x - 110} y={p.y - 22} width="220" height="44" rx="10" fill="rgba(255,255,255,0.04)" stroke={d.opt ? "rgba(255,107,156,0.25)" : "rgba(255,107,156,0.50)"} />
                  <circle cx={p.x - 90} cy={p.y} r="3.5" fill="#FF6B9C" />
                  <text x={p.x - 76} y={p.y - 1} fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500" fill="#FAF7FF">
                    {d.label}
                  </text>
                  {d.opt && (
                    <text x={p.x - 76} y={p.y + 14} fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#FF6B9C" letterSpacing="0.06em">
                      OPTIONAL · TOGGLE PER STREAM
                    </text>
                  )}
                </motion.g>
              );
            })}

            {/* Column labels */}
            <text x={155} y={45} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.14em" fill="#837AA0">SOURCES (LOCAL)</text>
            <text x={W - 200} y={45} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.14em" fill="#837AA0">DESTINATIONS</text>
          </svg>
        </div>

        {/* Three principles */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {POINTS.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3 px-5 py-5 rounded-2xl glass"
            >
              <span className="mono-eyebrow text-[var(--color-p-300)] shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>

        {/* Four capability rows */}
        <ul className="grid md:grid-cols-2 gap-3">
          {CAPABILITIES.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)] shrink-0"
                style={{ boxShadow: "0 0 8px rgba(52,211,153,0.85)" }}
              />
              <span className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{c}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
