import { PageHead, SectionHead, FeatGrid } from "@/components/sections/page-head";
import { DashboardPanel } from "@/components/dashboards/dashboard-panel";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { Search, Workflow, Activity, Box, Bell, Cable, Network, FileText, Eye } from "lucide-react";

export const metadata = { title: "SNMP Network Monitoring" };

const PROBLEM = [
  { name: "Console sprawl",        body: "Different tools for polling, topology, traps, and config. Each has its own UI, alerts, and learning curve." },
  { name: "Vendor lock-in",        body: "Cisco, Arista, Juniper, and Palo Alto each ship their own monitoring suite. None of them cover the others." },
  { name: "Disconnected from infra", body: "Network alerts fire in isolation from the cluster, hardware, and backup signals that explain the impact." },
];

const FEATURES = [
  { icon: <Search size={18} strokeWidth={1.5} />,    name: "Auto-discovery",       body: "Sweep subnets and identify devices automatically. Match vendors, classify roles, and start polling without manual onboarding." },
  { icon: <Workflow size={18} strokeWidth={1.5} />,  name: "Topology mapping",     body: "LLDP and CDP neighbor discovery builds a live network topology. See what is connected to what across the entire fleet." },
  { icon: <Activity size={18} strokeWidth={1.5} />,  name: "Interface utilization", body: "Per-port traffic, errors, drops, and saturation trends. Spot saturated uplinks and underused capacity at a glance." },
  { icon: <Box size={18} strokeWidth={1.5} />,       name: "VLAN, ARP, FDB tables", body: "Read and inspect VLAN membership, ARP tables, and forwarding databases for any device in the fleet." },
  { icon: <Bell size={18} strokeWidth={1.5} />,      name: "SNMP trap ingestion",  body: "Receive SNMPv1 / v2c / v3 traps with rule evaluation, dry-run testing, and unified alert routing." },
  { icon: <Cable size={18} strokeWidth={1.5} />,     name: "Config backup + sync", body: "SSH / Telnet config backup with versioning and diff. Cross-vendor config sync with dry-run validation." },
];

const DEEP_DIVE = [
  "CPU, memory, and storage utilization",
  "Ping latency and packet loss tracking",
  "Per-port interface charts with traffic and error overlays",
  "Sensor telemetry: temperature, fans, power supplies",
  "System info, alerts, and audit logs in tabs",
];

const PORT = [
  "Bandwidth utilization with ingress / egress overlay",
  "Input and output error counters",
  "Speed, admin state, operational state, MTU, VLAN",
  "ARP, FDB, and neighbor tables per port",
  "Click-to-zoom historical traffic charts",
];

const WHY = [
  { icon: <Network size={18} strokeWidth={1.5} />,  name: "Mixed-vendor coverage without tool sprawl", body: "Stop splitting visibility across separate polling, topology, config, and trap utilities. One platform covers all of it." },
  { icon: <Eye size={18} strokeWidth={1.5} />,      name: "Topology plus config state",                body: "Overwatch covers both network behavior and the device configurations that often explain it. No separate config tool required." },
  { icon: <FileText size={18} strokeWidth={1.5} />, name: "No-code extensibility",                      body: "New device families are added through YAML profiles. No vendor lock-in, no waiting for product updates." },
];

const VENDORS = ["Cisco", "Arista", "Juniper", "Palo Alto", "Fortinet", "F5", "HPE", "Dell", "Aruba", "MikroTik", "Ubiquiti", "Brocade"];

const STATS = [
  { v: "210+",  l: "Vendor profiles" },
  { v: "v1 / v2c / v3", l: "SNMP versions" },
  { v: "YAML", l: "No-code extensibility" },
];

