import { BlogArticle } from "@/components/blog-article";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { article } from "@/content/blog/nutanix-monitoring-tools-compared";

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
          slug: "nutanix-monitoring-best-practices",
          title: "Nutanix Monitoring Best Practices for Production Environments",
          category: "Operations",
          art: 3 as 1 | 2 | 3 | 4,
        }}
      />
      <FinalCTA />
    </>
  );
}
