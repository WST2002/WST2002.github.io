# Wageesha Tripathi — Portfolio

A fast, cinematic single-page portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**. Dark/light theming, a particle-constellation hero, scroll reveals, magnetic buttons and a branded preloader — all with zero runtime UI dependencies.

## Tech stack

| Area       | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                |
| UI         | React 19, TypeScript (strict)                     |
| Styling    | Tailwind CSS v4 (`@theme` design tokens)          |
| Fonts      | `next/font` — Bricolage Grotesque, Manrope, JetBrains Mono |
| Animations | Hand-rolled Canvas + IntersectionObserver, no libs |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├── app/                 # routes, layout, SEO (sitemap, robots, manifest, OG image), error/404
├── content/             # ← all editable site copy & data (typed)
│   ├── profile.ts       #    identity, bio, stats, contact
│   ├── projects.ts      #    featured + mini projects
│   ├── experience.ts    #    work timeline
│   ├── skills.ts        #    skill groups + marquee
│   └── navigation.ts    #    nav links + socials
├── types/               # shared content types
├── components/
│   ├── layout/          # Navbar, Footer, Preloader, Backdrop
│   ├── sections/        # Hero, Work, About, Experience, Skills, Contact
│   ├── ui/              # reusable primitives (Button, Tag, Chip, cards, icons…)
│   └── effects/         # client effects (ParticleField, CursorGlow, Reveal, Magnetic, Spotlight)
├── hooks/               # useTheme, useScrolled, useActiveSection
└── lib/                 # site config / SEO, cn(), rich-text helper
```

## Editing content

All copy lives in `src/content` and is fully typed against `src/types/content.ts`.
To add a project, append to `featuredProjects` / `miniProjects` in `src/content/projects.ts`.
To change the bio, stats or contact details, edit `src/content/profile.ts`. No component changes needed.

Light inline emphasis is supported in long-form copy via `**bold**` and `*accent*` (see `src/lib/rich-text.tsx`).

## Notable details

- **Server-first** — sections render on the server; only interactive pieces are client components.
- **No theme flash** — an inline script sets `data-theme` before paint; `useTheme` reads it via `useSyncExternalStore`.
- **Accessible** — semantic landmarks, skip link, visible focus rings, ARIA labels, and full `prefers-reduced-motion` fallbacks.
- **SEO** — Metadata API (OpenGraph/Twitter), JSON-LD `Person`, dynamic OG image, sitemap, robots and a web manifest.
- **Performance** — self-hosted fonts (no CLS), the canvas is client-only and skipped under reduced motion, everything prerenders to static HTML.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the production origin so metadata, sitemap and JSON-LD resolve to absolute URLs.

The site builds to fully static output and deploys to any static/Node host (e.g. Vercel).
