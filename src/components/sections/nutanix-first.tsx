"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Server, Network, ShieldCheck, HardDrive } from "lucide-react";

const ClusterConstellation = dynamic(
  () => import("@/components/scenes/cluster-constellation").then((m) => m.ClusterConstellation),
  { ssr: false }
);

const RINGS = [
  { name: "Hardware",  detail: "Redfish · IPMI · sensors", icon: Server     },
  { name: "Network",   detail: "SNMP · IPFIX · topology",  icon: Network    },
  { name: "Backup",    detail: "HYCU · retention · jobs",  icon: ShieldCheck },
  { name: "Storage",   detail: "Objects · Wasabi · S3",    icon: HardDrive  },
];

export function NutanixFirst() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mono-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-p-300)]" />
              Nutanix-first operations
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="display-2 mb-5"
            >
              Nutanix is the anchor.{" "}
              <span className="serif-italic gradient-text">
                Everything around it stops feeling disconnected.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-[540px] text-lg leading-relaxed text-[var(--color-ink-soft)] mb-8"
            >
              Prism is the source of truth for the cluster itself — but hardware, network gear, backup
              posture, and storage dependencies usually live in their own consoles. Overwatch keeps Nutanix
              at the center and extends the same operating model outward, so every signal sits next to the
              workload it actually affects.
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
              className="grid grid-cols-2 gap-3 max-w-[520px]"
            >
              {RINGS.map((r) => {
                const Icon = r.icon;
                return (
                  <motion.li
                    key={r.name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="group flex items-start gap-3 px-4 py-3 rounded-2xl glass hover:border-[var(--color-p-400)]/30 transition-colors"
                  >
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-p-400)]/20 to-[var(--color-p-400)]/5 border border-[var(--color-p-400)]/25 text-[var(--color-p-300)] shrink-0">
                      <Icon size={15} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[var(--color-ink)] font-semibold text-sm">{r.name}</span>
                      <span className="font-mono text-[11px] text-[var(--color-ink-mute)] mt-0.5">
                        {r.detail}
                      </span>
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* RIGHT — cluster constellation R3F */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto lg:max-w-none">
            <div className="absolute inset-0">
              <ClusterConstellation />
            </div>
            <div
              className="absolute -inset-8 -z-10 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(167,139,250,0.22), transparent 60%)" }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
