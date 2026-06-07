"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

type Cat = "Nutanix" | "Hardware" | "Network" | "Backup" | "Platform";
const CATS: Cat[] = ["Nutanix", "Hardware", "Network", "Backup", "Platform"];

interface Term {
  term: string;
  abbr?: string;
  cat: Cat;
  def: string;
  href?: string;
}

// Definitions are drawn from facts already stated across the site
// (architecture, coverage, forwarding, pricing). No new product claims.
const TERMS: Term[] = [
  { term: "AHV", cat: "Nutanix", def: "Nutanix's native hypervisor. Overwatch tracks AHV host and VM health alongside the rest of the cluster.", href: "/product/ahv-monitoring" },
  { term: "Prism Element", cat: "Nutanix", def: "The per-cluster management interface for a single Nutanix cluster. One of the two Prism sources Overwatch collects from." },
  { term: "Prism Central", cat: "Nutanix", def: "The multi-cluster management plane spanning many Nutanix clusters. Overwatch reads metrics, inventory, alerts, and tasks from it.", href: "/product/prism-central-monitoring" },
  { term: "Hyperconverged Infrastructure", abbr: "HCI", cat: "Nutanix", def: "Compute, storage, and virtualization converged into one platform. The infrastructure model Overwatch is purpose-built to monitor.", href: "/product/hci-monitoring" },
  { term: "Controller VM", abbr: "CVM", cat: "Nutanix", def: "The virtual machine that runs Nutanix storage services on every node in a cluster." },
  { term: "vDisk", cat: "Nutanix", def: "A virtual disk presented to a VM. Overwatch surfaces vDisk-level behavior next to the container that holds it.", href: "/blog/nutanix-storage-monitoring-containers-vdisks" },
  { term: "Storage Container", cat: "Nutanix", def: "A logical storage pool in Nutanix with its own policies for compression, deduplication, and replication.", href: "/blog/nutanix-storage-monitoring-containers-vdisks" },
  { term: "Replication Factor", abbr: "RF", cat: "Nutanix", def: "How many copies Nutanix keeps of each piece of data across nodes, so a node loss does not become data loss." },

  { term: "Redfish", cat: "Hardware", def: "A standardized REST API for server hardware. Overwatch uses it to read power, thermal, firmware, and disk signals.", href: "/product/redfish-monitoring" },
  { term: "Intelligent Platform Management Interface", abbr: "IPMI", cat: "Hardware", def: "An out-of-band hardware management interface. A fallback path for hardware telemetry where Redfish is not available.", href: "/product/redfish-monitoring" },
  { term: "Baseboard Management Controller", abbr: "BMC", cat: "Hardware", def: "The on-server controller behind iDRAC, iLO, and XClarity. The endpoint Overwatch polls for Dell, HPE, and Lenovo hardware health." },
  { term: "Firmware drift", cat: "Hardware", def: "When hardware firmware falls out of a known-good baseline. Surfaced before it turns into a support case." },

  { term: "Simple Network Management Protocol", abbr: "SNMP", cat: "Network", def: "The protocol Overwatch uses to poll devices and ingest traps, covering every device on the wire.", href: "/product/snmp-monitoring" },
  { term: "Trap", cat: "Network", def: "An unsolicited SNMP alert a device sends when something changes, ingested alongside scheduled polling." },
  { term: "IPFIX and NetFlow", cat: "Network", def: "Flow export protocols that describe network conversations. Overwatch uses them for topology and top-talker analysis.", href: "/product/network-flow-analysis" },
  { term: "Top talkers", cat: "Network", def: "The highest-bandwidth sources and destinations in your flow data, kept next to cluster operations." },

  { term: "HYCU", cat: "Backup", def: "A data protection platform for Nutanix. Overwatch reads protection compliance, targets, and job health from it.", href: "/product/hycu-monitoring" },
  { term: "Protection compliance", cat: "Backup", def: "Whether workloads are actually being backed up to policy, tracked next to the cluster the backups protect." },

  { term: "Appliance", cat: "Platform", def: "The single, self-contained unit Overwatch deploys as. One footprint to manage instead of a stack of collectors.", href: "/product/architecture" },
  { term: "Seasonal baseline", cat: "Platform", def: "A model of expected behavior over a 7×24 weekly cycle. The reference point anomaly detection measures against." },
  { term: "Anomaly detection", cat: "Platform", def: "Flagging metrics that deviate from their learned baseline, across infrastructure domains rather than within one source.", href: "/product/predictive-analytics" },
  { term: "Health score", cat: "Platform", def: "A composite signal that rolls many metrics into one read on how a cluster or component is doing." },
  { term: "Forecasting", cat: "Platform", def: "Projecting capacity and resource trends forward so you can right-size before you run out.", href: "/product/predictive-analytics" },
  { term: "Data sovereignty", cat: "Platform", def: "Keeping telemetry on-prem and local by default. Nothing leaves unless you explicitly enable forwarding." },
  { term: "VictoriaMetrics and VictoriaLogs", cat: "Platform", def: "The local time-series and log stores inside the appliance, built for local-first retention." },
  { term: "Forwarding", cat: "Platform", def: "Optionally sending filtered, enriched signals out to Datadog, Grafana Cloud, or Coralogix. Off until you turn it on.", href: "/product/integrations" },
  { term: "Monitoring as a Service", abbr: "MaaS", cat: "Platform", def: "A managed path where Logic Insight operates the appliance for you, without changing the product architecture.", href: "/solutions/monitoring-as-a-service" },
  { term: "Per-core pricing", cat: "Platform", def: "Licensing by CPU core at $7 per core per month self-hosted, with every integration included.", href: "/pricing" },
];

