"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import { Search, RefreshCw, Sparkles, AlertOctagon, ChevronRight } from "lucide-react";

const KPIS = [
  { label: "Health Score",   value: "50", suffix: "%", tone: "danger",  icon: "shield" },
  { label: "Infrastructure", value: "48", suffix: "",  tone: "warn",    icon: "layers" },
  { label: "Active Alerts",  value: "48", suffix: "",  tone: "danger",  icon: "bell" },
  { label: "Threats",        value: "0",  suffix: "",  tone: "ok",      icon: "shield-check" },
  { label: "SNMP Devices",   value: "6",  suffix: "",  tone: "info",    icon: "network" },
  { label: "Down",           value: "24", suffix: "",  tone: "danger",  icon: "wifi-off" },
  { label: "Queue",          value: "0",  suffix: "",  tone: "ok",      icon: "list", sub: "All clear" },
  { label: "Compliance",     value: "0",  suffix: "%", tone: "danger",  icon: "check-circle", sub: "0 / 45 passed" },
] as const;

const PLATFORM_STATUS = [
  { name: "Prism Element",   count:  9, ops:  6, tone: "danger" },
  { name: "Prism Central",   count:  6, ops:  4, tone: "danger" },
  { name: "SNMP",            count:  6, ops:  6, tone: "ok"     },
  { name: "HYCU",            count:  2, ops:  2, tone: "ok"     },
  { name: "Redfish / IPMI",  count: 23, ops:  4, tone: "danger" },
  { name: "Objects",         count:  1, ops:  1, tone: "ok"     },
  { name: "Wasabi",          count:  1, ops:  1, tone: "ok"     },
] as const;

const ALERTS = [
  { severity: "CRITICAL", monitor: "Unprotected VMs",        entity: "cluster-VTS1",         source: "cluster", value: "36.0 VMs", age: "19h 30m" },
  { severity: "CRITICAL", monitor: "Unprotected VMs",        entity: "cluster-VTS-TPA1-COLO", source: "cluster", value: "27.0 VMs", age: "19h 30m" },
  { severity: "CRITICAL", monitor: "Unprotected VMs",        entity: "cluster-VTS-ATL1-PRD",  source: "cluster", value: "64.0 VMs", age: "19h 30m" },
  { severity: "CRITICAL", monitor: "Nutanix Critical Alerts", entity: "cluster-VTS-ATL1-PRD",  source: "cluster", value: "2.0 alerts", age: "19h 30m" },
] as const;

const TONE = {
  danger: { dot: "#FB7185", chip: "rgba(251,113,133,0.10)", text: "#FB7185", border: "rgba(251,113,133,0.30)" },
  warn:   { dot: "#FBBF24", chip: "rgba(251,191,36,0.10)",  text: "#FBBF24", border: "rgba(251,191,36,0.30)" },
  ok:     { dot: "#34D399", chip: "rgba(52,211,153,0.10)",  text: "#34D399", border: "rgba(52,211,153,0.30)" },
  info:   { dot: "#A78BFA", chip: "rgba(167,139,250,0.10)", text: "#A78BFA", border: "rgba(167,139,250,0.30)" },
};

function CountUp({ value, suffix = "", duration = 1500 }: { value: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const num = parseInt(value, 10);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration, bounce: 0 });

  useEffect(() => { if (inView) mv.set(num); }, [inView, mv, num]);
  useEffect(() => spring.on("change", (latest) => {
    if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
  }), [spring, suffix]);

  return <span ref={ref} style={{ fontFeatureSettings: "'tnum'" }}>0{suffix}</span>;
}

function RadarChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const axes = ["Infrastructure", "Performance", "Compliance", "Availability", "Security", "Network"];
  const values = [0.55, 0.72, 0.30, 0.88, 0.78, 0.42];
  const center = { x: 200, y: 180 };
  const radius = 110;

  const point = (i: number, v: number) => {
    const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return { x: center.x + Math.cos(a) * radius * v, y: center.y + Math.sin(a) * radius * v };
  };
  const labelPoint = (i: number) => {
    const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return { x: center.x + Math.cos(a) * (radius + 28), y: center.y + Math.sin(a) * (radius + 28) };
  };

  const polyPath = values.map((v, i) => {
    const p = point(i, v);
    return `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`;
  }).join(" ") + " Z";

  return (
    <svg ref={ref} viewBox="0 0 400 360" className="w-full h-auto">
      <defs>
        <linearGradient id="radar-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB7185" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Concentric rings */}
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <polygon
          key={r}
          points={Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
            return `${center.x + Math.cos(a) * radius * r},${center.y + Math.sin(a) * radius * r}`;
          }).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}
      {/* Axes */}
      {axes.map((_, i) => {
        const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={center.x} y1={center.y}
            x2={center.x + Math.cos(a) * radius}
            y2={center.y + Math.sin(a) * radius}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        );
      })}
      {/* Data polygon */}
      <motion.path
        d={polyPath}
        fill="url(#radar-fill)"
        stroke="#FB7185"
        strokeWidth="1.4"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.1, opacity: inView ? 1 : 0 }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Vertex dots */}
      {values.map((v, i) => {
        const p = point(i, v);
        return (
          <motion.circle
            key={i}
            cx={p.x} cy={p.y}
            r="3.5"
            fill="#FB7185"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
          />
        );
      })}
      {/* Axis labels */}
      {axes.map((label, i) => {
        const p = labelPoint(i);
        return (
          <text
            key={label}
            x={p.x} y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="0.04em"
            fill="#837AA0"
          >
            {label.toUpperCase()}
          </text>
        );
      })}
    </svg>
  );
}

