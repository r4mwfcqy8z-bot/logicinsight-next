"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Building2, Check, ArrowRight } from "lucide-react";
import { PageHead } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { Magnetic } from "@/components/magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const COMPANY_SIZES = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"];
const INQUIRY_TYPES = ["General Inquiry", "Sales", "Support", "Partnership", "Demo Request", "Free Trial"];

export default function ContactView() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title={
          <>
            Let&apos;s{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              talk.
            </span>
          </>
        }
        sub="Questions about Logic Insight, or ready to schedule a demo? The team is here to help you evaluate Overwatch in your environment."
      />

      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
            {/* Contact channels */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="kicker mb-6">Contact information</div>
              <h2 className="editorial-lede balance max-w-[20ch] mb-8">
                Reach out on any channel,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.03em" }}>
                  we&apos;ll get back promptly.
                </span>
              </h2>

              <div className="border-t border-[rgba(167,139,250,0.14)]">
                <ChannelCard
                  icon={Mail}
                  label="Email"
                  value="contact@logicinsight.io"
                  note="We respond within 24 hours"
                  href="mailto:contact@logicinsight.io"
                />
                <ChannelCard
                  icon={MapPin}
                  label="Office"
                  value="Orlando, FL"
                  note="United States"
                />
                <ChannelCard
                  icon={Building2}
                  label="Enterprise inquiries"
                  value="enterprise@logicinsight.io"
                  note="Enterprise pricing, custom integrations, or dedicated support options."
                  href="mailto:enterprise@logicinsight.io"
                  arrow
                />
              </div>
            </motion.div>

            {/* Message form */}
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).classList.add("is-sent"); }}
              className="relative rounded-[24px] p-7 md:p-10 signature-glass [&.is-sent>.fields]:hidden [&.is-sent>.sent]:!flex"
            >
              <div className="kicker text-[var(--color-p-300)] mb-7">Send us a message</div>
              <div className="fields grid gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required placeholder="Jordan Avery" />
                  <Field label="Email" name="email" type="email" required placeholder="jordan@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                  <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select label="Company Size" name="company_size" options={COMPANY_SIZES} placeholder="Select size" />
                  <Field label="Nutanix Nodes" name="nutanix_nodes" placeholder="e.g., 10-50" />
                </div>
                <Select label="Inquiry Type" name="inquiry_type" options={INQUIRY_TYPES} placeholder="General Inquiry" />
                <TextArea label="Message" name="message" required placeholder="Tell us about your needs" />

                <Magnetic strength={0.18}>
                  <button type="submit" className="btn-primary group justify-center w-full mt-2">
                    <span>Send message</span>
                    <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                  </button>
                </Magnetic>
              </div>

              <div className="sent hidden flex-col items-center gap-4 text-center py-10">
                <div className="grid place-items-center w-14 h-14 rounded-full border border-[var(--color-emerald-400)]/30 text-[var(--color-emerald-400)]">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h3 className="editorial-lede text-[var(--color-ink)] balance max-w-[22ch]">
                  Thanks. Your message is on its way.
                </h3>
                <p className="body-m max-w-[36ch]">
                  A Logic Insight engineer will follow up within one business day.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function ChannelCard({ icon: Icon, label, value, note, href, arrow }: { icon: typeof Mail; label: string; value: string; note: string; href?: string; arrow?: boolean }) {
  const inner = (
    <div className="group flex items-start gap-4 py-5 border-b border-[rgba(167,139,250,0.14)]">
      <span className="grid place-items-center w-10 h-10 rounded-xl border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)] text-[var(--color-p-300)] shrink-0 transition-colors group-hover:border-[var(--color-p-400)]/45">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <div className="kicker mb-2">{label}</div>
        <div className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)] inline-flex items-center gap-1.5">
          {value}
          {arrow && <ArrowRight size={14} strokeWidth={2} className="text-[var(--color-p-300)] group-hover:translate-x-0.5 transition-transform" />}
        </div>
        <p className="text-[0.875rem] text-[var(--color-ink-mute)] mt-1.5 leading-[1.45]">{note}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition-colors hover:text-[var(--color-p-200)]">{inner}</a> : inner;
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">{label}{required && " *"}</span>
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

function TextArea({ label, name, required, placeholder }: { label: string; name: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">{label}{required && " *"}</span>
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="px-0 py-2.5 border-b border-[rgba(167,139,250,0.22)] focus:border-[var(--color-p-300)] outline-none text-[1rem] tracking-[-0.005em] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] bg-transparent resize-none transition-colors"
      />
    </label>
  );
}

function Select({ label, name, required, options, placeholder }: { label: string; name: string; required?: boolean; options: string[]; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="kicker text-[var(--color-ink-mute)]">{label}{required && " *"}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="px-0 py-2.5 border-b border-[rgba(167,139,250,0.22)] focus:border-[var(--color-p-300)] outline-none text-[1rem] tracking-[-0.005em] text-[var(--color-ink)] bg-transparent transition-colors appearance-none cursor-pointer [&>option]:bg-[var(--color-surface)] [&>option]:text-[var(--color-ink)]"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
