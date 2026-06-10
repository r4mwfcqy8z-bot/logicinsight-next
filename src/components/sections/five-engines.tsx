"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Antenna, Sparkles, Activity, Database, Send } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE = [0.22, 1, 0.36, 1] as const;

const ENGINES = [
  {
    n: "01",
    name: "Collection engines",
    icon: Antenna,
    summary:
      "Prism, Redfish, SNMP, HYCU, and flow telemetry are gathered through purpose-built collectors inside one appliance.",
    items: ["Prism Central + Element", "Redfish · IPMI", "SNMP devices", "IPFIX · NetFlow", "HYCU backups"],
    visual: "inflow" as const,
  },
  {
    n: "02",
    name: "Correlation engine",
    icon: Sparkles,
    summary:
      "Signals are enriched with cluster, host, VM, hardware, backup, and network context so incidents stop looking isolated.",
    items: ["Metadata enrichment", "Cross-layer correlation", "Noise reduction", "Topology mapping"],
    visual: "nodes" as const,
  },
  {
    n: "03",
    name: "ML engine",
    icon: Activity,
    summary:
      "Seasonal baselines and anomaly detection replace static threshold sprawl with behavior-aware signal reduction.",
    items: ["Seasonal 7×24 baselines", "Anomaly detection", "Capacity forecasting", "Health scoring"],
    visual: "waveform" as const,
  },
  {
    n: "04",
    name: "Reporting engine",
    icon: Database,
    summary:
      "Executive and operator reporting comes out of the same system instead of a separate BI or spreadsheet process.",
    items: ["50+ dashboards", "9 report types", "Scheduled HTML reports", "Open REST API"],
    visual: "bars" as const,
  },
  {
    n: "05",
    name: "Forwarding engine",
    icon: Send,
    summary:
      "Datadog and Grafana exports stay optional and filtered so teams control what leaves the appliance.",
    items: ["Datadog · Grafana", "Email · syslog", "Slack · webhook · SNMP trap", "Filtered per-stream"],
    visual: "outflow" as const,
  },
];

/* ===== Generative visual signatures ===== */

function VisualInflow() {
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 30 + i * 32;
        return (
          <motion.path
            key={i}
            d={`M0,${y} Q90,${y - 8} 175,110`}
            stroke="#A78BFA"
            strokeOpacity={0.35 + i * 0.08}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.08, ease: EASE }}
          />
        );
      })}
      <circle cx="175" cy="110" r="42" fill="rgba(167,139,250,0.10)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
      <circle cx="175" cy="110" r="14" fill="#A78BFA" />
      <motion.circle
        cx="175" cy="110" r="20"
        fill="none" stroke="#A78BFA" strokeWidth="1"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: "175px 110px" }}
      />
    </svg>
  );
}

function VisualNodes() {
  const nodes = [
    [40, 50], [180, 35], [110, 110], [55, 170], [175, 175], [30, 110],
  ];
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
      {nodes.flatMap((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
            stroke="#A78BFA"
            strokeOpacity={0.18}
            strokeWidth="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: (i + j) * 0.04, ease: EASE }}
          />
        ))
      )}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="5"
          fill="#A78BFA"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: EASE }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
    </svg>
  );
}

function VisualWaveform() {
  const path = "M0,110 Q22,75 44,110 T88,110 T132,110 T176,110 T220,110";
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
      <line x1="0" y1="110" x2="220" y2="110" stroke="rgba(167,139,250,0.18)" strokeDasharray="3 4" />
      <motion.path
        d={path}
        stroke="#A78BFA"
        strokeWidth="1.6"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <motion.circle
        cx="132" cy="110" r="6" fill="#FF6B9C"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
        style={{ filter: "drop-shadow(0 0 12px #FF6B9C)" }}
      />
    </svg>
  );
}

function VisualBars() {
  const heights = [60, 95, 45, 110, 75, 130, 90, 50];
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
      <line x1="0" y1="180" x2="220" y2="180" stroke="rgba(167,139,250,0.18)" />
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={20 + i * 24}
          y={180 - h}
          width="14"
          height={h}
          rx="2"
          fill="#A78BFA"
          fillOpacity={0.35 + (i / heights.length) * 0.5}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
          style={{ transformOrigin: `${20 + i * 24 + 7}px 180px` }}
        />
      ))}
    </svg>
  );
}

function VisualOutflow() {
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
      <circle cx="45" cy="110" r="42" fill="rgba(167,139,250,0.10)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
      <circle cx="45" cy="110" r="14" fill="#A78BFA" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 30 + i * 32;
        return (
          <motion.path
            key={i}
            d={`M45,110 Q140,${y - 8} 220,${y}`}
            stroke="#FF6B9C"
            strokeOpacity={0.35 + i * 0.08}
            strokeWidth="1"
            fill="none"
            strokeDasharray={i % 2 === 0 ? "" : "4 4"}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.1, ease: EASE }}
          />
        );
      })}
    </svg>
  );
}

