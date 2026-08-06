import React from "react";

/**
 * Minimal inline renderer for the content in `constants/index.js`.
 * Supports [label](url), **bold** and *italic* — nothing else, on purpose.
 */
const PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

export default function RichText({ text, className = "" }) {
  const nodes = [];
  let cursor = 0;
  let key = 0;
  let match;

  PATTERN.lastIndex = 0;
  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    if (match[1] !== undefined) {
      const isExternal = /^https?:\/\//.test(match[2]);
      nodes.push(
        <a
          key={key++}
          href={match[2]}
          className="prose-link"
          {...(isExternal
            ? { target: "_blank", rel: "noreferrer noopener" }
            : {})}
        >
          {match[1]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {match[3]}
        </strong>,
      );
    } else {
      nodes.push(<em key={key++}>{match[4]}</em>);
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <span className={className}>{nodes}</span>;
}
