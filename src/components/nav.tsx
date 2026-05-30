"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Calendar, Search, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

const PRODUCT_ITEMS: DropdownItem[] = [
  { label: "Features",        href: "/product/features",        description: "Five engines, one console" },
  { label: "HCI Monitoring",  href: "/product/hci-monitoring",  description: "Built for converged infra" },
  { label: "SNMP Monitoring", href: "/product/snmp-monitoring", description: "Every device on the wire" },
  { label: "AI Assistant",    href: "/product/ai-assistant",    description: "Answers backed by live data" },
  { label: "Architecture",    href: "/product/architecture",    description: "Inside the appliance" },
  { label: "Integrations",    href: "/product/integrations",    description: "Datadog, Grafana, HYCU, more" },
];

const SOLUTIONS_ITEMS: DropdownItem[] = [
  { label: "Use Cases",                href: "/solutions/use-cases",                description: "Capacity, root-cause, backups, more" },
  { label: "Monitoring as a Service",  href: "/solutions/monitoring-as-a-service",  description: "We run the appliance for you" },
];

const SIMPLE_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blog",    href: "/blog" },
  { label: "About",   href: "/about" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | "product" | "solutions">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeActive = pathname === "/";
  const isProductActive = pathname.startsWith("/product");
  const isSolutionsActive = pathname.startsWith("/solutions");

  return (
    <header
      className={cn(
        "fixed top-3 left-1/2 -translate-x-1/2 z-[100]",
        "w-[min(calc(100%-24px),1240px)]",
        "transition-all duration-300"
      )}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <div
        className={cn(
          "grid grid-cols-[auto_1fr_auto] items-center gap-4",
          "px-3 pl-4 py-2 rounded-full",
          "glass",
          scrolled && "glass-strong shadow-2xl"
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 px-2 py-1">
          <Logo height={28} />
        </Link>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center justify-center gap-1 text-sm font-medium text-[var(--color-ink-soft)]">
          <NavLink href="/" active={isHomeActive}>Home</NavLink>

          <DropdownTrigger
            label="Product"
            active={isProductActive}
            open={openDropdown === "product"}
            onOpen={() => setOpenDropdown("product")}
            onClose={() => setOpenDropdown(null)}
            items={PRODUCT_ITEMS}
          />

          <DropdownTrigger
            label="Solutions"
            active={isSolutionsActive}
            open={openDropdown === "solutions"}
            onOpen={() => setOpenDropdown("solutions")}
            onClose={() => setOpenDropdown(null)}
            items={SOLUTIONS_ITEMS}
          />

          {SIMPLE_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname.startsWith(l.href)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-ink-mute)] rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Open command palette"
          >
            <Search size={14} />
            <span>Search</span>
            <kbd className="grid place-items-center min-w-[18px] h-[18px] px-1 text-[11px] font-mono text-[var(--color-ink-soft)] bg-white/5 border border-white/10 rounded">⌘</kbd>
            <kbd className="grid place-items-center min-w-[18px] h-[18px] px-1 text-[11px] font-mono text-[var(--color-ink-soft)] bg-white/5 border border-white/10 rounded">K</kbd>
          </button>

          <Link
            href="/about#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-[var(--color-ink)] hover:bg-white/10 hover:border-[var(--color-p-300)]/40 transition-all"
          >
            <Calendar size={14} />
            <span>Demo</span>
          </Link>

          <Magnetic strength={0.25}>
            <Link
              href="/pricing"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 60%, #FF6B9C 130%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 1px rgba(76,29,149,0.4), 0 16px 40px -12px rgba(124,58,237,0.7)",
              }}
            >
              <span className="relative z-10">Free Trial</span>
              <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
                aria-hidden
              />
            </Link>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3.5 py-2 rounded-full transition-colors",
        active ? "text-white" : "hover:text-white"
      )}
    >
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full bg-[var(--color-p-500)]/10 ring-1 ring-inset ring-[var(--color-p-400)]/20"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative">{children}</span>
    </Link>
  );
}

function DropdownTrigger({
  label, active, open, onOpen, onClose, items,
}: {
  label: string; active: boolean; open: boolean;
  onOpen: () => void; onClose: () => void;
  items: DropdownItem[];
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "relative inline-flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors",
          (active || open) ? "text-white" : "hover:text-white"
        )}
      >
        {active && (
          <motion.span
            layoutId="nav-active-pill"
            className="absolute inset-0 rounded-full bg-[var(--color-p-500)]/10 ring-1 ring-inset ring-[var(--color-p-400)]/20"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        <span className="relative">{label}</span>
        <ChevronDown
          size={13}
          className={cn(
            "relative transition-transform duration-300",
            open && "rotate-180"
          )}
          style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: 6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 26, mass: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 min-w-[320px]"
          >
            <div
              className="rounded-2xl p-2 glass-strong"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,139,250,0.18)" }}
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-p-400)]/20 to-[var(--color-p-400)]/5 border border-[var(--color-p-400)]/20 text-[var(--color-p-300)] shrink-0">
                    <DotIcon />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-white font-medium text-[14px] group-hover:text-[var(--color-p-200)] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[var(--color-ink-mute)] text-xs leading-snug mt-0.5">
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight size={14} className="ml-auto self-center text-[var(--color-ink-faint)] group-hover:text-[var(--color-p-300)] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DotIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <circle cx="6" cy="6" r="2.5" />
    </svg>
  );
}
