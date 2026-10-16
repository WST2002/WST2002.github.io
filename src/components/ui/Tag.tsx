import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
}

/** Small mono pill used for technology tags on project cards. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-line bg-surface-2 px-[11px] py-[5px] font-mono text-[11px] tracking-[0.04em] text-fg-dim",
        className,
      )}
    >
      {children}
    </span>
  );
}
