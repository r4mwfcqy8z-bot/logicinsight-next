import { Server, HardDrive, Network, Activity, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";
import { PageHead, SectionHead, FeatGrid, StatementBand } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "HCI Monitoring" };

const COVERS = [
  { icon: <Server size={18} />,      name: "Nutanix Clusters",     body: "Per-cluster health, container layout, replication factor, CVM telemetry, and protection state." },
  { icon: <HardDrive size={18} />,   name: "Physical Hardware",    body: "Redfish/IPMI signals tied to the host they run on, disk, PSU, fan, thermal, firmware." },
  { icon: <Network size={18} />,     name: "Network Devices",      body: "Switches, routers, firewalls, and topology, all polled via SNMP with config visibility." },
  { icon: <Activity size={18} />,    name: "Network Flows",        body: "IPFIX east-west traffic with DNS, GeoIP, and ASN enrichment anchored to the workload." },
  { icon: <ShieldCheck size={18} />, name: "Backup Infrastructure", body: "HYCU job state, target utilization, retention compliance, beside the cluster it protects." },
  { icon: <TrendingUp size={18} />,  name: "Predictive Analytics", body: "ML baselines that learn what the converged stack looks like when nothing is wrong." },
  { icon: <BarChart3 size={18} />,   name: "Output Platforms",     body: "Forward to Datadog, Grafana, or Grafana Cloud, keep the dashboards your team already operates." },
];

export default function HCIMonitoringPage() {
  return (
    <>
      <PageHead
        eyebrow="HCI Monitoring"
        title={<>Nutanix HCI monitoring{" "}<span className="serif-italic gradient-text">built for converged infrastructure.</span></>}
        sub="Converged stacks fail across compute, storage, and network at the same time. HCI-aware monitoring keeps the cause and effect on the same screen."
      />

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="What changes in HCI"
            title={<>Why Nutanix monitoring requires{" "}<span className="serif-italic gradient-text">an HCI-aware approach.</span></>}
            sub="In a converged environment, a noisy VM affects the same nodes that serve storage, the same NICs that carry replication traffic, and the same controllers that hold the cluster together. A flat monitoring model can&apos;t show those couplings."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Coverage"
            title={<>What Overwatch monitors{" "}<span className="serif-italic gradient-text">in your HCI environment.</span></>}
          />
          <FeatGrid items={COVERS} cols={3} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="One appliance. One console."
            title={<>One local control point{" "}<span className="serif-italic gradient-text">for converged operations.</span></>}
            sub="A single local appliance, on-prem by default, with optional forwarding to the visualization platforms you already operate."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
