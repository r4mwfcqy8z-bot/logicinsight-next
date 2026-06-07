import { Antenna, Sparkles, Activity, BarChart3, Settings, Server, Network, ShieldCheck, GitMerge, Eye, Filter, Database, FileText, Bell, Code, Send } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Features" };

const STAGES = [
  { icon: <Antenna size={18} />,   name: "Collect once",            sub: "Stage 01", body: "Start with Prism Element and Prism Central, then extend the same collection edge into Redfish, IPMI, SNMP, HYCU, IPFIX, and NetFlow." },
  { icon: <Sparkles size={18} />,  name: "Enrich locally",          sub: "Stage 02", body: "Tag every signal with cluster, host, VM, hardware, backup, and network context so operators stop correlating raw data by hand." },
  { icon: <Activity size={18} />,  name: "Analyze with context",    sub: "Stage 03", body: "Use baselines, anomaly detection, health scoring, and forecasting that understand how those domains fit together." },
  { icon: <BarChart3 size={18} />, name: "Visualize and report",    sub: "Stage 04", body: "Run local dashboards and scheduled reports from the appliance, or selectively forward filtered telemetry to external tools." },
  { icon: <Settings size={18} />,  name: "Operate one platform",    sub: "Stage 05", body: "Reduce the number of consoles teams live in without giving up the systems they still need downstream." },
];

const COLLECTION = [
  { icon: <Server size={18} />,      name: "Prism Central and Element",   body: "Collect 818+ Nutanix metrics per cluster plus inventory, protection state, alerts, and multi-cluster context." },
  { icon: <Network size={18} />,     name: "IPFIX and NetFlow",           body: "Flow collection with DNS correlation, Geo-IP enrichment, ASN mapping, and top-talker analysis." },
  { icon: <Antenna size={18} />,     name: "SNMP devices",                body: "Interfaces, topology, routes, sensors, traps, and config-aware operations from one appliance." },
  { icon: <ShieldCheck size={18} />, name: "Backup and protection telemetry", body: "HYCU status, target utilization, job duration, and protection compliance tied back to Nutanix operations." },
];

const ANALYSIS = [
  { icon: <GitMerge size={18} />,  name: "Metadata enrichment",     body: "Every metric gets cluster, host, VM, hardware, and policy context before it lands on a dashboard." },
  { icon: <Activity size={18} />,  name: "Cross-layer correlation", body: "Compute, storage, backup, network, and flow events are stitched into one operating story." },
  { icon: <Filter size={18} />,    name: "Noise reduction",         body: "Duplicate suppression and transient filtering cut the flood before it reaches the operator." },
  { icon: <Eye size={18} />,       name: "Topology mapping",        body: "Understand relationships from cluster to host to VM to hardware and upstream dependencies." },
  { icon: <BarChart3 size={18} />, name: "Seasonal baselines",      body: "7×24 baselines make abnormal behavior stand out without living in static threshold hell." },
];

const OUTPUTS = [
  { icon: <BarChart3 size={18} />, name: "50+ dashboards",      body: "Executive, cluster, VM, hardware, backup, and flow dashboards are available locally on the appliance." },
  { icon: <FileText size={18} />,  name: "9 report types",      body: "Scheduled HTML reports for capacity, anomalies, right-sizing, protection, and storage efficiency." },
  { icon: <Bell size={18} />,      name: "Alert transports",    body: "Email, syslog, Slack, webhook, and SNMP trap support from one rules and transport layer." },
  { icon: <Code size={18} />,      name: "Open API",            body: "REST endpoints for reporting, integration, and downstream automation." },
];

const DEPLOYMENT = [
  { icon: <Server size={18} />,   name: "You run the appliance.",        body: "Keep full control over retention, network paths, certificates, and integrations in your own environment." },
  { icon: <Settings size={18} />, name: "We help operate the platform.", body: "Get the same appliance and data model, with Logic Insight handling tuning, reporting, and ongoing platform operations." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHead
        eyebrow="Product"
        title={<>Nutanix monitoring and HCI observability,{" "}<span className="serif-italic gradient-text">five engines, one console.</span></>}
        sub="Overwatch is a self-contained local appliance running dedicated collection, enrichment, analysis, storage, and publishing engines, purpose-built for Nutanix and the systems around it."
      />

      <TrustMarquee />

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Product"
            title={<>Five engines.{" "}<span className="serif-italic gradient-text">One operating model.</span></>}
            sub="Overwatch deploys as a self-contained local appliance and runs dedicated engines for each stage of the operating model."
          />
          <FeatGrid items={STAGES} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Collection Coverage"
            title={<>Secure, agentless collection that{" "}<span className="serif-italic gradient-text">starts with Nutanix</span>{" "}and expands outward.</>}
          />
          <FeatGrid items={COLLECTION} cols={2} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Correlation and Analysis"
            title={<>What changes for the operator{" "}<span className="serif-italic gradient-text">after the data lands.</span></>}
          />
          <FeatGrid items={ANALYSIS} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Dashboards, Reports, and Outputs"
            title={<>Local dashboards in front.{" "}<span className="serif-italic gradient-text">Existing tools behind them.</span></>}
          />
          <FeatGrid items={OUTPUTS} cols={4} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Deployment Model"
            title={<>One appliance architecture{" "}<span className="serif-italic gradient-text">with flexible operating models around it.</span></>}
          />
          <FeatGrid items={DEPLOYMENT} cols={2} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
