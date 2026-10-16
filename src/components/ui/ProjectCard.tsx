import type { CSSProperties } from "react";
import type { FeaturedProject } from "@/types/content";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/effects/Spotlight";
import { Tag } from "./Tag";
import { CheckIcon, ExternalLinkIcon } from "./icons";

interface ProjectCardProps {
  project: FeaturedProject;
  /** Reverse the column order on large screens (alternating layout). */
  reversed?: boolean;
}

/** Full-width featured case-study card with a themed visual panel. */
export function ProjectCard({ project, reversed }: ProjectCardProps) {
  const accentVars = {
    "--p1": project.accent.from,
    "--p2": project.accent.to,
  } as CSSProperties;

  return (
    <Spotlight
      style={accentVars}
      className={cn(
        "group relative isolate grid overflow-hidden rounded-[32px] border border-line bg-surface shadow-[var(--shadow)] min-[920px]:grid-cols-2",
        "transition-[border-color,transform] duration-500 ease-[var(--ease-out-expo)] hover:border-line-strong",
      )}
    >
      {/* Visual panel */}
      <div
        className={cn(
          "relative flex min-h-[340px] items-end overflow-hidden p-[34px] max-[920px]:min-h-[240px] max-[600px]:p-[26px]",
          reversed && "min-[920px]:order-2",
        )}
        style={{
          background:
            "radial-gradient(120% 100% at 80% 0%, color-mix(in srgb, var(--p1) 32%, transparent), transparent 60%), radial-gradient(120% 120% at 0% 100%, color-mix(in srgb, var(--p2) 26%, transparent), transparent 55%), var(--bg-2)",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-[10%] -right-[6%] select-none font-display text-[13rem] font-extrabold leading-none tracking-[-0.06em] opacity-10"
          style={{ color: "var(--p1)" }}
        >
          {project.glyph}
        </span>

        {/* Mock browser */}
        <div className="relative z-[2] w-full translate-y-2 overflow-hidden rounded-[14px] border border-line-strong bg-surface shadow-[0_24px_60px_-22px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-[7px] border-b border-line bg-surface-2 px-[14px] py-[11px]">
            <i className="h-2.5 w-2.5 rounded-full bg-fg-mute opacity-50" />
            <i className="h-2.5 w-2.5 rounded-full bg-fg-mute opacity-50" />
            <i className="h-2.5 w-2.5 rounded-full bg-fg-mute opacity-50" />
            <span className="ml-2.5 font-mono text-[11.5px] text-fg-mute">
              {project.url}
            </span>
          </div>
          <div
            className="grid aspect-[16/10] place-items-center"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--p1) 22%, var(--surface)), color-mix(in srgb, var(--p2) 18%, var(--surface)))",
            }}
          >
            <span
              className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em]"
              style={{
                color: "var(--p1)",
                filter:
                  "drop-shadow(0 4px 18px color-mix(in srgb, var(--p1) 60%, transparent))",
              }}
            >
              {project.brand}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col p-[38px] max-[600px]:p-[26px]">
        <div className="mb-[18px] flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.06em] text-accent">
          {project.role}
        </p>
        <p className="mt-4 text-base text-fg-dim">{project.description}</p>
        <ul className="mt-[18px] flex flex-col gap-[9px]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-[11px] text-[0.92rem] text-fg-dim">
              <CheckIcon className="mt-[3px] h-4 w-4 flex-none text-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-[26px]">
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-line px-4 py-[9px] text-[0.9rem] font-semibold text-fg",
              "transition-all duration-200 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:border-accent hover:text-accent",
            )}
          >
            <ExternalLinkIcon className="h-[15px] w-[15px]" />
            {project.link.label}
          </a>
        </div>
      </div>
    </Spotlight>
  );
}
