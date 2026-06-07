"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Ticker({ value, suffix, duration = 1600 }: { value: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const STATS = [
  { value: 50, suffix: "+", label: "Dashboards",            note: "Executive, cluster, VM, hardware, backup, and flow." },
  { value: 17, suffix: "",  label: "Report types",          note: "Capacity, anomalies, right-sizing, protection, more." },
  { value: 1,  suffix: "",  label: "Console for operators", note: "Everything in one local operating view." },
];

export function CoverageStats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="editorial-shell">
        {/* Framing lead keeps the band from reading empty. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid-edit items-end mb-12 md:mb-14"
        >
          <div className="col-span-12 lg:col-span-7">
            <div className="kicker mb-5">By the numbers</div>
            <h2 className="editorial-lede balance max-w-[20ch]">
              Everything an operator needs,{" "}
              <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.03em" }}>
                in one place.
              </span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-start-9 lg:col-span-4 self-end editorial-sub max-w-[40ch] mt-5 lg:mt-0">
            Overwatch turns 818+ raw Nutanix signals into the views and reports a team actually operates from.
          </p>
        </motion.div>

        {/* Divided stat band — full width, balanced, no dead air. */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[rgba(167,139,250,0.18)]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`relative py-10 md:py-12 ${
                i > 0
                  ? "border-t md:border-t-0 md:border-l border-[rgba(167,139,250,0.18)] md:pl-10"
                  : ""
              } ${i < STATS.length - 1 ? "md:pr-10" : ""}`}
            >
              <div
                className={`numeral ${i === 0 ? "text-[var(--color-ink)]" : "text-[var(--color-p-200)]"}`}
                style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", lineHeight: 0.84 }}
              >
                <Ticker value={s.value} suffix={s.suffix} duration={1500 + i * 150} />
              </div>
              <div className="mt-4 kicker text-[var(--color-ink)]">{s.label}</div>
              <p className="mt-3 text-[0.9rem] leading-[1.5] text-[var(--color-ink-mute)] max-w-[34ch]">
                {s.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
