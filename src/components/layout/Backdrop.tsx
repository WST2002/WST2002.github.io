/**
 * Fixed ambient background: two accent radial glows plus a masked grid.
 * Purely decorative and non-interactive; styling lives in `globals.css`.
 */
export function Backdrop() {
  return <div className="site-backdrop" aria-hidden="true" />;
}
