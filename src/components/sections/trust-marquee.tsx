"use client";

const LOGOS: { name: string; slug: string | null }[] = [
  { name: "Nutanix",        slug: "nutanix" },
  { name: "HYCU",           slug: null },
  { name: "Datadog",        slug: "datadog" },
  { name: "Grafana",        slug: "grafana" },
  { name: "Prism Central",  slug: null },
  { name: "Wasabi",         slug: "wasabi" },
  { name: "Redfish",        slug: null },
  { name: "Prometheus",     slug: "prometheus" },
  { name: "IPFIX",          slug: null },
  { name: "SNMP",           slug: null },
];

function LogoMark({ logo }: { logo: { name: string; slug: string | null } }) {
  if (logo.slug) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${logo.slug}/F4F1EA`}
        alt={logo.name}
        width={28}
        height={28}
        loading="lazy"
        className="h-7 w-auto opacity-55 hover:opacity-100 transition-opacity duration-500"
        style={{ filter: "saturate(0.85)" }}
      />
    );
  }
  return (
    <span className="font-mono text-[15px] tracking-[0.10em] text-[var(--color-ink-soft)] opacity-55 hover:opacity-100 transition-opacity duration-500">
      {logo.name}
    </span>
  );
}

export function TrustMarquee() {
  const seq = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="editorial-shell">
        <div className="grid-edit items-center">
          {/* Hanging note, bottom-left, NOT a centered header. */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3 md:pr-6 mb-8 md:mb-0">
            <p className="text-sm leading-[1.5] text-[var(--color-ink-mute)] max-w-[28ch] balance">
              Concentrating the signals serious Nutanix teams already need.
            </p>
            <div className="rule mt-4 max-w-[160px]" />
          </div>

          {/* Marquee, col 4 through 12. */}
          <div
            className="col-span-12 md:col-span-9 overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="inline-flex items-center gap-14 md:gap-20 whitespace-nowrap will-change-transform"
              style={{ animation: "marquee-line 52s linear infinite" }}
            >
              {seq.map((logo, i) => (
                <span key={`${logo.name}-${i}`} className="inline-flex items-center shrink-0">
                  <LogoMark logo={logo} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-line {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
