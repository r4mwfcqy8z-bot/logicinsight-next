import { Hero } from "@/components/sections/hero";
import { CoverageStats } from "@/components/sections/coverage-stats";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { CoverageBento } from "@/components/sections/coverage-bento";
import { NutanixFirst } from "@/components/sections/nutanix-first";
import { FiveEngines } from "@/components/sections/five-engines";
import { Forwarding } from "@/components/sections/forwarding";
import { WhyLogicInsight, FinalCTA } from "@/components/sections/why-and-cta";
import { CommandCenter } from "@/components/dashboards/command-center";
import { NetFlow } from "@/components/dashboards/netflow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoverageStats />
      <TrustMarquee />
      <NutanixFirst />
      <CommandCenter />
      <NetFlow />
      <CoverageBento />
      <FiveEngines />
      <Forwarding />
      <WhyLogicInsight />
      <FinalCTA />
    </>
  );
}
