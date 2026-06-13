import { BarChart3, Server, Filter, Bell, Cloud } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = {
  title: "Nutanix Datadog Integration",
  description:
    "Send enriched, filtered Nutanix telemetry to Datadog as native metrics, Prism, AHV, and capacity context, with pre-built dashboards and Marketplace billing.",
  alternates: { canonical: "/product/nutanix-datadog" },
};

const ARRIVES = [
  { icon: <Server size={18} />,    name: "Prism Central and cluster context", body: "Cluster health, capacity, replication, and protection state arrive as native Datadog metrics, labeled per cluster." },
  { icon: <BarChart3 size={18} />, name: "AHV and workload telemetry",         body: "Per-VM CPU, memory, IO, latency, retransmits, labeled with cluster, container, and host." },
  { icon: <Cloud size={18} />,     name: "Capacity and runway views",          body: "Pre-built dashboards for forecasting and runway, sized for the SRE bridge and the leadership review." },
  { icon: <Bell size={18} />,      name: "Cleaner alerting inputs",            body: "Enriched, deduplicated alerts that don't add to Datadog noise, they cut it." },
];

const SENDS = [
  { name: "Enriched metrics, not raw events", body: "Overwatch normalizes and tags telemetry locally so what arrives in Datadog is operator-ready." },
  { name: "Filtered per stream",              body: "Decide what leaves the appliance and what stays on-prem, cloud ingest costs stay predictable." },
  { name: "Datadog Marketplace integration",   body: "Listed on the Datadog Marketplace, single procurement path with bundled billing." },
  { name: "Pre-built dashboards + monitors",   body: "Seven dynamic dashboards and a starter monitor pack ship with the integration." },
];

const WHY = [
  { name: "Source pages, not screen-scraped", body: "Telemetry comes from the Prism API + Redfish + flow collectors, not a UI scrape that breaks on upgrade." },
  { name: "Stays local by default",           body: "Keep telemetry on-prem. Forward to Datadog only the streams you actually need there." },
  { name: "Same data model across destinations", body: "Datadog or Grafana, pick either, switch later, no re-ingestion." },
];

export default function NutanixDatadogPage() {
  return (
    <>
      <PageHead
        eyebrow="Integration · Datadog"
        title={<>Nutanix in your{" "}<span className="serif-italic gradient-text">Datadog dashboards.</span></>}
        sub="Cluster, hypervisor, hardware, and flow telemetry arriving as native Datadog metrics, from the same appliance that runs the on-box dashboards."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What arrives in Datadog"
            title={<>The signals you wanted{" "}<span className="serif-italic gradient-text">in Datadog yesterday.</span></>}
          />
          <FeatGrid items={ARRIVES} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What Overwatch sends to Datadog"
            title={<>Filtered.{" "}<span className="serif-italic gradient-text">Enriched.</span>{" "}Operator-ready.</>}
          />
          <FeatGrid items={SENDS} cols={4} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Datadog Marketplace integration"
            title={<>Listed integration.{" "}<span className="serif-italic gradient-text">Single procurement path.</span></>}
            sub="Buy Overwatch through Datadog Marketplace for bundled billing on your existing Datadog contract, same per-core economics, simpler procurement."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Why teams use Overwatch for Datadog"
            title={<>Build the Datadog view{" "}<span className="serif-italic gradient-text">around the right source pages.</span></>}
          />
          <FeatGrid items={WHY} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
