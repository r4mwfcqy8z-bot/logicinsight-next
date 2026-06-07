import type { Metadata } from "next";
import PricingView from "./view";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Overwatch pricing: $7 per core per month self-hosted, Monitoring as a Service, or buy through your marketplace. One license, the full platform, no add-on fees.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return <PricingView />;
}
