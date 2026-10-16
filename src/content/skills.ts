import type { SkillGroup } from "@/types/content";

/** Skills grouped by discipline, rendered as chip columns. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    skills: [
      "React 19",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Three.js · R3F",
      "GSAP",
      "Tailwind CSS",
      "Material UI",
      "Context API",
      "Redux",
      "React Router",
      "HTML · CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    icon: "backend",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express",
      "Java",
      "MySQL",
      "MongoDB",
      "JPA",
      "REST APIs",
      "JWT",
      "Axios",
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    icon: "tools",
    skills: [
      "Vite",
      "Git · GitHub",
      "AWS API Gateway",
      "GCP",
      "Sanity CMS",
      "Postman",
      "WordPress",
      "Figma",
    ],
  },
];

/**
 * Words for the scrolling marquee. `highlighted` entries get the gradient
 * treatment; the rest render muted.
 */
export const marqueeItems: { label: string; highlighted: boolean }[] = [
  { label: "React", highlighted: true },
  { label: "Next.js", highlighted: false },
  { label: "Three.js", highlighted: true },
  { label: "TypeScript", highlighted: false },
  { label: "GSAP", highlighted: true },
  { label: "Spring Boot", highlighted: false },
  { label: "Tailwind", highlighted: true },
  { label: "Node.js", highlighted: false },
];
