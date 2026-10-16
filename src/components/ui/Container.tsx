import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Centered max-width content wrapper with responsive horizontal padding. */
export function Container({ children, as: Tag = "div", className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1180px] px-7 max-[600px]:px-5", className)}>
      {children}
    </Tag>
  );
}
