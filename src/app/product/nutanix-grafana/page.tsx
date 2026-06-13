import { BarChart3, Server, Cloud, TrendingUp, Filter, Network } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = {
  title: "Nutanix Grafana Integration",
  description:
    "Drop pre-built Nutanix dashboards into self-hosted Grafana or Grafana Cloud, cluster, hypervisor, VM, and capacity views from typed Prism, Redfish, and flow metrics.",
  alternates: { canonical: "/product/nutanix-grafana" },
};

const ADDS = [
  { icon: <BarChart3 size={18} />,  name: "Dashboard-ready Nutanix views",     body: "Pre-built Nutanix dashboards drop into Grafana, cluster, hypervisor, VM, capacity. No starting from a blank canvas." },
  { icon: <Server size={18} />,     name: "Prism-aware management visibility", body: "Multi-cluster management context, alerts, and tasks rendered Grafana-side with the entity model intact." },
  { icon: <Network size={18} />,    name: "AHV and VM correlation",            body: "Per-VM telemetry tagged with cluster, host, and workload context, the same labels you use elsewhere in Grafana." },
  { icon: <TrendingUp size={18} />, name: "Capacity and historical trend analysis", body: "Long-range time-series with ML-derived baselines and runway forecasts surfaced alongside live state." },
];

const TIERS = [
  { name: "Self-hosted Grafana", body: "Drop the Nutanix dashboards into your existing in-house Grafana stack. Full control over retention, RBAC, and theming." },
  { name: "Grafana Cloud",       body: "Filtered forwarding into Grafana Cloud with cost-conscious metric selection. Full-fidelity copy stays on-prem." },
];

const WHY = [
  { icon: <Filter size={18} />,    name: "Start from the right source pages", body: "Telemetry comes from Prism, Redfish, and flow collectors, typed metrics, not generic exporters." },
  { icon: <BarChart3 size={18} />, name: "Same data model across destinations", body: "Datadog or Grafana, pick either, switch later, no re-ingestion." },
  { icon: <Cloud size={18} />,     name: "Selective forwarding by stream",     body: "Choose which telemetry leaves the appliance and which stays on-prem. Cloud ingest costs stay predictable." },
];

export default function NutanixGrafanaPage() {
  return (
    <>
      <PageHead
        eyebrow="Integration · Grafana"
        title={<>Nutanix in Grafana{" "}<span className="serif-italic gradient-text">without building from scratch.</span></>}
        sub="Pre-built dashboards and Prism-aware visibility for self-hosted Grafana or Grafana Cloud, fed by the same appliance that runs the on-box dashboards."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What Overwatch adds to Grafana"
            title={<>Operator-grade visibility,{" "}<span className="serif-italic gradient-text">day one.</span></>}
          />
          <FeatGrid items={ADDS} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="How Overwatch works with Grafana"
            title={<>Typed Prometheus exposition,{" "}<span className="serif-italic gradient-text">not raw exporters.</span></>}
            sub="Overwatch exposes Prism, Redfish, and flow context as proper Prometheus metric families. Grafana renders them with the labels and dimensions operators expect."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Self-hosted Grafana vs Grafana Cloud"
            title={<>Same export.{" "}<span className="serif-italic gradient-text">Your choice of operator model.</span></>}
          />
          <FeatGrid items={TIERS} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Why Grafana teams use Overwatch"
            title={<>Source pages,{" "}<span className="serif-italic gradient-text">not raw scrapers.</span></>}
          />
          <FeatGrid items={WHY} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
