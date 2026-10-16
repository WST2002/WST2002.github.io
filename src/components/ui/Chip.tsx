import { cn } from "@/lib/utils";

interface ChipProps {
  children: string;
  className?: string;
}

/** Skill chip with a lift-on-hover accent treatment. */
export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "rounded-[10px] border border-line bg-surface-2 px-[14px] py-2 text-[0.85rem] font-medium",
        "transition-all duration-300 ease-[var(--ease-out-expo)]",
        "hover:-translate-y-0.5 hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
