import { MoonIcon, SunIcon } from "./icons";

/**
 * Dark / light theme switch.
 *
 * Intentionally has NO React handler: clicks are handled by the inline script
 * in the root layout (plain JS via event delegation on `[data-theme-toggle]`),
 * and the knob/icons are driven by CSS off `[data-theme]`. This means the
 * toggle works even if the React bundle never hydrates.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      aria-label="Toggle dark and light mode"
      aria-pressed="false"
      className="relative h-8 w-[60px] flex-none rounded-full border border-line bg-surface-2 transition-colors duration-300"
    >
      <span
        className={
          "absolute top-[3px] left-[3px] grid h-6 w-6 translate-x-[28px] place-items-center rounded-full text-white transition-transform duration-300 ease-[var(--ease-out-expo)] dark:translate-x-0 " +
          "bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] [&>svg]:h-[13px] [&>svg]:w-[13px]"
        }
      >
        <MoonIcon className="hidden dark:block" />
        <SunIcon className="block dark:hidden" />
      </span>
    </button>
  );
}
