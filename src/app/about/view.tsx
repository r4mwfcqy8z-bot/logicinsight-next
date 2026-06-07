"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { WhyLogicInsight, FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTACT = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@logicinsight.io",
    href: "mailto:contact@logicinsight.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (407) 513-2359",
    href: "tel:+14075132359",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Orlando, FL",
    href: null,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About Logic Insight"
        title={
          <>
            We got tired of{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              the same monitoring problems
            </span>{" "}
            you have.
          </>
        }
        sub="Five consoles for one environment felt broken. So we built the appliance we wished existed."
      />

      <WhyLogicInsight />

      <section id="contact" className="relative py-28 md:py-40">
        <div className="editorial-shell">
          <div className="grid-edit mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="kicker mb-6">Talk to the founders</div>
              <h2 className="editorial-statement balance">
                If you&apos;re trying to{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  reduce console sprawl
                </span>
                {" "}we should talk.
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONTACT.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <SpotlightCard glow="violet" className="block h-full p-8 md:p-9 rounded-[22px] matte depth-1 hover:depth-2 transition-shadow duration-500">
                  <Icon size={22} strokeWidth={1.5} className="text-[var(--color-p-300)] mb-7" />
                  <div className="kicker mb-3">{c.label}</div>
                  <div className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">
                    {c.value}
                  </div>
                </SpotlightCard>
              );

              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                >
                  {c.href ? (
                    <a href={c.href} className="block group">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
