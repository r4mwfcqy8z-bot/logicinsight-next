"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { Magnetic } from "@/components/magnetic";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const TIERS = [
  {
    name: "Self-Hosted",
    badge: null,
    price: "$7",
    unit: "/ core / month",
    sub: "Deploy the appliance in your own environment. Best for teams that want full local control and per-core licensing.",
    features: [
      "Overwatch appliance deployed in your environment",
      "Prism Central + Prism Element data collection",
      "AHV hypervisor metrics + VM-level visibility",
      "Network flow analysis with IPFIX support",
      "Files, Objects, and NKE monitoring",
      "ML-driven anomaly detection + baselining",
      "Predictive capacity analytics",
      "All appliance updates + feature releases",
      "Choose Datadog, Grafana, or both as output",
      "Community support + documentation",
    ],
    cta: { label: "Start trial", href: "/free-trial", primary: false },
  },
  {
    name: "Monitoring as a Service",
    badge: "Most popular",
    price: "Contact",
    unit: "for quote",
    sub: "We deploy, tune, and operate the platform with you. Best for teams that want the product without day-to-day platform ownership.",
    features: [
      "Everything in Self-Hosted",
      "Logic Insight deploys + operates the appliance",
      "Per-cluster pricing (3-5 day turnkey setup)",
      "Dashboards built for your environment",
      "Dedicated SLA-based support",
      "Quarterly posture + capacity reviews",
      "Managed alerting + on-call routing",
      "AI Assistant included",
    ],
    cta: { label: "Get a quote", href: "/demo", primary: true },
  },
  {
    name: "Marketplace",
    badge: null,
    price: "Vendor",
    unit: "contract",
    sub: "Purchase through your existing platform vendor. Best for teams already invested in a platform.",
    features: [
      "Full Overwatch platform",
      "Single procurement path",
      "Vendor-managed deployment",
      "Pre-built templates",
      "Vendor support model",
      "Minutes to provision",
    ],
    cta: { label: "Contact us", href: "/demo", primary: false },
  },
];

const COMPARISON = [
  ["Feature access",             "Full platform",                "Full platform",                            "Full platform"],
  ["Deployment",                 "You manage",                   "We manage",                                "Vendor managed"],
  ["Pricing model",              "Per core / month",             "Per cluster / month",                      "Via vendor contract"],
  ["Setup time",                 "1-2 hours",                    "3-5 days (turnkey)",                       "Minutes"],
  ["Dashboard customization",    "Full control",                 "We build for you",                         "Pre-built templates"],
  ["ML + anomaly detection",     "Included",                     "Included + managed",                       "Varies by platform"],
  ["Support",                    "Docs + community",             "Dedicated SLA-based support",              "Vendor support"],
  ["Best for",                   "Teams with monitoring expertise","Teams that want hands-off operations","Teams already invested in a platform"],
];

const FAQ = [
  { q: "Are there add-on licenses or extra fees for specific integrations?", a: "No. Every integration, Prism, Redfish, IPMI, SNMP, IPFIX/NetFlow, HYCU, Datadog forwarding, Grafana forwarding, is included in the per-core price. Pricing is per-core, full-stop." },
  { q: "Can I combine models? For example, self-hosted plus MaaS?",           a: "Yes. Many customers run Self-Hosted in dev/non-prod and MaaS for production. We structure it so the tooling and data model stay consistent across environments." },
  { q: "How are Nutanix cores counted?",                                       a: "Total licensed physical cores across your Nutanix clusters. Hyper-threading and logical cores are not counted. Volume discounts are available for 500+ cores." },
  { q: "Is there a minimum commitment?",                                       a: "Monthly billing has no minimum term. Annual terms are available if you want pricing predictability and simpler procurement." },
  { q: "What if my cluster count or core count changes?",                       a: "Counts are reconciled monthly. Scale up immediately; reductions take effect at the next billing cycle." },
  { q: "Do marketplace purchases include the full Overwatch platform?",         a: "Yes. The same product runs across all three paths. Differences are procurement, deployment, and support model, not feature access." },
];

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

