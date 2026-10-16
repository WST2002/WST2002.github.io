import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Center the eyebrow (used in the contact section). */
  centered?: boolean;
  className?: string;
}

/** Small mono, uppercase label with a leading rule — section kicker. */
export function Eyebrow({ children, centered, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.22em] text-accent",
        "before:h-px before:w-[26px] before:bg-current before:opacity-60",
        centered && "justify-center",
        className,
      )}
    >
      {children}
    </span>
  );
}
