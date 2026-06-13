"use client";

import { motion } from "motion/react";
import { HOME_FAQ as FAQ } from "@/content/faq";

const EASE = [0.22, 1, 0.36, 1] as const;

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay: i * 0.04, ease: EASE }}
      className="group border-b border-[rgba(167,139,250,0.16)] py-6 last:border-b-0"
    >
      <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
        <span className="text-[1.1rem] md:text-[1.25rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)] balance">
          {q}
        </span>
        <span
          className="grid place-items-center w-9 h-9 rounded-full border border-[rgba(167,139,250,0.22)] text-[var(--color-p-300)] text-xl group-open:rotate-45 transition-transform duration-500 shrink-0"
          style={{ transitionTimingFunction: "var(--ease-editorial)" }}
        >
          +
        </span>
      </summary>
      <p className="mt-4 max-w-[70ch] body-l leading-[1.55]">{a}</p>
    </motion.details>
  );
}

export function HomeFAQ() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="editorial-shell">
        <div className="grid-edit items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="col-span-12 lg:col-span-4 lg:sticky lg:top-32"
          >
            <h2 className="editorial-statement balance max-w-[14ch]">
              The short{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
                answers.
              </span>
            </h2>
          </motion.div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7 border-t border-[rgba(167,139,250,0.16)]">
            {FAQ.map((f, i) => <FAQItem key={f.q} {...f} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
