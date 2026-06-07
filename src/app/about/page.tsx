import type { Metadata } from "next";
import AboutView from "./view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Logic Insight built Overwatch, the engineers behind it, and how to reach the team about reducing Nutanix console sprawl.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutView />;
}
