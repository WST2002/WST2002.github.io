import { Fragment, type ReactNode } from "react";

/**
 * Render a content string with minimal inline emphasis:
 *
 * - `**text**` → strong, in the primary foreground colour
 * - `*text*`   → accent-coloured emphasis (non-italic, matching the design)
 *
 * Keeps copy editable as plain data in `src/content` while preserving the
 * original portfolio's emphasis, without a full markdown dependency.
 */
export function renderEmphasis(input: string): ReactNode {
  // Split on **bold** and *accent* while keeping the delimiters.
  const tokens = input.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return tokens.map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-fg">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <em key={index} className="font-normal not-italic text-accent">
          {token.slice(1, -1)}
        </em>
      );
    }
    return <Fragment key={index}>{token}</Fragment>;
  });
}
