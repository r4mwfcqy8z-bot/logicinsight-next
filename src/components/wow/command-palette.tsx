"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, ArrowRight } from "lucide-react";

interface Item {
  label: string;
  href: string;
  keywords?: string[];
}
interface Group {
  heading: string;
  items: Item[];
}

const GROUPS: Group[] = [
  {
    heading: "Get started",
    items: [
      { label: "Start free trial", href: "/free-trial", keywords: ["trial", "try", "signup"] },
      { label: "Book a demo", href: "/demo", keywords: ["demo", "call"] },
      { label: "Contact sales", href: "/contact", keywords: ["contact", "sales", "support"] },
      { label: "Pricing", href: "/pricing", keywords: ["price", "cost", "per core"] },
    ],
  },
  {
    heading: "Product",
    items: [
      { label: "Features", href: "/product/features" },
      { label: "Architecture", href: "/product/architecture" },
      { label: "AI Assistant", href: "/product/ai-assistant" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Cluster Monitoring", href: "/product/cluster-monitoring" },
      { label: "Predictive Analytics", href: "/product/predictive-analytics" },
      { label: "Network Flow Analysis", href: "/product/network-flow-analysis" },
      { label: "HCI Monitoring", href: "/product/hci-monitoring" },
      { label: "SNMP Monitoring", href: "/product/snmp-monitoring" },
      { label: "AHV Monitoring", href: "/product/ahv-monitoring" },
      { label: "HYCU Monitoring", href: "/product/hycu-monitoring", keywords: ["backup"] },
      { label: "Redfish Monitoring", href: "/product/redfish-monitoring", keywords: ["hardware", "ipmi"] },
      { label: "Prism Central Monitoring", href: "/product/prism-central-monitoring" },
      { label: "Nutanix + Datadog", href: "/product/nutanix-datadog" },
      { label: "Nutanix + Grafana", href: "/product/nutanix-grafana" },
      { label: "Overwatch vs native Prism", href: "/product/nutanix-monitoring-vs-prism" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Use Cases", href: "/solutions/use-cases" },
      { label: "Coverage Explorer", href: "/solutions/coverage", keywords: ["coverage", "explore"] },
      { label: "Monitoring as a Service", href: "/solutions/monitoring-as-a-service", keywords: ["maas", "managed"] },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Resources", href: "/resources" },
      { label: "Glossary", href: "/resources/glossary", keywords: ["terms", "definitions"] },
      { label: "Deployment Timeline", href: "/resources/deployment-timeline", keywords: ["deploy", "setup"] },
      { label: "Monitor Nutanix with Datadog", href: "/resources/how-to-monitor-nutanix-with-datadog" },
      { label: "Monitor Nutanix with Grafana", href: "/resources/how-to-monitor-nutanix-with-grafana" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy", keywords: ["legal", "gdpr", "ccpa"] },
      { label: "Terms of Use", href: "/terms-of-service", keywords: ["legal"] },
      { label: "Security", href: "/security", keywords: ["soc 2", "compliance", "tls"] },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("li:command", onOpen as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("li:command", onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.7 }}
            className="relative w-full max-w-[600px]"
          >
            <Command
              label="Command menu"
              className="overflow-hidden rounded-[20px] glass-strong shadow-2xl ring-1 ring-white/10"
              filter={(value, search, keywords) => {
                const haystack = (value + " " + (keywords?.join(" ") ?? "")).toLowerCase();
                return haystack.includes(search.toLowerCase()) ? 1 : 0;
              }}
            >
              <div className="flex items-center gap-3 px-4 border-b border-white/8">
                <Search size={17} className="text-[var(--color-ink-faint)] shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages and actions"
                  className="w-full bg-transparent py-4 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none"
                />
                <kbd className="hidden sm:grid place-items-center h-5 px-1.5 text-[10px] font-mono text-[var(--color-ink-mute)] bg-white/5 border border-white/10 rounded">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-[52vh] overflow-y-auto overscroll-contain p-2">
                <Command.Empty className="py-10 text-center text-sm text-[var(--color-ink-mute)]">
                  No results found.
                </Command.Empty>

                {GROUPS.map((group) => (
                  <Command.Group
                    key={group.heading}
                    heading={group.heading}
                    className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-[var(--color-ink-faint)]"
                  >
                    {group.items.map((item) => (
                      <Command.Item
                        key={item.href}
                        value={item.label}
                        keywords={item.keywords}
                        onSelect={() => go(item.href)}
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-[14px] text-[var(--color-ink-soft)] data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-[var(--color-ink)] transition-colors"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[var(--color-ink-faint)] group-data-[selected=true]:text-[var(--color-p-300)] transition-colors"
                        />
                        <span className="flex-1">{item.label}</span>
                        <span className="font-mono text-[11px] text-[var(--color-ink-faint)] opacity-0 group-data-[selected=true]:opacity-100 transition-opacity">
                          {item.href}
                        </span>
                        <CornerDownLeft
                          size={13}
                          className="text-[var(--color-p-300)] opacity-0 group-data-[selected=true]:opacity-100 transition-opacity"
                        />
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
