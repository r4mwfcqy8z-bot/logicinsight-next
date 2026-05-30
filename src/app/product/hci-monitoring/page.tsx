import { Server, HardDrive, Network, BarChart3, Boxes, Activity } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "HCI Monitoring" };

const WHAT = [
  { icon: <Server size={18} />,    name: "Nutanix clusters",   body: "Health, capacity, replication factor, container layout, CVM telemetry." },
  { icon: <HardDrive size={18} />, name: "Physical hardware",  body: "Redfish/IPMI signals tied to the host they run on — disk, PSU, fan, thermal." },
  { icon: <Network size={18} />,   name: "Network fabric",     body: "Switches, links, topology, traps, plus IPFIX east-west flow context." },
  { icon: <Activity size={18} />,  name: "Workload performance", body: "Per-VM latency, IOPS, retransmits — anchored to the host and storage tier." },
  { icon: <Boxes size={18} />,     name: "Protection state",   body: "HYCU jobs and Nutanix-native snapshots in one place." },
  { icon: <BarChart3 size={18} />, name: "Cross-domain analytics", body: "ML baselines that learn what your converged stack normally looks like." },
];

export default function HCIMonitoringPage() {
  return (
    <>
      <PageHead
        eyebrow="Product · HCI Monitoring"
        title={<>Nutanix HCI monitoring{" "}<span className="serif-italic gradient-text">built for converged infrastructure.</span></>}
        sub="Converged stacks fail across compute, storage, and network at the same time. HCI-aware monitoring keeps the cause and effect on the same screen."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="Why HCI changes monitoring"
            title={<>Generic VM monitoring{" "}<span className="serif-italic gradient-text">misses half the picture.</span></>}
            sub="In a converged environment, a noisy VM affects the same nodes that serve storage, the same NICs that carry replication traffic, and the same controllers that hold the cluster together. A flat monitoring model can't show those couplings."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHead
            eyebrow="What Overwatch covers"
            title={<>Every layer of the HCI stack —{" "}<span className="serif-italic gradient-text">in one console.</span></>}
          />
          <FeatGrid items={WHAT} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
