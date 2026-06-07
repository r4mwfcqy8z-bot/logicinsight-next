import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Logic Insight Overwatch: Nutanix observability in one operational view";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            OVERWATCH
          </div>
          <div
            style={{
              fontSize: 70,
              color: "#F4F1EA",
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 940,
              display: "flex",
            }}
          >
            Nutanix observability in one operational view
          </div>
          <div style={{ fontSize: 28, color: "#A99FB5", maxWidth: 860, display: "flex" }}>
            One local appliance. Full-stack visibility with ML-driven anomaly detection.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#8A7E96" }}>
          <span>Clusters</span>
          <span style={{ color: "#5A5266" }}>/</span>
          <span>Hardware</span>
          <span style={{ color: "#5A5266" }}>/</span>
          <span>Network</span>
          <span style={{ color: "#5A5266" }}>/</span>
          <span>Backups</span>
        </div>
      </div>
    ),
    size
  );
}
