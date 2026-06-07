"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { Magnetic } from "@/components/magnetic";

export const dynamic = "force-static";

const EASE = [0.22, 1, 0.36, 1] as const;

const TRIAL = [
  "14-day proof-of-value deployment",
  "Full Overwatch appliance, every collector, every dashboard",
  "Prism Central + Element + Redfish + SNMP + IPFIX + HYCU",
  "ML baselines learning your environment from day 1",
  "Datadog and Grafana export ready out of the box",
  "Cancel by powering off the appliance, nothing leaves your network",
];

export default function FreeTrialPage() {
  return (
    <>
      <PageHead
        eyebrow="Free trial"
        title={
          <>
            Try Overwatch in your environment.{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              14 days. No credit card.
            </span>
          </>
        }
        sub="Deploy the full appliance against your real clusters. Decide based on what it actually shows you."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="kicker mb-6">What you get</div>
              <h2 className="editorial-lede balance mb-10 max-w-[20ch]">
                What you{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  get.
                </span>
              </h2>

              <ul className="grid gap-0 border-t border-[rgba(167,139,250,0.16)]">
                {TRIAL.map((v, i) => (
                  <motion.li
                    key={v}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
                    className="flex items-start gap-4 py-4 border-b border-[rgba(167,139,250,0.16)]"
                  >
                    <Check size={15} strokeWidth={2.2} className="mt-1 text-[var(--color-p-300)] shrink-0" />
                    <span className="text-[var(--color-ink-soft)] text-[0.95rem] leading-[1.5]">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).classList.add("is-sent"); }}
              className="relative rounded-[24px] p-7 md:p-10 signature-glass [&.is-sent>.fields]:hidden [&.is-sent>.sent]:!flex"
            >
              <div className="kicker text-[var(--color-p-300)] mb-7">Start your trial</div>

              <div className="fields grid gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" name="first" required />
                  <Field label="Last name"  name="last"  required />
                </div>
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <Field label="# of Nutanix clusters" name="clusters" placeholder="e.g. 3" />
                <Field label="Deployment target" name="target" placeholder="AHV / vSphere / NC2" />

                <Magnetic strength={0.18}>
                  <button type="submit" className="btn-primary group justify-center w-full mt-3">
                    <span>Request appliance</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
                  </button>
                </Magnetic>
              </div>

              <div className="sent hidden flex-col items-center gap-4 text-center py-10">
                <div className="grid place-items-center w-14 h-14 rounded-full border border-[var(--color-emerald-400)]/30 text-[var(--color-emerald-400)]">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h3 className="editorial-lede text-[var(--color-ink)] balance max-w-[22ch]">
                  Thanks. Your trial appliance request is in.
                </h3>
                <p className="body-m max-w-[36ch]">
                  A Logic Insight engineer will follow up within one business day to coordinate deployment.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">
        {label}{required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete="off"
        className="px-0 py-2.5 border-b border-[rgba(167,139,250,0.22)] focus:border-[var(--color-p-300)] outline-none text-[1rem] tracking-[-0.005em] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] bg-transparent transition-colors"
      />
    </label>
  );
}
