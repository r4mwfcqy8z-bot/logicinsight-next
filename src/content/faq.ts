/**
 * FAQ content, server-safe (no "use client") so both the visible FAQ components
 * and the server pages' FAQPage JSON-LD read from one source. Keeps structured
 * data in lockstep with what users see, which Google requires.
 */
export interface QA {
  q: string;
  a: string;
}

export const HOME_FAQ: QA[] = [
  {
    q: "Does my data leave my network?",
    a: "No. Overwatch runs as a local appliance and keeps telemetry on-prem by default. Nothing is forwarded unless you explicitly enable it, and forwarding is toggled per stream so you control exactly what leaves.",
  },
  {
    q: "How long does it take to deploy?",
    a: "You can deploy Overwatch into a single Nutanix cluster in under an hour. Self-hosted setup typically runs one to two hours; the fully managed turnkey path is three to five days.",
  },
  {
    q: "Do I have to replace Datadog or Grafana?",
    a: "No. Overwatch sits in front as the Nutanix-aware collection and analysis layer, then forwards filtered, enriched signals to the platforms your team already operates. Pick Datadog, Grafana, or both.",
  },
  {
    q: "Are integrations an extra cost?",
    a: "No. Every integration, Prism, Redfish, IPMI, SNMP, IPFIX/NetFlow, HYCU, and the output platforms, is included in the per-core price. There are no add-on licenses or per-integration fees.",
  },
  {
    q: "What does it actually monitor?",
    a: "818+ Nutanix metrics across Prism Central and Prism Element, plus hardware via Redfish and IPMI, network devices and flow via SNMP and IPFIX, and backup posture via HYCU, all in one operator console.",
  },
  {
    q: "How is it priced?",
    a: "$7 per core per month self-hosted, Monitoring as a Service for a managed path, or through your existing marketplace relationship. A 14-day trial needs no credit card.",
  },
];

export const PRICING_FAQ: QA[] = [
  { q: "Are there add-on licenses or extra fees for specific integrations?", a: "No. Every integration, Prism, Redfish, IPMI, SNMP, IPFIX/NetFlow, HYCU, Datadog forwarding, Grafana forwarding, is included in the per-core price. Pricing is per-core, full stop." },
  { q: "Can I combine models, for example self-hosted plus MaaS?", a: "Yes. Many customers run Self-Hosted in dev and non-prod and MaaS for production. We keep the tooling and data model consistent across environments." },
  { q: "How are Nutanix cores counted?", a: "Total licensed physical cores across your Nutanix clusters. Hyper-threading and logical cores are not counted. Volume discounts are available for 500+ cores." },
  { q: "Is there a minimum commitment?", a: "Monthly billing has no minimum term. Annual terms are available if you want pricing predictability and simpler procurement." },
  { q: "What if my cluster or core count changes?", a: "Counts are reconciled monthly. Scale up immediately; reductions take effect at the next billing cycle." },
  { q: "Do marketplace purchases include the full platform?", a: "Yes. The same product runs across all three paths. The differences are procurement, deployment, and support, not feature access." },
];

export const MAAS_FAQ: QA[] = [
  { q: "Does the Overwatch appliance leave my network?", a: "No. The appliance runs entirely inside your environment. Logic Insight operates it via secured, audited access. Telemetry stays local unless you explicitly enable forwarding." },
  { q: "What if I already use Datadog or Grafana?", a: "We integrate with both. Overwatch enriches and filters Nutanix telemetry, then forwards to whichever destination you already operate." },
  { q: "Can I start with Essentials and upgrade later?", a: "Yes. Tier changes take effect on the next billing cycle. We retain your dashboards, baselines, and rules across upgrades." },
  { q: "What happens if I cancel?", a: "You keep the appliance and the data it has collected. Logic Insight stops day-to-day operations and you transition to Self-Hosted, or take a managed offboarding to another tool." },
  { q: "How is this different from just buying Datadog directly?", a: "Datadog is a great destination. We are the Nutanix-aware ingestion + analysis layer that gets the right signal there, with ML baselines and forecasting that generic agents do not provide." },
];
