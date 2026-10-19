import type { ComponentType, SVGProps } from "react";
import type { AboutFact } from "@/types/content";
import { profile, aboutFacts } from "@/content/profile";
import { renderEmphasis } from "@/lib/rich-text";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import {
  BuildingIcon,
  CalendarIcon,
  EducationIcon,
  GlobeIcon,
  HeartIcon,
} from "@/components/ui/icons";

const factIcon: Record<AboutFact["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  role: CalendarIcon,
  current: BuildingIcon,
  education: EducationIcon,
  focus: HeartIcon,
  location: GlobeIcon,
};

/** About section: narrative bio plus an "at a glance" facts card. */
export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <div className="grid grid-cols-[1.3fr_0.9fr] items-start gap-14 max-[920px]:grid-cols-1 max-[920px]:gap-9">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <p className="mt-[18px] text-pretty font-display text-[clamp(1.4rem,2.8vw,2rem)] font-medium leading-[1.32] tracking-[-0.015em]">
            {renderEmphasis(profile.about.lead)}
          </p>
          {profile.about.body.map((paragraph, index) => (
            <p key={index} className="mt-[22px] max-w-[52ch] text-[1.04rem] text-fg-dim">
              {renderEmphasis(paragraph)}
            </p>
          ))}
        </Reveal>

        <Reveal delay={1}>
          <aside className="rounded-[24px] border border-line bg-surface p-7 shadow-[var(--shadow)]">
            <h3 className="mb-[18px] font-mono text-[12px] uppercase tracking-[0.16em] text-fg-mute">
              At a glance
            </h3>
            <dl>
              {aboutFacts.map((fact) => {
                const Icon = factIcon[fact.icon];
                return (
                  <div
                    key={fact.label}
                    className="relative flex min-h-[64px] flex-col justify-center border-b border-line py-3.5 pl-[50px] last:border-b-0"
                  >
                    <dt className="text-[0.78rem] text-fg-mute">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-[10px] bg-surface-2 text-accent [&>svg]:h-[17px] [&>svg]:w-[17px]"
                      >
                        <Icon />
                      </span>
                      {fact.label}
                    </dt>
                    <dd className="text-[0.96rem] font-semibold">{fact.value}</dd>
                  </div>
                );
              })}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
