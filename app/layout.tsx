import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { RedAurora } from "@/components/backgrounds/red-aurora";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Providers } from "@/components/providers";
import { HideOnRoutes } from "@/components/hide-on-routes";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile, skills } from "@/lib/data";
import { siteDescription, siteTitle, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const GTM_ID = "GTM-WF7K3Q6W";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s · ${profile.name}` },
  description: siteDescription,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Sandeep M",
    "full-stack engineer",
    "founding engineer",
    "software engineer Bengaluru",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Kafka",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Sandeep",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.ico" },
};

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: profile.role,
  description: siteDescription,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Outbox Labs", url: "https://outbox.vc/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "JSS Academy of Technical Education" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skills.flatMap((group) => group.items),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-dvh overflow-x-clip font-sans`}>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          {/* Without JS the scroll-reveal animations never run, so show everything. */}
          <style>{`[data-reveal],[data-reveal] *{opacity:1!important;visibility:visible!important;transform:none!important}[data-hero-badge],[data-hero-word],[data-hero-fade],[data-hero-photo]{visibility:visible!important}`}</style>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <RedAurora fixed />
          <SmoothScroll />
          <ScrollProgress />
          <SiteHeader />
          <main id="main" className="pt-20">
            {children}
          </main>
          {/* The home page is a single, non-scrolling screen; its hero already has the social links. */}
          <HideOnRoutes routes={["/"]}>
            <SiteFooter />
          </HideOnRoutes>
        </Providers>
      </body>
    </html>
  );
}
