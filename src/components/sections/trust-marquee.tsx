const LOGOS = [
  "NUTANIX", "HYCU", "DATADOG", "GRAFANA", "PRISM CENTRAL",
  "WASABI", "REDFISH", "UBUNTU LTS", "IPFIX", "SNMP",
];

export function TrustMarquee() {
  const seq = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-16 overflow-hidden">
      <p className="mono-eyebrow text-center text-[var(--color-ink-mute)] mb-8">
        Concentrating the signals serious Nutanix teams already need
      </p>

      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="inline-flex gap-20 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {seq.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="inline-flex items-center gap-2 font-bold text-[18px] tracking-[0.08em] text-[var(--color-ink-mute)] hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-p-500)]/50 shrink-0" />
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
