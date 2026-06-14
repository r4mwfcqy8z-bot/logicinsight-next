import type { Metadata } from "next";

// This route's page is a client component and cannot export metadata itself,
// so this server segment layout supplies its title, description, and canonical.
export const metadata: Metadata = {
  title: "Nutanix Monitoring vs Native Prism",
  description:
    "What Prism does well and where Overwatch extends it: cross-domain correlation, ML baselines, long-range retention, and one operator console beyond the cluster.",
  alternates: { canonical: "/product/nutanix-monitoring-vs-prism" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
