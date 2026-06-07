import { BlogArticle } from "@/components/blog-article";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { article } from "@/content/blog/vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm";

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
          slug: "nutanix-capacity-planning-guide",
          title: "Nutanix Capacity Planning: The Complete Guide to Runway, Forecasting, and Growth",
          category: "Capacity",
          art: 1 as 1 | 2 | 3 | 4,
        }}
      />
      <FinalCTA />
    </>
  );
}
