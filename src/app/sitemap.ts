import type { MetadataRoute } from "next";

const BASE = "https://logicinsight.io";

const TOP = ["", "/pricing", "/about", "/blog", "/resources", "/demo", "/free-trial", "/partners", "/contact"];

const SOLUTIONS = ["/solutions/use-cases", "/solutions/monitoring-as-a-service"];

const PRODUCT = [
  "/product/features",
  "/product/architecture",
  "/product/ai-assistant",
  "/product/integrations",
  "/product/cluster-monitoring",
  "/product/predictive-analytics",
  "/product/network-flow-analysis",
  "/product/hci-monitoring",
  "/product/snmp-monitoring",
  "/product/hycu-monitoring",
  "/product/redfish-monitoring",
  "/product/prism-central-monitoring",
  "/product/ahv-monitoring",
  "/product/nutanix-datadog",
  "/product/nutanix-grafana",
  "/product/nutanix-monitoring-vs-prism",
];

const GUIDES = [
  "/resources/how-to-monitor-nutanix-with-datadog",
  "/resources/how-to-monitor-nutanix-with-grafana",
];

const BLOG = [
  "/blog/nutanix-capacity-planning-guide",
  "/blog/nutanix-monitoring-tools-compared",
  "/blog/nutanix-monitoring-best-practices",
  "/blog/nutanix-monitoring-checklist",
  "/blog/nutanix-storage-monitoring-containers-vdisks",
  "/blog/vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, freq: MetadataRoute.Sitemap[number]["changeFrequency"]) => ({
    url: `${BASE}${path}/`.replace(/\/+$/, "/"),
    lastModified: now,
    changeFrequency: freq,
    priority,
  });

  return [
    entry("", 1.0, "weekly"),
    ...TOP.filter((p) => p !== "").map((p) => entry(p, 0.9, "weekly")),
    ...PRODUCT.map((p) => entry(p, 0.8, "monthly")),
    ...SOLUTIONS.map((p) => entry(p, 0.8, "monthly")),
    ...GUIDES.map((p) => entry(p, 0.6, "monthly")),
    ...BLOG.map((p) => entry(p, 0.6, "monthly")),
  ];
}
