import { TrendingUp, Activity, BarChart3, Brain, Building2, Users, Briefcase } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const metadata = {
  title: "Nutanix Capacity Planning and Predictive Analytics",
  description:
    "Compute and storage runway with confidence bands, per-VM right-sizing, and seasonal-baseline anomaly detection. Capacity forecasting in weeks, not averages.",
  alternates: { canonical: "/product/predictive-analytics" },
};

const LAYERS = [
  { icon: <BarChart3 size={18} />,   name: "Compute forecasting",  body: "Per-cluster CPU and memory runway with confidence bands, broken out by workload class." },
  { icon: <Activity size={18} />,    name: "Storage forecasting",  body: "Container-level tier consumption, dedupe-aware projection, and tier-saturation thresholds." },
  { icon: <TrendingUp size={18} />,  name: "Right-sizing",          body: "Per-VM CPU and memory reclaim opportunities ranked by impact." },
  { icon: <Brain size={18} />,       name: "Anomaly surfacing",     body: "Departures from seasonal baseline that hint at drift before the threshold trips." },
];

const FROM = [
  { name: "Raw metric collection",    body: "Compute, storage, network, and workload metrics arrive enriched with cluster + asset context." },
  { name: "Seasonal baseline modeling", body: "7×24 baselines learn each cluster's working hours, replication windows, and backup patterns." },
  { name: "Predictive scoring",       body: "Forecasts include explicit confidence bands. You get runway-in-weeks, not just averages." },
  { name: "Actionable recommendations", body: "Right-sizing, capacity reallocation, and timing windows surface alongside the prediction." },
];

const WHO = [
  { icon: <Building2 size={18} />, name: "Capacity Planning Teams",  body: "Quarterly runway numbers with sensitivity bands the finance team will actually act on." },
  { icon: <Users size={18} />,     name: "Operations & SRE Teams",   body: "Early warning on departures from normal seasonal behavior, before tickets fire." },
  { icon: <Briefcase size={18} />, name: "IT Leadership & Finance", body: "30-second exec summaries: uptime, runway, incidents, trends, drawn from the same source." },
];

export default function PredictiveAnalyticsPage() {
  return (
    <>
      <PageHead
        eyebrow="Predictive Analytics"
        title={<>Nutanix capacity planning{" "}<span className="serif-italic gradient-text">and predictive analytics.</span></>}
        sub="Traditional monitoring is a rear-view mirror. Overwatch&apos;s ML engine learns each cluster&apos;s seasonal personality and projects runway forward with explicit confidence."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Traditional Monitoring Is a Rearview Mirror"
            title={<>Static thresholds tell you{" "}<span className="serif-italic gradient-text">what already broke.</span></>}
            sub="Threshold-based alerting fires after the fact. Capacity planning by spreadsheet leaves you guessing. Both are reactive by design, and infrastructure operations needs to be the opposite."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Forecasting Across Every Resource Layer"
            title={<>Compute, storage, workloads,{" "}<span className="serif-italic gradient-text">projected.</span></>}
          />
          <FeatGrid items={LAYERS} cols={2} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="From Raw Metrics to Actionable Predictions"
            title={<>Four steps from telemetry{" "}<span className="serif-italic gradient-text">to a recommendation.</span></>}
          />
          <FeatGrid items={FROM} cols={4} />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="ML That Gets Smarter Over Time"
            title={<>Baselines re-learn{" "}<span className="serif-italic gradient-text">as your environment changes.</span></>}
            sub="New clusters, workload changes, infrastructure upgrades, the models adapt continuously so forecasts stay accurate as the truth shifts."
          />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Who Uses Predictive Analytics"
            title={<>From the SRE bridge to{" "}<span className="serif-italic gradient-text">the board deck.</span></>}
          />
          <FeatGrid items={WHO} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
