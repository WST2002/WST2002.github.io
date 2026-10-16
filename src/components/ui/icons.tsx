import type { SVGProps } from "react";

/**
 * Centralised icon set.
 *
 * Stroke icons inherit `currentColor` and a consistent stroke style; filled
 * brand icons set their own `fill`. Every icon is decorative by default
 * (`aria-hidden`) — pass an `aria-label` and `role="img"` to expose one.
 */
type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRightIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </StrokeIcon>
);

export const ArrowUpIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </StrokeIcon>
);

export const DownloadIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M12 3v12M7 11l5 4 5-4M5 21h14" />
  </StrokeIcon>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </StrokeIcon>
);

export const CheckIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2.4} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </StrokeIcon>
);

export const MoonIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </StrokeIcon>
);

export const SunIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </StrokeIcon>
);

export const MailIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </StrokeIcon>
);

export const PhoneIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </StrokeIcon>
);

export const CodeIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </StrokeIcon>
);

export const DatabaseIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
  </StrokeIcon>
);

export const WrenchIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.8-2.8 2.3-2.7z" />
  </StrokeIcon>
);

export const CalendarIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 4v5" />
  </StrokeIcon>
);

export const BuildingIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
  </StrokeIcon>
);

export const EducationIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </StrokeIcon>
);

export const HeartIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <path d="M12 21s-7-4.3-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.7-9.5 9-9.5 9z" />
  </StrokeIcon>
);

export const GlobeIcon = (props: IconProps) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
  </StrokeIcon>
);

export const MenuIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </StrokeIcon>
);

export const CloseIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </StrokeIcon>
);

export const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

export const LeetCodeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.5v-4.6c0-2.4-1.3-3.6-3-3.6-1.4 0-2 .8-2.4 1.3V10H10v8.3h2.6v-4.4c0-.3 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.4.8 1.4 1.9v4.2h2.8z" />
  </svg>
);
