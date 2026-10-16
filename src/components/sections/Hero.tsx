import { profile, stats } from "@/content/profile";
import { renderEmphasis } from "@/lib/rich-text";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/effects/Reveal";
import { Magnetic } from "@/components/effects/Magnetic";
import { ArrowRightIcon } from "@/components/ui/icons";

/** Landing hero: status, headline, lead, calls-to-action and key stats. */
export function Hero() {
  const { headline, highlight, lead } = profile.hero;
  const [beforeHighlight, afterHighlight] = headline.split(highlight);

  return (
    <header
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center pt-[90px]"
    >
      <Container>
        <div className="max-w-[980px]">
          <Reveal>
            <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-[0.82rem] tracking-[0.02em] text-fg-dim max-[600px]:text-[0.72rem]">
              <span className="status-dot h-2 w-2 flex-none rounded-full bg-[#2fd36b]" />
              <span>{profile.status}</span>
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-[26px] max-w-[16ch] text-balance font-display text-[clamp(2.7rem,7.6vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              {beforeHighlight}
              <GradientText>{highlight}</GradientText>
              {afterHighlight}
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 max-w-[54ch] text-[clamp(1.05rem,2vw,1.35rem)] text-fg-dim">
              {renderEmphasis(lead)}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-[38px] flex flex-wrap gap-3.5">
              <Magnetic>
                <Button href="#work">
                  View selected work
                  <ArrowRightIcon />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#contact" variant="ghost">
                  Get in touch
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <dl className="mt-16 flex flex-wrap gap-9 max-[600px]:mt-12 max-[600px]:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold tracking-[-0.02em]">
                    <GradientText>{stat.value}</GradientText>
                  </dd>
                  <p className="mt-0.5 font-mono text-[0.82rem] tracking-[0.04em] text-fg-mute">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-mute max-[600px]:hidden">
        <span>Scroll</span>
        <span className="scroll-cue-dot relative h-9 w-[22px] rounded-xl border-[1.5px] border-line-strong" />
      </div>
    </header>
  );
}