function Visual({ type }: { type: typeof ENGINES[number]["visual"] }) {
  switch (type) {
    case "inflow":    return <VisualInflow />;
    case "nodes":     return <VisualNodes />;
    case "waveform":  return <VisualWaveform />;
    case "bars":      return <VisualBars />;
    case "outflow":   return <VisualOutflow />;
  }
}

/* ===== Engine stage, one pinned card. ===== */

function EngineStage({ engine, total }: { engine: typeof ENGINES[number]; total: number }) {
  const Icon = engine.icon;
  return (
    <div className="stack-card min-h-[100dvh] flex items-center justify-center sticky top-0 bg-[var(--color-bg)]">
      <div className="editorial-shell w-full">
        <div className="grid-edit items-center min-h-[80vh]">
          {/* Left, huge numeral. */}
          <div className="col-span-12 lg:col-span-4 relative">
            <div
              className="numeral italic font-bold leading-none"
              style={{
                fontSize: "clamp(8rem, 22vw, 24rem)",
                color: "var(--color-p-500)",
                letterSpacing: "-0.07em",
              }}
            >
              {engine.n}
            </div>
          </div>

          {/* Center, engine content. */}
          <div className="col-span-12 lg:col-span-5 lg:pl-[2vw]">
            <div className="mb-7 text-[var(--color-p-300)]">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="editorial-statement balance mb-7">
              {engine.name}
            </h3>
            <p className="editorial-sub max-w-[44ch] mb-10">
              {engine.summary}
            </p>
            <ul className="grid gap-0 border-t border-[rgba(167,139,250,0.14)]">
              {engine.items.map((it) => (
                <li
                  key={it}
                  className="py-3.5 border-b border-[rgba(167,139,250,0.14)]"
                >
                  <span className="text-[1.0625rem] text-[var(--color-ink)] tracking-[-0.005em]">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right, generative visual signature. */}
          <div className="hidden lg:flex col-start-10 col-span-3 self-center items-center justify-center">
            <div className="aspect-square w-full max-w-[280px] relative">
              <Visual type={engine.visual} />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 65%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StageRail({ activeIndex, total, progress }: { activeIndex: number; total: number; progress: import("motion/react").MotionValue<number> }) {
  const fillHeight = useTransform(progress, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);
  return (
    <div className="hidden lg:flex pointer-events-none fixed left-7 top-1/2 -translate-y-1/2 z-[40] flex-col items-center gap-5">
      <div className="relative w-px h-[60vh] bg-[rgba(167,139,250,0.16)]">
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-0 left-0 w-px bg-gradient-to-b from-[var(--color-p-300)] to-[var(--color-pink-400)]"
        />
        {Array.from({ length: total }).map((_, i) => {
          const y = (i / (total - 1)) * 100;
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          return (
            <motion.span
              key={i}
              className="absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{ top: `${y}%`, translateY: "-50%" }}
              animate={{
                width: isActive ? 14 : 6,
                height: isActive ? 14 : 6,
                backgroundColor: isActive
                  ? "rgba(167,139,250,1)"
                  : isPast
                  ? "rgba(167,139,250,0.85)"
                  : "rgba(167,139,250,0.30)",
                boxShadow: isActive
                  ? "0 0 24px rgba(167,139,250,0.75)"
                  : "none",
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-7 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-p-300)] whitespace-nowrap"
                >
                  Stage {String(i + 1).padStart(2, "0")}
                </motion.span>
              )}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

export function FiveEngines() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [inView, setInView] = useState(false);

  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  // Track which stage is closest to center of viewport for the StageRail
  useEffect(() => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll(".stack-card");
    const io = new IntersectionObserver(
      (entries) => {
        let bestIdx = 0;
        let bestRatio = 0;
        entries.forEach((e) => {
          const idx = Array.from(cards).indexOf(e.target as HTMLElement);
          if (e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            bestIdx = idx;
          }
        });
        if (bestRatio > 0) setActiveStage(bestIdx);
      },
      { threshold: [0.3, 0.6, 0.9] }
    );
    cards.forEach((c) => io.observe(c));

    // Track if the whole section is in viewport for the rail visibility
    const sectionIo = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.1 }
    );
    if (wrapRef.current) sectionIo.observe(wrapRef.current);

    return () => {
      io.disconnect();
      sectionIo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduce || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.45,
          filter: "blur(3px)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="relative py-28 md:py-40">
      {/* Clean centered header: headline + body stacked, no eyebrow, no floating corner. */}
      <div className="editorial-shell mb-14 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="editorial-statement balance mx-auto max-w-[18ch]">
            Five engines.{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              One console.
            </span>
          </h2>
          <p className="mt-7 editorial-sub mx-auto max-w-[54ch]">
            A local operations stack that collects, enriches, analyzes, stores, and publishes infrastructure signals from one place.
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll-stack of 5 engine stages. */}
      <div ref={wrapRef} className="relative">
        {inView && !reduce && <StageRail activeIndex={activeStage} total={ENGINES.length} progress={scrollYProgress} />}
        <div ref={stackRef}>
          {ENGINES.map((e) => (
            <EngineStage key={e.n} engine={e} total={ENGINES.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
