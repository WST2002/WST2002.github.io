"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for diagnostics; replace with real reporting if needed.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-accent">
        Something broke
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
        An <GradientText>error</GradientText> occurred.
      </h1>
      <p className="mt-5 max-w-[46ch] text-[1.05rem] text-fg-dim">
        An unexpected error interrupted the page. Try again, and if it persists, reach out.
      </p>
      <Button onClick={reset} className="mt-9">
        Try again
      </Button>
    </div>
  );
}
