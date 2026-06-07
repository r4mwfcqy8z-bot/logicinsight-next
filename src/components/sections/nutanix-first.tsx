"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Server, Network, ShieldCheck, HardDrive } from "lucide-react";
import { VisibilityMount } from "@/components/scenes/visibility";

const ClusterConstellation = dynamic(
  () => import("@/components/scenes/cluster-constellation").then((m) => m.ClusterConstellation),
  { ssr: false }
);

const EASE = [0.22, 1, 0.36, 1] as const;

const RINGS = [
  { name: "Hardware", detail: "Redfish · IPMI · sensors",  icon: Server      },
  { name: "Network",  detail: "SNMP · IPFIX · topology",   icon: Network     },
  { name: "Backup",   detail: "HYCU · retention · jobs",   icon: ShieldCheck },
  { name: "Storage",  detail: "Objects · Wasabi · S3",     icon: HardDrive   },
];

export function NutanixFirst() {
  return (
    <section className="relative min-h-[92vh] flex items-center py-24 md:py-32 overflow-hidden">
      {/* Constellation: edge-to-edge on the left, bleeds off left/top/bottom,
          feathered on the right so it dissolves into the page (no hard rectangle, no overlap). */}
      <div className="pointer-events-none absolute inset-y-[-10%] left-[-8%] w-[64%] lg:w-[58%] z-0">
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(110% 90% at 38% 50%, #000 30%, rgba(0,0,0,0.5) 60%, transparent 82%)",
            maskImage:
              "radial-gradient(110% 90% at 38% 50%, #000 30%, rgba(0,0,0,0.5) 60%, transparent 82%)",
          }}
        >
          <VisibilityMount className="absolute inset-0">
            <ClusterConstellation />
          </VisibilityMount>
        </div>
        <div
          aria-hidden
          className="absolute left-[28%] top-1/2 -translate-y-1/2 w-[55%] h-[55%] -z-10 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 65%)" }}
        />
      </div>

      <div className="editorial-shell relative z-10 w-full">
        <div className="grid-edit items-center">
          {/* Content lives in the right half, clear of the constellation. */}
          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-6"
            >
              <span className="kicker">Nutanix-first operations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="editorial-statement balance"
            >
              <span className="block">Nutanix is the anchor.</span>
              <span className="block italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                Everything around it
              </span>
              <span className="block">stops feeling disconnected.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
              className="editorial-sub max-w-[52ch] mt-8"
            >
              Prism is the source of truth for the cluster itself. Hardware, network gear, backup posture,
              and storage dependencies usually live in their own consoles. Overwatch keeps Nutanix at the
              center and extends the same operating model outward, so every signal sits next to the workload it affects.
            </motion.p>

            {/* Orbiting domains — refined 2x2 list, wider icon-to-text spacing. */}
            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-[640px]">
              {RINGS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.08 }}
                    className="group flex items-start gap-5"
                  >
                    <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl border border-[rgba(167,139,250,0.20)] bg-[rgba(167,139,250,0.05)] text-[var(--color-p-300)] transition-colors group-hover:border-[var(--color-p-300)]/50 group-hover:text-[var(--color-p-100)]">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <div className="pt-0.5">
                      <div className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">
                        {r.name}
                      </div>
                      <div className="font-mono text-[11px] text-[var(--color-ink-mute)] mt-1.5 tracking-[0.04em]">
                        {r.detail}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
