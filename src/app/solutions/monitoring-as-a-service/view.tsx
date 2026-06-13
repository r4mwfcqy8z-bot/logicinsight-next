"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { Magnetic } from "@/components/magnetic";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";
import { Boxes, Cpu, AlertCircle, Server, Eye, Bell, Activity, FileText, Settings, Building2, Users, ShieldCheck, MessageSquare, Mail, Phone, Webhook, Hash } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const GAP = [
  { icon: <Boxes size={18} strokeWidth={1.5} />,        name: "Tool sprawl",         body: "Teams juggle Prism alerts, third-party tools, and manual checks across clusters with no unified view. Critical signals get lost between platforms." },
  { icon: <Cpu size={18} strokeWidth={1.5} />,          name: "Engineering drain",   body: "Infrastructure teams spend 15 to 20+ hours per week maintaining dashboards, tuning thresholds, and chasing false alerts instead of strategic work." },
  { icon: <AlertCircle size={18} strokeWidth={1.5} />,  name: "Reactive firefighting", body: "Without predictive analytics and proper baselines, every incident is a surprise. Teams discover problems when users complain, not before." },
];

const WHAT = [
  { icon: <Server size={18} strokeWidth={1.5} />,    name: "Appliance deployment & configuration", body: "We deploy the Overwatch appliance into your Nutanix environment, configure Prism Central and Element connections, and validate data collection across all clusters." },
  { icon: <Eye size={18} strokeWidth={1.5} />,       name: "Dashboard design & customization",     body: "Custom dashboards built around your environment: cluster health, VM performance, storage trends, network flow, and capacity planning. Delivered in Datadog, Grafana, or your preferred platform." },
  { icon: <Bell size={18} strokeWidth={1.5} />,      name: "Alert engineering",                    body: "Intelligent alert rules tuned to your environment baselines. We configure escalation paths, suppress noise, and ensure the right people get notified about the right issues." },
  { icon: <Activity size={18} strokeWidth={1.5} />,  name: "ML baselining & anomaly detection",    body: "Machine learning models trained on your specific infrastructure patterns. Detect capacity trends, performance degradation, and behavioral anomalies before they become incidents." },
  { icon: <FileText size={18} strokeWidth={1.5} />,  name: "Monthly health reports",                body: "Detailed monthly reports covering cluster health scores, capacity forecasts, performance trends, optimization recommendations, and risk assessments." },
  { icon: <Settings size={18} strokeWidth={1.5} />,  name: "Ongoing tuning & support",              body: "As your environment evolves with new clusters, workload changes, infrastructure upgrades, we continuously tune collection, dashboards, and alert thresholds to keep pace." },
];

const TIERS = [
  {
    name: "Essentials",
    badge: null,
    sub: "For growing environments",
    features: [
      "Up to 3 Nutanix clusters",
      "Appliance deployment & configuration",
      "5 pre-built dashboards",
      "Standard alerting rules",
      "Quarterly health report",
      "Email support (business hours)",
      "Single visualization platform (Datadog OR Grafana)",
    ],
    cta: { label: "Get Started", href: "/free-trial", primary: false },
  },
  {
    name: "Pro",
    badge: "Most popular",
    sub: "For active operations teams",
    features: [
      "Up to 10 Nutanix clusters",
      "Everything in Essentials",
      "Custom dashboard design",
      "ML anomaly detection & baselining",
      "Network flow analysis (IPFIX)",
      "Monthly health reports with recommendations",
      "Backup solution monitoring (Cohesity, Rubrik, HYCU)",
      "Priority support (8×5 with 4-hour SLA)",
      "Multi-platform output (Datadog + Grafana)",
    ],
    cta: { label: "Schedule consultation", href: "/demo", primary: true },
  },
  {
    name: "Enterprise",
    badge: null,
    sub: "For mission-critical environments",
    features: [
      "Unlimited clusters",
      "Everything in Pro",
      "Dedicated account engineer",
      "Custom ML model training",
      "S3 storage provider monitoring",
      "Kubernetes (NKE) observability",
      "Weekly optimization reviews",
      "24×7 support with 1-hour SLA",
      "Automation and API support",
      "Custom integrations & API access",
    ],
    cta: { label: "Contact sales", href: "/about#contact", primary: false },
  },
];

