import type { AboutFact, Stat } from "@/types/content";

/**
 * Core identity, bio and contact details.
 * Edit this file to update the hero, about and contact sections.
 */
export const profile = {
  name: "Wageesha Tripathi",
  firstName: "Wageesha",
  lastName: "Tripathi",
  initials: "WT",
  role: "Software Engineer",
  /** Short availability line shown as the hero status pill. */
  status: "Available · Software Development Engineer @ Primebook India",
  location: "India · open to remote",
  email: "tripathiwageesha2002@gmail.com",
  resumePath: "/Wageesha-Tripathi-Resume.pdf",

  hero: {
    headline: "Building immersive web experiences that feel alive.",
    /** The word in `headline` rendered with the gradient treatment. */
    highlight: "immersive",
    lead: "I'm **Wageesha Tripathi** — a software engineer crafting fast, cinematic interfaces. From 3D product reveals to multi-tenant device-management consoles, I design and ship **end-to-end** with React, Next.js, Three.js & Spring Boot.",
  },

  about: {
    lead: "I build the *whole* front of the product — from the first design token to the final scroll animation — and I care about how it *feels* as much as how it works.",
    body: [
      "I'm a software engineer based in India, currently at Primebook India, where I build the marketing website and an entire suite of multi-tenant MDM consoles. I'm happiest where design and engineering overlap: designing a custom component library, then architecting the state and API layer that powers it. I've shipped 3D experiences, headless-CMS workflows, secure auth with token refresh and RBAC, and complex dashboards — usually as the sole developer and designer.",
      "B.Tech in Computer Science (CGPA 8.11). Equal parts **designer** and **engineer**.",
    ],
  },

  contact: {
    headline: "Let's build something immersive.",
    highlight: "immersive",
    subtitle:
      "Open to software engineering roles and freelance collaborations. Drop a line — I usually reply within a day.",
  },
} as const;

/** Headline statistics shown beneath the hero copy. */
export const stats: Stat[] = [
  { value: "4", label: "production apps @ Primebook" },
  { value: "10+", label: "projects shipped" },
];

/** Quick facts rendered in the "At a glance" about card. */
export const aboutFacts: AboutFact[] = [
  { icon: "role", label: "Role", value: "Software Engineer" },
  { icon: "current", label: "Current", value: "Primebook India" },
  { icon: "education", label: "Education", value: "B.Tech CSE · CGPA 8.11" },
  { icon: "focus", label: "Focus", value: "Immersive UI · 3D · Design systems" },
  { icon: "location", label: "Location", value: "India · open to remote" },
];
