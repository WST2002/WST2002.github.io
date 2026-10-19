import { profile } from "@/content/profile";
import { socialLinks } from "@/content/navigation";

/**
 * Canonical production URL. Override with `NEXT_PUBLIC_SITE_URL` at build time
 * so metadata, sitemap and JSON-LD resolve to absolute URLs.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wst2002.github.io"
).replace(/\/$/, "");

/** Centralised, reusable SEO metadata. */
export const siteConfig = {
  name: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description:
    "Wageesha Tripathi — Software Engineer at Primebook India. Building immersive, performance-driven web experiences with React, Next.js, Three.js and Spring Boot.",
  url: siteUrl,
  locale: "en_US",
  keywords: [
    "Wageesha Tripathi",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Three.js",
    "Portfolio",
    "Primebook",
  ],
} as const;

/**
 * Schema.org `Person` structured data for rich search results.
 * Serialised into a JSON-LD script tag in the root layout.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Primebook India",
    },
    sameAs: socialLinks
      .filter((link) => link.external)
      .map((link) => link.href),
  };
}
