import Link from "next/link";
import { Logo } from "./logo";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Features",        href: "/product/features" },
      { label: "HCI Monitoring",  href: "/product/hci-monitoring" },
      { label: "SNMP Monitoring", href: "/product/snmp-monitoring" },
      { label: "AI Assistant",    href: "/product/ai-assistant" },
      { label: "Architecture",    href: "/product/architecture" },
      { label: "Integrations",    href: "/product/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Use Cases",                href: "/solutions/use-cases" },
      { label: "Monitoring as a Service",  href: "/solutions/monitoring-as-a-service" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Blog",     href: "/blog" },
      { label: "Pricing",  href: "/pricing" },
      { label: "Contact",  href: "/about#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs",     href: "#" },
      { label: "Status",   href: "#" },
      { label: "GitHub",   href: "#" },
      { label: "RSS feed", href: "#" },
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
              425 W Colonial Dr, Ste 303
              <br />
              Orlando, FL 32804
              <br />
              <a href="mailto:contact@logicinsight.io" className="text-[var(--color-p-300)] hover:text-[var(--color-p-200)]">
                contact@logicinsight.io
              </a>
              <br />
              <a href="tel:+14075132359" className="text-[var(--color-p-300)] hover:text-[var(--color-p-200)]">
                +1 (407) 513-2359
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
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-emerald-400)]" style={{ boxShadow: "0 0 10px rgba(52,211,153,0.6)" }} />
            All systems operational
          </small>
          <small>Made in Orlando · for infrastructure operators</small>
        </div>
      </div>
    </footer>
  );
}
