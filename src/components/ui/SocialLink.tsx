import type { ComponentType, SVGProps } from "react";
import type { SocialLink as SocialLinkData, SocialPlatform } from "@/types/content";
import { cn } from "@/lib/utils";
import {
  DevToIcon,
  DownloadIcon,
  GitHubIcon,
  HashnodeIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MailIcon,
  NpmIcon,
  PhoneIcon,
  PinterestIcon,
  YouTubeIcon,
} from "./icons";

const iconByPlatform: Record<SocialPlatform, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
  youtube: YouTubeIcon,
  devto: DevToIcon,
  hashnode: HashnodeIcon,
  npm: NpmIcon,
  pinterest: PinterestIcon,
  email: MailIcon,
  phone: PhoneIcon,
  resume: DownloadIcon,
};

interface SocialLinkProps {
  link: SocialLinkData;
  className?: string;
}

/** Square icon button linking to a social / contact destination. */
export function SocialLink({ link, className }: SocialLinkProps) {
  const Icon = iconByPlatform[link.platform];

  return (
    <a
      href={link.href}
      aria-label={link.label}
      download={link.download}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={cn(
        "grid h-12 w-12 place-items-center rounded-[14px] border border-line bg-surface text-fg-dim",
        "transition-all duration-300 ease-[var(--ease-out-expo)]",
        "hover:-translate-y-[3px] hover:border-transparent hover:bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] hover:text-white",
        "[&>svg]:h-[19px] [&>svg]:w-[19px]",
        className,
      )}
    >
      <Icon />
    </a>
  );
}
