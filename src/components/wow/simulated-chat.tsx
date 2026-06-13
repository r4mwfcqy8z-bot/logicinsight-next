"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Sparkles, BarChart3, AlertCircle, FileText, Boxes, Activity } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TOOLS = [
  { name: "metrics",    icon: BarChart3 },
  { name: "alerts",     icon: AlertCircle },
  { name: "logs",       icon: FileText },
  { name: "inventory",  icon: Boxes },
  { name: "dashboards", icon: Activity },
];

interface Turn {
  question: string;
  toolsHit: string[];
  answer: string;
}

const TURNS: Turn[] = [
  {
    question: "Why is cluster prod-cl01 slow this morning?",
    toolsHit: ["metrics", "alerts", "logs"],
    answer:
      "Storage latency increased 3.2× on prod-cl01 at 02:45 UTC, correlated with a backup job on backup-proxy-04 running 3.2× longer than its 30-day average. Likely root cause: the backup window collided with a scheduled snapshot policy on DR-CLU01. Recommend shifting the policy by 90 minutes.",
  },
  {
    question: "How many days of storage runway do we have left?",
    toolsHit: ["metrics", "dashboards"],
    answer:
      "PROD-CLU02 has 12 days until the 85% storage threshold at the current 5% weekly growth rate. PROD-CLU01 is healthy with 94 days. DR-CLU01 has plenty of headroom. Want me to draft a capacity expansion plan for PROD-CLU02?",
  },
  {
    question: "Which hosts have firmware drift right now?",
    toolsHit: ["inventory", "alerts"],
    answer:
      "Three hosts are running BIOS versions outside the cluster baseline: prod-host-04 (1.8.2 vs baseline 1.8.4), prod-host-07 (1.8.1), and dr-host-02 (1.8.0). prod-host-07 also has DIMM 8A showing 47 correctable ECC errors in the last 24 hours. Recommend module replacement first.",
  },
];

function useTyped(text: string, run: boolean, charDelay = 18) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!run) { setOut(""); return; }
    let i = 0;
    setOut("");
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, charDelay);
    return () => clearInterval(id);
  }, [text, run, charDelay]);
  return out;
}

export function SimulatedChat() {
  const reduce = useReducedMotion();
  const [turnIdx, setTurnIdx] = useState(0);
  const [phase, setPhase] = useState<"q" | "tools" | "a" | "rest">("q");

  const turn = TURNS[turnIdx];
  const typedQ = useTyped(turn.question, phase === "q" && !reduce, 28);
  const typedA = useTyped(turn.answer, phase === "a" && !reduce, 14);

  useEffect(() => {
    if (reduce) return;
    if (phase === "q") {
      const fullTypeMs = turn.question.length * 28;
      const t = setTimeout(() => setPhase("tools"), fullTypeMs + 400);
      return () => clearTimeout(t);
    }
    if (phase === "tools") {
      const t = setTimeout(() => setPhase("a"), turn.toolsHit.length * 350 + 600);
      return () => clearTimeout(t);
    }
    if (phase === "a") {
      const fullAnsMs = turn.answer.length * 14;
      const t = setTimeout(() => setPhase("rest"), fullAnsMs + 1800);
      return () => clearTimeout(t);
    }
    if (phase === "rest") {
      const t = setTimeout(() => {
        setTurnIdx((i) => (i + 1) % TURNS.length);
        setPhase("q");
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [phase, turn, reduce]);

  const showQ = phase !== "rest";
  const showTools = phase === "tools" || phase === "a";
  const showAnswer = phase === "a";

  return (
    <div className="relative rounded-[24px] signature-glass overflow-hidden">
      {/* Chrome */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[rgba(167,139,250,0.18)]">
        <span className="flex items-center gap-2 text-[var(--color-p-200)]">
          <Sparkles size={15} strokeWidth={1.6} />
          <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase">AI Assistant · live</span>
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)]">
          <span className="relative inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)]" />
            <span
              className="absolute -inset-1 rounded-full bg-[var(--color-emerald-400)]/40"
              style={{ animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
            />
          </span>
          Streaming
        </span>
      </div>

      {/* Body */}
      <div className="px-6 md:px-9 py-8 md:py-10 grid gap-6 min-h-[420px]">
        {/* User question */}
        <AnimatePresence mode="wait">
          {showQ && (
            <motion.div
              key={`q-${turnIdx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-start gap-4"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-mute)] mt-1 shrink-0 w-12">
                You
              </span>
              <div className="text-[1.0625rem] text-[var(--color-ink)] leading-[1.6] tracking-[-0.005em]">
                {reduce ? turn.question : typedQ}
                {phase === "q" && !reduce && (
                  <span className="inline-block w-[2px] h-[1.1em] align-middle ml-0.5 bg-[var(--color-p-300)]" style={{ animation: "blink 1s steps(2) infinite" }} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tool calls */}
        <AnimatePresence>
          {showTools && (
            <motion.div
              key={`t-${turnIdx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-p-300)] mt-1 shrink-0 w-12">
                Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {turn.toolsHit.map((toolName, i) => {
                  const tool = TOOLS.find((t) => t.name === toolName);
                  const Icon = tool?.icon ?? Sparkles;
                  return (
                    <motion.span
                      key={toolName}
                      initial={{ opacity: 0, scale: 0.7, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.18, ease: EASE }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] text-[var(--color-p-100)]"
                    >
                      <Icon size={11} strokeWidth={1.6} />
                      <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase">{toolName}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Streaming answer */}
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              key={`a-${turnIdx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-p-200)] mt-1 shrink-0 w-12">
                AI
              </span>
              <div className="text-[1rem] text-[var(--color-ink-soft)] leading-[1.65] max-w-[64ch]">
                {reduce ? turn.answer : typedA}
                {phase === "a" && !reduce && typedA.length < turn.answer.length && (
                  <span className="inline-block w-[2px] h-[1.1em] align-middle ml-0.5 bg-[var(--color-p-300)]" style={{ animation: "blink 1s steps(2) infinite" }} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer turn indicators */}
      <div className="flex items-center justify-between gap-4 px-5 py-3 border-t border-[rgba(167,139,250,0.18)]">
        <div className="flex items-center gap-2">
          {TURNS.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === turnIdx ? 24 : 8,
                background: i === turnIdx ? "var(--color-p-300)" : "rgba(167,139,250,0.25)",
              }}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">
          {String(turnIdx + 1).padStart(2, "0")} / {String(TURNS.length).padStart(2, "0")}
        </span>
      </div>

      <style>{`
        @keyframes blink { to { visibility: hidden; } }
      `}</style>
    </div>
  );
}
