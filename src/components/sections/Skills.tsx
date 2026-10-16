import type { ComponentType, SVGProps } from "react";
import type { SkillGroup } from "@/types/content";
import { skillGroups, marqueeItems } from "@/content/skills";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/effects/Reveal";
import { CodeIcon, DatabaseIcon, WrenchIcon } from "@/components/ui/icons";

const groupIcon: Record<SkillGroup["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  frontend: CodeIcon,
  backend: DatabaseIcon,
  tools: WrenchIcon,
};

/** Skills grouped into cards, with a looping technology marquee. */
export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills and technologies">
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title="Technologies I build with." />
      </Reveal>

      <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
        {skillGroups.map((group, index) => {
          const Icon = groupIcon[group.icon];
          return (
            <Reveal key={group.id} delay={index === 0 ? undefined : (index as 1 | 2)}>
              <div className="rounded-[24px] border border-line bg-surface p-[26px]">
                <h3 className="mb-[18px] flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-fg-mute [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-accent">
                  <Icon />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-[9px]">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="marquee marquee-mask mt-[30px] overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max animate-marquee gap-12">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className={cn(
                "whitespace-nowrap font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.02em]",
                item.highlighted ? "grad-text" : "text-fg-mute opacity-50",
              )}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
