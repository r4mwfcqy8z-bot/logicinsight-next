import { BlogArticle } from "@/components/blog-article";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { article } from "@/content/blog/nutanix-capacity-planning-guide";

export const metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `/blog/${article.slug}` },
};

export default function ArticlePage() {
  return (
    <>
      <BlogArticle
        title={article.title}
        slug={article.slug}
        description={article.description}
        category={article.category}
        readMin={article.readMin}
        art={article.art as 1 | 2 | 3 | 4}
        contentHtml={article.contentHtml}
        next={{
          slug: "nutanix-monitoring-tools-compared",
          title: "Nutanix Monitoring Tools Compared: What Works and What Falls Short",
          category: "Tooling",
          art: 2 as 1 | 2 | 3 | 4,
        }}
      />
      <FinalCTA />
    </>
  );
}
