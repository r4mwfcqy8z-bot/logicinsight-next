"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

function BigTicker({ value, suffix, duration = 1700 }: { value: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration, bounce: 0 });

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on("change", (latest) => {
    if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
  }), [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* Minimal data-viz components, visual variation, not fake screenshots. */

function ThermalBars() {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="thermal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#FBBF24" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {Array.from({ length: 18 }).map((_, i) => {
        const h = 22 + Math.sin(i * 0.85) * 18 + Math.cos(i * 0.4) * 12 + Math.random() * 8;
        return (
          <motion.rect
            key={i}
            x={i * 13.5 + 2}
            y={100 - h}
            width="6"
            height={h}
            rx="2"
            fill="url(#thermal)"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
            style={{ transformOrigin: `${i * 13.5 + 5}px 100px` }}
          />
        );
      })}
      <line x1="0" y1="100" x2="240" y2="100" stroke="rgba(167,139,250,0.20)" strokeWidth="1" />
    </svg>
  );
}

function ProtectionRing() {
  const C = 50, R = 38;
  const len = 2 * Math.PI * R;
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
      <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(167,139,250,0.12)" strokeWidth="2.5" />
      <motion.circle
        cx={C} cy={C} r={R}
        fill="none"
        stroke="#A78BFA"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={len}
        initial={{ strokeDashoffset: len }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.8, ease: EASE }}
        transform={`rotate(-90 ${C} ${C})`}
      />
    </svg>
  );
}

