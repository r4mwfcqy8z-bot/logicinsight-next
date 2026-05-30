interface LogoProps {
  className?: string;
  height?: number;
}

/**
 * Logic Insight wordmark + fingerprint mark.
 * Recreated from the official brand asset.
 */
export function Logo({ className, height = 28 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 220 36"
      className={className}
      style={{ height }}
      role="img"
      aria-label="Logic Insight"
    >
      <defs>
        <linearGradient id="li-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C39BFF" />
          <stop offset="60%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="li-insight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="55%" stopColor="#D7C2FF" />
          <stop offset="100%" stopColor="#FF6B9C" />
        </linearGradient>
      </defs>

      {/* Fingerprint mark — 4 concentric arcs + center dot */}
      <g transform="translate(0,2)" stroke="url(#li-mark)" strokeWidth="1.7" fill="none" strokeLinecap="round">
        <path d="M16 4 C 8 4 4 9 4 16 C 4 23 8 28 16 28" />
        <path d="M16 8 C 10 8 8 11 8 16 C 8 21 10 24 16 24" opacity="0.85" />
        <path d="M16 12 C 12 12 11 13 11 16 C 11 19 12 20 16 20" opacity="0.65" />
        <circle cx="16" cy="16" r="1.6" fill="url(#li-mark)" stroke="none" />
      </g>

      {/* Wordmark */}
      <text x="44" y="24" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.04em" fill="#FAF7FF">LOGIC</text>
      <text x="103" y="24" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.04em" fill="url(#li-insight)">INSIGHT</text>
    </svg>
  );
}
