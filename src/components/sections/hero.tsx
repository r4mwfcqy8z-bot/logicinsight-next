"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { VisibilityMount } from "@/components/scenes/visibility";
import { KineticHeadline } from "@/components/wow/kinetic-headline";
import { CursorParallax } from "@/components/wow/cursor-parallax";

const HeroPolyhedron = dynamic(
  () => import("@/components/scenes/hero-polyhedron").then((m) => m.HeroPolyhedron),
  { ssr: false }
);

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Ambient R3F. Full-bleed canvas, edges feathered with a radial mask so there is
          no rectangular cutoff. The scene reads edge-to-edge and dissolves into the page. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <CursorParallax strength={22} className="absolute inset-[-12%]">
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "radial-gradient(115% 95% at 68% 44%, #000 38%, rgba(0,0,0,0.55) 64%, transparent 86%)",
              maskImage:
                "radial-gradient(115% 95% at 68% 44%, #000 38%, rgba(0,0,0,0.55) 64%, transparent 86%)",
            }}
          >
            <VisibilityMount className="absolute inset-0">
              <HeroPolyhedron />
            </VisibilityMount>
          </div>
          <div
            aria-hidden
            className="absolute right-[8%] top-[28%] w-[55%] h-[55%] -z-10 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.22), transparent 65%)" }}
          />
        </CursorParallax>
        {/* Editorial cover-fade, left half slightly veiled so headline reads cleanly. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(8,6,14,0.94) 0%, rgba(8,6,14,0.80) 38%, rgba(8,6,14,0.32) 66%, transparent 90%)",
          }}
        />
      </div>

      <div className="editorial-shell relative z-10 pt-24 pb-16">
        <div className="grid-edit min-h-[calc(100dvh-10rem)]">
          {/* Single kicker, no pill, no dot, no decorative section number. */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="col-span-12 md:col-span-6"
          >
            <span className="kicker text-[var(--color-p-300)]">Overwatch by Logic Insight</span>
          </motion.div>

          {/* Editorial headline, sprawls across asymmetric columns, breaks naturally. */}
          <KineticHeadline
            as="h1"
            trigger="mount"
            stagger={0.06}
            delay={0.1}
            className="col-span-12 editorial-display balance self-end max-w-[20ch]"
          >
            Overwatch keeps your{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              Nutanix stack
            </span>{" "}
            in one operational view.
          </KineticHeadline>

          {/* Lede + CTAs, hangs into the lower-left, dramatic empty space to the right. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.45 }}
            className="col-span-12 lg:col-span-7 self-end"
            style={{ marginTop: "clamp(1.25rem, 3vh, 2.5rem)" }}
          >
            <p className="editorial-sub max-w-[42ch] mb-8">
              One local appliance. Full-stack visibility across clusters, hardware, network, and backups,
              with ML-driven anomaly detection.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Magnetic strength={0.22}>
                <Link href="/free-trial" className="btn-primary group">
                  <span>Start free trial</span>
                  <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>
              </Magnetic>

              <Link href="/demo" className="btn-ghost">
                <span>Book a demo</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
