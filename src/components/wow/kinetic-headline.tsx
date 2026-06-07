"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface KineticHeadlineProps {
  children: ReactNode;
  /** Stagger between words. */
  stagger?: number;
  /** Delay before the first word. */
  delay?: number;
  /** Reveal on view (whileInView) or on mount (animate). */
  trigger?: "view" | "mount";
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

/**
 * Split-on-word kinetic reveal, each word slides up + blurs in on stagger.
 * Falls back to a single fade for reduced motion.
 *
 * Accepts a string OR nested elements: <KineticHeadline>Word <em>emphasis</em> word</KineticHeadline>
 * (only string segments get split; ReactNode children render as one unit.)
 */
export function KineticHeadline({
  children,
  stagger = 0.05,
  delay = 0,
  trigger = "view",
  className,
  as = "h1",
}: KineticHeadlineProps) {
  const reduce = useReducedMotion();
  const Tag: typeof motion.h1 = (motion as never as Record<string, typeof motion.h1>)[as] ?? motion.h1;

  const parts = splitChildren(children);

  const wordCount = parts.filter((p) => p.kind === "word").length;

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const wordVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32, filter: "blur(8px)" },
    show:   reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.95, ease: EASE } },
  };

  const reveal = trigger === "view"
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { initial: "hidden", animate: "show" };

  return (
    <Tag {...reveal} variants={containerVariants} className={className}>
      {parts.map((p, i) =>
        p.kind === "word" ? (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block"
            style={{ paddingBottom: "0.06em", marginBottom: "-0.06em" }}
          >
            {p.text}
          </motion.span>
        ) : p.kind === "space" ? (
          <span key={i}>{" "}</span>
        ) : p.kind === "break" ? (
          <br key={i} />
        ) : (
          <span key={i}>{p.node}</span>
        )
      )}
      <span className="sr-only">{wordCount > 0 ? "" : ""}</span>
    </Tag>
  );
}

type Part =
  | { kind: "word"; text: string }
  | { kind: "space" }
  | { kind: "break" }
  | { kind: "node"; node: ReactNode };

function splitChildren(node: ReactNode): Part[] {
  const out: Part[] = [];
  const walk = (n: ReactNode) => {
    if (typeof n === "string") {
      const words = n.split(/(\s+)/);
      for (const w of words) {
        if (w.length === 0) continue;
        if (/^\s+$/.test(w)) out.push({ kind: "space" });
        else out.push({ kind: "word", text: w });
      }
    } else if (Array.isArray(n)) {
      for (const item of n) walk(item);
    } else if (n && typeof n === "object" && "type" in (n as unknown as Record<string, unknown>)) {
      out.push({ kind: "node", node: n });
    } else if (n != null && typeof n !== "boolean") {
      out.push({ kind: "word", text: String(n) });
    }
  };
  walk(node);
  return out;
}
