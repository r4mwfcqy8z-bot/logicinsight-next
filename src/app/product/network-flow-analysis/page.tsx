import { Network, ShieldAlert, Globe, Eye, Workflow, Server, FileSearch, AlertCircle } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Network Flow Analysis" };

const SEES = [
  { icon: <Workflow size={18} />,    name: "Dynamic Network Constellation", body: "Live east-west view that updates as the topology shifts; clusters never feel static." },
  { icon: <Network size={18} />,     name: "Service-Centric Flow Mapping",  body: "Group flows by service identity, not just IP, what actually talks to what." },
  { icon: <Globe size={18} />,       name: "DNS Monitoring & Analysis",     body: "DNS resolution patterns alongside the flows they generate, query types, response codes, latency." },
  { icon: <FileSearch size={18} />,  name: "Historical Flow Analysis",      body: "Hours, days, weeks of flow context retained locally so investigations don't depend on recent-only telemetry." },
];

const SECURITY = [
  { icon: <ShieldAlert size={18} />, name: "Unauthorized Connection Detection", body: "Surface flows that should not exist, between zones, to public IPs, across tenants." },
  { icon: <Eye size={18} />,         name: "East-West Traffic Visibility",      body: "Intra-cluster traffic that traditional NMS tools miss entirely." },
  { icon: <Server size={18} />,      name: "Audit & Compliance Evidence",       body: "Documented flow history available for audits, security reviews, and incident postmortems." },
];

const REVEALS = [
  { name: "The Noisy Backup Discovery",   body: "A scheduled job suddenly saturates inter-cluster replication, visible the moment it lands." },
  { name: "The Unauthorized Egress Alert", body: "A workload that should never reach the public internet starts doing so, surfaced in minutes, not days." },
];

export default function NetworkFlowPage() {
  return (
    <>
      <PageHead
        eyebrow="Network Flow Analysis"
        title={<>Nutanix network monitoring{" "}<span className="serif-italic gradient-text">and flow analysis.</span></>}
        sub="IPFIX and NetFlow with DNS, GeoIP, and ASN enrichment, anchored to the workload that produced the flow, not assembled in a separate tool later."
      />

      <DashboardPanel
        eyebrow="NetFlow WAN Explorer"
        title={<>The actual product,{" "}<span className="serif-italic gradient-text">live.</span></>}
        sub="Global traffic map, threat-intel correlation, and per-flow analysis from the same appliance as cluster monitoring."
        src="/dashboards/netflow.png"
        alt="NetFlow WAN Explorer"
        width={2080}
        height={1003}
        path="/netflow/wan"
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Network Visibility That Actually Helps"
            title={<>The picture that flat metrics{" "}<span className="serif-italic gradient-text">don&apos;t show.</span></>}
            sub="Compute and storage tell you a host is busy. Flow data tells you who it's talking to, what kind of conversation it is, and whether that conversation should be happening at all."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What You See With Flow Analysis"
            title={<>Four views{" "}<span className="serif-italic gradient-text">flow data unlocks.</span></>}
          />
          <FeatGrid items={SEES} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="How Flow Data Gets to Your Dashboards"
            title={<>From the wire{" "}<span className="serif-italic gradient-text">to the operator view.</span></>}
            sub="Overwatch ingests IPFIX and NetFlow from existing exporters, enriches each record with DNS / GeoIP / ASN context, and stores the result locally, then renders the answers as dashboards alongside cluster and hardware data."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Network Flow as a Security Signal"
            title={<>Flow data{" "}<span className="serif-italic gradient-text">is security data.</span></>}
          />
          <FeatGrid items={SECURITY} cols={3} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What Flow Analysis Reveals"
            title={<>Two scenarios most teams{" "}<span className="serif-italic gradient-text">already know.</span></>}
          />
          <FeatGrid items={REVEALS} cols={2} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
