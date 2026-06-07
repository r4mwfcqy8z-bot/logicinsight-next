import type { Metadata } from "next";
import IntegrationsView from "./view";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Integrations across Prism, AHV, hardware, storage, backup, networking, and output platforms like Datadog and Grafana. All included with every Overwatch license, no add-on fees.",
  alternates: { canonical: "/product/integrations" },
};

export default function Page() {
  return <IntegrationsView />;
}
