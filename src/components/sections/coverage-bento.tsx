"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

function BigTicker({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1700, bounce: 0 });

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on("change", (latest) => {
    if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
  }), [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function BentoCard({
  children, className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-3xl glass p-8 md:p-10 transition-all ${className}`}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(167,139,250,0.18), transparent 50%)",
        }}
      />
      {children}
    </motion.div>
  );
}

function BorderBeam() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-3xl"
      style={{
        padding: "1.6px",
        background: "conic-gradient(from 0deg, transparent 0deg, #A78BFA 60deg, #FF6B9C 90deg, transparent 150deg, transparent 360deg)",
        WebkitMask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)",
        mask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: "beam-spin 6s linear infinite",
      }}
    />
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block mono-eyebrow text-[var(--color-p-300)] px-2.5 py-1 rounded-full bg-[var(--color-p-500)]/10 border border-[var(--color-p-400)]/20">
      {children}
    </span>
  );
}

export function CoverageBento() {
  return (
    <section className="relative py-24 md:py-32">
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
            Coverage Snapshot
          </span>
          <h2 className="display-2 mb-4">
            Every layer of the stack,{" "}
            <span className="serif-italic gradient-text">in detail.</span>
          </h2>
          <p className="text-lg text-[var(--color-ink-soft)]">
            Compute, storage, hardware, network, backup — concentrated into one operator console.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* BIG TOP — 818+ Cluster visibility */}
          <BentoCard className="md:col-span-12 lg:col-span-7 lg:row-span-2">
            <BorderBeam />
            <Tag>Cluster visibility</Tag>
            <div className="mt-6 md:mt-10 flex items-baseline gap-4">
              <span
                className="serif-italic gradient-text"
                style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.85, fontFeatureSettings: "'tnum'" }}
              >
                <BigTicker value={818} suffix="+" />
              </span>
            </div>
            <p className="mt-6 md:mt-8 max-w-[520px] text-[var(--color-ink-soft)] text-base md:text-lg leading-relaxed">
              Nutanix metrics, inventory fields, alerts, tasks, and protection signals — across Prism Central and Prism Element.
            </p>
            <style>{`@keyframes beam-spin { to { transform: rotate(360deg); } }`}</style>
          </BentoCard>

          {/* HARDWARE */}
          <BentoCard className="md:col-span-6 lg:col-span-5">
            <Tag>Hardware</Tag>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl md:text-4xl font-bold tracking-tight">Redfish / IPMI</span>
            </div>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Power, thermal, firmware, and disk context — tied back to cluster events.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[var(--color-ink-mute)] font-mono">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)]" style={{ boxShadow: "0 0 8px #34D399" }}/>iDRAC</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)]" style={{ boxShadow: "0 0 8px #34D399" }}/>iLO</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber-400)]" style={{ boxShadow: "0 0 8px #FBBF24" }}/>XClarity</span>
            </div>
          </BentoCard>

          {/* BACKUPS */}
          <BentoCard className="md:col-span-6 lg:col-span-5">
            <Tag>Backups</Tag>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl md:text-4xl font-bold tracking-tight">HYCU posture</span>
            </div>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Protection compliance, targets, and job health — alongside the cluster they protect.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[{ n: "100%", l: "Success · 30d" }, { n: "14d", l: "Lock window" }, { n: "✓", l: "Restore test" }].map((c) => (
                <div key={c.l} className="px-2 py-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[var(--color-p-200)] font-bold text-lg tracking-tight" style={{ fontFeatureSettings: "'tnum'" }}>{c.n}</div>
                  <div className="mono-eyebrow text-[10px] text-[var(--color-ink-mute)] mt-1">{c.l}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* WIDE BOTTOM — 210+ Network and Flow */}
          <BentoCard className="md:col-span-12">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <Tag>Network and flow</Tag>
              <span className="inline-flex items-center gap-1.5 mono-eyebrow text-[var(--color-amber-400)] px-2.5 py-1 rounded-full bg-[var(--color-amber-400)]/10 border border-[var(--color-amber-400)]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber-400)]" style={{ boxShadow: "0 0 8px #FBBF24" }}/>
                Optional output
              </span>
            </div>

            <div className="mt-6 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
              <div>
                <div
                  className="serif-italic gradient-text"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.85, fontFeatureSettings: "'tnum'" }}
                >
                  <BigTicker value={210} suffix="+" />
                </div>
                <div className="mono-eyebrow text-[var(--color-ink-mute)] mt-2">Vendor profiles</div>
                <div className="text-[var(--color-ink-soft)] mt-1">plus IPFIX or NetFlow</div>
              </div>

              <p className="max-w-[680px] text-[var(--color-ink-soft)] text-base md:text-lg leading-relaxed">
                Topology, interfaces, traps, config backup, and top talkers — kept next to cluster operations instead of stranded in a separate tool.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
