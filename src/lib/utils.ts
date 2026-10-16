/**
 * Join conditional class names into a single string.
 *
 * A tiny, dependency-free alternative to `clsx`: falsy values are dropped and
 * the rest are space-joined. Sufficient for the conditional styling in this
 * project without pulling in extra packages.
 *
 * @example
 * cn("btn", isActive && "btn-active", undefined) // "btn btn-active"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