export default function SNMPPage() {
  return (
    <>
      <PageHead
        eyebrow="SNMP network monitoring"
        title={
          <>
            Network monitoring{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              for every device on the wire.
            </span>
          </>
        }
        sub="Auto-discover switches, firewalls, and routers across every vendor in your fleet. Port-level traffic, LLDP topology, VLAN inspection, and config backup, from one Overwatch appliance, no separate NMS required."
      />

      <section className="relative pb-6">
        <div className="editorial-shell max-w-[1080px]">
          <div className="grid grid-cols-3 gap-0 border-y border-[rgba(167,139,250,0.18)]">
            {STATS.map((s, i) => (
              <div key={s.l} className={`px-6 py-7 ${i > 0 ? "border-l border-[rgba(167,139,250,0.18)]" : ""}`}>
                <div
                  className="numeral text-[var(--color-ink)]"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {s.v}
                </div>
                <div className="kicker mt-3 text-[var(--color-ink-mute)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DashboardPanel
        align="left"
        eyebrow="SNMP fleet monitoring"
        title={
          <>
            The actual product,{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.04em" }}>
              live.
            </span>
          </>
        }
        sub="Every device, every port, every config, beside Nutanix in the same Overwatch console."
        src="/dashboards/snmp-fleet.png"
        alt="Overwatch SNMP Fleet"
        width={2880}
        height={1530}
        path="/snmp/fleet"
      />

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="The problem"
            title={
              <>
                Network monitoring{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  lives in too many places.
                </span>
              </>
            }
            sub="Most teams stitch together a polling tool, a topology mapper, a trap collector, a config backup utility, and vendor-specific dashboards. None of them talk to each other, and the network team becomes the integration team."
          />
          <FeatGrid items={PROBLEM} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="What you get"
            title={
              <>
                Everything a serious NMS does,{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  beside Nutanix.
                </span>
              </>
            }
            sub="Overwatch ships with a full SNMP monitoring stack built on top of the same platform you use for cluster, hardware, and backup observability."
          />
          <FeatGrid items={FEATURES} cols={3} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Device deep dive"
            title={
              <>
                Drill into any device{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  for the full picture.
                </span>
              </>
            }
            sub="Click any device to get health metrics, port-level traffic, sensor data, system info, alerts, logs, and configuration in one place. No tab-switching across vendor consoles."
          />
          <ul className="grid md:grid-cols-2 gap-0 border-t border-[rgba(167,139,250,0.16)] max-w-[920px]">
            {DEEP_DIVE.map((it, i) => (
              <li
                key={it}
                className={`px-4 py-5 border-b border-[rgba(167,139,250,0.16)] ${i % 2 === 0 ? "md:border-r md:border-r-[rgba(167,139,250,0.16)]" : ""}`}
              >
                <span className="text-[0.95rem] text-[var(--color-ink-soft)] leading-[1.5]">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Port-level traffic"
            title={
              <>
                See exactly which port{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  is saturated.
                </span>
              </>
            }
            sub="Every interface gets traffic charts with ingress and egress overlays, error counters, and operational state. Hover any time range to compare patterns across days, weeks, or months."
          />
          <ul className="grid md:grid-cols-2 gap-0 border-t border-[rgba(167,139,250,0.16)] max-w-[920px]">
            {PORT.map((it, i) => (
              <li
                key={it}
                className={`px-4 py-5 border-b border-[rgba(167,139,250,0.16)] ${i % 2 === 0 ? "md:border-r md:border-r-[rgba(167,139,250,0.16)]" : ""}`}
              >
                <span className="text-[0.95rem] text-[var(--color-ink-soft)] leading-[1.5]">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="LLDP / CDP topology"
            title={
              <>
                Live neighbor discovery{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  across the fleet.
                </span>
              </>
            }
            sub="Overwatch reads LLDP and CDP from every monitored device and builds a continuously updated map of what is physically connected to what. See spine-leaf paths, identify orphan ports, and trace connectivity issues in seconds."
          />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Vendor coverage"
            title={
              <>
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  210+ vendor profiles.
                </span>{" "}
                YAML-extensible.
              </>
            }
            sub="Overwatch ships with vendor profiles for every major network platform. Adding a new device family is a YAML file, not a custom code drop or vendor support ticket."
          />
          <div className="flex flex-wrap gap-2.5 max-w-[920px]">
            {VENDORS.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full text-[0.875rem] font-medium tracking-[-0.005em] border border-[rgba(167,139,250,0.16)] text-[var(--color-ink-soft)] hover:border-[var(--color-p-300)]/40 hover:text-[var(--color-p-200)] transition-colors"
              >
                {v}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full text-[0.875rem] font-medium tracking-[-0.005em] bg-[var(--color-p-500)]/15 text-[var(--color-p-200)] border border-[var(--color-p-400)]/30">
              + 200 more
            </span>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="editorial-shell">
          <SectionHead
            eyebrow="Why Overwatch"
            title={
              <>
                Network monitoring{" "}
                <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
                  beside Nutanix monitoring.
                </span>
              </>
            }
            sub="When SNMP data lives next to cluster, hardware, backup, and flow telemetry, the network team and the infrastructure team finally see the same picture during incidents."
          />
          <FeatGrid items={WHY} cols={3} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
