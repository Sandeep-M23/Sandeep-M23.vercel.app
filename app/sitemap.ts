import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/work", priority: 0.8 },
  { path: "/projects", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
