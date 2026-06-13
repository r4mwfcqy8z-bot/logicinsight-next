import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { StackDescent } from "@/components/sections/stack-descent";
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

      <StackDescent />

      <DashboardPanel
        align="left"
        eyebrow="Overwatch Command Center"
        title={<>One operational view, <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.035em" }}>real-time.</span></>}
        sub="Eight KPIs at a glance, an environment health radar, platform status across Prism, SNMP, HYCU, Redfish, and the Active Alerts queue."
        src="/dashboards/command-center.webp"
        alt="Overwatch Command Center"
        width={2080}
        height={1003}
        path="/command-center"
      />

      <FiveEngines />
      <Forwarding />
      <WhyLogicInsight />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
