import { profile } from "@/content/profile";

/**
 * Branded loading overlay.
 *
 * Entirely CSS-driven: the progress fill, numeric counter, exit wipe and the
 * overlay's own dismissal all run from CSS animations on the server-rendered
 * markup (see the preloader section in `globals.css`). Nothing here depends on
 * JavaScript, so the page reveals itself even if the client never hydrates.
 */
export function Preloader() {
  return (
    <div
      aria-hidden="true"
      className="preloader fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-bg"
    >
      <div className="pre-glow absolute h-[70vw] max-h-[760px] w-[70vw] max-w-[760px] rounded-full opacity-50 blur-[60px]" />

      <div className="pre-stage relative z-[2] flex flex-col items-center">
        <div className="pre-ring relative grid h-[104px] w-[104px] place-items-center rounded-[26px]">
          <span className="pre-mark grid h-full w-full place-items-center rounded-[23px] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] font-display text-[2rem] font-extrabold tracking-[-0.04em] text-white shadow-[0_12px_40px_-10px_var(--accent)]">
            {profile.initials}
          </span>
        </div>

        <div className="mt-[26px] font-display text-[1.3rem] font-bold tracking-[-0.015em] text-fg">
          {profile.name}
        </div>
        <div className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.26em] text-fg-mute">
          {profile.role}
        </div>

        <div className="mt-[34px] h-[3px] w-[220px] overflow-hidden rounded-full bg-surface-3">
          <span className="pre-fill block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
        </div>

        <div className="mt-3.5 flex items-baseline gap-px font-mono text-[12px] tabular-nums tracking-[0.08em] text-fg-dim">
          <span className="pre-count-num" />
          <span className="text-[9px] text-fg-mute">%</span>
        </div>
      </div>
    </div>
  );
}
