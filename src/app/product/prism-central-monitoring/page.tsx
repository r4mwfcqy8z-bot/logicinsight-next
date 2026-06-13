import { Layers, AlertCircle, ShieldCheck, Settings, Globe } from "lucide-react";
import { PageHead, SectionHead, FeatGrid, StatementBand } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = {
  title: "Prism Central Monitoring",
  description:
    "Multi-cluster Nutanix visibility from Prism Central: fleet health, capacity runway, protection state, and configuration drift across every cluster in one view.",
  alternates: { canonical: "/product/prism-central-monitoring" },
};

const NEEDS = [
  { icon: <Layers size={18} />,      name: "Multi-cluster visibility",       body: "Health, capacity, and protection state across every cluster from one operational view." },
  { icon: <AlertCircle size={18} />, name: "Alert context and prioritization", body: "Severity-normalized, deduplicated alerts with workload + asset context attached." },
  { icon: <ShieldCheck size={18} />, name: "Protection and policy monitoring", body: "Protection domains, snapshot schedules, replication health, and policy compliance, across every site." },
  { icon: <Settings size={18} />,    name: "Administrative visibility",        body: "Categories, projects, role assignments, and configuration drift across the fleet." },
];

const CROSS = [
  { icon: <Globe size={18} />,    name: "Cross-cluster view · fleet health",    body: "Composite health score per cluster + a fleet-wide rollup that doesn&apos;t require flipping between consoles." },
  { icon: <Globe size={18} />,    name: "Cross-cluster view · capacity",         body: "Per-cluster runway with confidence bands, ranked by which clusters will hit thresholds first." },
  { icon: <Globe size={18} />,    name: "Cross-cluster view · protection",       body: "Replication health, RPO drift, and policy compliance across every protected workload." },
  { icon: <Globe size={18} />,    name: "Cross-cluster view · administrative",   body: "Category coverage, role consistency, and configuration drift surfaced across the fleet." },
];

export default function PrismCentralPage() {
  return (
    <>
      <PageHead
        eyebrow="Prism Central Monitoring"
        title={<>Prism Central monitoring{" "}<span className="serif-italic gradient-text">that scales with your fleet.</span></>}
        sub="What teams need from Prism Central monitoring, without scraping the UI or stitching together generic tools."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What teams need from Prism Central monitoring"
            title={<>Four signals{" "}<span className="serif-italic gradient-text">that matter most.</span></>}
          />
          <FeatGrid items={NEEDS} cols={2} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="What Overwatch collects from Prism Central"
            title={<>Why generic tools miss{" "}<span className="serif-italic gradient-text">Prism Central context.</span></>}
            sub="Generic infrastructure monitors fetch metrics; they don&apos;t understand the entity model. Overwatch pulls categories, projects, protection state, and operational tasks directly through the Prism API, preserving the semantics the platform was designed around."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Cross-cluster visibility that stays operational"
            title={<>Four cross-cluster views{" "}<span className="serif-italic gradient-text">teams use every day.</span></>}
          />
          <FeatGrid items={CROSS} cols={2} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="Why teams pair Prism Central with Overwatch"
            title={<>Native management,{" "}<span className="serif-italic gradient-text">broader visibility.</span></>}
            sub="Prism Central remains the management plane. Overwatch sits beside it for cross-domain telemetry, long-range reporting, and the adjacent signals that decide whether the fleet is actually healthy."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
