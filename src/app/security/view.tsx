"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ShieldCheck, KeyRound, Server, Network, Lock, FileCheck, Cloud, Building2,
  CheckCircle2, ArrowRight, Cpu, Database,
} from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";

const EASE = [0.22, 1, 0.36, 1] as const;

const BADGES = [
  { icon: Database, label: "On-Prem Data Sovereignty" },
  { icon: KeyRound, label: "Fernet Credentials" },
  { icon: Lock, label: "TLS Everywhere" },
  { icon: ShieldCheck, label: "Operational Controls" },
];

const PILLARS = [
  {
    icon: Server,
    title: "Data Sovereignty & Local Processing",
    intro: "The platform is designed to keep infrastructure data local by default.",
    items: [
      "Metrics, logs, dashboards, and APIs run on the on-prem appliance",
      "Optional cloud forwarding only when you explicitly configure it",
      "Internal services isolated to localhost by default",
      "Only HTTPS is exposed through the front door",
      "No mandatory external SaaS dependency for core observability",
    ],
  },
  {
    icon: Network,
    title: "Identity & Access Control",
    intro: "Enterprise authentication options for a single operational surface.",
    items: [
      "LDAP and Active Directory integration",
      "OU navigation and group mapping",
      "ForwardAuth middleware on protected routes",
      "Secured API access for automation workflows",
      "Designed to reduce duplicate credential sprawl across infrastructure tools",
    ],
  },
  {
    icon: KeyRound,
    title: "Credential Protection & Auditability",
    intro: "Secrets and operational state are handled for infrastructure environments that want fewer disconnected trust boundaries.",
    items: [
      "Fernet-encrypted credentials for passwords, API keys, and SNMP secrets",
      "Passwords are not stored in plain text or environment variables",
      "Prism Central federation and task history support operational auditing",
      "Scheduled reporting and API endpoints support compliance workflows",
      "Audit-friendly on-prem deployment with local control of data retention",
    ],
  },
  {
    icon: Cpu,
    title: "Appliance Hardening",
    intro: "Platform choices that reduce exposure and simplify review across one unified control plane.",
    items: [
      "Hardened single-appliance footprint",
      "Containerized services for engine separation",
      "Traefik-managed TLS with self-signed, Let's Encrypt, or custom certificates",
      "Single-VM deployment with predictable resource requirements",
      "60+ REST API endpoints for infrastructure-as-code style automation",
    ],
  },
];

const POSTURE = [
  {
    title: "Operational Controls",
    items: [
      "Local-first control plane for infrastructure teams",
      "Predictable single-appliance deployment model",
      "Configurable certificate strategy through Traefik",
      "ForwardAuth and directory-backed access patterns",
    ],
  },
  {
    title: "Automation Surface",
    items: [
      "60+ REST API endpoints for integration and change workflows",
      "Structured reporting for recurring operational reviews",
      "Device and config state visible through one platform",
      "Designed to support infrastructure-as-code style operations",
    ],
  },
  {
    title: "Deployment Posture",
    items: [
      "Single appliance with local service isolation",
      "Optional cloud egress rather than mandatory cloud ingestion",
      "Control over data retention inside your environment",
      "Appliance reviewable as part of existing security and compliance workflows",
    ],
  },
];

const DEPLOY = [
  {
    icon: Cloud,
    name: "Cloud Hosted",
    body: "Fully managed deployment with enterprise-grade security controls, compliance-ready infrastructure, and one managed operational surface.",
    items: ["Automatic updates and patching", "Multi-region redundancy", "24/7 monitoring and support"],
  },
  {
    icon: Building2,
    name: "On-Premises",
    body: "Deploy within your own infrastructure for complete control over data residency, network isolation, and security policies while keeping Nutanix and adjacent systems under one platform boundary.",
    items: ["Air-gapped deployment support", "Full network control", "Custom security integrations"],
  },
];

const BUILDING_BLOCKS = [
  "Fernet-encrypted credential storage",
  "Directory-backed access control via LDAP and Active Directory",
  "Full audit logging",
  "TLS-only access",
  "Containerized service isolation on a hardened appliance base",
];

