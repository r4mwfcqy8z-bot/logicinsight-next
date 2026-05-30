"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { Magnetic } from "@/components/magnetic";
import { FinalCTA } from "@/components/sections/why-and-cta";

const TIERS = [
  {
    name: "Self-Hosted",
    badge: null,
    price: "Per-core",
    sub: "License the appliance and run it inside your own environment.",
    features: [
      "Full Overwatch appliance · Ubuntu 24.04 LTS",
      "All collection engines (Prism, Redfish, SNMP, IPFIX, HYCU)",
      "ML baselines + capacity forecasting",
      "On-box dashboards, reports, and API",
      "Datadog + Grafana export",
      "Standard support · email + ticket",
    ],
    cta: { label: "Start 30-day trial", href: "#trial", primary: false },
  },
  {
    name: "Monitoring as a Service",
    badge: "Most teams pick this",
    price: "Bespoke",
    sub: "We run the appliance, the upgrades, and the on-call. You get the dashboards.",
    features: [
      "Everything in Self-Hosted",
      "Fully managed appliance lifecycle",
      "24×7 SRE coverage from Logic Insight",
      "Quarterly capacity + posture reviews",
      "Dashboard design + customization",
      "AI Assistant included",
    ],
    cta: { label: "Talk to a human", href: "/about#contact", primary: true },
  },
  {
    name: "Marketplace",
    badge: null,
    price: "Bundled",
    sub: "Buy through Datadog Marketplace. Same per-core economics on your Datadog contract.",
    features: [
      "Same Overwatch coverage",
      "Billed through Datadog",
      "Single procurement path",
      "Co-supported by both teams",
      "Ideal if you're already Datadog-heavy",
    ],
    cta: { label: "View on Datadog", href: "#", primary: false },
  },
];

const FAQ = [
  { q: "Is pricing per-core or per-host?", a: "Per physical core in the Nutanix cluster being monitored. Logical cores don't multiply the cost — and the appliance is included in the per-core price." },
  { q: "Do you charge per metric or data volume?", a: "No. The per-core price covers every metric, every integration, and all retention up to the tier limit. No surprise invoices from ingest growth." },
  { q: "What does the trial include?", a: "30 days, no credit card. Full Enterprise tier on as many clusters as you want. Cancel by powering off the appliance — nothing leaves your network." },
  { q: "How does Managed differ from Self-Hosted?", a: "We run the appliance, upgrades, tuning, and the on-call rotation. You get the dashboards and a quarterly posture review. Usually cheaper than the SRE headcount you'd add." },
  { q: "Datadog Marketplace pricing?", a: "Bundle Overwatch through Datadog if you'd rather single-procurement. Same per-core economics on your existing Datadog contract." },
  { q: "Can I combine models — Self-Hosted plus MaaS?", a: "Yes. Many customers run Self-Hosted in dev/non-prod and MaaS for production. We'll structure it so the tooling stays consistent across environments." },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group p-5 md:p-6 rounded-2xl glass open:border-[var(--color-p-400)]/30 transition-colors"
    >
      <summary className="cursor-pointer flex items-center justify-between gap-4 list-none">
        <span className="font-semibold text-base md:text-lg tracking-tight">{q}</span>
        <span className="grid place-items-center w-7 h-7 rounded-full bg-[var(--color-p-500)]/15 text-[var(--color-p-300)] text-lg group-open:rotate-45 transition-transform duration-300" style={{ transitionTimingFunction: "var(--ease-out-expo)" }}>+</span>
      </summary>
      <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">{a}</p>
    </motion.details>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHead
        eyebrow="Pricing"
        title={<>Pricing built around{" "}<span className="serif-italic gradient-text">how your team wants to operate.</span></>}
        sub="Three ways to deploy. All of them transparent. Per-core licensing — no data-volume games, no hidden tiers."
      />

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {TIERS.map((t, i) => {
              const featured = !!t.badge;
              return (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative p-7 md:p-8 rounded-3xl flex flex-col gap-5 ${
                    featured
                      ? "border border-[var(--color-p-400)]/40"
                      : "glass"
                  }`}
                  style={
                    featured
                      ? {
                          background:
                            "radial-gradient(ellipse at top, rgba(167,139,250,0.16), transparent 60%), linear-gradient(180deg, var(--color-elevated), var(--color-surface))",
                          boxShadow: "0 30px 100px -30px rgba(124,58,237,0.5)",
                        }
                      : {}
                  }
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 mono-eyebrow text-white rounded-full" style={{ background: "linear-gradient(135deg, #7C3AED, #FF6B9C)", boxShadow: "0 8px 20px -6px rgba(124,58,237,0.65)" }}>
                      {t.badge}
                    </span>
                  )}
                  {featured && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-3xl"
                      style={{
                        padding: "1.4px",
                        background: "conic-gradient(from 0deg, transparent 0deg, #A78BFA 60deg, #FF6B9C 100deg, transparent 160deg)",
                        WebkitMask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)",
                        mask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        animation: "beam-spin 6s linear infinite",
                      }}
                    />
                  )}

                  <div className="relative">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">{t.name}</h3>
                    <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{t.sub}</p>
                  </div>

                  <div className="relative py-3 border-y border-white/8">
                    <div
                      className={`serif-italic ${featured ? "gradient-text" : "text-[var(--color-ink)]"}`}
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", lineHeight: 1, fontFeatureSettings: "'tnum'" }}
                    >
                      {t.price}
                    </div>
                  </div>

                  <ul className="relative grid gap-2.5 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
                        <span className="mt-0.5 grid place-items-center w-4 h-4 rounded-full bg-[var(--color-p-500)]/15 text-[var(--color-p-300)] shrink-0">
                          <Check size={11} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="relative">
                    <Magnetic strength={0.2}>
                      <Link
                        href={t.cta.href}
                        className={`group relative inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-semibold rounded-full overflow-hidden ${
                          t.cta.primary ? "text-white" : "text-[var(--color-ink)] bg-white/5 border border-white/10 hover:bg-white/10"
                        }`}
                        style={
                          t.cta.primary
                            ? {
                                background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 60%, #FF6B9C 130%)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 1px rgba(76,29,149,0.4), 0 16px 40px -12px rgba(124,58,237,0.7)",
                              }
                            : {}
                        }
                      >
                        <span className="relative z-10">{t.cta.label}</span>
                        <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Magnetic>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <style>{`@keyframes beam-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[840px] px-6">
          <SectionHead
            eyebrow="Pricing FAQs"
            title={<>Straight answers{" "}<span className="serif-italic gradient-text">before you buy.</span></>}
          />
          <div className="grid gap-3">
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
