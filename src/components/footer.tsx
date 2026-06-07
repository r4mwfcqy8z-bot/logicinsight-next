import Link from "next/link";
import { Logo } from "./logo";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Features",             href: "/product/features" },
      { label: "Cluster Monitoring",   href: "/product/cluster-monitoring" },
      { label: "Predictive Analytics", href: "/product/predictive-analytics" },
      { label: "Network Flow",         href: "/product/network-flow-analysis" },
      { label: "HCI Monitoring",       href: "/product/hci-monitoring" },
      { label: "SNMP Monitoring",      href: "/product/snmp-monitoring" },
      { label: "AHV Monitoring",       href: "/product/ahv-monitoring" },
      { label: "AI Assistant",         href: "/product/ai-assistant" },
      { label: "Architecture",         href: "/product/architecture" },
      { label: "Integrations",         href: "/product/integrations" },
    ],
  },
  {
    title: "Coverage",
    links: [
      { label: "Prism Central",   href: "/product/prism-central-monitoring" },
      { label: "Redfish / IPMI",  href: "/product/redfish-monitoring" },
      { label: "HYCU backups",    href: "/product/hycu-monitoring" },
      { label: "Datadog",         href: "/product/nutanix-datadog" },
      { label: "Grafana",         href: "/product/nutanix-grafana" },
      { label: "vs native Prism", href: "/product/nutanix-monitoring-vs-prism" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Use Cases",                href: "/solutions/use-cases" },
      { label: "Monitoring as a Service",  href: "/solutions/monitoring-as-a-service" },
      { label: "Pricing",                  href: "/pricing" },
      { label: "Partners",                 href: "/partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Blog",     href: "/blog" },
      { label: "Resources",href: "/resources" },
      { label: "Contact",  href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-[2] mt-12 border-t border-white/8 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12">
          <div className="grid gap-4">
            <Link href="/" aria-label="Logic Insight home">
              <Logo height={28} />
            </Link>
            <p className="text-[var(--color-ink-soft)] max-w-[320px]">
              Nutanix observability that thinks ahead.
            </p>
            <address className="not-italic text-sm text-[var(--color-ink-mute)] leading-relaxed">
              Orlando, FL
              <br />
              <a href="mailto:contact@logicinsight.io" className="text-[var(--color-p-300)] hover:text-[var(--color-p-200)]">
                contact@logicinsight.io
              </a>
              <br />
              <a href="tel:+14075132359" className="text-[var(--color-p-300)] hover:text-[var(--color-p-200)]">
                +1-407-513-2359
              </a>
            </address>
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-4 gap-6" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="mono-eyebrow text-white mb-3">{c.title}</h4>
                {c.links.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="block text-sm py-1 text-[var(--color-ink-mute)] hover:text-[var(--color-p-300)] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-wrap justify-between gap-3 text-xs text-[var(--color-ink-faint)]">
          <small>© 2026 Logic Insight, LLC. All rights reserved.</small>
          <small className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-400)]" />
            All systems operational
          </small>
        </div>
      </div>
    </footer>
  );
}
