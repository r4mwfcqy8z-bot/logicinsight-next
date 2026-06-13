import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SimulatedChat } from "@/components/wow/simulated-chat";
import { BarChart3, AlertCircle, FileText, Boxes, Activity, Sparkles, Network, ShieldCheck, Cpu, ListChecks, Lock, Camera, Workflow, Zap, MousePointerClick } from "lucide-react";

export const metadata = {
  title: "AI Assistant",
  description:
    "Ask your infrastructure a question and get an answer grounded in the live metric, log, alert, or flow it pulled from, with the path shown so you can verify it.",
  alternates: { canonical: "/product/ai-assistant" },
};

const PROBLEM = [
  { name: "The manual investigation loop", body: "Operators open Prism, then a backup dashboard, then an SNMP tool, then a network console, switching between tabs to assemble what should already be one answer." },
  { name: "Ask the AI assistant",          body: "Drop the question, get an evidence-grounded answer. The assistant pulls from live metrics, alerts, logs, dashboards, and inventory, and shows you the path it took." },
];

const TOOLS = [
  { icon: <BarChart3 size={18} strokeWidth={1.5} />,   name: "Metrics",    body: "Real-time access to every metric the appliance is collecting." },
  { icon: <AlertCircle size={18} strokeWidth={1.5} />, name: "Alerts",     body: "Live firing alerts, severities, age, and source attribution." },
  { icon: <FileText size={18} strokeWidth={1.5} />,    name: "Logs",       body: "Searchable across the appliance and connected sources." },
  { icon: <Activity size={18} strokeWidth={1.5} />,    name: "Dashboards", body: "Generates and opens dashboards in response to a question." },
  { icon: <Boxes size={18} strokeWidth={1.5} />,       name: "Inventory",  body: "Clusters, VMs, hosts, switches, backup targets, typed objects." },
  { icon: <Sparkles size={18} strokeWidth={1.5} />,    name: "VM analysis", body: "Per-VM AI review on demand from anywhere in the product." },
];

const INSIGHTS = [
  { icon: <Network size={18} strokeWidth={1.5} />,    name: "Network health",        body: "Top talkers, unreachable devices, route changes, and flow anomalies summarized." },
  { icon: <ShieldCheck size={18} strokeWidth={1.5} />, name: "Security intelligence", body: "Threat-intel hits, new admin accounts, identity changes worth a look." },
  { icon: <Cpu size={18} strokeWidth={1.5} />,        name: "Hardware health",       body: "Disk SMART, PSU efficiency, thermals, and firmware drift across the fleet." },
  { icon: <ListChecks size={18} strokeWidth={1.5} />, name: "LCM compliance",        body: "Lifecycle Manager state across every cluster: what's current, what's drifting, what's overdue." },
];

const ARCH = [
  { icon: <Lock size={18} strokeWidth={1.5} />,            name: "OAuth login",       sub: "Step 01", body: "The operator signs in. Every action the assistant takes inherits their identity and permissions." },
  { icon: <Camera size={18} strokeWidth={1.5} />,          name: "Context snapshot",  sub: "Step 02", body: "The assistant captures the operator's current screen, selection, and recent activity as grounded context." },
  { icon: <Workflow size={18} strokeWidth={1.5} />,        name: "MCP tool queries",  sub: "Step 03", body: "Live tool invocations against metrics, alerts, logs, dashboards, and inventory, each call traceable in the audit log." },
  { icon: <Zap size={18} strokeWidth={1.5} />,             name: "Streaming response", sub: "Step 04", body: "Tokens stream back with evidence links inline; the operator can drill into the source behind any claim." },
];

export default function AIAssistantPage() {
  return (
    <>
      <PageHead
        eyebrow="AI infrastructure assistant"
        title={
          <>
            Ask your infrastructure a question.{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Get an answer backed by live data.
            </span>
          </>
        }
        sub="The assistant grounds every answer in the metric, log, alert, or flow it pulled from, and shows you that path so you can verify it."
      />

      <DashboardPanel
        align="left"
        eyebrow="Infrastructure copilot"
        title={
          <>
            The actual product,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
              live.
            </span>
          </>
        }
        sub="Suggested prompts across Health & Alerts, Capacity, and Network & Hardware. Ask anything about your Overwatch environment."
        src="/dashboards/ai-assistant.webp"
        alt="Overwatch AI Assistant"
        width={2852}
        height={1503}
        path="/ai-assistant"
      />

      {/* Simulated chat — live ask + stream demo. */}
      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <div className="grid-edit mb-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="kicker mb-5">A real conversation</div>
              <h2 className="editorial-statement balance max-w-[20ch]">
                Watch it work,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  in real time.
                </span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-start-9 lg:col-span-4 self-end editorial-sub max-w-[44ch]">
              Three operator questions, three live tool runs, three streaming answers grounded in actual telemetry.
            </p>
          </div>
          <SimulatedChat />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="The problem"
            title={
              <>
                Infrastructure teams are drowning in data,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  but starved for answers.
                </span>
              </>
            }
          />
          <FeatGrid items={PROBLEM} cols={2} />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Live data access"
            title={
              <>
                Six tools connected to{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  your live infrastructure.
                </span>
              </>
            }
            sub="Every tool is invoked by the assistant on-demand. Every claim it makes traces back to the tool that produced it."
          />
          <FeatGrid items={TOOLS} cols={3} />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Daily insights"
            title={
              <>
                Four automated insights{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  delivered every morning.
                </span>
              </>
            }
          />
          <FeatGrid items={INSIGHTS} cols={4} />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="VM Quick Review"
            title={
              <>
                One-click AI analysis{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  for any VM.
                </span>
              </>
            }
            sub="From the inventory, click a VM and get an instant AI review: health, recent issues, capacity context, and recommendations."
          />
          <div className="max-w-[640px] mx-auto">
            <div className="px-7 py-6 rounded-[20px] signature-glass flex items-center gap-5">
              <span className="grid place-items-center w-12 h-12 rounded-xl border border-[rgba(167,139,250,0.22)] text-[var(--color-p-300)] shrink-0">
                <MousePointerClick size={22} strokeWidth={1.5} />
              </span>
              <div>
                <div className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">One click for a full AI review</div>
                <div className="text-[0.875rem] text-[var(--color-ink-mute)] mt-1">Available anywhere a VM appears in the product.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="AI Focus Mode"
            title={
              <>
                Ctrl+Click anything{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  for instant AI analysis.
                </span>
              </>
            }
            sub="Highlight a metric tile, an alert row, a chart range; the assistant focuses on the selection without losing the rest of the context."
          />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Architecture"
            title={
              <>
                How the AI assistant{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  connects to your data.
                </span>
              </>
            }
          />
          <FeatGrid items={ARCH} cols={4} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
