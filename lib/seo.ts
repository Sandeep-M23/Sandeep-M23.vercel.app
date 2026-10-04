import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const siteUrl = "https://sandeep-m23.vercel.app";
export const siteTitle = `${profile.name} · ${profile.role}`;
export const siteDescription =
  "Sandeep M is a full-stack engineer in Bengaluru building and scaling production SaaS products end to end, with Node.js, Next.js, PostgreSQL and Kafka.";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: siteTitle };

type PageSeo = { title: string; description: string; path: string };

// Per-page metadata with a canonical URL and matching Open Graph / Twitter tags.
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = `${title} · ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    // Page-level openGraph/twitter replace the root values rather than merging, so repeat the shared fields.
    openGraph: { type: "website", siteName: profile.name, locale: "en_IN", title: fullTitle, description, url: path, images: [ogImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}
