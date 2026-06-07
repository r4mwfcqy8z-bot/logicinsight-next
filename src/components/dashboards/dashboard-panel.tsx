"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { asset } from "@/lib/asset";

const EASE = [0.22, 1, 0.36, 1] as const;

interface DashboardPanelProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Path label shown in browser address bar */
  path: string;
  /** Layout side for the screenshot, alternates compositions between instances. */
  align?: "left" | "right";
  /** Section mark like "§ 05" */
  mark?: string;
}

/**
 * Cinematic asymmetric product reveal.
 * Screenshot bleeds off-canvas; text hangs on the opposite side.
 * Same component supports left + right layout so consecutive instances vary.
 */
export function DashboardPanel({
  eyebrow, title, sub, src, alt, width, height, path,
  align = "left",
  mark,
}: DashboardPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y     = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.94, 1, 1, 0.97]);

  const isLeft = align === "left";

  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <div className="editorial-shell">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Screenshot, bleeds beyond editorial-shell on the LEFT or RIGHT depending on align. */}
          <motion.div
            style={{ y, scale }}
            className={`col-span-12 relative ${
              isLeft
                ? "lg:col-span-7 lg:order-1 lg:ml-[-6vw]"
                : "lg:col-span-7 lg:order-2 lg:mr-[-6vw]"
            }`}
          >
            <div>
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.18), transparent 65%)" }}
              />
              <div className="relative rounded-[20px] overflow-hidden matte-strong">
                {/* Browser chrome, restrained. */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-black/40">
                  <span className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </span>
                  <div className="ml-2 flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/8 font-mono text-[11px] tracking-[0.04em] text-[var(--color-ink-mute)]">
                      <span>overwatch.local</span>
                      <span className="text-[var(--color-ink-faint)]">{path}</span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-[#07050E]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(src)}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                    style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(1.08)" }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(900px 480px at 50% 0%, rgba(167,139,250,0.10), transparent 70%)",
                      mixBlendMode: "screen",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text, hangs on the OPPOSITE side. */}
          <div className={`col-span-12 lg:col-span-5 ${
            isLeft ? "lg:order-2 lg:pl-[2vw]" : "lg:order-1 lg:pr-[2vw]"
          }`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <h2 className="editorial-lede balance mb-6">{title}</h2>
              <p className="body-l max-w-[44ch] mb-7">{sub}</p>
              <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-p-300)] uppercase">
                {eyebrow}
              </div>
              {mark && <div className="hidden">{mark}</div>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
