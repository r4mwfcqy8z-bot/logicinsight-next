import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

export const metadata = { title: "How to monitor Nutanix with Grafana" };

const RECOMMENDED = [
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Typed Prometheus exposition", body: "Expose Prism plus Redfish plus flow context as proper Prometheus metric families, not flat strings." },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Reuse the dashboard library",  body: "Do not hand-build cluster dashboards from raw queries. Drop in operator-grade panels." },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, name: "Pick your tier deliberately",  body: "Self-hosted Grafana for full control. Grafana Cloud for less infra. Same export, your choice." },
];

const PITFALLS = [
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Generic SNMP-only exporters", body: "Miss Prism-specific signals: protection state, replication, cluster-level telemetry." },
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Long flow retention in TSDB", body: "Cardinality explodes. Keep flow context locally, aggregate before forwarding." },
  { icon: <AlertTriangle size={18} strokeWidth={1.5} />, name: "Skipping hardware health",     body: "Without Redfish, host-level degradation surfaces only after the cluster alert fires." },
];

const FOR = [
  { name: "Self-hosted Grafana shops",   body: "You already operate it. Drop in the Nutanix dashboards. Done." },
  { name: "Teams considering Grafana Cloud", body: "Filtered forwarding keeps Cloud ingest costs predictable. Full-fidelity copy stays on-prem." },
];

export default function HowToGrafana() {
  return (
    <>
      <PageHead
        eyebrow="Guide · Grafana"
        title={
          <>
            How to monitor Nutanix{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              with Grafana.
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
            <p className="editorial-lede balance max-w-[36ch] mx-auto">
              Overwatch is the appliance. Typed Prometheus exposition, pre-built Nutanix dashboards, filtered forwarding to Grafana Cloud when you choose it.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
