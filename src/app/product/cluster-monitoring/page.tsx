import { Server, Activity, BarChart3, HardDrive, Boxes, Layers, Eye, Workflow } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Nutanix Cluster Monitoring" };

const LAYERS = [
  { icon: <Layers size={18} />,    name: "Prism Central",           body: "Multi-cluster management, categories, projects, and cross-cluster health correlation in one operational view." },
  { icon: <Boxes size={18} />,     name: "Prism Element / Cluster",  body: "Per-cluster health, replication factor, container layout, CVM telemetry, and protection state." },
  { icon: <Server size={18} />,    name: "Hosts & CVMs",            body: "Per-node CPU, memory, hypervisor scheduling pressure, and CVM controller telemetry." },
  { icon: <Activity size={18} />,  name: "Virtual Machines",         body: "Per-VM latency, IOPS, retransmits, snapshot lineage, and capacity attribution by workload." },
  { icon: <HardDrive size={18} />, name: "Physical & Storage",       body: "Inline dedupe, compression, replication factor, tier utilization, and SSD/HDD health." },
];

const DASHBOARDS = [
  { name: "Cluster Health Overview", body: "Composite health score across compute, storage, and network, with the underlying signal exposed when you click into it." },
  { name: "Host: PROD-HOST-04",       body: "Live host telemetry: CPU, memory, hypervisor scheduling, network, and disk SMART context." },
  { name: "VM: app-db-primary",       body: "Workload-level latency, IOPS, retransmits, and snapshot lineage for the VM that actually matters." },
  { name: "Storage, PROD-CLU01",     body: "Container layout, tier utilization, dedupe/compression ratios, and replication health." },
];

const WHY = [
  { icon: <Workflow size={18} />, name: "Nutanix-Native API Integration", body: "Direct from Prism API v3, not screen-scraped, not delayed, no SNMP translation layer in between." },
  { icon: <Eye size={18} />,      name: "Physical-to-Virtual Correlation", body: "When a host disk degrades, the VM impact appears in the same view, not a tab away." },
  { icon: <BarChart3 size={18} />, name: "ML Baselines Per Resource",      body: "Each cluster, host, and workload gets its own seasonal baseline. Anomalies surface against the right history." },
];

export default function ClusterMonitoringPage() {
  return (
    <>
      <PageHead
        eyebrow="Cluster Monitoring"
        title={<>Nutanix cluster monitoring{" "}<span className="serif-italic gradient-text">that knows what a CVM is.</span></>}
        sub="Every layer of the Nutanix stack, covered. Compute, storage, network, and protection state in one operational view."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Every Layer of Your Nutanix Stack, Covered"
            title={<>From Prism Central{" "}<span className="serif-italic gradient-text">all the way down to physical disk.</span></>}
          />
          <FeatGrid items={LAYERS} cols={3} />
        </div>
      </section>

      <DashboardPanel
        eyebrow="Overwatch · Cluster Overview"
        title={<>The actual cluster console,{" "}<span className="serif-italic gradient-text">live.</span></>}
        sub="Health score, infrastructure load, active alerts, threats, SNMP devices, downed entities, queue depth, compliance, all on one screen."
        src="/dashboards/command-center.png"
        alt="Overwatch Command Center"
        width={2080}
        height={1003}
        path="/command-center"
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Pre-Built Dashboards"
            title={<>Pre-built dashboards,{" "}<span className="serif-italic gradient-text">not empty canvases.</span></>}
            sub="Every key view ships ready, cluster, host, VM, storage. You don't start from a blank Grafana page on day one."
          />
          <FeatGrid items={DASHBOARDS} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Not Another Generic VM Monitor"
            title={<>Built for Nutanix,{" "}<span className="serif-italic gradient-text">not adapted to it.</span></>}
          />
          <FeatGrid items={WHY} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
