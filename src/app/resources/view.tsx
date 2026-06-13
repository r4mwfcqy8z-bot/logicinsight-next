"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, BarChart3, Network, Server, ShieldCheck, GitCompare, FileText, BookOpen, Compass, Library, Clock } from "lucide-react";
import { PageHead, SectionHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

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

function Row({ item, i }: { item: { icon: React.ReactNode; name: string; href: string; body: string }; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
    >
      <Link href={item.href} className="group grid-edit items-center py-6 md:py-7 border-b border-[rgba(167,139,250,0.14)]">
        <div className="col-span-12 md:col-span-5 flex items-center gap-4">
          <span className="grid place-items-center w-10 h-10 rounded-xl text-[var(--color-p-300)] border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)] shrink-0 transition-colors group-hover:border-[var(--color-p-400)]/45">
            {item.icon}
          </span>
          <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] transition-colors group-hover:text-white">
            {item.name}
          </h3>
        </div>
        <p className="col-span-12 md:col-span-6 body-m text-[var(--color-ink-soft)] mt-2 md:mt-0 pl-14 md:pl-0">
          {item.body}
        </p>
        <div className="hidden md:flex col-span-1 justify-end">
          <ArrowRight size={16} strokeWidth={2} className="text-[var(--color-ink-faint)] transition-all group-hover:text-[var(--color-p-200)] group-hover:translate-x-0.5" />
        </div>
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
          <div className="border-t border-[rgba(167,139,250,0.14)]">
            {CORE.map((c, i) => <Row key={c.href} item={c} i={i} />)}
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
          <div className="border-t border-[rgba(167,139,250,0.14)]">
            {TOOLS.map((c, i) => <Row key={c.href} item={c} i={i} />)}
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
          <div className="border-t border-[rgba(167,139,250,0.14)]">
            {GUIDES.map((c, i) => <Row key={c.href} item={c} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
