import { ShieldCheck, Clock, HardDrive, AlertCircle } from "lucide-react";
import { PageHead, SectionHead, FeatGrid, StatementBand } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = {
  title: "HYCU Monitoring",
  description:
    "Backup compliance, target utilization, and job health in the same operator view as Nutanix, not stranded in a separate console. Protection posture beside the cluster it protects.",
  alternates: { canonical: "/product/hycu-monitoring" },
};

const COVERS = [
  { icon: <ShieldCheck size={18} />, name: "Backup compliance",         body: "Per-workload protection state, what is, isn&apos;t, and shouldn&apos;t be, surfaced as posture, not just status." },
  { icon: <Clock size={18} />,       name: "Job status and duration",   body: "Success ratios, runtime drift, and failed-job context anchored to the cluster that ran them." },
  { icon: <HardDrive size={18} />,   name: "Target capacity and utilization", body: "Object storage utilization, lock-window tracking, and growth projection across backup targets." },
  { icon: <AlertCircle size={18} />, name: "Protection drift",           body: "Workloads silently falling out of policy, surfaced before audit time." },
];

export default function HYCUPage() {
  return (
    <>
      <PageHead
        eyebrow="HYCU Monitoring"
        title={<>HYCU posture{" "}<span className="serif-italic gradient-text">next to the cluster it protects.</span></>}
        sub="Backup compliance, target utilization, and job health, in the same operator view as Nutanix, not stranded in a separate console."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Coverage"
            title={<>Posture metrics that{" "}<span className="serif-italic gradient-text">matter at audit time.</span></>}
          />
          <FeatGrid items={COVERS} cols={2} />
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="editorial-shell">
          <StatementBand
            eyebrow="Why this page matters"
            title={<>&quot;The job ran&quot; isn&apos;t the same as{" "}<span className="serif-italic gradient-text">&quot;the recovery works.&quot;</span></>}
            sub="Most backup dashboards report job success. Few report whether the protection model would actually hold up under a real incident, and that&apos;s the question audit and leadership end up asking."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