const TIMELINE = [
  { icon: <Eye size={18} strokeWidth={1.5} />,      name: "Discovery", sub: "Day 1",     body: "We assess your Nutanix environment: clusters, workloads, existing tools, and monitoring gaps. You tell us what keeps you up at night." },
  { icon: <Server size={18} strokeWidth={1.5} />,   name: "Deploy",    sub: "Days 2 to 3",  body: "Overwatch appliance deployed into your environment. Prism Central, Element, and additional data sources connected and validated." },
  { icon: <Settings size={18} strokeWidth={1.5} />, name: "Configure", sub: "Days 4 to 7",  body: "Dashboards built, alert rules configured, ML baselines initiated. Your team gets a guided walkthrough of everything." },
  { icon: <Activity size={18} strokeWidth={1.5} />, name: "Operate",   sub: "Ongoing",   body: "We monitor, tune, and optimize continuously. You get clear visibility and actionable insights, we handle the rest." },
];

const DIY = [
  ["Time to first dashboard",    "2 to 6 weeks",             "3 to 5 days"],
  ["Ongoing maintenance",         "15 to 20 hrs/week",        "0 hrs (we handle it)"],
  ["Alert tuning",                "Manual, reactive",         "ML-driven, continuous"],
  ["Nutanix domain expertise",   "Varies by team",           "Certified specialists"],
  ["Multi-platform output",       "Build each integration",   "Pre-built (Datadog, Grafana, etc.)"],
  ["Capacity forecasting",        "Spreadsheets",             "ML-powered predictions"],
  ["Cost model",                  "Headcount + tools",        "Predictable monthly fee"],
];

const BUILT_FOR = [
  { icon: <Building2 size={18} strokeWidth={1.5} />,   name: "Lean IT Teams",            body: "Small infrastructure teams managing large Nutanix footprints who need enterprise monitoring without hiring dedicated observability engineers." },
  { icon: <Users size={18} strokeWidth={1.5} />,       name: "MSPs & Service Providers", body: "Managed service providers who need white-label monitoring across multiple customer Nutanix environments with centralized visibility." },
  { icon: <ShieldCheck size={18} strokeWidth={1.5} />, name: "Compliance-Driven Orgs",   body: "Organizations requiring documented monitoring, audit trails, and regular health assessments for compliance and governance frameworks." },
];

const FAQ = [
  { q: "Does the Overwatch appliance leave my network?", a: "No. The appliance runs entirely inside your environment. Logic Insight operates it via secured, audited access. Telemetry stays local unless you explicitly enable forwarding." },
  { q: "What if I already use Datadog or Grafana?",       a: "We integrate with both. Overwatch enriches and filters Nutanix telemetry, then forwards to whichever destination you already operate." },
  { q: "Can I start with Essentials and upgrade later?",   a: "Yes. Tier changes take effect on the next billing cycle. We retain your dashboards, baselines, and rules across upgrades." },
  { q: "What happens if I cancel?",                       a: "You keep the appliance and the data it has collected. Logic Insight stops day-to-day operations and you transition to Self-Hosted, or take a managed offboarding to another tool." },
  { q: "How is this different from just buying Datadog directly?", a: "Datadog is a great destination. We are the Nutanix-aware ingestion + analysis layer that gets the right signal there, with ML baselines and forecasting that generic agents do not provide." },
];

const ALERT_CHANNELS = [
  { name: "Slack",     icon: <Hash size={14} strokeWidth={1.5} /> },
  { name: "MS Teams",  icon: <MessageSquare size={14} strokeWidth={1.5} /> },
  { name: "Email",     icon: <Mail size={14} strokeWidth={1.5} /> },
  { name: "Discord",   icon: <MessageSquare size={14} strokeWidth={1.5} /> },
  { name: "PagerDuty", icon: <Phone size={14} strokeWidth={1.5} /> },
  { name: "Webhooks",  icon: <Webhook size={14} strokeWidth={1.5} /> },
];

const INFRA_SOURCES = [
  "Prism Central & Element",
  "AHV Hypervisor",
  "SNMP Network Devices",
  "Redfish / IPMI Hardware",
  "HYCU Backup",
  "Wasabi & Object Storage",
  "IPFIX / NetFlow",
  "Active Directory",
];

