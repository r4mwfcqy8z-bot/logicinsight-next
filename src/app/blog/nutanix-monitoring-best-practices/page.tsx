import { BlogArticle } from "@/components/blog-article";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { article } from "@/content/blog/nutanix-monitoring-best-practices";

export const metadata = {
  title: article.title,
  description: article.description,
};

export default function ArticlePage() {
  return (
    <>
      <BlogArticle
        title={article.title}
        description={article.description}
        category={article.category}
        readMin={article.readMin}
        art={article.art as 1 | 2 | 3 | 4}
        contentHtml={article.contentHtml}
        next={{
          slug: "nutanix-monitoring-checklist",
          title: "Nutanix Monitoring Checklist: What to Monitor from Day One",
          category: "Checklists",
          art: 4 as 1 | 2 | 3 | 4,
        }}
      />
      <FinalCTA />
    </>
  );
}
