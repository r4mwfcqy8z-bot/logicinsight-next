"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionAmbient } from "@/components/wow/scroll-ambient";
import { ScrollProgressRail } from "@/components/wow/scroll-progress-rail";
import { JsonLd } from "@/components/seo/json-ld";
import { articleLd, breadcrumbLd } from "@/lib/structured-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const ART_STYLE: Record<1 | 2 | 3 | 4, React.CSSProperties> = {
  1: { background: "radial-gradient(circle at 30% 40%, #8B5CF6, transparent 55%), radial-gradient(circle at 70% 70%, #FF6B9C, transparent 55%), linear-gradient(135deg, #2E1065, #1A0A3D)" },
  2: { background: "conic-gradient(from 230deg at 60% 50%, #8B5CF6, #5EEAD4, #6D28D9)" },
  3: { background: "radial-gradient(circle at 20% 50%, #BC9CFF, transparent 55%), linear-gradient(135deg, #07050E, #5B21B6)" },
  4: { background: "radial-gradient(circle at 70% 30%, #FF6B9C, transparent 50%), linear-gradient(135deg, #2E1065, #07050E)" },
};

interface NextRef {
  slug: string;
  title: string;
  category: string;
  art: 1 | 2 | 3 | 4;
}

interface BlogArticleProps {
  title: string;
  slug: string;
  description: string;
  category: string;
  readMin: string;
  art: 1 | 2 | 3 | 4;
  contentHtml: string;
  next?: NextRef;
}

export function BlogArticle({
  title,
  slug,
  description,
  category,
  readMin,
  art,
  contentHtml,
  next,
}: BlogArticleProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <JsonLd
        data={[
          articleLd({ title, description, path: `/blog/${slug}`, section: category }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <ScrollProgressRail />

      {/* Editorial article hero. */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <SectionAmbient targetRef={heroRef} glow="violet" intensity={1} />

        <div className="editorial-shell relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-10 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)] hover:text-[var(--color-p-200)] transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={2} />
            <span>All articles</span>
          </Link>

          <div className="grid-edit">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="col-span-12 flex flex-wrap items-center gap-5 mb-8"
            >
              <span className="kicker">{category}</span>
              <span className="text-[var(--color-ink-faint)]">·</span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)]">
                {readMin}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              className="col-span-12 editorial-statement balance"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.35 }}
                className="col-span-12 lg:col-span-9 editorial-sub max-w-[68ch] mt-10"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Hero art band — abstract gradient as visual identity. */}
      <section className="relative pb-16">
        <div className="editorial-shell">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            className="aspect-[21/8] md:aspect-[24/8] rounded-[28px] overflow-hidden depth-2"
            style={ART_STYLE[art]}
          />
        </div>
      </section>

      {/* The article body. Internal links get basePath-prefixed so they don't strip the repo subpath. */}
      <section className="relative py-12 md:py-20">
        <div className="editorial-shell">
          <article
            className="prose-editorial max-w-[72ch]"
            dangerouslySetInnerHTML={{
              __html: contentHtml.replace(
                /href="\/(?!\/)/g,
                `href="${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`
              ),
            }}
          />
        </div>
      </section>

      {/* Next article. */}
      {next && (
        <section className="relative py-20 md:py-28 border-t border-[rgba(167,139,250,0.16)]">
          <div className="editorial-shell">
            <div className="grid-edit items-end">
              <div className="col-span-12 lg:col-span-3">
                <span className="kicker">Next up</span>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <Link href={`/blog/${next.slug}`} className="group block">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 border-b border-[rgba(167,139,250,0.16)] transition-colors group-hover:border-[var(--color-p-300)]/40">
                    <div
                      className="w-14 h-14 rounded-xl shrink-0"
                      style={ART_STYLE[next.art]}
                    />
                    <div>
                      <div className="kicker text-[var(--color-p-300)] mb-1">{next.category}</div>
                      <h3 className="editorial-lede text-[var(--color-ink)] balance group-hover:text-[var(--color-p-100)] transition-colors">
                        {next.title}
                      </h3>
                    </div>
                    <ArrowRight size={20} strokeWidth={1.5} className="text-[var(--color-ink-mute)] group-hover:text-[var(--color-p-200)] group-hover:translate-x-1 transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
