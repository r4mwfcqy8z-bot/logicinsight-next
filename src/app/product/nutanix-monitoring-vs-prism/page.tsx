"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { FinalCTA } from "@/components/sections/why-and-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

const PRISM_GOOD = [
  { name: "Native Nutanix management workflows", body: "Cluster admin, tasks, and operational actions: the management plane Nutanix designed." },
  { name: "Cluster administration",               body: "Upgrades, lifecycle, replication, snapshot policies handled at the source." },
  { name: "Core PE/PC health and inventory",      body: "Live state for the cluster, hosts, and VMs from inside the platform itself." },
];

const ADD_OVERWATCH = [
  { name: "Cross-domain visibility",     body: "Nutanix plus hardware, SNMP devices, backup, and flows tied to the same operating story." },
  { name: "Long-range dashboards + reports", body: "Scheduled executive and operator reporting with health scoring on top." },
  { name: "Optional cloud forwarding",   body: "Selective export to Datadog, Grafana Cloud, or Coralogix when teams need it." },
  { name: "Coverage outside native scope", body: "Redfish/IPMI, SNMP, config backup, and HYCU context that Prism does not carry." },
];

const COMPARE: Array<[string, string, string]> = [
  ["Prism Central and Prism Element visibility", "Yes",                              "Yes"],
  ["Bare-metal hardware health",                  "Limited / outside core focus",     "Yes"],
  ["SNMP devices and topology",                   "No",                               "Yes"],
  ["Backup compliance context",                   "No",                               "Yes"],
  ["Automated executive and right-sizing reports", "Limited",                          "Yes"],
  ["Selective cloud forwarding",                  "No",                               "Yes"],
];

export const dynamic = "force-static";

export default function VsPrismPage() {
  return (
    <>
      <PageHead
        eyebrow="Comparison"
        title={
          <>
            Nutanix monitoring{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              vs native Prism.
            </span>
          </>
        }
        sub="Prism is essential. It just isn&apos;t the whole observability picture. This is what teams add when they need broader infrastructure visibility, longer-range reporting, hardware context, network data, backup state, and optional cloud forwarding."
      />

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What Prism is already good at"
            title={
              <>
                Keep using it{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  for what it does well.
                </span>
              </>
            }
          />
          <FeatGrid items={PRISM_GOOD} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What teams add Overwatch for"
            title={
              <>
                The signal that lives{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  outside Prism.
                </span>
              </>
            }
          />
          <FeatGrid items={ADD_OVERWATCH} cols={2} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Comparison snapshot"
            title={<>Side by side.</>}
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="overflow-x-auto rounded-[24px] matte depth-2 p-2"
          >
            <table className="w-full text-sm border-separate border-spacing-0 min-w-[680px] table-fixed">
              <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-left kicker text-[var(--color-ink-mute)] px-5 py-4 align-middle">Capability</th>
                  <th className="text-center kicker text-[var(--color-ink)] px-5 py-4 align-middle">Native Prism</th>
                  <th className="text-center kicker text-[var(--color-p-300)] px-5 py-4 align-middle">Overwatch</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([label, p, o], i) => (
                  <tr key={i}>
                    <td className={`px-5 py-4 align-middle text-[0.9375rem] text-[var(--color-ink-soft)] ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>{label}</td>
                    <td className={`px-5 py-4 align-middle text-center ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>
                      {p === "Yes" ? (
                        <span className="inline-flex items-center gap-1.5 text-[var(--color-emerald-400)] text-[0.875rem]"><Check size={14} strokeWidth={2.2}/>Yes</span>
                      ) : p === "No" ? (
                        <span className="inline-flex items-center gap-1.5 text-[var(--color-ink-faint)] text-[0.875rem]"><Minus size={14} strokeWidth={2.2}/>No</span>
                      ) : (
                        <span className="text-[var(--color-ink-mute)] text-[0.8125rem]">{p}</span>
                      )}
                    </td>
                    <td className={`px-5 py-4 align-middle text-center ${i > 0 ? "border-t border-[rgba(167,139,250,0.12)]" : "border-t border-[rgba(167,139,250,0.16)]"}`}>
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-p-300)] font-medium text-[0.875rem]"><Check size={14} strokeWidth={2.2}/>{o}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="mt-10 max-w-[68ch] body-l">
            The strongest operating model is usually Prism for native management, plus Overwatch for broader observability, reporting, and adjacent infrastructure coverage.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
