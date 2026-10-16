"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wrapper that tracks the pointer and exposes its position as `--mx` / `--my`
 * CSS variables, driving the radial highlight defined by `.proj-spotlight`.
 */
export function Spotlight({ children, className, style }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("proj-spotlight", className)}
      style={style}
    >
      {children}
    </div>
  );
}
