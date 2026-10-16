import type { MiniProject } from "@/types/content";
import { cn } from "@/lib/utils";

interface MiniCardProps {
  project: MiniProject;
}

/** Compact secondary-project card. */
export function MiniCard({ project }: MiniCardProps) {
  return (
    <article
      className={cn(
        "rounded-[16px] border border-line bg-surface p-6",
        "transition-[transform,border-color] duration-300 ease-[var(--ease-out-expo)]",
        "hover:-translate-y-1 hover:border-line-strong",
      )}
    >
      <div className="mb-3.5 flex items-center justify-between">
        <span className="font-mono text-[12px] text-fg-mute">{project.kicker}</span>
      </div>
      <h4 className="font-display text-[1.2rem] font-bold tracking-[-0.01em]">
        {project.title}
      </h4>
      <p className="mt-2 text-[0.9rem] text-fg-dim">{project.description}</p>
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-surface-2 px-2 py-[3px] font-mono text-[10.5px] text-fg-mute"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
