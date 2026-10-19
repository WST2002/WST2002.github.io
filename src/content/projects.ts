import type { FeaturedProject, MiniProject } from "@/types/content";

/** Full-width, headline case studies. */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "claude-code-skills",
    glyph: "C",
    title: "Claude Code Skills & Plugins — Open Source",
    role: "Creator · open source",
    url: "wst2002.github.io/claude-code-skills",
    brand: "Claude Code Skills",
    description:
      "27 free skills and 2 plugins that make AI coding agents reliable — code review, security audit, Figma design compare, QA test cases, and /fix-issue from ticket to tested pull request. Install with one command.",
    tags: ["Claude Code", "Node.js", "Agent Skills", "Hooks", "Open Source"],
    highlights: [
      "proof-of-done plugin blocks the agent from saying \"done\" until tests, lint and build pass — a shell parser catches failures hidden behind pipes.",
      "issue-to-pr plugin: /fix-issue takes a GitHub issue or Jira ticket to a failing test, a fix and a draft pull request.",
      "27 skills across code quality, QA, security, design and DevOps, each with a fixed method and output format.",
    ],
    link: { label: "Website", href: "https://wst2002.github.io/claude-code-skills/" },
    accent: { from: "#d97757", to: "#f2b38f" },
  },
  {
    id: "primebook",
    glyph: "P",
    title: "Primebook — Marketing & Product Website",
    role: "Frontend Developer · built from scratch",
    url: "primebook.in",
    brand: "Primebook",
    description:
      "The complete marketing & product site for an Indian laptop brand — cinematic 3D product visuals, scroll-driven motion and a headless-CMS blog, fully responsive and performance-optimized.",
    tags: ["Next.js 16", "React 19", "Three.js · R3F", "GSAP", "Sanity CMS"],
    highlights: [
      "Interactive 3D hero with R3F + pre-rendered WebP frame sequences, driven by GSAP scroll timelines.",
      "High-conversion Bulk-Order page — looping coverflow carousel, animated stat panels & accordion KB.",
      "Pure-CSS ambient neon glow system (color-mix + radial gradients) — signature look, zero image weight.",
    ],
    link: { label: "Live site", href: "https://www.primebook.in/" },
    accent: { from: "#b6f23a", to: "#56e08a" },
  },
  {
    id: "primesecure",
    glyph: "S",
    title: "PrimeSecure — MDM Admin Console",
    role: "Sole Developer & Designer",
    url: "mdm.primebook.in",
    brand: "PrimeSecure",
    description:
      "A multi-tenant Mobile Device Management console for remotely managing, securing & monitoring fleets of Android devices — UI/UX, component library and architecture all self-built.",
    tags: ["React 19", "TypeScript", "Vite 7", "Tailwind v4", "AWS API GW"],
    highlights: [
      "Policy engine — app whitelisting, website filtering, wallpaper enforcement, remote uninstall.",
      "Client-side APK parsing + chunked uploads with MD5 integrity hashing & live XHR progress.",
      "13 feature-scoped React Context providers — scalable state with no external store. 3-tier RBAC.",
    ],
    link: { label: "Live console", href: "https://mdm.primebook.in/" },
    accent: { from: "#7c6cff", to: "#5b8cff" },
  },
  {
    id: "smartvission",
    glyph: "V",
    title: "SmartVission MDM — Enterprise Console",
    role: "Solo design + build",
    url: "svmdm.netlify.app",
    brand: "SmartVission",
    description:
      "An enterprise device-management console for provisioning, monitoring, locking & pushing apps to fleets of Android TV-Box devices through a modular, role-based dashboard.",
    tags: ["React 19", "TypeScript", "Vite", "React Router v7", "Context API"],
    highlights: [
      "JWT auth with silent token-refresh — Axios interceptors, retry-on-401 & protected routes.",
      "Device fleet — server-side paginated listing, live search/filters, remote lock/reboot/factory-reset.",
      "Resilient API layer with token-refresh queueing and typed responses end-to-end.",
    ],
    link: { label: "Live demo", href: "https://svmdm.netlify.app/" },
    accent: { from: "#25d3ee", to: "#2fd39a" },
  },
];

/** Compact, secondary projects. */
export const miniProjects: MiniProject[] = [
  {
    id: "vedic-puja",
    kicker: "01 — Full-stack platform",
    title: "The Vedic Puja",
    description:
      "Online platform for puja bookings, astrology services & temple directories. JWT auth + RBAC, Spring Mail confirmations, deployed on GCP.",
    stack: ["Next.js", "Spring Boot", "JPA", "MySQL", "Material UI"],
  },
  {
    id: "3d-kiosk",
    kicker: "02 — Immersive 3D",
    title: "3D Web Kiosk",
    description:
      "An immersive 3D kiosk with raycasting for intuitive object interaction, dynamic camera controls and real-time animated environments.",
    stack: ["Three.js", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "aijokercat",
    kicker: "03 — Web3 frontend",
    title: "AIJokerCat",
    description:
      "Responsive frontend for a meme-driven crypto project using React & Three.js particle systems for dynamic, cross-browser visuals.",
    stack: ["React", "Three.js", "HTML/CSS"],
  },
  {
    id: "food-for-the-poor",
    kicker: "04 — Forbes Top 50 charity",
    title: "Food For The Poor",
    description:
      "Custom pages for a Forbes Top-50 (2024) charity site. Managed 38+ plugins incl. WooCommerce & Stripe for secure donations.",
    stack: ["WordPress", "PHP", "WooCommerce", "jQuery UI"],
  },
];
