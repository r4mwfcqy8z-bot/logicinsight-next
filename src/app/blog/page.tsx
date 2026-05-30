"use client";

import { motion } from "motion/react";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

export const dynamic = "force-static";

interface Article {
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  art: 1 | 2 | 3 | 4;
}

const FEATURED: Article[] = [
  {
    cat: "Capacity",
    title: "Nutanix capacity planning — the complete guide to runway, forecasting, and growth.",
    excerpt:
      "How to turn a per-cluster forecast into a number the CFO can act on. The questions worth asking before every Q3 planning cycle.",
    read: "12 min",
    art: 1,
  },
  {
    cat: "Tools",
    title: "Nutanix monitoring tools compared — what works and what falls short.",
    excerpt:
      "Where Prism, Datadog, Grafana, and a single-appliance approach overlap, and where each one stops being useful.",
    read: "10 min",
    art: 2,
  },
];

const ALL: Article[] = [
  { cat: "Checklists", title: "Nutanix monitoring checklist — what to monitor from day one.",            excerpt: "The signals you should already be collecting before the first incident.",        read: "6 min", art: 3 },
  { cat: "AI",         title: "AI for reviewing infrastructure anomalies — what actually helps.",        excerpt: "Where focused operator assistance beats generic chat over dashboards.",         read: "6 min", art: 1 },
  { cat: "Network",    title: "How to use IPFIX to map east-west Nutanix traffic.",                       excerpt: "Turning vague performance complaints into usable explanations.",                read: "8 min", art: 4 },
  { cat: "Network",    title: "Why IPFIX changes Nutanix root-cause analysis.",                            excerpt: "What flow context adds that host metrics alone can't tell you.",                 read: "7 min", art: 2 },
  { cat: "Backup",     title: "Immutability is not enough — the rest of the recovery model.",             excerpt: "Object-lock buys you a recovery copy. Admin separation decides whether it survives.", read: "10 min", art: 3 },
  { cat: "Identity",   title: "Microsoft Entra is infrastructure now.",                                    excerpt: "Why the wrong sign-in flow makes the whole tenant weaker than it looks.",         read: "7 min", art: 4 },
  { cat: "Mentorship", title: "AI-era mentorship for platform teams.",                                     excerpt: "Velocity isn't the signal it used to be. What better mentorship looks like now.", read: "9 min", art: 1 },
  { cat: "Automation", title: "Automating runbooks without hiding risk.",                                  excerpt: "Automate the understanding before the action. Most failed runbooks skip step one.", read: "5 min", art: 2 },
  { cat: "Executive",  title: "How to build a Nutanix capacity review that gets read.",                    excerpt: "Less detail, more decisions. What leadership wants to see in 30 seconds.",        read: "8 min", art: 3 },
];

const ART_STYLE = {
  1: { background: "radial-gradient(circle at 30% 40%, #8B5CF6, transparent 55%), radial-gradient(circle at 70% 70%, #FF6B9C, transparent 55%), linear-gradient(135deg, #2E1065, #1A0A3D)" },
  2: { background: "conic-gradient(from 230deg at 60% 50%, #8B5CF6, #5EEAD4, #6D28D9)" },
  3: { background: "radial-gradient(circle at 20% 50%, #BC9CFF, transparent 55%), linear-gradient(135deg, #07050E, #5B21B6)" },
  4: { background: "radial-gradient(circle at 70% 30%, #FF6B9C, transparent 50%), linear-gradient(135deg, #2E1065, #07050E)" },
};

function Card({ a, i }: { a: Article; i: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="group grid gap-3 rounded-3xl glass overflow-hidden hover:border-[var(--color-p-400)]/30 transition-colors"
    >
      <div className="aspect-[16/9]" style={ART_STYLE[a.art]} />
      <div className="px-5 pb-5 grid gap-2">
        <span className="mono-eyebrow text-[var(--color-p-300)]">{a.cat}</span>
        <h3 className="font-bold text-lg leading-snug tracking-tight">{a.title}</h3>
        <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{a.excerpt}</p>
        <span className="mono-eyebrow text-[var(--color-ink-mute)] mt-1">{a.read} · Editorial</span>
      </div>
    </motion.a>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageHead
        eyebrow="Editorial"
        title={<>Field notes from{" "}<span className="serif-italic gradient-text">infrastructure-aware AI.</span></>}
        sub="Practitioner writing on Nutanix observability, identity, backup posture, and the operating discipline that decides whether tools actually help."
      />

      <section className="relative py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="mono-eyebrow text-[var(--color-p-300)] mb-5">Featured</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {FEATURED.map((a, i) => <Card key={a.title} a={a} i={i} />)}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="mono-eyebrow text-[var(--color-p-300)] mb-5">All articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL.map((a, i) => <Card key={a.title} a={a} i={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
