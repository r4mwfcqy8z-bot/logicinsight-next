import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

interface OgCardOptions {
  /** Small uppercase label above the title (e.g. "OVERWATCH" or a blog category). */
  eyebrow: string;
  /** The headline. Font size adapts to length so long titles still fit. */
  title: string;
  /** Optional supporting line under the title. */
  sub?: string;
  /** Optional footer tags. Defaults to the platform coverage set. */
  tags?: string[];
}

/** Title size scales down as the headline gets longer, so blog titles never overflow. */
function titleSize(title: string): number {
  const n = title.length;
  if (n <= 46) return 66;
  if (n <= 70) return 52;
  return 44;
}

/**
 * Shared Overwatch social card. One design, used by the root OG image and every
 * per-page card, so previews stay on-brand everywhere. Build-time only.
 */
export function renderOgCard({ eyebrow, title, sub, tags }: OgCardOptions) {
  const footer = tags ?? ["Clusters", "Hardware", "Network", "Backups"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08060E",
          padding: "76px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(139,92,246,0.5), rgba(139,92,246,0) 62%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,107,156,0.22), rgba(255,107,156,0) 62%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 13,
              background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 31, color: "#F4F1EA", fontWeight: 600, letterSpacing: -1 }}>
            Logic Insight
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 26, color: "#A78BFA", fontWeight: 600, letterSpacing: 6 }}>
            {eyebrow.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: titleSize(title),
              color: "#F4F1EA",
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
          {sub && (
            <div style={{ fontSize: 28, color: "#A99FB5", maxWidth: 880, display: "flex" }}>
              {sub}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#8A7E96" }}>
          {footer.map((t, i) => (
            <div key={t} style={{ display: "flex", gap: 16 }}>
              {i > 0 && <span style={{ color: "#5A5266" }}>/</span>}
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
