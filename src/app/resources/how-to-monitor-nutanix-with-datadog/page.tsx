import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

export const metadata = { title: "How to monitor Nutanix with Datadog" };

const RECOMMENDED = [
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Use a typed collector",   body: "Pull from Prism API v3 plus Redfish plus IPFIX rather than generic exporters. Keep metric semantics intact." },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Filter at the source",    body: "Forward enriched metrics, not raw events. Cloud analytics cost stays predictable." },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Keep evidence local",     body: "Store the full-fidelity copy on-prem. Forward summaries to Datadog for SRE visibility." },
];

const PITFALLS = [
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Scraping Prism UI",            body: "UI scraping breaks on upgrade. Always go through the typed API." },
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Sending raw flow records",      body: "Datadog ingest costs scale poorly with raw flows. Send aggregates plus anomalies." },
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Skipping hardware telemetry",   body: "Generic Datadog agents miss Redfish and IPMI. Hardware degradation surfaces too late." },
];

const FOR = [
  { name: "Teams already on Datadog",   body: "Existing SLOs, on-call rotations, and runbooks: keep them. Nutanix telemetry just appears in the right places." },
  { name: "Multi-cluster operators",    body: "One Datadog dashboard across every Nutanix cluster, without one Datadog Agent per cluster." },
];

export default function HowToDatadog() {
  return (
    <>
      <PageHead
        eyebrow="Guide · Datadog"
        title={
          <>
            How to monitor Nutanix{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              with Datadog.
            </span>
          </>
        }
        sub="The recommended approach, the common pitfalls, and the teams this guide is for."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Recommended approach"
            title={
              <>
                Three rules{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  that save quarters.
                </span>
              </>
            }
          />
          <FeatGrid items={RECOMMENDED} cols={3} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Common pitfalls"
            title={
              <>
                Three mistakes to{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  avoid.
                </span>
              </>
            }
          />
          <FeatGrid items={PITFALLS} cols={3} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Who this fits best"
            title={
              <>
                If this is your team,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  it is your guide.
                </span>
              </>
            }
          />
          <FeatGrid items={FOR} cols={2} />
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-shell max-w-[800px]">
          <div className="text-center">
            <Sparkles className="mx-auto text-[var(--color-p-300)] mb-5" size={28} strokeWidth={1.5} />
            <p className="editorial-lede balance max-w-[34ch] mx-auto">
              Overwatch is the appliance that bundles all of this: typed collection, filtered forwarding, Datadog Marketplace bundling.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
