import { Server, Thermometer, Cpu, HardDrive } from "lucide-react";
import { PageHead, SectionHead, FeatGrid, StatementBand } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "Redfish Monitoring" };

const COVERS = [
  { icon: <Server size={18} />,      name: "Vendor-aware hardware coverage", body: "Dell iDRAC, HPE iLO, Lenovo XClarity, Supermicro, agentless via Redfish + IPMI fallback." },
  { icon: <Thermometer size={18} />, name: "Thermal + power",                 body: "PSU efficiency, inlet temps, fan speeds, and component-level thermal trends." },
  { icon: <Cpu size={18} />,         name: "Firmware + CPU health",           body: "BIOS / BMC versions across the fleet plus per-CPU correctable / uncorrectable error rates." },
  { icon: <HardDrive size={18} />,   name: "Disk SMART context",              body: "Predictive failure signals tied to the host they affect, before tickets get filed." },
];

export default function RedfishPage() {
  return (
    <>
      <PageHead
        eyebrow="Redfish Monitoring"
        title={<>Hardware signal{" "}<span className="serif-italic gradient-text">before tickets get filed.</span></>}
        sub="Vendor-aware Redfish + IPMI coverage that ties power, thermal, firmware, and disk health to the cluster running on top of it."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Vendor-aware hardware coverage"
            title={<>Four layers,{" "}<span className="serif-italic gradient-text">one console.</span></>}
          />
          <FeatGrid items={COVERS} cols={4} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="Why this matters for Nutanix teams"
            title={<>Hardware health{" "}<span className="serif-italic gradient-text">next to cluster events.</span></>}
            sub="When a host disk degrades or a PSU starts dropping efficiency, the VM impact is already in motion. Out-of-band hardware telemetry next to the cluster view collapses cause and effect onto one screen."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
