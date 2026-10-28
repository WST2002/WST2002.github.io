import { profile } from "@/content/profile";
import { socialLinks } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { SocialLink } from "@/components/ui/SocialLink";
import { Reveal } from "@/components/effects/Reveal";
import { Magnetic } from "@/components/effects/Magnetic";
import { MailIcon } from "@/components/ui/icons";

/** Closing call-to-action with direct contact links and socials. */
export function Contact() {
  const { headline, highlight, subtitle } = profile.contact;
  const [beforeHighlight, afterHighlight] = headline.split(highlight);

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-[clamp(90px,12vw,160px)] text-center"
    >
      <Container>
        <Reveal>
          <Eyebrow centered>Contact</Eyebrow>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mx-auto mt-[18px] max-w-[14ch] text-balance font-display text-[clamp(2.6rem,8vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            {beforeHighlight}
            <GradientText>{highlight}</GradientText>
            {afterHighlight}
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-[26px] max-w-[46ch] text-[1.1rem] text-fg-dim">{subtitle}</p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <Magnetic>
              <Button href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
              </Button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
