import { BlogArticle } from "@/components/blog-article";
import { FinalCTA } from "@/components/sections/why-and-cta";
import { article } from "@/content/blog/nutanix-storage-monitoring-containers-vdisks";

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
          slug: "vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm",
          title: "VM Hardware Time Machine: Track Every Change That Ever Happened to a VM",
          category: "Workloads",
          art: 1 as 1 | 2 | 3 | 4,
        }}
      />
      <FinalCTA />
    </>
  );
}
