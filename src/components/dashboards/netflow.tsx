"use client";

import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { AlertOctagon, Sparkles, RefreshCw, Search } from "lucide-react";

const KPIS = [
  { label: "Flows",          value: 689,    suffix: "",     fmt: "n", tone: "info"   },
  { label: "Bandwidth",      value: 1232,   suffix: " GB",  fmt: "decimal-10", tone: "violet" },
  { label: "Threats",        value: 14,     suffix: "",     fmt: "n", tone: "danger" },
  { label: "WAN endpoints",  value: 192,    suffix: "",     fmt: "n", tone: "info"   },
  { label: "Cloud egress",   value: 7,      suffix: "",     fmt: "n", tone: "warn"   },
];

/** Pin positions on a stylized world map (viewBox 800x420) */
const PINS = [
  { x: 220, y: 145, count: 23, region: "NYC",       tone: "danger" }, // East NA
  { x: 165, y: 160, count: 12, region: "Chicago",   tone: "danger" }, // Mid NA
  { x: 140, y: 175, count:  7, region: "Dallas",    tone: "warn"   },
  { x: 405, y: 145, count: 31, region: "London",    tone: "danger" }, // Europe
  { x: 430, y: 150, count: 18, region: "Frankfurt", tone: "danger" },
  { x: 462, y: 165, count:  6, region: "Madrid",    tone: "warn"   },
  { x: 580, y: 180, count: 14, region: "Mumbai",    tone: "danger" },
  { x: 640, y: 170, count:  9, region: "Singapore", tone: "warn"   },
  { x: 705, y: 195, count: 11, region: "Sydney",    tone: "warn"   },
  { x: 280, y: 290, count:  4, region: "São Paulo", tone: "warn"   },
  { x: 470, y: 285, count:  3, region: "Cape Town", tone: "warn"   },
];

const TONE = {
  danger:  { dot: "#FB7185", glow: "rgba(251,113,133,0.85)", text: "#FB7185", chip: "rgba(251,113,133,0.10)", border: "rgba(251,113,133,0.30)" },
  warn:    { dot: "#FBBF24", glow: "rgba(251,191,36,0.85)",  text: "#FBBF24", chip: "rgba(251,191,36,0.10)",  border: "rgba(251,191,36,0.30)" },
  ok:      { dot: "#34D399", glow: "rgba(52,211,153,0.85)",  text: "#34D399", chip: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.30)" },
  info:    { dot: "#A78BFA", glow: "rgba(167,139,250,0.85)", text: "#A78BFA", chip: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.30)" },
  violet:  { dot: "#C39BFF", glow: "rgba(195,155,255,0.85)", text: "#C39BFF", chip: "rgba(195,155,255,0.10)", border: "rgba(195,155,255,0.30)" },
};

function KpiTicker({ value, suffix, fmt }: { value: number; suffix: string; fmt: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on("change", (latest) => {
    if (!ref.current) return;
    const v = fmt === "decimal-10" ? (latest / 10).toFixed(1) : Math.round(latest).toLocaleString();
    ref.current.textContent = v + suffix;
  }), [spring, suffix, fmt]);

  return <span ref={ref} style={{ fontFeatureSettings: "'tnum'" }}>0{suffix}</span>;
}

/**
 * Stylized low-poly world silhouette + pulsing pins + arc flows.
 * Continents drawn as soft path approximations (not geographically exact).
 */
