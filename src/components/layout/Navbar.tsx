"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/effects/Magnetic";
import { DownloadIcon, MenuIcon } from "@/components/ui/icons";

/**
 * Fixed top navigation.
 *
 * The mobile menu is a pure-CSS checkbox toggle (the `peer` input + label),
 * so it opens/closes without JavaScript. Scroll styling and active-link
 * highlighting are progressive enhancements — if the bundle never hydrates,
 * the nav still renders and the menu still works.
 */
export function Navbar() {
  const scrolled = useScrolled(24);
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-7 py-4",
        "transition-[padding,background,border-color] duration-300 ease-[var(--ease-smooth)]",
        "border-b border-transparent max-[600px]:px-[18px] max-[600px]:py-3",
        scrolled &&
          "border-line bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] py-2.5 backdrop-blur-[18px] backdrop-saturate-[1.4]",
      )}
    >
      {/* CSS-only mobile menu state (peer for the dropdown below). */}
      <input
        id="nav-menu"
        type="checkbox"
        className="peer sr-only"
        aria-label="Toggle navigation menu"
      />

      <a
        href="#top"
        className="flex items-center gap-3 font-display font-bold"
        aria-label={`${profile.name} — home`}
      >
        <span className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-[15px] tracking-[-0.04em] text-white shadow-[0_8px_24px_-8px_var(--accent)]">
          {profile.initials}
        </span>
        <span className="text-[1.05rem] tracking-[-0.01em] max-[520px]:hidden">
          {profile.firstName} <span className="font-medium text-fg-mute">{profile.lastName}</span>
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden items-center gap-1 min-[920px]:flex">
        {navLinks.map((link) => {
          const isActive = activeId !== null && `#${activeId}` === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-[0.9rem] transition-colors duration-200",
                isActive ? "text-fg" : "text-fg-dim hover:text-fg",
              )}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-2.5">
        <ThemeToggle />
        <div className="max-[920px]:hidden">
          <Magnetic>
            <Button href={profile.resumePath} download>
              Résumé
              <DownloadIcon />
            </Button>
          </Magnetic>
        </div>
        {/* Hamburger (mobile only) */}
        <label
          htmlFor="nav-menu"
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line bg-surface-2 text-fg transition-colors hover:border-line-strong min-[920px]:hidden [&>svg]:h-5 [&>svg]:w-5"
        >
          <MenuIcon />
        </label>
      </div>

      {/* Mobile dropdown — shown when the peer checkbox is checked. */}
      <div className="absolute inset-x-0 top-full hidden flex-col gap-1 border-b border-line bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] p-4 shadow-[var(--shadow)] backdrop-blur-[18px] peer-checked:flex min-[920px]:!hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-nav-link
            className="rounded-xl px-4 py-3 text-[0.95rem] text-fg-dim transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.resumePath}
          download
          data-nav-link
          className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] px-4 py-3 font-semibold text-white [&>svg]:h-[17px] [&>svg]:w-[17px]"
        >
          Résumé
          <DownloadIcon />
        </a>
      </div>
    </nav>
  );
}
