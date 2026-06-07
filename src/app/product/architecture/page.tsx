import type { Metadata } from "next";
import ArchitectureView from "./view";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Inside the Overwatch appliance: a self-contained on-prem operations platform with one unified collection fabric, local analysis, dashboards, and optional filtered forwarding.",
  alternates: { canonical: "/product/architecture" },
};

export default function Page() {
  return <ArchitectureView />;
}