export default function SecurityView() {
  return (
    <>
      <PageHead
        eyebrow="Security"
        title={
          <>
            Security for a{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              unified operations platform.
            </span>
          </>
        }
        sub="Overwatch is designed for teams that need operational unification without surrendering control of data, credentials, and administrative access to a patchwork of disconnected consoles or a cloud-only monitoring vendor."
      />

      {/* Badges */}
      <section className="relative pb-8">
        <div className="editorial-shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {BADGES.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
                  className="flex items-center gap-3 rounded-2xl matte p-4"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)] text-[var(--color-p-300)] shrink-0">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-[0.9rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)] leading-tight">
                    {b.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Security model"
            title={
              <>
                Control of data, credentials, and access,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  kept on your side of the boundary.
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                  className="pt-7 border-t border-[rgba(167,139,250,0.16)]"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-p-300)] mb-6 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="editorial-lede text-[var(--color-ink)] mb-3">{p.title}</h3>
                  <p className="body-m text-[var(--color-ink-soft)] mb-6 max-w-[46ch]">{p.intro}</p>
                  <ul className="grid gap-0 border-t border-[rgba(167,139,250,0.12)]">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 py-3 border-b border-[rgba(167,139,250,0.10)] last:border-b-0">
                        <CheckCircle2 size={15} strokeWidth={1.8} className="mt-1 shrink-0 text-[var(--color-p-400)]" />
                        <span className="text-[0.9rem] text-[var(--color-ink-soft)] leading-[1.5]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posture 3-up */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {POSTURE.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                className="pt-6 border-t border-[rgba(167,139,250,0.16)]"
              >
                <div className="kicker text-[var(--color-p-300)] mb-5">{g.title}</div>
                <ul className="grid gap-0">
                  {g.items.map((it) => (
                    <li key={it} className="text-[0.9rem] text-[var(--color-ink-soft)] leading-[1.5] py-3 border-b border-[rgba(167,139,250,0.10)] last:border-b-0">
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment options */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Flexible deployment"
            title={
              <>
                Deploy in the environment that meets{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  your security and compliance requirements.
                </span>
              </>
            }
            sub="Security choices that let one platform replace multiple access paths, duplicated secrets, and fragmented review workflows, while keeping one operational surface."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {DEPLOY.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  className="pt-7 border-t border-[rgba(167,139,250,0.16)]"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-p-300)] mb-6 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="editorial-lede text-[var(--color-ink)] mb-3">{d.name}</h3>
                  <p className="body-m text-[var(--color-ink-soft)] mb-6 max-w-[48ch]">{d.body}</p>
                  <ul className="flex flex-wrap gap-2">
                    {d.items.map((it) => (
                      <li key={it} className="font-mono text-[11px] tracking-[0.04em] text-[var(--color-ink-mute)] px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.02]">
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance roadmap */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="rounded-[28px] signature-glass p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck size={22} strokeWidth={1.5} className="text-[var(--color-p-300)]" />
                  <span className="kicker text-[var(--color-p-300)]">Compliance roadmap</span>
                </div>
                <p className="body-l mb-5 max-w-[52ch]">
                  Overwatch is designed for environments where compliance matters. The on-prem deployment model keeps all telemetry, credentials, and configuration data within your network boundary, and nothing leaves your infrastructure unless you explicitly configure forwarding.
                </p>
                <p className="body-l max-w-[52ch]">
                  <span className="text-[var(--color-ink)] font-semibold">SOC 2 Type II certification is on our roadmap.</span>{" "}
                  In the meantime, Overwatch provides the building blocks compliance teams need.
                </p>
              </div>
              <div>
                <div className="kicker mb-5">Building blocks available today</div>
                <ul className="grid gap-0">
                  {BUILDING_BLOCKS.map((b) => (
                    <li key={b} className="flex items-start gap-3 py-3.5 border-b border-[rgba(167,139,250,0.12)] last:border-b-0">
                      <CheckCircle2 size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--color-p-400)]" />
                      <span className="body-m text-[var(--color-ink-soft)]">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 body-m text-[var(--color-ink-mute)] max-w-[48ch]">
                  If your organization has specific compliance or regulatory requirements, we are happy to walk through the Overwatch security architecture with your team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="rounded-[28px] matte-strong p-10 md:p-16 text-center"
          >
            <h2 className="editorial-statement balance max-w-[24ch] mx-auto">
              Questions about security or{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                platform consolidation?
              </span>
            </h2>
            <p className="mt-6 body-l max-w-[58ch] mx-auto">
              Connect with our team to discuss security, compliance, deployment options, and how Overwatch reduces operational and credential sprawl.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className="btn-primary group inline-flex items-center gap-2">
                Contact us
                <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
