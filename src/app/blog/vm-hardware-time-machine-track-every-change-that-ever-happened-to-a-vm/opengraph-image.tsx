import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";
import { article } from "@/content/blog/vm-hardware-time-machine-track-every-change-that-ever-happened-to-a-vm";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = article.title;

export default function Image() {
  return renderOgCard({ eyebrow: `Blog · ${article.category}`, title: article.title });
}
