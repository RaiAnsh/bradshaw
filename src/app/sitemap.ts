import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { sitemapPaths } from "@/lib/seo";

const priorityFor = (path: string) =>
  path === "/" ? 1 : path.startsWith("/product-category/") ? 0.5 : 0.8;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sitemapPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
