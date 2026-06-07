"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, BarChart3, Network, Server, ShieldCheck, GitCompare, FileText, BookOpen, Compass, Library, Clock } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const CORE = [
  { icon: <BarChart3 size={18} strokeWidth={1.5} />,   name: "Nutanix Cluster Monitoring", href: "/product/cluster-monitoring",         body: "Every layer of the Nutanix stack covered." },
  { icon: <Network size={18} strokeWidth={1.5} />,     name: "SNMP Monitoring",            href: "/product/snmp-monitoring",            body: "Network monitoring for every device on the wire." },
  { icon: <Server size={18} strokeWidth={1.5} />,      name: "Redfish Monitoring",         href: "/product/redfish-monitoring",         body: "Hardware signal before tickets get filed." },
  { icon: <ShieldCheck size={18} strokeWidth={1.5} />, name: "HYCU Monitoring",            href: "/product/hycu-monitoring",            body: "Backup posture next to the cluster it protects." },
];

const TOOLS = [
  { icon: <Compass size={18} strokeWidth={1.5} />, name: "Coverage Explorer",   href: "/solutions/coverage",             body: "Click through every domain Overwatch watches, signal by signal." },
  { icon: <Library size={18} strokeWidth={1.5} />, name: "Glossary",            href: "/resources/glossary",             body: "Every Nutanix and observability term, defined in one place." },
  { icon: <Clock size={18} strokeWidth={1.5} />,   name: "Deployment Timeline", href: "/resources/deployment-timeline",  body: "Appliance to first signal in under an hour, step by step." },
];

const GUIDES = [
  { icon: <GitCompare size={18} strokeWidth={1.5} />, name: "Nutanix Monitoring vs Native Prism",   href: "/product/nutanix-monitoring-vs-prism",                  body: "What Prism does well, where Overwatch extends it." },
  { icon: <FileText size={18} strokeWidth={1.5} />,   name: "How to Monitor Nutanix with Datadog",   href: "/resources/how-to-monitor-nutanix-with-datadog",        body: "Recommended approach plus common pitfalls." },
  { icon: <FileText size={18} strokeWidth={1.5} />,   name: "How to Monitor Nutanix with Grafana",   href: "/resources/how-to-monitor-nutanix-with-grafana",        body: "Recommended approach plus common pitfalls." },
  { icon: <BookOpen size={18} strokeWidth={1.5} />,   name: "Editorial · Blog",                      href: "/blog",                                                 body: "Field notes on Nutanix observability, identity, and backups." },
];

function Card({ item, i }: { item: { icon: React.ReactNode; name: string; href: string; body: string }; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.65, delay: i * 0.05, ease: EASE }}
      className="block group h-full"
    >
      <Link href={item.href} className="block h-full">
        <SpotlightCard glow="violet" className="h-full p-7 md:p-8 rounded-[22px] matte depth-1 hover:depth-2 transition-shadow duration-500">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-[var(--color-p-300)] mb-6 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
            {item.icon}
          </span>
          <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] mb-2 text-[var(--color-ink)]">{item.name}</h3>
          <p className="text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.5]">{item.body}</p>
          <span className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-p-300)] group-hover:text-[var(--color-p-100)] transition-colors">
            Open <ArrowRight size={12} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </span>
        </SpotlightCard>
      </Link>
    </motion.div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHead
        eyebrow="Resources"
        title={
          <>
            Resources for{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Nutanix and infrastructure visibility.
            </span>
          </>
        }
        sub="Core coverage pages, buyer guides, and editorial. Organized so you can find the angle you need in two clicks."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Core coverage pages"
            title={
              <>
                The product,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  by domain.
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE.map((c, i) => <Card key={c.href} item={c} i={i} />)}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Explore and reference"
            title={
              <>
                Tools to{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  see it for yourself.
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TOOLS.map((c, i) => <Card key={c.href} item={c} i={i} />)}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Buyer guides"
            title={
              <>
                Decisions,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  grounded.
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {GUIDES.map((c, i) => <Card key={c.href} item={c} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