const CAT_COLOR: Record<Cat, string> = {
  Nutanix: "var(--color-p-300)",
  Hardware: "#FBBF24",
  Network: "#FF6B9C",
  Backup: "#5EEAD4",
  Platform: "var(--color-p-200)",
};

function Chip({ label, active, onClick, color }: { label: string; active: boolean; onClick: () => void; color?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
        active ? "text-[#07050E]" : "text-[var(--color-ink-mute)] hover:text-[var(--color-ink)]"
      }`}
    >
      {active && (
        <motion.span
          layoutId="glossary-chip"
          className="absolute inset-0 rounded-full"
          style={{ background: color ?? "var(--color-ink)" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}

function TermCard({ t }: { t: Term }) {
  const inner = (
    <div className="h-full p-6 md:p-7 rounded-[20px] matte depth-1 hover:depth-2 transition-shadow duration-500 group">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase" style={{ color: CAT_COLOR[t.cat] }}>
          {t.cat}
        </span>
        {t.href && (
          <ArrowUpRight size={15} strokeWidth={1.8} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-p-300)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        )}
      </div>
      <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] leading-tight">
        {t.term}
        {t.abbr && <span className="ml-2 font-mono text-[0.8rem] text-[var(--color-p-300)]">{t.abbr}</span>}
      </h3>
      <p className="mt-2.5 text-[0.9rem] leading-[1.55] text-[var(--color-ink-soft)]">{t.def}</p>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="h-full"
    >
      {t.href ? <Link href={t.href} className="block h-full">{inner}</Link> : inner}
    </motion.div>
  );
}

export default function GlossaryView() {
  const [cat, setCat] = useState<Cat | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TERMS.filter((t) => {
      const catOk = cat === "All" || t.cat === cat;
      const qOk =
        !q ||
        t.term.toLowerCase().includes(q) ||
        (t.abbr?.toLowerCase().includes(q) ?? false) ||
        t.def.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [cat, query]);

  return (
    <>
      <PageHead
        eyebrow="Glossary"
        title={
          <>
            The vocabulary of{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Nutanix observability.
            </span>
          </>
        }
        sub="Every term Overwatch touches, defined in one place. Filter by domain or search to find the one you need."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="editorial-shell">
          {/* Filter + search bar */}
          <div className="sticky top-[84px] z-20 mb-10 rounded-[22px] glass-panel px-4 py-3 md:px-5 md:py-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
              <LayoutGroup id="glossary">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Chip label="All" active={cat === "All"} onClick={() => setCat("All")} />
                  {CATS.map((c) => (
                    <Chip key={c} label={c} active={cat === c} onClick={() => setCat(c)} color={CAT_COLOR[c]} />
                  ))}
                </div>
              </LayoutGroup>

              <div className="relative shrink-0 lg:w-[280px]">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search terms"
                  className="w-full pl-10 pr-3 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none focus:border-[var(--color-p-300)]/40 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">
              {filtered.length} {filtered.length === 1 ? "term" : "terms"}
            </span>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((t) => (
                <TermCard key={t.term} t={t} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center py-16 text-[var(--color-ink-mute)]">
              No terms match. Try a different domain or search.
            </p>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
