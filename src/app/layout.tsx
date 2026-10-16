import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

import { siteConfig, siteUrl, personJsonLd } from "@/lib/site";
import { profile } from "@/content/profile";
import { Backdrop } from "@/components/layout/Backdrop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { ParticleField } from "@/components/effects/ParticleField";
import { CursorGlow } from "@/components/effects/CursorGlow";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s · ${profile.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: profile.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070e" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5fa" },
  ],
  colorScheme: "dark light",
};

/**
 * Pre-paint inline script (plain JS — runs even if React never hydrates):
 *  1. Apply the persisted theme before paint (no flash).
 *  2. Handle the theme toggle via click delegation on `[data-theme-toggle]`.
 *  3. Close the mobile menu when a nav link is tapped.
 * Keeping these in vanilla JS makes them resilient on flaky mobile networks.
 */
const themeInitScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('wt-theme');d.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}document.addEventListener('click',function(e){var c=e.target.closest;if(!c)return;var tg=e.target.closest('[data-theme-toggle]');if(tg){var n=d.getAttribute('data-theme')==='dark'?'light':'dark';d.setAttribute('data-theme',n);try{localStorage.setItem('wt-theme',n);}catch(_){}tg.setAttribute('aria-pressed',String(n==='light'));return;}var lnk=e.target.closest('[data-nav-link]');if(lnk){var cb=document.getElementById('nav-menu');if(cb)cb.checked=false;}});var r=matchMedia('(prefers-reduced-motion: reduce)').matches;setTimeout(function(){var p=document.querySelector('.preloader');if(p)p.style.display='none';},r?900:2500);})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bricolage.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />

        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
        >
          Skip to content
        </a>

        <Backdrop />
        <ParticleField />
        <CursorGlow />
        <Preloader />

        <Navbar />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
