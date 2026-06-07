import type { Metadata } from "next";
import FreeTrialView from "./view";

export const metadata: Metadata = {
  title: "Free Trial",
  description:
    "Try Overwatch free for 14 days in your own environment. The full appliance, every collector, every dashboard, no credit card.",
  alternates: { canonical: "/free-trial" },
};

export default function Page() {
  return <FreeTrialView />;
}
