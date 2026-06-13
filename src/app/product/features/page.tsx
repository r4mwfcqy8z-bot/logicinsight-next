import type { Metadata } from "next";
import FeaturesView from "./view";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Overwatch is a self-contained local appliance that collects, enriches, analyzes, publishes, and operates Nutanix observability, with hardware, network, and backup coverage around it.",
  alternates: { canonical: "/product/features" },
};

export default function Page() {
  return <FeaturesView />;
}
