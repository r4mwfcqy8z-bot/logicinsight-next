import { Server, Activity, HardDrive, GitMerge, BarChart3 } from "lucide-react";
import { PageHead, SectionHead, FeatGrid, StatementBand } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = { title: "AHV Monitoring" };

const EXPOSES = [
  { icon: <Server size={18} />,    name: "Host and hypervisor visibility", body: "Per-host CPU, memory, scheduling pressure, and Acropolis-level state, alongside the CVM telemetry it depends on." },
  { icon: <Activity size={18} />,  name: "VM and workload performance",    body: "Per-VM CPU, memory, IO, latency, retransmits, and snapshot lineage." },
  { icon: <HardDrive size={18} />, name: "Storage and vDisk context",      body: "vDisk-level read/write patterns, hot-spot detection, and cluster-wide storage attribution." },
  { icon: <GitMerge size={18} />,  name: "Cross-layer correlation",        body: "Host events, VM performance, and storage behavior stitched together so root-cause analysis stops crossing tools." },
];

const METRICS = [
  { icon: <Server size={18} />,    name: "Per-host metrics",       body: "CPU runtime, memory pressure, network traffic, scheduling latency, and host-level events." },
  { icon: <Activity size={18} />,  name: "Per-VM metrics",         body: "CPU, memory, vDisk IO, network attachment, and per-VM event history." },
  { icon: <BarChart3 size={18} />, name: "Hypervisor-level events", body: "Acropolis events, scheduling state, host membership changes, and migration history." },
];

export default function AHVPage() {
  return (
    <>
      <PageHead
        eyebrow="AHV Monitoring"
        title={<>AHV monitoring that{" "}<span className="serif-italic gradient-text">knows how Nutanix works.</span></>}
        sub="Acropolis-aware telemetry, host, hypervisor, VM, network, anchored to the cluster that owns them."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What Overwatch exposes in AHV"
            title={<>The Acropolis layer,{" "}<span className="serif-italic gradient-text">in detail.</span></>}
          />
          <FeatGrid items={EXPOSES} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="AHV metrics Overwatch collects"
            title={<>Three signal layers{" "}<span className="serif-italic gradient-text">surface as one timeline.</span></>}
          />
          <FeatGrid items={METRICS} cols={3} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="Why teams care about AHV monitoring"
            title={<>Hypervisor health{" "}<span className="serif-italic gradient-text">touches everything above it.</span></>}
            sub="When scheduling pressure rises or a host event lands, every VM running on top of that host feels it within seconds. AHV-aware telemetry surfaces the cause before the workloads do."
          />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="How it fits the broader cluster view"
            title={<>Same console.{" "}<span className="serif-italic gradient-text">Same operating story.</span></>}
            sub="AHV telemetry sits in the same Overwatch view as cluster, storage, hardware, and backup signals, so incidents look like one operating story instead of four disconnected ones."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
