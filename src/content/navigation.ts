import type { NavLink, SocialLink } from "@/types/content";
import { profile } from "./profile";

/** Primary in-page navigation links. */
export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Social / contact destinations used in the contact section and footer. */
export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/WST2002",
    external: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wst2002/",
    external: true,
  },
  {
    platform: "leetcode",
    label: "LeetCode",
    href: "https://leetcode.com/u/Wagee_ST2002/",
    external: true,
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@wst2002rk",
    external: true,
  },
  {
    platform: "devto",
    label: "dev.to",
    href: "https://dev.to/wst2002rk",
    external: true,
  },
  {
    platform: "hashnode",
    label: "Hashnode",
    href: "https://wst2002rk.hashnode.dev",
    external: true,
  },
  {
    platform: "npm",
    label: "npm",
    href: "https://www.npmjs.com/~wstrk2002",
    external: true,
  },
  {
    platform: "pinterest",
    label: "Pinterest",
    href: "https://www.pinterest.com/wst2002rk/",
    external: true,
  },
  {
    platform: "peerlist",
    label: "Peerlist",
    href: "https://peerlist.io/wst2002rk",
    external: true,
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
  },
  {
    platform: "resume",
    label: "Download résumé",
    href: profile.resumePath,
    download: true,
  },
];
