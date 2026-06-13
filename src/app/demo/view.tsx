"use client";

import { motion } from "motion/react";
import { Check, Mail, Phone, MapPin, Building2, type LucideIcon } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { Magnetic } from "@/components/magnetic";

export const dynamic = "force-static";

const EASE = [0.22, 1, 0.36, 1] as const;

const VALUE = [
  "Live walkthrough of the Overwatch appliance against a Nutanix lab",
  "Q&A on Prism, Redfish, SNMP, IPFIX, and HYCU coverage",
  "Architecture review tailored to your environment",
  "Pricing scenarios for Self-Hosted, MaaS, and Marketplace",
  "Next-step plan: trial deployment in your environment",
];

export default function DemoPage() {
  return (
    <>
      <PageHead
        eyebrow="Demo"
        title={
          <>
            See Overwatch{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              in motion.
            </span>
          </>
        }
        sub="A 30-minute walkthrough with a Logic Insight engineer. Tailored to your environment. No slide deck."
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
              <h2 className="editorial-lede balance mb-10 max-w-[20ch]">
                What we&apos;ll cover{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  in 30 minutes.
                </span>
              </h2>

              <ul className="grid gap-0 border-t border-[rgba(167,139,250,0.16)]">
                {VALUE.map((v, i) => (
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

              <div className="mt-14 grid gap-3 max-w-[420px]">
                <ContactRow icon={Mail} href="mailto:contact@logicinsight.io" text="contact@logicinsight.io" />
                <ContactRow icon={Phone} href="tel:+14075132359" text="+1-407-513-2359" />
                <ContactRow icon={MapPin} text="Orlando, FL" />
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).classList.add("is-sent"); }}
              className="relative rounded-[24px] p-7 md:p-10 signature-glass [&.is-sent>.fields]:hidden [&.is-sent>.sent]:!flex"
            >
              <div className="kicker text-[var(--color-p-300)] mb-7">Schedule a demo</div>

              <div className="fields grid gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" name="first" required />
                  <Field label="Last name"  name="last"  required />
                </div>
                <Field label="Work email"  name="email"   type="email" required />
                <Field label="Company"     name="company" required icon={<Building2 size={14} strokeWidth={1.5} />} />
                <Field label="# of Nutanix clusters" name="clusters" placeholder="e.g. 3" />
                <TextArea label="What would you like to see?" name="msg" placeholder="Anything specific we should focus on" />

                <Magnetic strength={0.18}>
                  <button type="submit" className="btn-primary group justify-center w-full mt-3">
                    <span>Book my demo</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
                  </button>
                </Magnetic>
              </div>

              <div className="sent hidden flex-col items-center gap-4 text-center py-10">
                <div className="grid place-items-center w-14 h-14 rounded-full border border-[var(--color-emerald-400)]/30 text-[var(--color-emerald-400)]">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h3 className="editorial-lede text-[var(--color-ink)] balance max-w-[20ch]">
                  Thanks. We&apos;ll be in touch within one business day.
                </h3>
                <p className="body-m max-w-[36ch]">
                  A Logic Insight engineer will follow up with available demo windows.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, text, href }: { icon: LucideIcon; text: string; href?: string }) {
  const inner = (
    <span className="flex items-center gap-3.5 py-2.5 text-[0.9375rem] text-[var(--color-ink-soft)]">
      <Icon size={15} strokeWidth={1.5} className="text-[var(--color-p-300)]" />
      <span>{text}</span>
    </span>
  );
  return href ? (
    <a href={href} className="block hover:text-[var(--color-p-200)] transition-colors">
      {inner}
    </a>
  ) : inner;
}

function Field({ label, name, type = "text", required, placeholder, icon }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; icon?: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">
        {label}{required && " *"}
      </span>
      <span className="flex items-center gap-2.5 px-0 py-2.5 border-b border-[rgba(167,139,250,0.22)] focus-within:border-[var(--color-p-300)] transition-colors">
        {icon && <span className="text-[var(--color-ink-mute)]">{icon}</span>}
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete="off"
          className="flex-1 bg-transparent outline-none text-[1rem] tracking-[-0.005em] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]"
        />
      </span>
    </label>
  );
}

function TextArea({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">{label}</span>
      <textarea
        name={name}
        rows={3}
        placeholder={placeholder}
        className="px-0 py-2.5 border-b border-[rgba(167,139,250,0.22)] focus:border-[var(--color-p-300)] outline-none text-[1rem] tracking-[-0.005em] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] bg-transparent resize-none transition-colors"
      />
    </label>
  );
}