export function CommandCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yShift = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const scale  = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.94, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6]);

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
            Overwatch Command Center
          </span>
          <h2 className="display-2 mb-4">
            A control surface that{" "}
            <span className="serif-italic gradient-text">explains itself</span>
            <br />
            at 3 a.m.
          </h2>
          <p className="text-lg text-[var(--color-ink-soft)]">
            Real-time environment intelligence. Eight KPIs at a glance, a health radar that learns each cluster, alerts that surface evidence.
          </p>
        </motion.header>

        {/* Browser-chrome dashboard */}
        <motion.div
          style={{ y: yShift, scale, opacity }}
          className="relative rounded-2xl glass-strong overflow-hidden"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25), transparent 60%)" }}
            aria-hidden
          />

          {/* Chrome bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-black/30">
            <span className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </span>
            <div className="ml-2 flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-xs font-mono text-[var(--color-ink-mute)]">
                <span>overwatch.local</span>
                <span className="text-[var(--color-ink-faint)]">/command-center</span>
              </div>
            </div>
          </div>

          {/* Threat banner */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b border-white/5 relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, rgba(251,113,133,0.18), rgba(251,113,133,0.04))",
            }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FB7185]/20"
            >
              <AlertOctagon size={12} className="text-[#FB7185]" />
            </motion.span>
            <span className="mono-eyebrow text-[#FB7185]">Threat detected</span>
            <span className="text-sm text-[var(--color-ink)]">20 malicious IPs detected in network traffic</span>
            <span className="text-xs font-mono text-[var(--color-ink-mute)] ml-1">20 IPs ▾</span>
            <div className="ml-auto flex gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-[var(--color-ink-soft)] hover:bg-white/10 transition-colors">
                <Sparkles size={12} /> Ask AI
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md text-white" style={{ background: "linear-gradient(135deg, #FB7185, #FF6B9C)" }}>
                Investigate
              </button>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-[180px_1fr] min-h-[640px]">
            {/* Sidebar */}
            <aside className="border-r border-white/5 bg-black/20 px-3 py-4 text-xs text-[var(--color-ink-mute)]">
              <div className="px-2 mb-3 mono-eyebrow text-[var(--color-p-300)]" style={{ fontSize: 9 }}>OVERWATCH</div>
              <div className="px-2 mb-4 flex items-center gap-2 rounded-md bg-white/5 border border-white/8 py-1.5">
                <Search size={11} />
                <span>Search</span>
              </div>
              {[
                { l: "Command Center", active: true },
                { l: "Alerting" },
                { l: "AI Assistant" },
                { l: "Monitor",   group: true },
                { l: "Home", indent: true },
                { l: "Health", indent: true },
                { l: "Discovery", indent: true },
                { l: "Topology", indent: true },
                { l: "Config Backup", indent: true },
                { l: "Observability", group: true },
                { l: "Connections", indent: true },
                { l: "Visualization", indent: true },
                { l: "Datasources", indent: true },
                { l: "Plugins", indent: true },
                { l: "Metrics", indent: true },
                { l: "Dashboards", indent: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`px-2 py-1 rounded-md mb-0.5 truncate ${
                    item.active ? "bg-[var(--color-p-500)]/15 text-[var(--color-p-200)]" : ""
                  } ${item.indent ? "pl-5" : ""} ${item.group ? "mt-2 text-[var(--color-ink-faint)]" : ""}`}
                >
                  {item.l}
                </div>
              ))}
              <div className="mt-4 px-2 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FF6B9C]" />
                <span>admin</span>
              </div>
            </aside>

            {/* Main */}
            <div className="p-5">
              {/* Header row */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Command Center</h3>
                  <p className="text-xs text-[var(--color-ink-mute)] mt-0.5">Real-time environment intelligence</p>
                </div>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-[var(--color-ink-soft)] hover:bg-white/10 transition-colors">
                  <RefreshCw size={11} /> Refresh
                </button>
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mb-5">
                {KPIS.map((k, i) => {
                  const t = TONE[k.tone];
                  return (
                    <motion.div
                      key={k.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="px-2 py-2.5 rounded-lg border bg-white/[0.02]"
                      style={{ borderColor: t.border }}
                    >
                      <div className="mono-eyebrow text-[9px] text-[var(--color-ink-mute)]">{k.label}</div>
                      <div className="mt-1 text-xl font-bold tracking-tight" style={{ color: t.text }}>
                        <CountUp value={k.value} suffix={k.suffix} />
                      </div>
                      {"sub" in k && k.sub && (
                        <div className="text-[10px] text-[var(--color-ink-mute)] mt-0.5 font-mono">{k.sub}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Radar + platform status */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-3 mb-5">
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">Environment Health Radar</span>
                    <span className="mono-eyebrow text-[9px] text-[var(--color-ink-mute)]">Last 24h</span>
                  </div>
                  <RadarChart />
                </div>

                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Platform Status</span>
                    <span className="mono-eyebrow text-[9px] text-[var(--color-ink-mute)]">{PLATFORM_STATUS.length}</span>
                  </div>
                  <div className="grid gap-1.5">
                    {PLATFORM_STATUS.map((p, i) => {
                      const t = TONE[p.tone];
                      const pct = (p.ops / p.count);
                      return (
                        <motion.div
                          key={p.name}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                          className="flex items-center justify-between px-3 py-2 rounded-md bg-white/[0.02] border border-white/5"
                        >
                          <span className="flex items-center gap-2 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}` }} />
                            <span className="text-[var(--color-ink)]">{p.name}</span>
                            <span className="text-[10px] font-mono text-[var(--color-ink-mute)]">{p.count}</span>
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-ink-mute)]">
                            <span style={{ color: t.text }}>{p.ops}/{p.count} operational</span>
                            <ChevronRight size={10} />
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold">Active Alerts</span>
                  <span className="mono-eyebrow text-[9px] text-[var(--color-ink-mute)] px-1.5 py-0.5 rounded bg-white/5">146</span>
                </div>
                <div className="grid gap-1">
                  <div className="grid grid-cols-[100px_1fr_90px_90px_70px_70px] gap-2 px-2 mono-eyebrow text-[9px] text-[var(--color-ink-mute)]">
                    <span>Severity</span>
                    <span>Monitor / Entity</span>
                    <span>Source</span>
                    <span>Value</span>
                    <span>Age</span>
                    <span>Status</span>
                  </div>
                  {ALERTS.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                      className="grid grid-cols-[100px_1fr_90px_90px_70px_70px] gap-2 items-center px-2 py-2 rounded-md bg-white/[0.02] border border-white/5 text-xs"
                    >
                      <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded font-semibold text-[10px]" style={{ background: "rgba(251,113,133,0.12)", color: "#FB7185" }}>
                        ● {a.severity}
                      </span>
                      <span className="truncate">
                        <span className="text-[var(--color-ink)]">{a.monitor}</span>{" "}
                        <span className="text-[var(--color-ink-mute)] font-mono">{a.entity}</span>
                      </span>
                      <span className="text-[var(--color-ink-mute)] font-mono text-[10px]">{a.source}</span>
                      <span className="text-[var(--color-ink-soft)] font-mono text-[10px]">{a.value}</span>
                      <span className="text-[var(--color-ink-mute)] font-mono text-[10px]">{a.age}</span>
                      <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold" style={{ background: "rgba(251,113,133,0.10)", color: "#FB7185" }}>
                        FIRING
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
