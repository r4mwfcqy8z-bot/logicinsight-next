import type { Metadata } from "next";
import ResourcesView from "./view";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Core coverage pages, buyer guides, and editorial for Nutanix and infrastructure visibility. Find the angle you need in two clicks.",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return <ResourcesView />;
}
