import type { Metadata } from "next";
import PartnersView from "./view";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Join the Logic Insight partner ecosystem: Technology, Reseller, Consulting, and Referral programs with deal registration, enablement, co-marketing, and the Partner Portal.",
  alternates: { canonical: "/partners" },
};

export default function Page() {
  return <PartnersView />;
}
