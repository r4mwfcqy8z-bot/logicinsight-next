import type { Metadata } from "next";
import MaaSView from "./view";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageLd } from "@/lib/structured-data";
import { MAAS_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Monitoring as a Service",
  description:
    "Logic Insight deploys, tunes, and operates Overwatch for you. Dashboards, alert engineering, ML baselines, and quarterly reviews across your Nutanix environment.",
  alternates: { canonical: "/solutions/monitoring-as-a-service" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageLd(MAAS_FAQ)} />
      <MaaSView />
    </>
  );
}
