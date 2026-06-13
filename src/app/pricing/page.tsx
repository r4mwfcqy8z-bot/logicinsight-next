import type { Metadata } from "next";
import PricingView from "./view";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageLd } from "@/lib/structured-data";
import { PRICING_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Overwatch pricing: $7 per core per month self-hosted, Monitoring as a Service, or buy through your marketplace. One license, the full platform, no add-on fees.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageLd(PRICING_FAQ)} />
      <PricingView />
    </>
  );
}
