import { Antenna, Sparkles, Activity, Database, Send, BarChart3, ShieldCheck, Network } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Features" };

const COLLECTION = [
  { icon: <BarChart3 size={20} />,  name: "Prism Central + Element", sub: "Nutanix core", body: "818+ metrics, inventory, alerts, tasks, multi-cluster context — agentless from the Nutanix API.", bullets: ["Cluster health & capacity", "Protection state", "Tasks + jobs", "AHV workloads"] },
  { icon: <Network size={20} />,    name: "IPFIX & NetFlow",         sub: "Flow telemetry", body: "DNS, GeoIP, ASN enrichment + top-talker analysis correlated to the workloads that produced it.", bullets: ["DNS reverse-lookup", "GeoIP / ASN tags", "Top-talkers per cluster", "Threat-intel cross-ref"] },
  { icon: <Antenna size={20} />,    name: "SNMP devices",            sub: "210+ vendor profiles", body: "Interfaces, traps, routes, sensors, and config backup — extensible via YAML.", bullets: ["Auto-discovery", "LLDP / CDP topology", "Port-level traffic", "Config drift detection"] },
  { icon: <ShieldCheck size={20} />, name: "Backup + protection",     sub: "HYCU posture", body: "Job status, target utilization, retention drift, and immutability windows alongside Nutanix.", bullets: ["Job success ratio", "Target capacity", "Retention compliance", "Lock-window state"] },
];

const ANALYSIS = [
  { icon: <Sparkles size={18} />, name: "Metadata enrichment", body: "Every metric arrives with workload, asset, and identity context already attached — not joined later." },
  { icon: <Activity size={18} />, name: "Cross-layer correlation", body: "A host alert ties to a network alert ties to a backup state. Three consoles' worth of context, one view." },
  { icon: <BarChart3 size={18} />, name: "ML baselines + forecasting", body: "Per-cluster baselines learn the personality of your environment. Capacity forecasts come with confidence bands." },
];

const OUTPUTS = [
  { name: "50+ dashboards",       sub: "On-box", body: "Operator-grade dashboards out of the box — radar, alerts, fleet, capacity, network, backup." },
  { name: "9 report types",       sub: "Recurring", body: "Executive capacity, posture, security, and operations reports on a schedule." },
  { name: "Datadog · Grafana",    sub: "Export", body: "Forward enriched metrics to your existing visualization stack — costs stay predictable." },
  { name: "REST API · Webhooks",  sub: "Programmatic", body: "Every metric, every alert, every config exposed for your own automation." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHead
        eyebrow="Product · Features"
        title={<>Nutanix monitoring + HCI observability —{" "}<span className="serif-italic gradient-text">five engines, one console.</span></>}
        sub="Overwatch is a self-contained Ubuntu appliance running dedicated collection, enrichment, analysis, storage, and publishing engines — purpose-built for Nutanix and the systems around it."
      />

      <TrustMarquee />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Collection coverage"
            title={<>Secure, agentless collection that{" "}<span className="serif-italic gradient-text">starts with Nutanix</span>{" "}and expands outward.</>}
          />
          <FeatGrid items={COLLECTION} cols={2} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Correlation + Analysis"
            title={<>What changes for the operator{" "}<span className="serif-italic gradient-text">after the data lands.</span></>}
          />
          <FeatGrid items={ANALYSIS} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Dashboards, reports, outputs"
            title={<>Local dashboards in front.{" "}<span className="serif-italic gradient-text">Existing tools behind them.</span></>}
          />
          <FeatGrid items={OUTPUTS} cols={4} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
