"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles, BarChart3, AlertCircle, FileText, Boxes, Activity } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const TOOLS = [
  { icon: <BarChart3 size={18} />,   name: "Metrics",    body: "Live access to every metric the appliance is collecting." },
  { icon: <AlertCircle size={18} />, name: "Alerts",     body: "Current firing alerts, severities, age, and source." },
  { icon: <FileText size={18} />,    name: "Logs",       body: "Searchable across appliance + connected sources." },
  { icon: <Activity size={18} />,    name: "Dashboards", body: "Generates and opens dashboards in response to a question." },
  { icon: <Boxes size={18} />,       name: "Inventory",  body: "Clusters, VMs, hosts, switches, backup targets — typed objects." },
  { icon: <Sparkles size={18} />,    name: "VM analysis", body: "One-click AI review on any VM in the inventory." },
];

const INSIGHTS = [
  { name: "Network Health",         body: "Top talkers, anomalies, unreachable devices, route changes — summarized." },
  { name: "Security Intelligence",  body: "Threat-intel hits, new admin accounts, identity changes worth a look." },
  { name: "Capacity & Performance", body: "Cluster runway updates, latency drift, baseline departures." },
  { name: "Operational Summary",    body: "What changed in the last 24h, what to expect in the next 24h." },
];

function ChatPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="relative max-w-[760px] mx-auto rounded-3xl glass-strong overflow-hidden"
      style={{ boxShadow: "0 30px 100px -30px rgba(124,58,237,0.55)" }}
    >
      <div
        className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25), transparent 60%)" }}
        aria-hidden
      />

      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-black/30">
        <span className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </span>
        <span className="ml-1 mono-eyebrow text-[var(--color-p-300)]">AI Assistant · Infrastructure Copilot</span>
      </div>

      <div className="p-6 md:p-8 space-y-5">
        <div className="text-center py-6 border-b border-white/5">
          <div className="grid place-items-center w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#FF6B9C] mb-4" style={{ boxShadow: "0 20px 50px -10px rgba(124,58,237,0.5)" }}>
            <Sparkles className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-bold tracking-tight">Infrastructure Copilot</h3>
          <p className="text-sm text-[var(--color-ink-mute)] mt-1">
            Real-time access to metrics, alerts, logs, dashboards, and inventory. Ask anything about your environment.
          </p>
        </div>

        {[
          { cat: "Health & Alerts",     q: "Give me a full health report of all clusters — CPU, memory, storage, and any alerts firing right now." },
          { cat: "Capacity",            q: "Are any zombie VMs wasting resources? How much could we save by cleaning them up?" },
          { cat: "Network & Hardware",  q: "Which network devices are unreachable? What could be causing the connectivity issues?" },
        ].map((s, i) => (
          <motion.div
            key={s.q}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mono-eyebrow text-[var(--color-p-300)] mb-2">{s.cat}</div>
            <div className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-[var(--color-ink-soft)]">
              {s.q}
            </div>
          </motion.div>
        ))}

        <div className="flex gap-2 pt-2">
          <input
            type="text"
            placeholder="Ask about your infrastructure…"
            className="flex-1 bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm outline-none text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:border-[var(--color-p-400)]/40"
          />
          <button className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] text-white" style={{ boxShadow: "0 12px 30px -8px rgba(124,58,237,0.6)" }}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AIAssistantPage() {
  return (
    <>
      <PageHead
        eyebrow="Product · AI Assistant"
        title={<>Ask your infrastructure a question.{" "}<span className="serif-italic gradient-text">Get an answer backed by live data.</span></>}
        sub="Most AI in observability is a chat box over the same broken signals. Overwatch grounds every answer in the metric, log, or flow it pulled from — and shows you that path."
      />

      <section className="py-12 px-6">
        <ChatPanel />
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Live data access"
            title={<>Tools connected to{" "}<span className="serif-italic gradient-text">your live infrastructure.</span></>}
            sub="Each tool is invoked by the assistant on-demand. Every claim it makes can be traced back to the tool that produced it."
          />
          <FeatGrid items={TOOLS} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Daily insights"
            title={<>Four automated insights{" "}<span className="serif-italic gradient-text">delivered every morning.</span></>}
          />
          <FeatGrid items={INSIGHTS} cols={4} />
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <SectionHead
            eyebrow="Focus mode"
            title={<>Ctrl+Click anything{" "}<span className="serif-italic gradient-text">for instant AI analysis.</span></>}
            sub="Highlight a metric tile, an alert row, a VM in the inventory — the assistant focuses on it without losing the rest of the context."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
