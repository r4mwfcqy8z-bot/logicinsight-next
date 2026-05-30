import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { Server, Database, HardDrive, ShieldCheck, BarChart3, Network, Cloud, Antenna } from "lucide-react";

export const metadata = { title: "Integrations" };

const HYPERVISOR = [
  { icon: <Server size={18} />,    name: "AHV (Acropolis)",  body: "VM lifecycle, host CPU/memory, network attachment, snapshots — agentless." },
  { icon: <Database size={18} />,  name: "Prism Central",    body: "Multi-cluster orchestration view + entity inventory + governance state." },
  { icon: <Database size={18} />,  name: "Prism Element",    body: "Per-cluster health, storage layout, replication, tasks, alerts." },
];

const FORWARDING = [
  { icon: <BarChart3 size={18} />, name: "Datadog Marketplace", body: "Listed integration. Nutanix telemetry flows into your existing dashboards + SLOs." },
  { icon: <BarChart3 size={18} />, name: "Grafana · Prometheus", body: "Open-format export. Drop into existing dashboards, alerts, and on-call." },
];

const BACKUP = [
  { icon: <ShieldCheck size={18} />, name: "HYCU Protégé", body: "Jobs, retention, immutability windows, and admin-path separation telemetry." },
  { icon: <HardDrive size={18} />,   name: "Nutanix Objects", body: "Object storage inventory, bucket policy state, retention drift." },
  { icon: <Cloud size={18} />,       name: "Wasabi · S3 immutable", body: "Forward enriched flow + audit telemetry to object-lock storage." },
];

const HARDWARE = [
  { icon: <Server size={18} />,  name: "Redfish · iDRAC · iLO", body: "Out-of-band telemetry from Dell, HPE, Lenovo, Supermicro chassis." },
  { icon: <Server size={18} />,  name: "IPMI",                  body: "Legacy hardware coverage where Redfish isn't available." },
  { icon: <Antenna size={18} />, name: "SNMP v2c / v3",         body: "210+ vendor profiles. YAML-extensible for the long tail." },
  { icon: <Network size={18} />, name: "IPFIX · NetFlow v9",    body: "Flow collection with DNS, GeoIP, and ASN enrichment." },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHead
        eyebrow="Product · Integrations"
        title={<>Datadog, Grafana, Prism, AHV — and the systems{" "}<span className="serif-italic gradient-text">teams usually monitor in separate consoles.</span></>}
        sub="Overwatch is the collection + enrichment layer. Where the metrics terminate is your decision — and you can change it without rebuilding ingestion."
      />

      <TrustMarquee />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead eyebrow="Hypervisor + Compute" title={<>The Nutanix layer, in detail.</>} />
          <FeatGrid items={HYPERVISOR} cols={3} />
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead eyebrow="Forwarding + Visualization" title={<>Stay with the platforms{" "}<span className="serif-italic gradient-text">your SRE team already lives in.</span></>} />
          <FeatGrid items={FORWARDING} cols={2} />
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead eyebrow="Backup + Storage" title={<>Recovery posture next to{" "}<span className="serif-italic gradient-text">the cluster it protects.</span></>} />
          <FeatGrid items={BACKUP} cols={3} />
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead eyebrow="Hardware + Network" title={<>Out-of-band signal{" "}<span className="serif-italic gradient-text">before tickets get filed.</span></>} />
          <FeatGrid items={HARDWARE} cols={4} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