function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="editorial-shell">
        <SectionHead
          eyebrow="How MaaS works"
          title={
            <>
              Continuous monitoring.{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                Intelligent analysis.
              </span>{" "}
              Instant alerts.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-5">
          {/* Your Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <SpotlightCard glow="violet" className="h-full rounded-[22px] matte depth-1 p-7 md:p-8">
              <div className="kicker mb-4">Your infrastructure</div>
              <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] mb-5 text-[var(--color-ink)]">
                On-prem · NC2 cloud · Hybrid
              </h3>
              <ul className="grid gap-2 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]">
                {INFRA_SOURCES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[rgba(167,139,250,0.16)] font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)]">
                Encrypted telemetry
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Overwatch MaaS, signature glass for emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
          >
            <SpotlightCard glow="pink" className="h-full rounded-[22px] signature-glass p-7 md:p-8 violet-glow">
              <div className="kicker text-[var(--color-p-300)] mb-4">Overwatch MaaS</div>
              <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] mb-5 text-[var(--color-ink)]">
                Collect · Analyze · Alert
              </h3>
              <div className="grid gap-2.5 text-[0.9375rem] text-[var(--color-ink-soft)]">
                <div className="flex items-center gap-2.5"><Eye size={14} strokeWidth={1.5} className="text-[var(--color-p-300)]"/>Collect from every domain</div>
                <div className="flex items-center gap-2.5"><Activity size={14} strokeWidth={1.5} className="text-[var(--color-p-300)]"/>ML anomaly detection · baselining</div>
                <div className="flex items-center gap-2.5"><FileText size={14} strokeWidth={1.5} className="text-[var(--color-p-300)]"/>Health scoring</div>
                <div className="flex items-center gap-2.5"><Bell size={14} strokeWidth={1.5} className="text-[var(--color-p-300)]"/>Actionable alerts</div>
              </div>
              <div className="mt-5 pt-4 border-t border-[rgba(167,139,250,0.18)] font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)]">
                Routed to your channels
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Alert Channels */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.16 }}
          >
            <SpotlightCard glow="violet" className="h-full rounded-[22px] matte depth-1 p-7 md:p-8">
              <div className="kicker mb-4">Alert channels</div>
              <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] mb-5 text-[var(--color-ink)] balance">
                Your team, where they already work
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {ALERT_CHANNELS.map((c) => (
                  <li key={c.name} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg matte text-[0.875rem] text-[var(--color-ink-soft)]">
                    <span className="text-[var(--color-p-300)]">{c.icon}</span>
                    {c.name}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[rgba(167,139,250,0.16)] text-[12px] text-[var(--color-ink-mute)] leading-[1.5]">
                All data encrypted in transit. Your infrastructure, our expertise, your preferred alert channels.
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TierCard({ t, i }: { t: typeof TIERS[number]; i: number }) {
  const featured = !!t.badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      className={featured ? "md:-translate-y-3" : ""}
    >
      <SpotlightCard
        glow={featured ? "pink" : "violet"}
        className={`relative h-full p-8 md:p-10 rounded-[28px] flex flex-col gap-6 ${
          featured ? "signature-glass violet-glow" : "matte depth-1"
        }`}
      >
        {featured && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[var(--color-p-600)] text-white font-mono text-[10.5px] tracking-[0.18em] uppercase shadow-[0_8px_24px_-6px_rgba(124,58,237,0.6)]">
            {t.badge}
          </span>
        )}

        <div>
          <div className="kicker text-[var(--color-p-300)] mb-2">{t.sub}</div>
          <h3 className="text-[1.75rem] font-bold tracking-[-0.03em] text-[var(--color-ink)]">{t.name}</h3>
        </div>

        <ul className="grid gap-2.5 flex-1">
          {t.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]">
              <Check size={14} strokeWidth={2.2} className="mt-1 text-[var(--color-p-300)] shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Magnetic strength={0.2}>
          <Link
            href={t.cta.href}
            className={
              t.cta.primary
                ? "btn-primary group justify-center w-full"
                : "btn-ghost group justify-center w-full"
            }
          >
            <span>{t.cta.label}</span>
            <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </Magnetic>
      </SpotlightCard>
    </motion.div>
  );
}

function ServiceTiers() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="editorial-shell">
        <SectionHead
          eyebrow="Service tiers"
          title={
            <>
              Scaled to your environment{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                and operational needs.
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-7 items-stretch pt-6 md:pt-8">
          {TIERS.map((t, i) => <TierCard key={t.name} t={t} i={i} />)}
        </div>

        <p className="text-center mt-12 text-[0.9375rem] text-[var(--color-ink-mute)] max-w-[60ch] mx-auto">
          All tiers include a 14-day proof-of-value deployment. No long-term commitment required to start.
        </p>
      </div>
    </section>
  );
}

function DIYTable() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="editorial-shell">
        <SectionHead
          eyebrow="DIY monitoring vs Overwatch MaaS"
          title={
            <>
              The difference{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                on every line.
              </span>
            </>
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="overflow-x-auto rounded-[24px] matte depth-2 p-2"
        >
          <table className="w-full text-sm border-separate border-spacing-0 min-w-[720px]">
            <thead>
              <tr>
                <th className="text-left kicker text-[var(--color-ink-mute)] px-5 py-4 w-[34%]">Capability</th>
                <th className="text-left kicker text-[var(--color-ink)] px-5 py-4 w-[33%]">DIY / In-House</th>
                <th className="text-left kicker text-[var(--color-p-300)] px-5 py-4 w-[33%]">Overwatch MaaS</th>
              </tr>
            </thead>
            <tbody>
              {DIY.map((r, i) => (
                <tr key={i}>
                  <td className={`px-5 py-4 text-[var(--color-ink-mute)] kicker align-middle ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>{r[0]}</td>
                  <td className={`px-5 py-4 text-[var(--color-ink-soft)] align-middle text-[0.9375rem] ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>{r[1]}</td>
                  <td className={`px-5 py-4 align-middle font-medium text-[0.9375rem] text-[var(--color-ink)] ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay: i * 0.04, ease: EASE }}
      className="group border-b border-[rgba(167,139,250,0.16)] py-6 last:border-b-0"
    >
      <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
        <span className="text-[1.1rem] md:text-[1.25rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] balance">
          {q}
        </span>
        <span
          className="grid place-items-center w-9 h-9 rounded-full border border-[rgba(167,139,250,0.22)] text-[var(--color-p-300)] text-xl group-open:rotate-45 transition-transform duration-500 shrink-0"
          style={{ transitionTimingFunction: "var(--ease-editorial)" }}
        >
          +
        </span>
      </summary>
      <p className="mt-4 max-w-[68ch] body-l leading-[1.55]">{a}</p>
    </motion.details>
  );
}

export default function MaaSPage() {
  return (
    <>
      <PageHead
        eyebrow="Solutions · Monitoring as a Service"
        title={
          <>
            Monitoring as a Service,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              we run it, you use it.
            </span>
          </>
        }
        sub="A complete observability stack, deployed, tuned, and operated by Logic Insight. You get the dashboards, the alerts, and the reviews."
      />

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="The monitoring gap"
            title={
              <>
                Where teams quietly{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  fall behind.
                </span>
              </>
            }
          />
          <FeatGrid items={GAP} cols={3} />
        </div>
      </section>

      <HowItWorks />

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What you get"
            title={
              <>
                A complete observability stack,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  deployed and managed for you.
                </span>
              </>
            }
          />
          <FeatGrid items={WHAT} cols={3} />
        </div>
      </section>

      <ServiceTiers />

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="From zero to full observability"
            title={
              <>
                In days,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  not months.
                </span>
              </>
            }
          />
          <FeatGrid items={TIMELINE} cols={4} />
        </div>
      </section>

      <DIYTable />

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Built for"
            title={
              <>
                The teams Overwatch MaaS{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  was designed for.
                </span>
              </>
            }
          />
          <FeatGrid items={BUILT_FOR} cols={3} />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell max-w-[920px]">
          <SectionHead
            eyebrow="Frequently asked"
            title={
              <>
                What teams ask{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  before they buy.
                </span>
              </>
            }
          />
          <div className="border-t border-[rgba(167,139,250,0.16)]">
            {FAQ.map((f, i) => <FAQItem key={f.q} {...f} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