function FlowLines() {
  const lines = Array.from({ length: 7 }).map((_, i) => ({
    y: 12 + i * 16,
    isViolet: i % 2 === 0,
    id: `flow-path-${i}`,
    delay: i * 0.5,
  }));
  return (
    <svg viewBox="0 0 400 120" className="w-full h-full" aria-hidden>
      {lines.map((l, i) => (
        <motion.path
          key={i}
          id={l.id}
          d={`M0,${l.y} Q120,${l.y - 12} 200,${l.y} T400,${l.y - 4}`}
          stroke={l.isViolet ? "rgba(167,139,250,0.45)" : "rgba(255,107,156,0.30)"}
          strokeWidth="1.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.6, delay: i * 0.08, ease: EASE }}
        />
      ))}
      {/* Traveling particles — always-on dots flowing along each path. */}
      {lines.map((l) => (
        <circle
          key={`p-${l.id}`}
          r="1.8"
          fill={l.isViolet ? "#A78BFA" : "#FF6B9C"}
          style={{ filter: `drop-shadow(0 0 6px ${l.isViolet ? "#A78BFA" : "#FF6B9C"})` }}
        >
          <animateMotion dur={`${5 + (l.y % 3)}s`} repeatCount="indefinite" begin={`${l.delay}s`}>
            <mpath href={`#${l.id}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  );
}

export function CoverageBento() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="editorial-shell">
        {/* Editorial header, left-aligned, no center pill. */}
        <div className="grid-edit mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="col-span-12 lg:col-span-8"
          >
            <h2 className="editorial-statement balance">
              Every layer of the stack,{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                in detail.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="col-span-12 lg:col-start-9 lg:col-span-4 self-end editorial-sub max-w-[40ch]"
          >
            Compute, storage, hardware, network, backup. Concentrated into one operator console.
          </motion.p>
        </div>

        {/* Asymmetric bento: 4 tiles, no glass-sameness. */}
        <div className="grid grid-cols-12 gap-5">
          {/* TILE 1, 818+ Cluster visibility (large left, type-led) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="col-span-12 lg:col-span-7"
          >
            <SpotlightCard glow="violet" className="relative h-full p-8 md:p-12 rounded-[28px] matte depth-2">
              <div className="flex items-center justify-between mb-8">
                <span className="kicker text-[var(--color-p-300)]">Cluster visibility</span>
              </div>
              <div
                className="numeral text-[var(--color-ink)]"
                style={{ fontSize: "clamp(5rem, 13vw, 13rem)", lineHeight: 0.82 }}
              >
                <BigTicker value={818} suffix="+" duration={1900} />
              </div>
              <p className="mt-8 md:mt-10 max-w-[42ch] body-l">
                Nutanix metrics, inventory fields, alerts, tasks, and protection signals,
                across Prism Central and Prism Element.
              </p>
              <div
                aria-hidden
                className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.18), transparent 65%)" }}
              />
            </SpotlightCard>
          </motion.div>

          {/* TILE 2, Hardware (right column, thermal viz) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="col-span-12 lg:col-span-5"
          >
            <SpotlightCard
              glow="amber"
              className="h-full p-8 md:p-10 rounded-[28px] matte depth-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40, 28, 14, 0.65) 0%, rgba(20, 16, 42, 0.85) 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-7">
                <span className="kicker" style={{ color: "#FBBF24" }}>Hardware</span>
              </div>
              <div className="editorial-lede text-[var(--color-ink)]">
                Redfish / IPMI
              </div>
              <p className="mt-4 body-m max-w-[34ch]">
                Power, thermal, firmware, and disk context, tied back to cluster events.
              </p>
              <div className="mt-8 h-20">
                <ThermalBars />
              </div>
              <div className="mt-5 flex items-center gap-5 font-mono text-[11px] tracking-[0.10em] text-[var(--color-ink-mute)]">
                <span>iDRAC</span>
                <span>iLO</span>
                <span>XClarity</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* TILE 3, Backups (left, ring viz + mini-stats) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
            className="col-span-12 lg:col-span-5"
          >
            <SpotlightCard glow="violet" className="h-full p-8 md:p-10 rounded-[28px] matte depth-2">
              <div className="flex items-center justify-between mb-7">
                <span className="kicker text-[var(--color-p-300)]">Backups</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] items-start gap-6">
                <div>
                  <div className="editorial-lede text-[var(--color-ink)]">
                    HYCU posture
                  </div>
                  <p className="mt-4 body-m max-w-[28ch]">
                    Protection compliance, targets, and job health, alongside the cluster they protect.
                  </p>
                </div>
                <div className="w-[88px] h-[88px] shrink-0 relative">
                  <ProtectionRing />
                  <div className="absolute inset-0 grid place-items-center font-mono text-[14px] font-semibold text-[var(--color-ink)]">
                    100%
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-0 border-t border-[rgba(167,139,250,0.15)] pt-5">
                {[
                  { n: "100%", l: "Success · 30d" },
                  { n: "14d",  l: "Lock window" },
                  { n: "✓",    l: "Restore test" },
                ].map((c, i) => (
                  <div key={c.l} className={i > 0 ? "border-l border-[rgba(167,139,250,0.15)] pl-4" : ""}>
                    <div className="font-mono text-[1.5rem] font-semibold tracking-tight text-[var(--color-p-100)]">{c.n}</div>
                    <div className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-ink-mute)] uppercase mt-1">{c.l}</div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* TILE 4, Network and flow (wide, numeral + flow viz, with "Optional output" badge) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
            className="col-span-12 lg:col-span-7"
          >
            <SpotlightCard glow="pink" className="h-full p-8 md:p-12 rounded-[28px] matte depth-2">
              <div className="flex items-center justify-between mb-8">
                <span className="kicker text-[var(--color-p-300)]">Network and flow</span>
                <span className="font-mono text-[10px] tracking-[0.18em] italic text-[#FBBF24] uppercase">
                  Optional output
                </span>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
                <div>
                  <div
                    className="numeral text-[var(--color-ink)]"
                    style={{ fontSize: "clamp(4rem, 8.5vw, 8rem)", lineHeight: 0.82 }}
                  >
                    <BigTicker value={210} suffix="+" duration={1700} />
                  </div>
                  <div className="mt-3 kicker">Vendor profiles</div>
                  <div className="font-mono text-[12px] text-[var(--color-ink-mute)] mt-1.5 tracking-[0.04em]">
                    plus IPFIX or NetFlow
                  </div>
                </div>
                <div className="hidden md:block h-32">
                  <FlowLines />
                </div>
              </div>

              <p className="mt-8 body-l max-w-[58ch]">
                Topology, interfaces, traps, config backup, and top talkers, kept next to cluster operations instead of stranded in a separate tool.
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
