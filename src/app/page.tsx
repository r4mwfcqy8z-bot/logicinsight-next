import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { StackDescent } from "@/components/sections/stack-descent";
import { NutanixFirst } from "@/components/sections/nutanix-first";
import { FiveEngines } from "@/components/sections/five-engines";
import { Forwarding } from "@/components/sections/forwarding";
import { WhyLogicInsight, FinalCTA } from "@/components/sections/why-and-cta";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { HomeFAQ } from "@/components/sections/home-faq";
import { HomepageLoader } from "@/components/wow/homepage-loader";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageLd } from "@/lib/structured-data";
import { HOME_FAQ } from "@/content/faq";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageLd(HOME_FAQ)} />
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

      <NutanixFirst />

      <FiveEngines />
      <Forwarding />
      <WhyLogicInsight />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
