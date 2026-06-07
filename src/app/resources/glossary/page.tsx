import type { Metadata } from "next";
import GlossaryView from "./view";

export const metadata: Metadata = {
  title: "Nutanix Monitoring Glossary",
  description:
    "Definitions for Nutanix and infrastructure observability terms: AHV, Prism Central, Redfish, SNMP, IPFIX, HYCU, baselines, forwarding, and more.",
  alternates: { canonical: "/resources/glossary" },
};

export default function Page() {
  return <GlossaryView />;
}
