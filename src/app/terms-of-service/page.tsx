import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsDoc } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Logic Insight terms of service covering subscription licensing, data ownership, payment, liability, and usage policies.",
  alternates: { canonical: "/terms-of-service" },
};

export default function Page() {
  return <LegalPage doc={termsDoc} />;
}
