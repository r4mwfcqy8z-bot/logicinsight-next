import type { Metadata } from "next";
import ContactView from "./view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Logic Insight about evaluating Overwatch for your Nutanix environment. Email, office, enterprise inquiries, and a direct message form.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactView />;
}
