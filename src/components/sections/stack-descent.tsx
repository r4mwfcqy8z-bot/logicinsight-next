"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Boxes, Server, Network, ShieldCheck, Activity, type LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Layer {
  key: string;
  name: string;
  line: string;
  signals: string[];
  color: string;
  icon: LucideIcon;
}

// Counts and signals are verbatim from the verified site facts.
const LAYERS: Layer[] = [
  {
    key: "cluster",
    name: "Cluster",
    line: "818+ live metrics, read from Prism Central and Prism Element.",
    signals: ["VMs, hosts, containers, vDisks", "Alerts, tasks, protection state", "Many clusters, one console"],
    color: "#A78BFA",
    icon: Boxes,
  },
  {
    key: "hardware",
    name: "Hardware",
    line: "The metal under the cluster, straight from the controller.",
    signals: ["Power, thermal, firmware, disk", "Redfish and IPMI", "iDRAC, iLO, XClarity"],
    color: "#FBBF24",
    icon: Server,
  },
  {
    key: "network",
    name: "Network",
    line: "Every device on the wire, and the traffic between them.",
    signals: ["SNMP polling and traps", "IPFIX and NetFlow", "Topology and top talkers"],
    color: "#FF6B9C",
    icon: Network,
  },
  {
    key: "backup",
    name: "Backup",
    line: "Protection posture, sitting next to the cluster it guards.",
    signals: ["HYCU job health", "Targets and compliance", "Restore verification"],
    color: "#5EEAD4",
    icon: ShieldCheck,
  },
  {
    key: "analysis",
    name: "Analysis",
    line: "Baselines, anomalies, and forecasts, across every layer at once.",
    signals: ["7x24 seasonal baselines", "Cross-layer correlation", "Health scores and forecasts"],
    color: "#C39BFF",
    icon: Activity,
  },
];

function RingMotif({ color, reduce }: { color: string; reduce: boolean }) {
  return (
    <div className="relative aspect-square w-full max-w-[420px] mx-auto">
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <circle cx="100" cy="100" r="92" fill="none" stroke={color} strokeOpacity="0.16" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="68" fill="none" stroke={color} strokeOpacity="0.26" strokeWidth="0.6" strokeDasharray="2 7" />
          <circle cx="100" cy="100" r="44" fill="none" stroke={color} strokeOpacity="0.4" strokeWidth="0.7" />
          <circle cx="100" cy="8" r="2.4" fill={color} />
          <circle cx="168" cy="100" r="1.6" fill={color} fillOpacity="0.7" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 grid place-items-center" aria-hidden>
        <div className="w-28 h-28 rounded-full blur-2xl" style={{ background: `radial-gradient(circle, ${color}55, transparent 70%)` }} />
      </div>
      <div className="absolute inset-0 grid place-items-center" aria-hidden>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 28px 4px ${color}` }} />
      </div>
    </div>
  );
}

/**
 * The luminous "stack core" for the intro: all five layer rings as one breathing,
 * slowly-rotating halo. Center stays open and dark so the headline reads inside it.
 */
function StackCore({ reduce }: { reduce: boolean }) {
  const colors = LAYERS.map((l) => l.color);
  return (
    <div className="relative aspect-square w-[min(92vw,760px)]">
      <motion.div
        className="absolute inset-[26%] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.35), transparent 70%)" }}
        animate={reduce ? {} : { scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {colors.map((c, i) => {
            const r = 60 + i * 9;
            return (
              <circle
                key={c}
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke={c}
                strokeOpacity={0.2 - i * 0.022}
                strokeWidth="0.5"
                strokeDasharray={i % 2 ? "1.5 8" : undefined}
              />
            );
          })}
        </svg>
      </motion.div>
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <circle cx="100" cy="100" r="52" fill="none" stroke="#D7C2FF" strokeOpacity="0.12" strokeWidth="0.4" />
        </svg>
      </motion.div>
    </div>
  );
}

function Scene({ layer, reduce }: { layer: Layer; reduce: boolean }) {
  const Icon = layer.icon;
  return (
    <div className="min-h-[100dvh] flex items-center py-24">
      <div className="editorial-shell w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border mb-8"
              style={{ borderColor: `${layer.color}55`, color: layer.color, background: `${layer.color}14` }}
            >
              <Icon size={22} strokeWidth={1.6} />
            </span>
            <h3 className="editorial-display balance" style={{ color: "var(--color-ink)" }}>
              {layer.name}
            </h3>
            <p className="mt-6 editorial-sub max-w-[40ch]">{layer.line}</p>
            <ul className="mt-10 grid gap-0 max-w-[44ch] border-t" style={{ borderColor: `${layer.color}26` }}>
              {layer.signals.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE }}
                  className="flex items-center gap-4 py-4 border-b text-[1.0625rem] text-[var(--color-ink-soft)]"
                  style={{ borderColor: `${layer.color}1f` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: layer.color }} />
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EASE }}
            className="order-first lg:order-last"
          >
            <RingMotif color={layer.color} reduce={reduce} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function StackDescent() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Dynamic lighting: a single glow whose hue walks across the layer accents as you descend.
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    LAYERS.map((l) => l.color)
  );
  const glowLeft = useTransform(scrollYProgress, [0, 1], ["34%", "66%"]);
  const glowBg = useTransform(glowColor, (c) => `radial-gradient(circle, ${c}2e, transparent 60%)`);

  return (
    <section ref={ref} className="relative">
      {/* Sticky dynamic-lighting backdrop. Pins behind the scenes, zero layout height. */}
      {!reduce && (
        <div className="sticky top-0 h-0 z-0">
          <div className="relative h-[100dvh] overflow-hidden pointer-events-none" aria-hidden>
            <motion.div
              className="absolute w-[78vmax] h-[78vmax] rounded-full blur-[130px] will-change-transform"
              style={{ left: glowLeft, top: "50%", x: "-50%", y: "-50%", background: glowBg }}
            />
          </div>
        </div>
      )}

      {/* Intro: a calm luminous field; one bold statement centered cleanly within it. */}
      <div className="relative z-10 min-h-[100dvh] grid place-items-center overflow-hidden">
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <StackCore reduce={reduce} />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(closest-side at 50% 50%, rgba(8,6,14,0.92), rgba(8,6,14,0.45) 52%, transparent 80%)" }}
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="editorial-statement balance mx-auto max-w-[15ch]">
            Descend the{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
              whole stack.
            </span>
          </h2>
          <p className="mt-6 editorial-sub mx-auto max-w-[46ch]">
            Converged infrastructure fails together. Overwatch watches it together, one layer at a time, in a single view.
          </p>
        </motion.div>
      </div>

      {/* Layer scenes */}
      <div className="relative z-10">
        {LAYERS.map((l) => (
          <Scene key={l.key} layer={l} reduce={reduce} />
        ))}
      </div>
    </section>
  );
}
