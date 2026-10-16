import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Accessible label for the section landmark. */
  ariaLabel?: string;
  className?: string;
}

/** A page section with standard vertical rhythm, anchor id and container. */
export function Section({ id, children, ariaLabel, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative py-[clamp(90px,12vw,160px)]", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
