"use client";

import { motion } from "motion/react";
import { TrendingUp, AlertOctagon, ShieldCheck, Network, Building2, Users } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const USE_CASES = [
  {
    icon: <TrendingUp size={20} />,
    role: "For platform leads + finance",
    name: "Capacity planning",
    pain: "Q3 planning needs runway in weeks, not 'feels tight'.",
    outcome: "Per-cluster, per-workload forecasts with confidence bands. Tell leadership when each tier hits 85% — to the week.",
    metric: "Runway accuracy: ±2 weeks at 95% confidence",
  },
  {
    icon: <AlertOctagon size={20} />,
    role: "For SREs + on-call",
    name: "Root-cause analysis",
    pain: "At 3 a.m., cause and effect live in different consoles.",
    outcome: "ML baselines surface anomalies grounded in the data path that produced them — host → CVM → network → backup chain visible at once.",
    metric: "MTTR median: −38% vs prior tooling",
  },
  {
    icon: <ShieldCheck size={20} />,
    role: "For IT directors + compliance",
    name: "Backup verification",
    pain: "'Job succeeded' isn't the same as 'recovery works'.",
    outcome: "HYCU posture telemetry: immutability windows, retention drift, admin-path separation, restore-test freshness — all on one card.",
    metric: "Recovery confidence: A/B/C grade per workload",
  },
  {
    icon: <Network size={20} />,
    role: "For security + network ops",
    name: "Network forensics",
    pain: "When the alert says 'unusual flow', someone has to assemble the picture from three tools.",
    outcome: "IPFIX east-west flow with DNS / GeoIP / ASN enrichment + threat-intel correlation, anchored to the alert that triggered.",
    metric: "Investigation time: −60% vs separate NMS",
  },
  {
    icon: <Building2 size={20} />,
    role: "For multi-site platform teams",
    name: "Multi-cluster operations",
    pain: "Three to fifty clusters and a single team. Per-cluster console doesn't scale.",
    outcome: "Prism Central + Element unified across sites. Cross-cluster health radar. Federated alerts. One place to ask 'what's drifting'.",
    metric: "Cluster-per-engineer ratio: up to 4×",
  },
  {
    icon: <Users size={20} />,
    role: "For MSPs + managed service",
    name: "MSP operations",
    pain: "Multi-customer environments need clean tenant separation and per-customer reporting.",
    outcome: "Tenant-aware Overwatch with per-customer dashboards, alerting, retention policies, and recurring reports.",
    metric: "Customer onboarding: under 1 hour",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <PageHead
        eyebrow="Solutions · Use Cases"
        title={<>How Overwatch fits{" "}<span className="serif-italic gradient-text">the work your team already does.</span></>}
        sub="Six scenarios, six teams, six outcomes — all running off the same single appliance."
      />

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {USE_CASES.map((u, i) => (
              <motion.article
                key={u.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative p-7 md:p-8 rounded-3xl glass hover:border-[var(--color-p-400)]/30 transition-colors overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(420px circle at 30% 30%, rgba(167,139,250,0.18), transparent 60%)" }}
                />

                <div className="relative grid gap-5">
                  <div className="flex items-start gap-4">
                    <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-p-400)]/25 to-[var(--color-p-400)]/5 border border-[var(--color-p-400)]/25 text-[var(--color-p-300)] shrink-0">
                      {u.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="mono-eyebrow text-[var(--color-ink-mute)] mb-1">{u.role}</p>
                      <h3 className="text-xl font-bold tracking-tight">{u.name}</h3>
                    </div>
                  </div>

                  <div className="grid gap-3 pl-1">
                    <div>
                      <div className="mono-eyebrow text-[#FF6B9C] mb-1.5">Pain</div>
                      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{u.pain}</p>
                    </div>
                    <div>
                      <div className="mono-eyebrow text-[var(--color-p-300)] mb-1.5">What Overwatch does</div>
                      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{u.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-2 pt-4 border-t border-white/8">
                    <div className="mono-eyebrow text-[var(--color-emerald-400)] mb-1">Outcome metric</div>
                    <div className="text-[var(--color-ink)] font-semibold text-sm">{u.metric}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
