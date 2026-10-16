import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  /** Element to render as. Defaults to `<span>`. */
  as?: ElementType;
  className?: string;
}

/** Renders text with the brand accent→accent-2 gradient clip. */
export function GradientText({
  children,
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return <Tag className={cn("grad-text", className)}>{children}</Tag>;
}
