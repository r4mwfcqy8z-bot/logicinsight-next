"use client";

import { motion } from "motion/react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

export const dynamic = "force-static";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Integ {
  name: string;
  body: string;
  tag: string;
  status: "GA" | "Coming Soon";
}

interface IntegCategory {
  name: string;
  intro: string;
  items: Integ[];
}

const CATEGORIES: IntegCategory[] = [
  {
    name: "Hypervisor & compute",
    intro: "Deep visibility into your virtualization layer, correlated with the rest of the stack instead of isolated in a Nutanix-only view.",
    items: [
      { name: "AHV (Acropolis Hypervisor)", body: "VM performance, host resources, vDisk analytics, and hypervisor-level metrics.", tag: "Hypervisor", status: "GA" },
      { name: "Prism Central", body: "Centralized multi-cluster management, categories, projects, and cross-cluster health correlation.", tag: "Management", status: "GA" },
      { name: "Volume Groups", body: "Block storage performance, IOPS, latency, and capacity tracking for Nutanix Volume Groups.", tag: "Storage", status: "GA" },
      { name: "Protection Domains", body: "Replication health, RPO tracking, failover readiness, and disaster recovery monitoring for Nutanix Protection Domains.", tag: "Data Protection", status: "GA" },
      { name: "Protection Policies", body: "Snapshot schedules, retention compliance, policy adherence, and backup coverage analysis across your environment.", tag: "Data Protection", status: "GA" },
      { name: "Cluster Runway", body: "Predictive capacity planning, resource exhaustion forecasting, and intelligent growth recommendations based on historical trends.", tag: "Analytics", status: "GA" },
      { name: "Best Practices Engine", body: "Automated health checks, configuration validation, performance tuning recommendations, and compliance verification against Nutanix best practices.", tag: "Health & Compliance", status: "GA" },
    ],
  },
  {
    name: "Network & flow analysis",
    intro: "End-to-end network visibility with flow-level traffic analysis that sits beside compute, storage, and backup context.",
    items: [
      { name: "IPFIX Network Flow", body: "Service-centric network flow analysis, traffic visualization, DNS monitoring, and region-aware constellation mapping.", tag: "Network", status: "GA" },
      { name: "LLDP", body: "Link Layer Discovery Protocol monitoring, automated network topology mapping, neighbor discovery, and switch port identification.", tag: "Network", status: "GA" },
    ],
  },
  {
    name: "Hardware & firmware",
    intro: "Physical infrastructure monitoring from firmware to fan speeds so hardware events stop living in a separate toolchain.",
    items: [
      { name: "Redfish IPMI", body: "Out-of-band hardware health monitoring, temperatures, fan speeds, power consumption, and firmware status via Redfish API.", tag: "Hardware", status: "GA" },
      { name: "HPE ProLiant", body: "Full hardware telemetry for HPE ProLiant servers running Nutanix, including iLO integration.", tag: "Hardware", status: "GA" },
      { name: "Lenovo ThinkAgile HX", body: "Hardware monitoring for Lenovo ThinkAgile HX series nodes including XClarity integration.", tag: "Hardware", status: "GA" },
      { name: "Supermicro", body: "Hardware health and firmware monitoring for Supermicro-based Nutanix platforms.", tag: "Hardware", status: "GA" },
    ],
  },
  {
    name: "Operating systems",
    intro: "Host-level visibility into the operating systems running your workloads.",
    items: [
      { name: "Windows", body: "Windows Server and workstation metrics, CPU, memory, disk, network, services, and event logs.", tag: "OS", status: "GA" },
      { name: "Linux", body: "Linux distribution monitoring, system metrics, process tracking, disk health, and log ingestion.", tag: "OS", status: "GA" },
    ],
  },
  {
    name: "Data protection & backup",
    intro: "Correlate backup operations with infrastructure performance to ensure recovery readiness without another backup-only dashboard island.",
    items: [
      { name: "HYCU", body: "Backup job monitoring, protection status, capacity tracking, and recovery point validation for HYCU environments.", tag: "Backup", status: "GA" },
      { name: "Cohesity", body: "Backup and recovery monitoring for Cohesity DataProtect, job health, policy compliance, and storage consumption.", tag: "Backup", status: "Coming Soon" },
      { name: "Rubrik", body: "SLA compliance, backup job analytics, and recovery readiness monitoring for Rubrik Security Cloud.", tag: "Backup", status: "Coming Soon" },
    ],
  },
  {
    name: "Kubernetes & containers",
    intro: "Container orchestration observability for cloud-native workloads on Nutanix.",
    items: [
      { name: "NKP (Nutanix Kubernetes Platform)", body: "Full Kubernetes observability, cluster health, node performance, pod-level signals, and workload metrics for NKP deployments.", tag: "Kubernetes", status: "Coming Soon" },
    ],
  },
  {
    name: "Object & cloud storage",
    intro: "Track object storage performance, capacity growth, and access patterns across S3-compatible platforms.",
    items: [
      { name: "Wasabi Hot Cloud Storage", body: "S3-compatible object storage monitoring, capacity utilization, access patterns, and performance metrics.", tag: "Storage", status: "GA" },
    ],
  },
  {
    name: "Directory & identity",
    intro: "Monitor the authentication and identity infrastructure that underpins your environment.",
    items: [
      { name: "Active Directory", body: "Domain controller health, replication status, authentication metrics, and LDAP performance monitoring.", tag: "Identity", status: "GA" },
    ],
  },
  {
    name: "Databases",
    intro: "Database performance and health monitoring for mission-critical data stores.",
    items: [
      { name: "Microsoft SQL Server", body: "Query performance, wait statistics, index health, storage growth, and availability group monitoring.", tag: "Database", status: "Coming Soon" },
    ],
  },
  {
    name: "Output platforms",
    intro: "Overwatch enriches and forwards telemetry to the visualization platforms your team already uses, giving you one operational source with multiple downstream destinations.",
    items: [
      { name: "Datadog", body: "Full integration available on the Datadog Marketplace. 7 dynamic dashboards, pre-built monitors, and enriched Nutanix telemetry.", tag: "Output Platform", status: "GA" },
      { name: "Grafana", body: "Native Grafana plugin for Overwatch telemetry with self-hosted support and pre-built dashboards.", tag: "Output Platform", status: "GA" },
      { name: "Grafana Cloud", body: "Fully managed Grafana Cloud integration with automated provisioning and cloud-native telemetry streaming.", tag: "Output Platform", status: "GA" },
      { name: "Coralogix", body: "Streaming telemetry integration for the Coralogix observability platform.", tag: "Output Platform", status: "Coming Soon" },
      { name: "AppDynamics", body: "Cisco AppDynamics integration for unified infrastructure and application performance monitoring.", tag: "Output Platform", status: "Coming Soon" },
    ],
  },
];

