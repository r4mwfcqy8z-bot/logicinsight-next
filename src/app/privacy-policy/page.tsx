import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyDoc } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Logic Insight privacy policy covering data collection, ML processing, cookies, GDPR and CCPA rights, and data protection practices.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <LegalPage doc={privacyDoc} />;
}
