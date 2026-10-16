import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base = cn(
  "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em]",
  "transition-[transform,box-shadow,background] duration-300 ease-[var(--ease-out-expo)] will-change-transform",
  "[&>svg]:h-[17px] [&>svg]:w-[17px]",
);

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] text-white",
    "shadow-[0_16px_40px_-14px_var(--accent)] hover:shadow-[0_22px_54px_-12px_var(--accent)]",
  ),
  ghost: cn(
    "border border-line bg-surface-2 text-fg",
    "hover:border-line-strong hover:bg-surface-3",
  ),
};

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Pill button shared across the site. Renders an `<a>` when `href` is set,
 * otherwise a `<button>`. Wrap with `<Magnetic>` for the pointer-follow effect.
 */
export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
