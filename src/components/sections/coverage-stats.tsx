"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 50, suffix: "+", label: "Dashboards" },
  { value: 17, suffix: "",  label: "Report types" },
  { value: 1,  suffix: "",  label: "Console for operators" },
];

function Ticker({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1500, bounce: 0 });

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

export function CoverageStats() {
  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-bg)] px-6 py-12 md:py-16 text-center"
            >
              <div
                className="serif-italic gradient-text mb-3"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  lineHeight: 0.92,
                  fontFeatureSettings: "'tnum'",
                }}
              >
                <Ticker value={s.value} suffix={s.suffix} />
              </div>
              <div className="mono-eyebrow">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
