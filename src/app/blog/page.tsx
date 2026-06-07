import type { Metadata } from "next";
import BlogView from "./view";

export const metadata: Metadata = {
  title: "Editorial",
  description:
    "Practitioner writing on Nutanix observability, capacity planning, storage, backups, and the discipline that decides whether monitoring tools actually help.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogView />;
}
