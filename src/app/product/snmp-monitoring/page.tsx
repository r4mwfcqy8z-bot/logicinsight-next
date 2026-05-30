import { Search, Network, Activity, Box, Cable, Workflow } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "SNMP Monitoring" };

const PROBLEM = [
  { name: "Console sprawl",  body: "A dedicated NMS lives in its own console with its own alerting model — disconnected from cluster operations." },
  { name: "Vendor lock-in",  body: "Most NMS tools only really cover one or two vendors well. Mixed-fleet environments end up with multiple tools." },
  { name: "Stranded context", body: "Network anomalies arrive without the workload context they need to be useful." },
];

const FEATURES = [
  { icon: <Search size={18} />,   name: "Auto-discovery",   body: "Point Overwatch at a subnet; devices and links populate. Re-runs continuously." },
  { icon: <Workflow size={18} />, name: "Topology mapping", body: "LLDP / CDP neighbor discovery across the fleet. Topology updates in minutes." },
  { icon: <Activity size={18} />, name: "Port-level traffic", body: "Per-port utilization, errors, retransmits. Saturated links surface with workload context." },
  { icon: <Box size={18} />,      name: "Config backup",     body: "Snapshot running config on a schedule. Drift detection across the fleet." },
  { icon: <Cable size={18} />,    name: "210+ vendor profiles", body: "Arista, Cisco, Juniper, HPE, Cumulus, MikroTik — plus YAML extensibility for the long tail." },
  { icon: <Network size={18} />,  name: "Trap + syslog",     body: "Receivers built in. Severities normalized into the same alert model as the rest of the appliance." },
];

export default function SNMPMonitoringPage() {
  return (
    <>
      <PageHead
        eyebrow="Product · SNMP Monitoring"
        title={<>Network monitoring{" "}<span className="serif-italic gradient-text">for every device on the wire.</span></>}
        sub="A real NMS, inside the same appliance as Nutanix. Mixed-vendor coverage, live topology, config state — without the second console."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="The problem"
            title={<>Network monitoring{" "}<span className="serif-italic gradient-text">lives in too many places.</span></>}
          />
          <FeatGrid items={PROBLEM} cols={3} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="What you get"
            title={<>Everything a serious NMS does —{" "}<span className="serif-italic gradient-text">beside Nutanix.</span></>}
          />
          <FeatGrid items={FEATURES} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
