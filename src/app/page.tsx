import { Hero } from "@/components/sections/hero";
import { CoverageStats } from "@/components/sections/coverage-stats";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { CoverageBento } from "@/components/sections/coverage-bento";
import { NutanixFirst } from "@/components/sections/nutanix-first";
import { FiveEngines } from "@/components/sections/five-engines";
import { Forwarding } from "@/components/sections/forwarding";
import { WhyLogicInsight, FinalCTA } from "@/components/sections/why-and-cta";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { HomeFAQ } from "@/components/sections/home-faq";
import { HomepageLoader } from "@/components/wow/homepage-loader";

export default function HomePage() {
  return (
    <>
      <HomepageLoader />
      <Hero />
      <TrustMarquee />
      <CoverageStats />
      <NutanixFirst />

      <DashboardPanel
        align="left"
        eyebrow="Overwatch Command Center"
        title={<>One operational view, <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.035em" }}>real-time.</span></>}
        sub="Eight KPIs at a glance, an environment health radar, platform status across Prism, SNMP, HYCU, Redfish, and the Active Alerts queue."
        src="/dashboards/command-center.png"
        alt="Overwatch Command Center"
        width={2080}
        height={1003}
        path="/command-center"
      />

      <CoverageBento />

      <DashboardPanel
        align="right"
        eyebrow="NetFlow WAN Explorer"
        title={<>East-west traffic, top talkers, threats. <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.035em" }}>On one map.</span></>}
        sub="IPFIX and NetFlow with DNS, GeoIP, and ASN enrichment, anchored to the alert that triggered, not assembled later."
        src="/dashboards/netflow.png"
        alt="Overwatch NetFlow WAN Explorer"
        width={2080}
        height={1003}
        path="/netflow/wan"
      />

      <FiveEngines />
      <Forwarding />
      <WhyLogicInsight />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
