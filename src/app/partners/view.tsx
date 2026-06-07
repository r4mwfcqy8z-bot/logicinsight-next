"use client";

import { motion } from "motion/react";
import { Boxes, Store, Wrench, Share2, TrendingUp, Megaphone, Award, KeyRound, Globe, LifeBuoy, BarChart3, Check } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { SpotlightCard } from "@/components/wow/spotlight-card";
import { Magnetic } from "@/components/magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const PROGRAMS = [
  {
    icon: Boxes,
    name: "Technology Partner",
    body: "Build technical integrations that extend infrastructure observability and broaden the data visible from one console.",
    bullets: ["Technical integration collaboration", "Enablement and technical alignment", "Co-marketing opportunities"],
  },
  {
    icon: Store,
    name: "Reseller Partner",
    body: "Introduce and resell Logic Insight to your customers with a supported, well-defined sales motion.",
    bullets: ["Competitive margins", "Sales enablement", "Deal registration"],
  },
  {
    icon: Wrench,
    name: "Consulting Partner",
    body: "Deliver implementation, integration, and consulting services for Logic Insight customers.",
    bullets: ["Implementation enablement", "Service delivery collaboration", "Customer referrals"],
  },
  {
    icon: Share2,
    name: "Referral Partner",
    body: "Refer qualified leads and earn commissions on the deals that close. Light-touch by design.",
    bullets: ["Referral commissions", "Simple program", "No commitment required"],
  },
];

const BENEFITS = [
  { icon: <TrendingUp size={18} strokeWidth={1.5} />,  name: "Revenue Growth",        body: "Access new revenue streams and expand your business." },
  { icon: <Megaphone size={18} strokeWidth={1.5} />,   name: "Go-to-Market Support",  body: "Collaborative marketing efforts and sales enablement." },
  { icon: <Award size={18} strokeWidth={1.5} />,       name: "Certification Programs", body: "Technical training and partner enablement resources." },
  { icon: <KeyRound size={18} strokeWidth={1.5} />,    name: "Partner Portal Access", body: "Register deals, access technical resources, and track co-marketing through the Logic Insight Partner Portal." },
  { icon: <Globe size={18} strokeWidth={1.5} />,       name: "Global Reach",          body: "Support customer engagements across multiple regions." },
  { icon: <LifeBuoy size={18} strokeWidth={1.5} />,    name: "Dedicated Support",     body: "Partner-focused technical and onboarding support." },
  { icon: <BarChart3 size={18} strokeWidth={1.5} />,   name: "Business Insights",     body: "Access to market intelligence and analytics." },
];

const PARTNERSHIP_TYPES = ["Technology Partner", "Reseller Partner", "Consulting Partner", "Integration Partner", "Referral Partner"];
const REVENUE_RANGES = ["Under $1M", "$1M - $10M", "$10M - $50M", "$50M - $100M", "Over $100M"];

export default function PartnersView() {
  return (
    <>
      <PageHead
        eyebrow="Partner program"
        title={
          <>
            Grow together{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              with Logic Insight.
            </span>
          </>
        }
        sub="Join our partner ecosystem and unlock new opportunities. Accepted partners get the Logic Insight Partner Portal, with deal registration, technical enablement, co-marketing tools, and dedicated partner support."
        glow="pink"
      />

      {/* Partnership Programs */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Partnership programs"
            title={
              <>
                Choose the model that{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  fits your business.
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROGRAMS.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
                >
                  <SpotlightCard glow="violet" className="h-full p-8 md:p-9 rounded-[24px] matte depth-1 hover:depth-2 transition-shadow duration-500">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-p-300)] mb-6 border border-[rgba(167,139,250,0.18)] bg-[rgba(167,139,250,0.06)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 className="text-[1.375rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] mb-3">{prog.name}</h3>
                    <p className="body-m max-w-[44ch]">{prog.body}</p>
                    <ul className="mt-6 grid gap-2.5 border-t border-[rgba(167,139,250,0.14)] pt-5">
                      {prog.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-ink-soft)] leading-[1.45]">
                          <Check size={14} strokeWidth={2.2} className="mt-1 text-[var(--color-p-300)] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Partner benefits"
            title={
              <>
                Everything you need to{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                  succeed as a partner.
                </span>
              </>
            }
          />
          <FeatGrid items={BENEFITS} cols={3} />
        </div>
      </section>

      {/* Become a Partner — application form */}
      <section className="relative py-16 md:py-24">
        <div className="editorial-shell">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="kicker mb-6">Become a partner</div>
              <h2 className="editorial-lede balance max-w-[18ch] mb-8">
                Fill out the form and our partnership team{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.03em" }}>
                  will get in touch.
                </span>
              </h2>
              <p className="body-l max-w-[46ch]">
                Our partnership team reviews each application to confirm alignment and mutual fit before reaching out.
              </p>
              <div className="mt-10 grid gap-3 max-w-[420px]">
                <ContactLine label="Email" value="contact@logicinsight.io" href="mailto:contact@logicinsight.io" />
                <ContactLine label="Phone" value="+1-407-513-2359" href="tel:+14075132359" />
                <ContactLine label="Office" value="Orlando, FL" />
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
              <div className="kicker text-[var(--color-p-300)] mb-7">Partner application</div>
              <div className="fields grid gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company Name" name="company_name" required placeholder="Acme Inc." />
                  <Field label="Contact Name" name="contact_name" required placeholder="Jordan Avery" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" required placeholder="jordan@company.com" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <Field label="Company Website" name="website" placeholder="https://company.com" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select label="Partnership Type" name="partnership_type" required options={PARTNERSHIP_TYPES} placeholder="Select type" />
                  <Select label="Annual Revenue" name="annual_revenue" options={REVENUE_RANGES} placeholder="Select range" />
                </div>
                <Field label="Operating Regions" name="regions" placeholder="e.g., North America, EMEA" />
                <TextArea label="Company Description" name="company_description" placeholder="Tell us about your company" />
                <TextArea label="Partnership Goals" name="partnership_goals" placeholder="What do you hope to achieve through this partnership?" />

                <Magnetic strength={0.18}>
                  <button type="submit" className="btn-primary group justify-center w-full mt-2">
                    <span>Submit application</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
                  </button>
                </Magnetic>
                <p className="text-[12px] text-[var(--color-ink-faint)] leading-[1.5] text-center">
                  By submitting, you agree to our partner program terms and conditions.
                </p>
              </div>

              <div className="sent hidden flex-col items-center gap-4 text-center py-10">
                <div className="grid place-items-center w-14 h-14 rounded-full border border-[var(--color-emerald-400)]/30 text-[var(--color-emerald-400)]">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h3 className="editorial-lede text-[var(--color-ink)] balance max-w-[22ch]">
                  Thanks. Your partner application is in.
                </h3>
                <p className="body-m max-w-[38ch]">
                  Our partnership team will review it for fit and follow up within a few business days.
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

function ContactLine({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <span className="flex items-baseline justify-between gap-6 py-3 border-b border-[rgba(167,139,250,0.14)]">
      <span className="kicker text-[var(--color-ink-mute)]">{label}</span>
      <span className="text-[0.9375rem] text-[var(--color-ink-soft)] tracking-[-0.005em]">{value}</span>
    </span>
  );
  return href ? <a href={href} className="block hover:text-[var(--color-p-200)] transition-colors">{inner}</a> : inner;
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