function WorldMap() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <svg ref={ref} viewBox="0 0 800 420" className="w-full h-auto">
      <defs>
        <linearGradient id="world-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1B1640" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#14102A" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="world-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="rgba(167,139,250,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <rect width="800" height="420" fill="url(#world-bg)" />

      {/* Subtle dot grid */}
      <g opacity="0.18">
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 24 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 34 + 8} cy={row * 34 + 18} r="0.8" fill="#A78BFA" />
          ))
        )}
      </g>

      {/* Continents, abstract low-poly silhouettes */}
      <g fill="url(#world-fill)" stroke="rgba(167,139,250,0.40)" strokeWidth="1.2" strokeLinejoin="round">
        {/* North America */}
        <path d="M85,95 L165,80 L215,100 L250,135 L255,175 L235,205 L195,210 L165,235 L130,220 L100,180 L80,140 Z" />
        {/* South America */}
        <path d="M225,235 L260,220 L290,250 L300,290 L285,330 L260,355 L240,340 L225,300 Z" />
        {/* Europe */}
        <path d="M395,90 L450,85 L475,110 L470,140 L445,165 L410,170 L395,145 L385,115 Z" />
        {/* Africa */}
        <path d="M420,175 L475,180 L495,220 L485,275 L460,310 L435,305 L420,265 L410,220 Z" />
        {/* Asia */}
        <path d="M495,80 L580,75 L650,90 L685,115 L710,145 L700,180 L665,210 L600,205 L555,180 L510,160 L495,125 Z" />
        {/* Australia */}
        <path d="M665,260 L715,255 L735,275 L730,310 L700,325 L675,315 L660,290 Z" />
      </g>

      {/* Flow arcs between pins (subtle, animated) */}
      <g fill="none" strokeWidth="1" stroke="rgba(167,139,250,0.40)">
        {[
          ["M220,145 Q310,80 405,145"],
          ["M220,145 Q320,250 580,180"],
          ["M405,145 Q500,100 640,170"],
          ["M165,160 Q300,220 280,290"],
          ["M462,165 Q540,140 580,180"],
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d[0]}
            strokeDasharray="3 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </g>

      {/* Pins */}
      {PINS.map((p, i) => {
        const t = TONE[p.tone as keyof typeof TONE];
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r="14" fill={t.chip} />
            <motion.circle
              cx={p.x} cy={p.y}
              r="6"
              fill="none"
              stroke={t.dot}
              strokeWidth="1.4"
              animate={inView ? { r: [6, 18], opacity: [0.8, 0] } : {}}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: i * 0.12 }}
            />
            <circle cx={p.x} cy={p.y} r="4" fill={t.dot} style={{ filter: `drop-shadow(0 0 6px ${t.glow})` }} />
            <text
              x={p.x} y={p.y - 14}
              textAnchor="middle"
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="9"
              letterSpacing="0.04em"
              fill="#FAF7FF"
              opacity="0.85"
            >
              {p.count}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

const TABS = ["Flows", "Intelligence", "WAN", "LAN", "Apps", "Compliance", "Threat Intel"];
const TIME_PILLS = ["1h", "8h", "Live", "24h", "7d"];

export function NetFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yShift = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const scale  = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.94, 1, 1, 0.96]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
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
            NetFlow WAN Explorer
          </span>
          <h2 className="display-2 mb-4">
            East-west traffic, top talkers, and threats,
            <br />
            <span className="serif-italic gradient-text">on one map.</span>
          </h2>
          <p className="text-lg text-[var(--color-ink-soft)]">
            IPFIX and NetFlow analysis with DNS, GeoIP, and ASN enrichment, anchored to the alert that triggered, not assembled later.
          </p>
        </motion.header>

        <motion.div
          style={{ y: yShift, scale }}
          className="relative rounded-2xl glass-strong overflow-hidden"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,107,156,0.18), transparent 60%)" }}
            aria-hidden
          />

          {/* Chrome */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-black/30">
            <span className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </span>
            <div className="ml-2 flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-xs font-mono text-[var(--color-ink-mute)]">
                <span>overwatch.local</span>
                <span className="text-[var(--color-ink-faint)]">/netflow/wan</span>
              </div>
            </div>
          </div>

          {/* Threat banner */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b border-white/5"
            style={{ background: "linear-gradient(90deg, rgba(251,113,133,0.18), rgba(251,113,133,0.04))" }}
          >
            <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.4, repeat: Infinity }} className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FB7185]/20">
              <AlertOctagon size={12} className="text-[#FB7185]" />
            </motion.span>
            <span className="mono-eyebrow text-[#FB7185]">Threat detected</span>
            <span className="text-sm text-[var(--color-ink)]">20 malicious IPs detected in network traffic</span>
            <div className="ml-auto flex gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-[var(--color-ink-soft)]">
                <Sparkles size={12} /> Ask AI
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md text-white" style={{ background: "linear-gradient(135deg, #FB7185, #FF6B9C)" }}>
                Investigate
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-[180px_1fr] min-h-[660px]">
            {/* Sidebar (compact) */}
            <aside className="border-r border-white/5 bg-black/20 px-3 py-4 text-xs text-[var(--color-ink-mute)]">
              <div className="px-2 mb-3 mono-eyebrow text-[var(--color-p-300)]" style={{ fontSize: 9 }}>OVERWATCH</div>
              <div className="px-2 mb-4 flex items-center gap-2 rounded-md bg-white/5 border border-white/8 py-1.5">
                <Search size={11} />
                <span>Search</span>
              </div>
              {[
                { l: "Command Center" }, { l: "Alerting" }, { l: "AI Assistant" },
                { l: "Monitor", group: true }, { l: "Home", indent: true }, { l: "Health", indent: true },
                { l: "Discovery", indent: true }, { l: "Topology", indent: true },
                { l: "Observability", group: true }, { l: "Connections", indent: true },
                { l: "Visualization", indent: true }, { l: "Dashboards", indent: true, active: true },
              ].map((item, i) => (
                <div key={i} className={`px-2 py-1 rounded-md mb-0.5 ${item.active ? "bg-[var(--color-p-500)]/15 text-[var(--color-p-200)]" : ""} ${item.indent ? "pl-5" : ""} ${item.group ? "mt-2 text-[var(--color-ink-faint)]" : ""}`}>
                  {item.l}
                </div>
              ))}
            </aside>

            {/* Main */}
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold tracking-tight">NetFlow Analytics</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-[var(--color-p-500)]/15 text-[var(--color-p-200)] border border-[var(--color-p-400)]/20">
                  9.6 GiB total
                </span>
                <button className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-[var(--color-ink-soft)]">
                  <RefreshCw size={11} /> Refresh
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {TABS.map((t, i) => (
                  <button
                    key={t}
                    className={`mono-eyebrow text-[10px] px-3 py-1.5 rounded-full transition-colors border ${
                      i === 2
                        ? "bg-[var(--color-p-500)]/15 text-[var(--color-p-200)] border-[var(--color-p-400)]/30"
                        : "bg-white/5 text-[var(--color-ink-mute)] border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* WAN Explorer label + time pills */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-[var(--color-ink)]">WAN Explorer</span>
                <div className="flex gap-1 ml-2 p-1 rounded-full bg-white/[0.04] border border-white/8">
                  {TIME_PILLS.map((p, i) => (
                    <button
                      key={p}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors ${
                        i === 2 ? "bg-[var(--color-emerald-400)]/15 text-[var(--color-emerald-400)]" : "text-[var(--color-ink-mute)] hover:text-white"
                      }`}
                    >
                      {p === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)] mr-1.5" style={{ boxShadow: "0 0 6px #34D399" }} />}
                      {p}
                    </button>
                  ))}
                </div>

                {["All Countries", "All Cloud", "All Direction"].map((f) => (
                  <span key={f} className="text-[10px] font-mono text-[var(--color-ink-mute)] px-2 py-1 rounded-md bg-white/[0.03] border border-white/8">{f} ▾</span>
                ))}
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-5 gap-2 mb-5">
                {KPIS.map((k, i) => {
                  const t = TONE[k.tone as keyof typeof TONE];
                  return (
                    <motion.div
                      key={k.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="px-3 py-2.5 rounded-lg border bg-white/[0.02]"
                      style={{ borderColor: t.border }}
                    >
                      <div className="mono-eyebrow text-[9px] text-[var(--color-ink-mute)]">{k.label}</div>
                      <div className="mt-1 text-xl font-bold tracking-tight" style={{ color: t.text, fontFeatureSettings: "'tnum'" }}>
                        <KpiTicker value={k.value} suffix={k.suffix} fmt={k.fmt} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* World map */}
              <div className="relative rounded-xl bg-white/[0.02] border border-white/5 p-4 overflow-hidden">
                <WorldMap />

                {/* Bottom-left analysis */}
                <div className="absolute left-4 bottom-4 right-4 flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg)]/70 border border-white/8 backdrop-blur-sm text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FB7185]" style={{ boxShadow: "0 0 8px #FB7185" }} />
                    <span className="text-[var(--color-ink)]"><strong>7 MITRE IPs</strong> flagged for known intelligence</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg)]/70 border border-white/8 backdrop-blur-sm text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FBBF24]" style={{ boxShadow: "0 0 8px #FBBF24" }} />
                    <span className="text-[var(--color-ink)]"><strong>122.3%</strong> LAN to WAN data, outside normal baseline</span>
                  </div>
                  <button className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md text-white" style={{ background: "linear-gradient(135deg, #7C3AED, #FF6B9C)" }}>
                    <Sparkles size={12} /> Ask AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
