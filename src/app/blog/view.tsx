"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Article {
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  art: 1 | 2 | 3 | 4;
  href: string;
}

const FEATURED: Article[] = [
  {
    cat: "Capacity",
    title: "Nutanix Capacity Planning: The Complete Guide to Runway, Forecasting, and Growth",
    excerpt:
      "How to turn per-cluster forecasts into a number leadership can act on, the seasonal patterns most teams miss, and the planning rituals that survive Q3.",
    read: "12 min",
    art: 1,
    href: "/blog/nutanix-capacity-planning-guide",
  },
  {
    cat: "Tooling",
    title: "Nutanix Monitoring Tools Compared: What Works and What Falls Short",
    excerpt:
      "Where Prism, Datadog, Grafana, and a single-appliance approach overlap, and where each one stops being useful.",
    read: "10 min",
    art: 2,
    href: "/blog/nutanix-monitoring-tools-compared",
  },
  {
    cat: "Operations",
    title: "Nutanix Monitoring Best Practices for Production Environments",
    excerpt:
      "Coverage, alerting, retention, and review cadences that hold up under real on-call load.",
    read: "9 min",
    art: 3,
    href: "/blog/nutanix-monitoring-best-practices",
  },
];

const ALL: Article[] = [
  { cat: "Checklists", title: "Nutanix Monitoring Checklist: What to Monitor from Day One", excerpt: "The signals you should already be collecting before the first incident lands.",                                  read: "6 min",  art: 4, href: "/blog/nutanix-monitoring-checklist" },
  { cat: "Storage",    title: "Nutanix Storage Monitoring Deep Dive",                       excerpt: "Container layout, replication factor, tier utilization, and the metrics that hint at silent drift.",         read: "11 min", art: 3, href: "/blog/nutanix-storage-monitoring-containers-vdisks" },
  { cat: "Workloads",  title: "VM Hardware Time Machine: Track Every Change That Ever Happened to a VM", excerpt: "Why hardware-level lineage matters for performance forensics, and how to keep it cheap.",       read: "8 min",  art: 1, href: "/blog/vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm" },
];

const ART_STYLE: Record<1 | 2 | 3 | 4, React.CSSProperties> = {
  1: { background: "radial-gradient(circle at 30% 40%, #8B5CF6, transparent 55%), radial-gradient(circle at 70% 70%, #FF6B9C, transparent 55%), linear-gradient(135deg, #2E1065, #1A0A3D)" },
  2: { background: "conic-gradient(from 230deg at 60% 50%, #8B5CF6, #5EEAD4, #6D28D9)" },
  3: { background: "radial-gradient(circle at 20% 50%, #BC9CFF, transparent 55%), linear-gradient(135deg, #07050E, #5B21B6)" },
  4: { background: "radial-gradient(circle at 70% 30%, #FF6B9C, transparent 50%), linear-gradient(135deg, #2E1065, #07050E)" },
};

function FeatureLead({ a, i }: { a: Article; i: number }) {
  return (
    <Link href={a.href} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.75, delay: i * 0.05, ease: EASE }}
        className="h-full"
      >
        <SpotlightCard glow="violet" className="h-full grid grid-rows-[auto_1fr] gap-6 p-7 md:p-9 rounded-[24px] matte depth-2 hover:depth-2 transition-shadow duration-500">
          <div
            className="aspect-[16/8] rounded-[18px] transition-transform duration-700 group-hover:scale-[1.02]"
            style={{
              ...ART_STYLE[a.art],
              transitionTimingFunction: "var(--ease-editorial)",
            }}
          />
          <div className="flex flex-col gap-3">
            <span className="kicker text-[var(--color-p-300)]">{a.cat}</span>
            <h3 className="editorial-lede text-[var(--color-ink)] balance">{a.title}</h3>
            <p className="body-l max-w-[58ch] mt-1">{a.excerpt}</p>
            <div className="mt-auto pt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)]">
              {a.read} · Read article
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}

function FeatureSecondary({ a, i }: { a: Article; i: number }) {
  return (
    <Link href={a.href} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
        className="h-full"
      >
        <SpotlightCard glow="violet" className="h-full grid grid-cols-[auto_1fr] gap-5 p-5 md:p-6 rounded-[20px] matte depth-1 hover:depth-2 transition-shadow duration-500">
          <div
            className="w-[120px] sm:w-[140px] aspect-square rounded-[14px] shrink-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{
              ...ART_STYLE[a.art],
              transitionTimingFunction: "var(--ease-editorial)",
            }}
          />
          <div className="flex flex-col gap-2">
            <span className="kicker text-[var(--color-p-300)]">{a.cat}</span>
            <h3 className="text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)] balance">
              {a.title}
            </h3>
            <p className="text-[0.875rem] leading-[1.5] text-[var(--color-ink-soft)] line-clamp-2">{a.excerpt}</p>
            <div className="mt-auto font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)]">
              {a.read}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}

function AllCard({ a, i }: { a: Article; i: number }) {
  return (
    <Link href={a.href} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.65, delay: (i % 3) * 0.06, ease: EASE }}
        className="h-full"
      >
        <SpotlightCard glow="violet" className="h-full grid grid-rows-[auto_1fr] gap-5 p-6 md:p-7 rounded-[20px] matte depth-1 hover:depth-2 transition-shadow duration-500">
          <div
            className="aspect-[16/9] rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              ...ART_STYLE[a.art],
              transitionTimingFunction: "var(--ease-editorial)",
            }}
          />
          <div className="flex flex-col gap-2.5">
            <span className="kicker text-[var(--color-p-300)]">{a.cat}</span>
            <h3 className="text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.015em] text-[var(--color-ink)] balance">
              {a.title}
            </h3>
            <p className="text-[0.875rem] leading-[1.5] text-[var(--color-ink-soft)]">{a.excerpt}</p>
            <div className="mt-auto pt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)]">
              {a.read} · Read article
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageHead
        eyebrow="Editorial"
        title={
          <>
            Field notes on{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Nutanix operations.
            </span>
          </>
        }
        sub="Practitioner writing on observability, identity, backups, and the discipline that decides whether tools actually help."
      />

      {/* FEATURED, asymmetric editorial spread (one lead + two secondary stacked) */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <div className="col-span-12 lg:col-span-7">
              <FeatureLead a={FEATURED[0]} i={0} />
            </div>
            <div className="col-span-12 lg:col-span-5 grid gap-5 md:gap-6">
              <FeatureSecondary a={FEATURED[1]} i={1} />
              <FeatureSecondary a={FEATURED[2]} i={2} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid-edit mb-12">
            <div className="col-span-12">
              <div className="kicker">All articles</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ALL.map((a, i) => <AllCard key={a.title} a={a} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
