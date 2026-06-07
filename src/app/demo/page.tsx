import type { Metadata } from "next";
import DemoView from "./view";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Book a 30-minute Overwatch walkthrough with a Logic Insight engineer, tailored to your Nutanix environment. No slide deck.",
  alternates: { canonical: "/demo" },
};

export default function Page() {
  return <DemoView />;
}
