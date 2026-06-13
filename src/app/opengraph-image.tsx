import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const dynamic = "force-static";
export const alt = "Logic Insight Overwatch: Nutanix observability in one operational view";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Overwatch",
    title: "Nutanix observability in one operational view",
    sub: "One local appliance. Full-stack visibility with ML-driven anomaly detection.",
  });
}
