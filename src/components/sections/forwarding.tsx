"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
  "Cluster health, inventory, protection state, tasks, and multi-cluster context, Prism Element and Prism Central",
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

  const W = 1100, H = 520;
  const coreCenter = { x: W / 2, y: H / 2 };
  const COL_PAD = 130;
  const BOX_W = 230;
  const VPAD = 70;

  const sourceColX = COL_PAD + BOX_W / 2;
  const destColX   = W - COL_PAD - BOX_W / 2;

  const sourcePoints = SOURCES.map((_, i) => ({
    x: sourceColX,
    y: VPAD + (i * (H - VPAD * 2)) / (SOURCES.length - 1),
  }));
  const destPoints = DESTS.map((_, i) => ({
    x: destColX,
    y: VPAD + 30 + (i * (H - VPAD * 2 - 60)) / (DESTS.length - 1),
  }));

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="editorial-shell">
        {/* Centered header. */}
        <div className="mb-14 md:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="editorial-statement balance mx-auto max-w-[24ch]"
          >
            Replace console sprawl{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              without replacing
            </span>{" "}
            the tools your team already trusts.
          </motion.h2>
        </div>

        {/* Diagram in editorial emptiness, no glass-strong wrapper card. */}
        <div className="relative mb-24 md:mb-32">
          {/* Background hairline grid behind diagram. */}
          <div
            aria-hidden
            className="absolute inset-x-[-4vw] inset-y-[-3rem] -z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(167,139,250,0.20), transparent 70%)" }}
          />

          <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            <defs>
              <radialGradient id="fwd-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="rgba(167,139,250,0.4)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Source → core lines */}
            {sourcePoints.map((p, i) => {
              const startX = p.x + BOX_W / 2;
              const endX = coreCenter.x - 130;
              const d = `M${startX},${p.y} C${startX + 90},${p.y} ${endX - 60},${coreCenter.y} ${endX},${coreCenter.y}`;
              return (
                <motion.path
                  key={`src-${i}`}
                  d={d}
                  stroke="rgba(167,139,250,0.4)"
                  strokeWidth="1.1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: EASE }}
                />
              );
            })}

            {/* Core → dest lines */}
            {destPoints.map((p, i) => {
              const startX = coreCenter.x + 130;
              const endX = p.x - BOX_W / 2;
              const d = `M${startX},${coreCenter.y} C${startX + 60},${coreCenter.y} ${endX - 90},${p.y} ${endX},${p.y}`;
              return (
                <motion.path
                  key={`dest-${i}`}
                  d={d}
                  stroke={DESTS[i].opt ? "rgba(255,107,156,0.32)" : "rgba(255,107,156,0.6)"}
                  strokeWidth="1.1"
                  strokeDasharray={DESTS[i].opt ? "4 5" : ""}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.8 + i * 0.1, ease: EASE }}
                />
              );
            })}

            {sourcePoints.map((p, i) => (
              <Pulse
                key={`pulse-src-${i}`}
                from={{ x: p.x + BOX_W / 2, y: p.y }}
                to={{ x: coreCenter.x - 130, y: coreCenter.y }}
                color="#A78BFA"
                delay={1.2 + i * 0.3}
              />
            ))}
            {destPoints.map((p, i) => (
              <Pulse
                key={`pulse-dest-${i}`}
                from={{ x: coreCenter.x + 130, y: coreCenter.y }}
                to={{ x: p.x - BOX_W / 2, y: p.y }}
                color="#FF6B9C"
                delay={2.0 + i * 0.3}
              />
            ))}

            {/* Source boxes, cleaner, no decorative dot. */}
            {SOURCES.map((s, i) => {
              const p = sourcePoints[i];
              const rectX = p.x - BOX_W / 2;
              return (
                <motion.g
                  key={s.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                >
                  <rect
                    x={rectX} y={p.y - 22} width={BOX_W} height="44" rx="6"
                    fill="rgba(20, 16, 42, 0.85)" stroke="rgba(167,139,250,0.32)" strokeWidth="1"
                  />
                  <text x={rectX + 16} y={p.y + 4.5} fontSize="13" fontFamily="var(--font-sans), system-ui, sans-serif" fontWeight="500" fill="#F4F1EA">
                    {s.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Core: Overwatch appliance, sharper editorial framing. */}
            <motion.g
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              <circle cx={coreCenter.x} cy={coreCenter.y} r="140" fill="url(#fwd-core-glow)" />
              <motion.rect
                x={coreCenter.x - 120} y={coreCenter.y - 75}
                width="240" height="150" rx="14"
                fill="rgba(124,58,237,0.18)"
                stroke="rgba(167,139,250,0.6)"
                strokeWidth="1.3"
                animate={{ scale: [1, 1.025, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${coreCenter.x}px ${coreCenter.y}px` }}
              />
              <text x={coreCenter.x} y={coreCenter.y - 18} textAnchor="middle" fontSize="22" fontWeight="700" fontFamily="var(--font-sans), system-ui, sans-serif" letterSpacing="0.04em" fill="#ECE3FF">
                OVERWATCH
              </text>
              <text x={coreCenter.x} y={coreCenter.y + 4} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono), ui-monospace, monospace" letterSpacing="0.10em" fill="#837AA0">
                One local appliance
              </text>
              <text x={coreCenter.x} y={coreCenter.y + 38} textAnchor="middle" fontFamily="var(--font-mono), ui-monospace, monospace" fontSize="9" fill="#BC9CFF" letterSpacing="0.16em">
                ML · ANOMALY · FORECAST
              </text>
            </motion.g>

            {/* Destination boxes, italic note for "optional". */}
            {DESTS.map((d, i) => {
              const p = destPoints[i];
              const h = d.opt ? 58 : 44;
              const rectX = p.x - BOX_W / 2;
              return (
                <motion.g
                  key={d.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 1.0 + i * 0.08, ease: EASE }}
                >
                  <rect
                    x={rectX} y={p.y - h / 2}
                    width={BOX_W} height={h} rx="6"
                    fill="rgba(20, 16, 42, 0.85)"
                    stroke={d.opt ? "rgba(255,107,156,0.34)" : "rgba(255,107,156,0.6)"}
                    strokeWidth="1"
                  />
                  <text
                    x={rectX + 16}
                    y={p.y - (d.opt ? 4 : -4.5)}
                    fontSize="13" fontFamily="var(--font-sans), system-ui, sans-serif" fontWeight="500" fill="#F4F1EA"
                  >
                    {d.label}
                  </text>
                  {d.opt && (
                    <text
                      x={rectX + 16} y={p.y + 14}
                      fontSize="9" fontStyle="italic" fontFamily="var(--font-sans), system-ui, sans-serif"
                      fill="#FF6B9C" letterSpacing="0.04em"
                    >
                      optional, toggle per stream
                    </text>
                  )}
                </motion.g>
              );
            })}

            <text x={sourceColX} y={36} textAnchor="middle" fontFamily="var(--font-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.18em" fill="#837AA0">SOURCES (LOCAL)</text>
            <text x={destColX}   y={36} textAnchor="middle" fontFamily="var(--font-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.18em" fill="#837AA0">DESTINATIONS</text>
          </svg>
        </div>

        {/* Three principles, editorial vertical run, NOT 3-up cards. */}
        <div className="grid-edit mb-20 md:mb-28">
          <div className="col-span-12 lg:col-start-3 lg:col-span-9 space-y-0">
            {POINTS.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="py-6 border-b border-[rgba(167,139,250,0.16)] last:border-b-0"
              >
                <p className="editorial-lede text-[var(--color-ink)] balance max-w-[60ch]">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Four capabilities, 2x2 with hairlines, no card pills, no decorative dots. */}
        <ul className="grid md:grid-cols-2 gap-0 border-t border-[rgba(167,139,250,0.16)]">
          {CAPABILITIES.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className={`px-2 py-8 border-b border-[rgba(167,139,250,0.16)] ${i % 2 === 0 ? "md:border-r md:border-r-[rgba(167,139,250,0.16)] md:pr-10" : "md:pl-10"}`}
            >
              <p className="body-l leading-[1.55]">{c}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