function TierCard({
  t,
  i,
  hoveredIdx,
  onHover,
  onLeave,
}: {
  t: typeof TIERS[number];
  i: number;
  hoveredIdx: number | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  const featured = !!t.badge;
  const reduce = useReducedMotion();
  const isHovered = hoveredIdx === i;
  const isDimmed = hoveredIdx !== null && hoveredIdx !== i;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      animate={{
        scale: isHovered ? 1.06 : featured ? 1.04 : 1,
        y: isHovered ? -16 : featured ? -16 : 0,
        opacity: isDimmed ? 0.55 : 1,
        filter: isDimmed ? "blur(1.5px)" : "blur(0px)",
      }}
      onPointerEnter={() => !reduce && onHover()}
      onPointerLeave={onLeave}
      style={{ transition: "filter 0.5s var(--ease-editorial)" }}
    >
      <SpotlightCard
        glow={featured ? "pink" : "violet"}
        className={`relative h-full p-8 md:p-10 rounded-[28px] flex flex-col gap-6 ${
          featured ? "signature-glass violet-glow" : "matte depth-1"
        }`}
      >
        {/* Featured tier shimmer — continuous subtle light pass. */}
        {featured && !reduce && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
          >
            <motion.span
              className="absolute inset-y-0 w-[40%]"
              initial={{ x: "-100%" }}
              animate={{ x: "260%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
              style={{
                background:
                  "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
              }}
            />
          </span>
        )}

        {featured && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[var(--color-p-600)] text-white font-mono text-[10.5px] tracking-[0.18em] uppercase shadow-[0_8px_24px_-6px_rgba(124,58,237,0.6)]">
            {t.badge}
          </span>
        )}

        <div className="relative">
          <h3 className="text-[1.75rem] font-bold tracking-[-0.03em] mb-3 text-[var(--color-ink)]">{t.name}</h3>
          <p className="body-m max-w-[36ch]">{t.sub}</p>
        </div>

        <div className="relative py-5 border-y border-[rgba(167,139,250,0.18)] flex items-baseline gap-2.5">
          <span
            className="numeral text-[var(--color-ink)]"
            style={{ fontSize: "clamp(2.5rem, 4.8vw, 4rem)", lineHeight: 1 }}
          >
            {t.price}
          </span>
          <span className="kicker text-[var(--color-ink-mute)]">{t.unit}</span>
        </div>

        {/* Feature list with sequential scan-light on hover. */}
        <ul className="relative grid gap-2.5 flex-1">
          {t.features.map((f, fi) => (
            <motion.li
              key={f}
              className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]"
              animate={isHovered ? { x: [0, 3, 0], opacity: [0.6, 1, 1] } : { x: 0, opacity: 1 }}
              transition={
                isHovered
                  ? { duration: 0.6, delay: fi * 0.05, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0.3 }
              }
            >
              <motion.span
                animate={
                  isHovered
                    ? { scale: [0.7, 1.25, 1], color: ["#A78BFA", "#FFA3C2", "#A78BFA"] }
                    : { scale: 1 }
                }
                transition={isHovered ? { duration: 0.55, delay: fi * 0.05 } : { duration: 0.3 }}
                className="mt-1 shrink-0"
              >
                <Check size={14} strokeWidth={2.2} className="text-[var(--color-p-300)]" />
              </motion.span>
              <span>{f}</span>
            </motion.li>
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

function PricingGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
      {TIERS.map((t, i) => (
        <TierCard
          key={t.name}
          t={t}
          i={i}
          hoveredIdx={hoveredIdx}
          onHover={() => setHoveredIdx(i)}
          onLeave={() => setHoveredIdx(null)}
        />
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHead
        eyebrow="Pricing"
        title={
          <>
            Pricing built around{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              how your team wants to operate.
            </span>
          </>
        }
        sub="One license. Full platform. Choose whether you run the appliance yourself, have Logic Insight operate it for you, or buy through an existing marketplace relationship."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <PricingGrid />
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Compare the paths"
            title={
              <>
                Choose the model that matches your team,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  not a feature tier.
                </span>
              </>
            }
          />
          <div className="overflow-x-auto rounded-[24px] matte depth-2 p-2">
            <table className="w-full text-sm border-separate border-spacing-0 min-w-[760px] table-fixed">
              <colgroup>
                <col style={{ width: "26%" }} />
                <col style={{ width: "24.6%" }} />
                <col style={{ width: "24.7%" }} />
                <col style={{ width: "24.7%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-left kicker text-[var(--color-ink-mute)] px-5 py-4 align-middle">Aspect</th>
                  <th className="text-left kicker text-[var(--color-ink)] px-5 py-4 align-middle">Self-Hosted</th>
                  <th className="text-left kicker text-[var(--color-p-300)] px-5 py-4 align-middle">MaaS</th>
                  <th className="text-left kicker text-[var(--color-ink)] px-5 py-4 align-middle">Marketplace</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-t border-[rgba(167,139,250,0.12)]" style={{ height: 64 }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 align-middle leading-snug ${
                          i > 0 ? "border-t border-[rgba(167,139,250,0.10)]" : ""
                        } ${
                          j === 0
                            ? "text-[var(--color-ink-mute)] kicker"
                            : "text-[var(--color-ink-soft)] text-[0.9375rem]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell max-w-[920px]">
          <SectionHead
            eyebrow="Pricing FAQs"
            title={
              <>
                Straight answers{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  before you buy.
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
