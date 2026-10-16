import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

/** Standard section header: eyebrow, display heading and optional intro copy. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-[clamp(40px,6vw,72px)] max-w-[720px]", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-[18px] text-balance font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.02em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-[18px] max-w-[60ch] text-[1.05rem] text-fg-dim">
          {description}
        </p>
      ) : null}
    </div>
  );
}
