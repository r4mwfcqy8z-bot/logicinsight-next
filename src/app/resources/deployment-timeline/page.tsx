import type { Metadata } from "next";
import DeploymentTimelineView from "./view";

export const metadata: Metadata = {
  title: "Deployment Timeline",
  description:
    "How fast Logic Insight Overwatch deploys: from a single self-hosted appliance to a cluster-wide signal in under an hour, with the managed turnkey path alongside.",
  alternates: { canonical: "/resources/deployment-timeline" },
};

export default function Page() {
  return <DeploymentTimelineView />;
}
