"use client";

import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Boxes, Server, Network, ShieldCheck, HardDrive, type LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const R = 36; // orbit radius as % of the square

interface Domain {
  id: string;
  name: string;
  sources: string;
  insight: string;
  icon: LucideIcon;
  angle: number; // degrees; 0 = right, positive = clockwise (screen coords)
}

const CORE = {
  id: "core",
  name: "Nutanix core",
  sources: "Prism Element + Prism Central",
  insight:
    "818+ metrics, inventory, alerts, and tasks. The source of truth every other domain is correlated against.",
  icon: Boxes,
};

const DOMAINS: Domain[] = [
  {
    id: "hardware",
    name: "Hardware",
    sources: "Redfish · IPMI · sensors",
    insight:
      "A failing disk, PSU, or thermal event maps straight to the host it sits in and the workloads riding on it.",
    icon: Server,
    angle: -45,
  },
  {
    id: "network",
    name: "Network",
    sources: "SNMP · IPFIX · NetFlow",
    insight:
      "A top talker or a link flap is tied to the cluster traffic and the services it actually disrupts.",
    icon: Network,
    angle: 45,
  },
  {
    id: "backup",
    name: "Backup",
    sources: "HYCU · jobs · retention",
    insight:
      "Protection gaps and failed jobs sit next to the exact workloads they leave exposed.",
    icon: ShieldCheck,
    angle: 135,
  },
  {
    id: "storage",
    name: "Storage",
    sources: "Objects · Wasabi · S3",
    insight:
      "Tier pressure and capacity runway are read against the cluster they serve, before they bite.",
    icon: HardDrive,
    angle: 225,
  },
];

function pos(angle: number) {
  const a = (angle * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
}

function Node({
  active,
  onActivate,
  icon: Icon,
  label,
  style,
  isCore = false,
  reduce,
}: {
  active: boolean;
  onActivate: () => void;
  icon: LucideIcon;
  label: string;
  style: CSSProperties;
  isCore?: boolean;
  reduce: boolean | null;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={active}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-p-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      style={style}
    >
      <motion.span
        className={`grid place-items-center rounded-full border transition-colors duration-300 ${
          isCore ? "w-[68px] h-[68px]" : "w-12 h-12"
        }`}
        style={{
          borderColor: active ? "var(--color-p-300)" : "rgba(167,139,250,0.3)",
          color: active ? "var(--color-p-100)" : "var(--color-p-300)",
          background: active ? "rgba(167,139,250,0.18)" : "rgba(167,139,250,0.06)",
          boxShadow: active ? "0 0 30px rgba(139,92,246,0.5)" : "0 0 0 rgba(0,0,0,0)",
        }}
        animate={reduce || !isCore ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={isCore ? 26 : 18} strokeWidth={1.6} />
      </motion.span>
      <span
        className={`font-mono text-[10px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-300 ${
          active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-mute)]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export function ConstellationExplorer() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("core");
  const item = active === "core" ? CORE : DOMAINS.find((d) => d.id === active) ?? CORE;
  const ItemIcon = item.icon;

  return (
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
      {/* Graph */}
      <div className="relative mx-auto w-full max-w-[460px] aspect-square">
        <div
          aria-hidden
          className="absolute inset-[14%] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 68%)" }}
        />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(167,139,250,0.16)" strokeWidth="0.35" />
          {DOMAINS.map((d) => {
            const p = pos(d.angle);
            const on = active === d.id;
            return (
              <line
                key={d.id}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke={on ? "rgba(167,139,250,0.85)" : "rgba(167,139,250,0.22)"}
                strokeWidth={on ? 0.7 : 0.35}
                style={{ transition: "stroke 0.4s, stroke-width 0.4s" }}
              />
            );
          })}
        </svg>

        <Node
          isCore
          active={active === "core"}
          onActivate={() => setActive("core")}
          icon={CORE.icon}
          label="Nutanix"
          style={{ left: "50%", top: "50%" }}
          reduce={reduce}
        />
        {DOMAINS.map((d) => {
          const p = pos(d.angle);
          return (
            <Node
              key={d.id}
              active={active === d.id}
              onActivate={() => setActive(d.id)}
              icon={d.icon}
              label={d.name}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              reduce={reduce}
            />
          );
        })}
      </div>

      {/* Detail */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center gap-3.5 mb-5">
              <span className="grid place-items-center w-12 h-12 rounded-2xl border border-[var(--color-p-400)]/40 bg-[rgba(167,139,250,0.10)] text-[var(--color-p-200)]">
                <ItemIcon size={20} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="editorial-lede text-[var(--color-ink)] leading-none">{item.name}</h3>
                <div className="font-mono text-[11px] tracking-[0.08em] text-[var(--color-p-300)] mt-2">
                  {item.sources}
                </div>
              </div>
            </div>
            <p className="body-l max-w-[42ch]">{item.insight}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">
          Hover a node to explore the stack
        </div>
      </div>
    </div>
  );
}