function Status({ s }: { s: "GA" | "Coming Soon" }) {
  const ok = s === "GA";
  return (
    <span
      className={`font-mono text-[9.5px] tracking-[0.18em] uppercase px-2 py-1 rounded-full border ${
        ok
          ? "border-[var(--color-emerald-400)]/30 text-[var(--color-emerald-400)]"
          : "border-[var(--color-amber-400)]/30 text-[var(--color-amber-400)]"
      }`}
    >
      {s}
    </span>
  );
}

function Card({ it, i }: { it: Integ; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: EASE }}
    >
      <SpotlightCard glow="violet" className="h-full p-6 md:p-7 rounded-[20px] matte depth-1 hover:depth-2 transition-shadow duration-500">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[1rem] font-semibold tracking-[-0.015em] text-[var(--color-ink)] leading-[1.25]">{it.name}</h3>
          <Status s={it.status} />
        </div>
        <p className="text-[0.875rem] text-[var(--color-ink-soft)] leading-[1.5] mb-4">{it.body}</p>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-p-300)]">{it.tag}</span>
      </SpotlightCard>
    </motion.div>
  );
}

const STATS = [
  { v: "21", l: "GA integrations" },
  { v: "6",  l: "Coming soon" },
  { v: "0",  l: "Add-on fees" },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHead
        eyebrow="Integrations"
        title={
          <>
            Datadog, Grafana, Prism, AHV,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              and everything teams usually monitor in separate consoles.
            </span>
          </>
        }
        sub="Overwatch connects Nutanix telemetry to the platforms your team already uses, and collects deep signals from Prism, AHV, hardware, storage, backup, networking, and adjacent layers. One platform; domain depth preserved."
      />

      <section className="relative pb-6">
        <div className="editorial-shell max-w-[1080px]">
          <div className="grid grid-cols-3 gap-0 border-y border-[rgba(167,139,250,0.18)]">
            {STATS.map((s, i) => (
              <div key={s.l} className={`px-6 py-7 ${i > 0 ? "border-l border-[rgba(167,139,250,0.18)]" : ""}`}>
                <div
                  className="numeral text-[var(--color-ink)]"
                  style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", lineHeight: 0.9 }}
                >
                  {s.v}
                </div>
                <div className="kicker mt-3 text-[var(--color-ink-mute)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustMarquee />

      {CATEGORIES.map((cat, ci) => (
        <section key={cat.name} className="relative py-20 md:py-24">
          <div className="editorial-shell">
            <div className="grid-edit mb-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="col-span-12 lg:col-span-4"
              >
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)] mb-3 tabular-nums">
                  {String(ci + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                </div>
                <h2 className="editorial-lede text-[var(--color-ink)] balance">{cat.name}</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="col-span-12 lg:col-start-6 lg:col-span-7 editorial-sub max-w-[60ch] self-end"
              >
                {cat.intro}
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {cat.items.map((it, i) => <Card key={it.name} it={it} i={i} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-24 md:py-32">
        <div className="editorial-shell max-w-[1000px]">
          <SectionHead
            eyebrow="Coverage gap?"
            title={
              <>
                Need broader coverage{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  without more tool sprawl?
                </span>
              </>
            }
            sub="We&apos;re building new integrations based on what customers need most. Tell us what is still forcing your team into another console, and help us prioritize it."
          />
          <p className="body-l max-w-[68ch] mt-8">
            All integrations are included with every Overwatch license. When a Coming Soon integration goes GA, you get it automatically. No tool footprint to expand.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
