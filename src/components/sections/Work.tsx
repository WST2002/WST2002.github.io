import { featuredProjects, miniProjects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MiniCard } from "@/components/ui/MiniCard";
import { Reveal } from "@/components/effects/Reveal";

/** Showcase of featured case studies plus a grid of earlier projects. */
export function Work() {
  return (
    <Section id="work" ariaLabel="Selected work">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Products I designed &amp; shipped <GradientText>end-to-end</GradientText>.
            </>
          }
          description="A mix of consumer marketing sites and complex internal platforms — most built from a blank canvas, including the design system, component library and frontend architecture."
        />
      </Reveal>

      <div className="flex flex-col gap-[30px]">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SectionHeading
          className="mt-20"
          eyebrow="Earlier projects"
          title="More things I've built."
        />
      </Reveal>

      <div className="mt-[30px] grid grid-cols-2 gap-[18px] max-[600px]:grid-cols-1">
        {miniProjects.map((project, index) => (
          <Reveal key={project.id} delay={index % 2 === 1 ? 1 : undefined}>
            <MiniCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
