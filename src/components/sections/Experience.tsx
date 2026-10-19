import { experience } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/effects/Reveal";

/** Vertical timeline of roles, newest first. */
export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <GradientText>worked</GradientText>.
            </>
          }
        />
      </Reveal>

      <ol className="timeline">
        {experience.map((item, index) => (
          <Reveal
            key={item.id}
            as="li"
            delay={index === 0 ? undefined : (index as 1 | 2 | 3)}
            className="tl-item relative list-none pb-11 pl-[30px] last:pb-0"
          >
            <p className="font-mono text-[12px] tracking-[0.04em] text-accent">{item.period}</p>
            <h3 className="mt-1.5 font-display text-[1.35rem] font-bold tracking-[-0.015em]">
              {item.role}
            </h3>
            <p className="mt-[3px] text-[0.98rem] font-semibold text-fg-dim">
              {item.company}
              {item.badge ? (
                <span className="ml-2.5 inline-block rounded-full border border-[color-mix(in_srgb,var(--accent-2)_40%,transparent)] px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.08em] text-accent-2">
                  {item.badge}
                </span>
              ) : null}
            </p>
            <ul className="mt-3.5 flex flex-col gap-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="tl-bullet flex gap-2.5 text-[0.94rem] text-fg-dim">
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
