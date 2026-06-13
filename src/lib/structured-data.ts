/**
 * Schema.org JSON-LD builders. All URLs are absolute against the production
 * domain so search engines resolve them correctly. Content passed in must match
 * what is visible on the page (Google requires structured data to match).
 */

export const SITE = "https://logicinsight.io";
const ORG_ID = `${SITE}/#organization`;

/** FAQ rich results. Pass the same Q&A pairs the page renders. */
export function faqPageLd(qas: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

/** Article rich results for a blog post. `path` is the route, e.g. /blog/slug. */
export function articleLd({
  title,
  description,
  path,
  section,
}: {
  title: string;
  description: string;
  path: string;
  section?: string;
}) {
  const url = `${SITE}${path.replace(/\/?$/, "/")}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}opengraph-image`,
    ...(section ? { articleSection: section } : {}),
    author: { "@type": "Organization", name: "Logic Insight", url: SITE },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: "Logic Insight", url: SITE },
  };
}

/** Breadcrumb rich results. Pass crumbs from Home down to the current page. */
export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path.replace(/\/?$/, "/")}`,
    })),
  };
}
