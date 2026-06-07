import type { Metadata } from "next";
import SecurityView from "./view";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Overwatch secures one local operations platform for Nutanix and adjacent infrastructure: TLS everywhere, LDAP and Active Directory, Fernet-encrypted credentials, and localhost-isolated services.",
  alternates: { canonical: "/security" },
};

export default function Page() {
  return <SecurityView />;
}
