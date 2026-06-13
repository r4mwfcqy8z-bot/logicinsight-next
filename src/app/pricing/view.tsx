"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { FinalCTA } from "@/components/sections/why-and-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

const TIERS = [
  {
    name: "Self-Hosted",
    badge: null as string | null,
    price: "$7",
    unit: "/ core / month",
    sub: "Deploy the appliance in your own environment. Full local control, per-core licensing.",
    features: [
      "Overwatch appliance in your environment",
      "Prism Central + Element collection",
      "AHV metrics + VM-level visibility",
      "Network flow analysis with IPFIX",
      "Files, Objects, and NKE monitoring",
      "ML-driven anomaly detection",
      "Predictive capacity analytics",
      "All updates and feature releases",
      "Datadog, Grafana, or both as output",
      "Community support + documentation",
    ],
    cta: { label: "Start trial", href: "/free-trial", primary: false },
  },
  {
    name: "Monitoring as a Service",
    badge: "Most popular",
    price: "Contact",
    unit: "for quote",
    sub: "We deploy, tune, and operate the platform with you. The product without the day-to-day ownership.",
    features: [
      "Everything in Self-Hosted",
      "Logic Insight deploys + operates it",
      "Per-cluster pricing, 3 to 5 day turnkey",
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
    sub: "Purchase through your existing platform vendor. Best if you are already invested in a platform.",
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

const COMPARISON: [string, string, string, string][] = [
  ["Feature access", "Full platform", "Full platform", "Full platform"],
  ["Deployment", "You manage", "We manage", "Vendor managed"],
  ["Pricing model", "Per core / month", "Per cluster / month", "Via vendor contract"],
  ["Setup time", "1 to 2 hours", "3 to 5 days, turnkey", "Minutes"],
  ["Dashboard customization", "Full control", "We build for you", "Pre-built templates"],
  ["ML + anomaly detection", "Included", "Included + managed", "Varies by platform"],
  ["Support", "Docs + community", "Dedicated SLA-based", "Vendor support"],
  ["Best for", "In-house expertise", "Hands-off operations", "Existing platform buyers"],
];

const FAQ = [
  { q: "Are there add-on licenses or extra fees for specific integrations?", a: "No. Every integration, Prism, Redfish, IPMI, SNMP, IPFIX/NetFlow, HYCU, Datadog forwarding, Grafana forwarding, is included in the per-core price. Pricing is per-core, full stop." },
  { q: "Can I combine models, for example self-hosted plus MaaS?", a: "Yes. Many customers run Self-Hosted in dev and non-prod and MaaS for production. We keep the tooling and data model consistent across environments." },
  { q: "How are Nutanix cores counted?", a: "Total licensed physical cores across your Nutanix clusters. Hyper-threading and logical cores are not counted. Volume discounts are available for 500+ cores." },
  { q: "Is there a minimum commitment?", a: "Monthly billing has no minimum term. Annual terms are available if you want pricing predictability and simpler procurement." },
  { q: "What if my cluster or core count changes?", a: "Counts are reconciled monthly. Scale up immediately; reductions take effect at the next billing cycle." },
  { q: "Do marketplace purchases include the full platform?", a: "Yes. The same product runs across all three paths. The differences are procurement, deployment, and support, not feature access." },
];

const INTEGRATIONS = "Prism, Redfish, IPMI, SNMP, IPFIX, NetFlow, HYCU, Datadog, Grafana";

function TierCard({ t }: { t: typeof TIERS[number] }) {
  const featured = !!t.badge;
  return (
    <div
      className={`relative h-full rounded-[28px] p-8 md:p-9 flex flex-col gap-6 transition-transform duration-500 hover:-translate-y-1.5 ${
        featured ? "signature-glass violet-glow md:-translate-y-3" : "matte depth-1"
      }`}
      style={{ transitionTimingFunction: "var(--ease-editorial)" }}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[var(--color-p-600)] text-white font-mono text-[10.5px] tracking-[0.18em] uppercase whitespace-nowrap shadow-[0_8px_24px_-6px_rgba(124,58,237,0.6)]">
          {t.badge}
        </span>
      )}
      <div>
        <h3 className="text-[1.6rem] font-bold tracking-[-0.03em] text-[var(--color-ink)] mb-3">{t.name}</h3>
        <p className="body-m max-w-[34ch]">{t.sub}</p>
      </div>
      <div className="py-5 border-y border-[rgba(167,139,250,0.18)] flex items-baseline gap-2.5">
        <span className="numeral text-[var(--color-ink)]" style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", lineHeight: 1 }}>
          {t.price}
        </span>
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink-mute)]">{t.unit}</span>
      </div>
      <ul className="grid gap-2.5 flex-1">
        {t.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]">
            <Check size={14} strokeWidth={2.2} className="text-[var(--color-p-300)] mt-1 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Magnetic strength={0.2}>
        <Link href={t.cta.href} className={`${t.cta.primary ? "btn-primary" : "btn-ghost"} group justify-center w-full`}>
          <span>{t.cta.label}</span>
          <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
        </Link>
      </Magnetic>
    </div>
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
        <span className="text-[1.05rem] md:text-[1.2rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] balance">{q}</span>
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

export default function PricingView() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[72dvh] flex items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(56vw 54vh at 50% 36%, rgba(139,92,246,0.16), transparent 62%)" }}
        />
        <div className="editorial-shell w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="editorial-display balance mx-auto max-w-[20ch]"
          >
            Pricing built around{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              how your team operates.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-7 editorial-sub mx-auto max-w-[54ch]"
          >
            One license, the full platform. Run the appliance yourself, have Logic Insight operate it, or buy through a marketplace you already use.
          </motion.p>
        </div>
      </section>

      {/* PROMISE */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-[820px] mx-auto rounded-[28px] matte-strong px-8 md:px-12 py-12 md:py-14 text-center"
          >
            <h2 className="editorial-lede balance text-[var(--color-ink)] mx-auto max-w-[24ch]">
              Every integration,{" "}
              <span className="italic font-bold text-[var(--color-p-200)]">included.</span> No add-on licenses, no per-integration fees, no feature gating.
            </h2>
            <p className="mt-6 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink-mute)]">{INTEGRATIONS}</p>
          </motion.div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative py-12 md:py-20">
        <div className="editorial-shell">
          <div className="grid md:grid-cols-3 gap-6 md:gap-7 items-stretch pt-6 md:pt-8">
            {TIERS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              >
                <TierCard t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="editorial-statement balance mx-auto max-w-[22ch] text-center mb-12 md:mb-16"
          >
            Choose the model that matches your team,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
              not a feature tier.
            </span>
          </motion.h2>
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
                  <th className="text-left font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)] px-5 py-4">Aspect</th>
                  <th className="text-left font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-ink)] px-5 py-4">Self-Hosted</th>
                  <th className="text-left font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-p-300)] px-5 py-4">MaaS</th>
                  <th className="text-left font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-ink)] px-5 py-4">Marketplace</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row[0]}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 align-middle leading-snug ${i > 0 ? "border-t border-[rgba(167,139,250,0.10)]" : ""} ${
                          j === 0
                            ? "font-mono text-[10.5px] tracking-[0.12em] uppercase text-[var(--color-ink-mute)]"
                            : "text-[0.9375rem] text-[var(--color-ink-soft)]"
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

      {/* FAQ */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell max-w-[920px]">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="editorial-statement balance mx-auto max-w-[18ch] text-center mb-12 md:mb-16"
          >
            Straight answers{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
              before you buy.
            </span>
          </motion.h2>
          <div className="border-t border-[rgba(167,139,250,0.16)]">
            {FAQ.map((f, i) => (
              <FAQItem key={f.q} {...f} i={i} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
