import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-accent">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
        Page <GradientText>not found</GradientText>.
      </h1>
      <p className="mt-5 max-w-[46ch] text-[1.05rem] text-fg-dim">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" className="mt-9">
        Back to home
      </Button>
    </div>
  );
}
