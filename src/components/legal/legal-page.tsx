import Link from "next/link";

export type Block =
  | string
  | { h: string }
  | { ul: string[] }
  | { dl: [string, string][] }
  | { note: string };

export interface LegalSection {
  id: string;
  n?: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  kicker: string;
  title: React.ReactNode;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

function BlockView({ b }: { b: Block }) {
  if (typeof b === "string") {
    return <p className="body-l leading-[1.62] text-[var(--color-ink-soft)]">{b}</p>;
  }
  if ("h" in b) {
    return <h3 className="text-[1.05rem] font-semibold text-[var(--color-ink)] mt-7 mb-1 tracking-[-0.01em]">{b.h}</h3>;
  }
  if ("ul" in b) {
    return (
      <ul className="space-y-2.5 pl-0.5">
        {b.ul.map((it, i) => (
          <li key={i} className="flex gap-3 body-l leading-[1.55] text-[var(--color-ink-soft)]">
            <span aria-hidden className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-[var(--color-p-400)] shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  if ("dl" in b) {
    return (
      <dl className="grid gap-3 sm:grid-cols-2">
        {b.dl.map(([term, text], i) => (
          <div key={i} className="rounded-2xl matte p-5">
            <dt className="font-semibold text-[var(--color-ink)] mb-1.5 tracking-[-0.01em]">{term}</dt>
            <dd className="body-m text-[var(--color-ink-soft)] leading-[1.55]">{text}</dd>
          </div>
        ))}
      </dl>
    );
  }
  if ("note" in b) {
    return (
      <div className="rounded-2xl border border-[rgba(167,139,250,0.22)] bg-[rgba(167,139,250,0.05)] p-5 body-m text-[var(--color-ink-soft)] leading-[1.55]">
        {b.note}
      </div>
    );
  }
  return null;
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div id="top">
      {/* Header */}
      <section className="relative pt-36 md:pt-44 pb-10 md:pb-14">
        <div className="editorial-shell">
          <div className="kicker mb-5 text-[var(--color-p-300)]">{doc.kicker}</div>
          <h1 className="editorial-statement balance max-w-[20ch]">{doc.title}</h1>
          <p className="mt-6 body-l max-w-[62ch]">{doc.intro}</p>
          <div className="mt-7 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">
            {doc.updated}
          </div>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="relative pb-28 md:pb-36">
        <div className="editorial-shell">
          <div className="grid grid-cols-12 gap-8 lg:gap-14">
            <aside className="col-span-12 lg:col-span-3">
              <nav aria-label="Table of contents" className="lg:sticky lg:top-28 rounded-[20px] matte p-5">
                <div className="kicker mb-4 text-[var(--color-p-300)]">Contents</div>
                <ol className="space-y-0.5">
                  {doc.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-[12.5px] leading-snug text-[var(--color-ink-mute)] hover:text-[var(--color-p-200)] transition-colors py-1.5"
                      >
                        {s.n ? <span className="font-mono text-[var(--color-ink-faint)] mr-1.5 tabular-nums">{s.n}</span> : null}
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="col-span-12 lg:col-span-9 max-w-[80ch]">
              {doc.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 mb-14 last:mb-0">
                  <h2 className="editorial-lede text-[var(--color-ink)] mb-5 flex items-baseline gap-3">
                    {s.n && <span className="font-mono text-[0.62em] text-[var(--color-p-300)] tabular-nums">{s.n}</span>}
                    <span className="balance">{s.title}</span>
                  </h2>
                  <div className="space-y-4">
                    {s.blocks.map((b, i) => (
                      <BlockView key={i} b={b} />
                    ))}
                  </div>
                </section>
              ))}

              <div className="mt-16 pt-8 border-t border-[rgba(167,139,250,0.16)] flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#top"
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-p-300)] hover:text-[var(--color-p-100)] transition-colors"
                >
                  Back to top
                </a>
                <Link
                  href="/contact"
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-mute)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Questions? Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
