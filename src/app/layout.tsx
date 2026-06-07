import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LenisProvider } from "@/components/lenis-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollAmbient } from "@/components/wow/scroll-ambient";
import { CommandPalette } from "@/components/wow/command-palette";
import { PageTransition } from "@/components/wow/page-transition";
import "./globals.css";

const SITE_DESC =
  "Overwatch by Logic Insight keeps your Nutanix stack in one operational view. One local appliance, full-stack visibility across clusters, hardware, network, and backups, with ML-driven anomaly detection and optional Datadog or Grafana forwarding.";

export const metadata: Metadata = {
  title: {
    default: "Logic Insight Overwatch: Nutanix observability in one operational view",
    template: "%s · Logic Insight",
  },
  description: SITE_DESC,
  metadataBase: new URL("https://logicinsight.io"),
  applicationName: "Logic Insight Overwatch",
  keywords: [
    "Nutanix monitoring",
    "Nutanix observability",
    "HCI monitoring",
    "Prism Central monitoring",
    "AHV monitoring",
    "Redfish monitoring",
    "SNMP monitoring",
    "HYCU backup monitoring",
    "Nutanix capacity planning",
    "Nutanix Datadog",
    "Nutanix Grafana",
    "infrastructure monitoring appliance",
  ],
  authors: [{ name: "Logic Insight", url: "https://logicinsight.io" }],
  creator: "Logic Insight",
  publisher: "Logic Insight",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Logic Insight",
    locale: "en_US",
    url: "https://logicinsight.io",
    title: "Logic Insight Overwatch: Nutanix observability in one operational view",
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Insight Overwatch: Nutanix observability in one operational view",
    description: SITE_DESC,
  },
  category: "technology",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://logicinsight.io/#organization",
      name: "Logic Insight",
      url: "https://logicinsight.io",
      description: SITE_DESC,
      email: "contact@logicinsight.io",
      telephone: "+1-407-513-2359",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://logicinsight.io/#website",
      url: "https://logicinsight.io",
      name: "Logic Insight",
      publisher: { "@id": "https://logicinsight.io/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Overwatch by Logic Insight",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Linux appliance",
      description: SITE_DESC,
      offers: {
        "@type": "Offer",
        price: "7",
        priceCurrency: "USD",
        description: "Self-Hosted, per core per month",
      },
      publisher: { "@id": "https://logicinsight.io/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <LenisProvider />
        <ScrollAmbient intensity={0.85} />
        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />
        <Nav />
        <CommandPalette />
        <main className="relative z-[2]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
