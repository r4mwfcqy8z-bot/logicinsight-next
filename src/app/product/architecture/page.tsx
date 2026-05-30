import { Antenna, GitMerge, Database, Send, Box } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { Forwarding } from "@/components/sections/forwarding";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Architecture" };

const STAGES = [
  { icon: <Antenna  size={18} />, name: "Unified collection fabric",   sub: "Stage 01", body: "Dedicated engines pull from Prism, Redfish, SNMP, IPFIX/NetFlow, and HYCU — agentless, parallel, fault-tolerant." },
  { icon: <GitMerge size={18} />, name: "Local operations graph",     sub: "Stage 02", body: "Every metric, asset, and flow lands in a typed graph so cross-domain queries become trivial." },
  { icon: <Box      size={18} />, name: "Analysis + ML",               sub: "Stage 03", body: "Per-cluster baselines, anomaly surfacing, and forecasting run locally against enriched signal." },
  { icon: <Database size={18} />, name: "Storage tier",                sub: "Stage 04", body: "Time-series + object store on-box. Tiered hot/cold. Optional S3 archive with immutability locks." },
  { icon: <Send     size={18} />, name: "Outputs + publishing",        sub: "Stage 05", body: "Dashboards, reports, API, webhooks, and optional Datadog/Grafana export — your choice." },
];

const PRINCIPLES = [
  { name: "On-prem by default",   body: "Telemetry stays inside your perimeter. Nothing leaves unless you forward it." },
  { name: "Open standards",        body: "Prometheus, OTLP, IPFIX, Redfish, SNMP. Standards in, standards out." },
  { name: "Forwarder, not lock-in", body: "Change destinations without rebuilding ingestion. Datadog today, Grafana tomorrow." },
  { name: "Ubuntu 24.04 LTS",      body: "Single OVA or qcow2. A real LTS, not a custom kernel surprise." },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHead
        eyebrow="Product · Architecture"
        title={<>One platform boundary for Nutanix{" "}<span className="serif-italic gradient-text">and everything around it.</span></>}
        sub="Overwatch is opinionated because operations work is messy enough already. Five stages, one appliance, one boundary."
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Five stages inside the appliance"
            title={<>How Overwatch turns signals into{" "}<span className="serif-italic gradient-text">one operational console.</span></>}
          />
          <FeatGrid items={STAGES} cols={3} />
        </div>
      </section>

      <Forwarding />

      <section className="relative py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead eyebrow="Operating principles" title={<>Four rules the product won&apos;t bend on.</>} />
          <FeatGrid items={PRINCIPLES} cols={4} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
