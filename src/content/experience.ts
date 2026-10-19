import type { ExperienceItem } from "@/types/content";

/** Work history, newest first. */
export const experience: ExperienceItem[] = [
  {
    id: "primebook",
    period: "Sep 2025 — Present",
    role: "Software Development Engineer",
    company: "Primebook India",
    badge: "Current",
    achievements: [
      "Built the full marketing & product website (Next.js, Three.js, GSAP, Sanity CMS) from scratch.",
      "Designed & built a suite of multi-tenant MDM admin consoles — PrimeSecure & SmartVission.",
      "Own a reusable TypeScript component library and the brand's neon design system.",
    ],
  },
  {
    id: "sprillio",
    period: "Jul 2023 — Sep 2025",
    role: "Software Developer",
    company: "Sprillio Tech",
    achievements: [
      "Built The Vedic Puja — a booking platform with a Next.js frontend and Spring Boot + MySQL backend.",
      "Developed an immersive 3D web kiosk with Three.js raycasting & animations.",
      "Contributed to a Forbes Top-50 charity site on WordPress with 38+ integrated plugins.",
    ],
  },
  {
    id: "softpro",
    period: "Jul 2022 — Aug 2022",
    role: "Software Developer Intern",
    company: "SoftPro India",
    achievements: [
      "Built responsive e-commerce interfaces with React & Tailwind CSS.",
      "Implemented auth (login/registration) with Node.js, Express, MongoDB & JWT.",
    ],
  },
  {
    id: "robustresults",
    period: "Oct 2021 — Nov 2021",
    role: "Software Developer Intern",
    company: "Robustresults Pvt. Ltd.",
    achievements: [
      "Built frontends with HTML, CSS & JavaScript and backend with PHP & MySQL.",
      "Optimized MySQL queries, cutting page-load times by ~15%.",
    ],
  },
];
