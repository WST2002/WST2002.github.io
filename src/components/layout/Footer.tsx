import { profile } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { ArrowUpIcon } from "@/components/ui/icons";

/** Site footer with copyright and a back-to-top link. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-wrap items-center justify-between gap-3.5">
        <span className="font-mono text-[12px] tracking-[0.03em] text-fg-mute">
          © {year} {profile.name} · Designed &amp; built from scratch
        </span>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-[0.85rem] text-fg-dim transition-colors hover:text-fg"
        >
          Back to top
          <ArrowUpIcon className="h-[15px] w-[15px]" />
        </a>
      </Container>
    </footer>
  );
}
