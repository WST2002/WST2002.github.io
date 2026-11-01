/**
 * Shared content types.
 *
 * Every piece of editable site content is strongly typed here so the data
 * files in `src/content` stay consistent and components can consume them
 * without re-declaring shapes.
 */

/** A single, externally-linkable social / contact destination. */
export type SocialPlatform =
  | "github"
  | "linkedin"
  | "leetcode"
  | "devto"
  | "hashnode"
  | "npm"
  | "pinterest"
  | "peerlist"
  | "youtube"
  | "email"
  | "phone"
  | "resume";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Fully-qualified href (`https:`, `mailto:`, `tel:` or a local path). */
  href: string;
  /** Whether the link should open in a new tab. */
  external?: boolean;
  /** Whether the link triggers a file download. */
  download?: boolean;
}

/** A jump link rendered in the primary navigation. */
export interface NavLink {
  label: string;
  /** In-page anchor target, e.g. `#work`. */
  href: string;
}

/** A headline statistic shown in the hero. */
export interface Stat {
  value: string;
  label: string;
}

/** A featured, full-width case study. */
export interface FeaturedProject {
  id: string;
  /** Single-letter glyph rendered as the oversized background mark. */
  glyph: string;
  /** Display title. */
  title: string;
  /** Short role / contribution descriptor. */
  role: string;
  /** Domain shown in the mock browser chrome. */
  url: string;
  /** Brand label shown on the mock browser screen. */
  brand: string;
  /** One-paragraph summary. */
  description: string;
  /** Technology tags. */
  tags: string[];
  /** Highlight bullet points. */
  highlights: string[];
  /** External link to the live product. */
  link: {
    label: string;
    href: string;
  };
  /** Two accent colours that theme the project's visual panel. */
  accent: {
    from: string;
    to: string;
  };
}

/** A compact, secondary project card. */
export interface MiniProject {
  id: string;
  /** Ordinal + category label, e.g. "01 — Web platform". */
  kicker: string;
  title: string;
  description: string;
  stack: string[];
}

/** A role on the experience timeline. */
export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  /** Optional badge, e.g. "Current". */
  badge?: string;
  achievements: string[];
}

/** A grouped set of skills (e.g. Frontend, Backend). */
export interface SkillGroup {
  id: string;
  title: string;
  /** Icon key resolved by the Skills section to an SVG. */
  icon: "frontend" | "backend" | "tools";
  skills: string[];
}

/** A single fact in the "At a glance" about card. */
export interface AboutFact {
  /** Icon key resolved to an SVG. */
  icon: "role" | "current" | "education" | "focus" | "location";
  label: string;
  value: string;
}
