import type { Metadata } from "next";
import UseCasesView from "./view";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Seven real-world Nutanix observability scenarios: capacity planning, root-cause analysis, change impact, alert noise reduction, executive visibility, pre-incident detection, and hardware health.",
  alternates: { canonical: "/solutions/use-cases" },
};

export default function Page() {
  return <UseCasesView />;
}
