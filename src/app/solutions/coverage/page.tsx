import type { Metadata } from "next";
import CoverageView from "./view";

export const metadata: Metadata = {
  title: "Coverage Explorer",
  description:
    "Explore exactly what Logic Insight Overwatch monitors across Nutanix clusters, hardware, network and flow, backup, and cross-domain analysis.",
  alternates: { canonical: "/solutions/coverage" },
};

export default function Page() {
  return <CoverageView />;
}
