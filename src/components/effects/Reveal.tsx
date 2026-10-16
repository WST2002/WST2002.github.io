import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Retained for API compatibility; ordering is now handled by CSS. */
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}

/**
 * Fade-up-on-scroll wrapper.
 *
 * Pure CSS (see the scroll-reveal section in `globals.css`): content is
 * visible by default and animates in via a scroll-driven animation where
 * supported. No JavaScript — so content always shows even if the client
 * never hydrates.
 */
export function Reveal({ children, delay, className }: RevealProps) {
  return (
    <div data-delay={delay} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
