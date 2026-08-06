import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { PUBLICATIONS, ACHIEVEMENTS, PROFILE } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

function Publication({ entry }) {
  return (
    <article className="rounded-lg border border-line bg-raised p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
          {entry.kind}
        </span>
        {entry.status ? (
          <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-faint">
            {entry.status}
          </span>
        ) : null}
        <span className="ml-auto text-sm text-faint tabular-nums">
          {entry.date}
        </span>
      </div>

      <h3 className="mt-4 text-lg leading-snug font-semibold text-ink sm:text-xl">
        {entry.title}
      </h3>

      <p className="mt-2.5 text-sm text-muted">
        {entry.authors.map((author, i) => (
          <React.Fragment key={author}>
            {i > 0 ? ", " : ""}
            <span
              className={
                author === PROFILE.name ? "font-semibold text-ink" : undefined
              }
            >
              {author}
            </span>
          </React.Fragment>
        ))}
        <span className="text-faint"> · {entry.venue}</span>
      </p>

      <ul className="mt-5 space-y-2.5">
        {entry.highlights.map((highlight, i) => (
          <li
            key={i}
            className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:top-[0.6rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
          >
            {highlight}
          </li>
        ))}
      </ul>

      {entry.note ? (
        <p className="mt-5 text-sm text-faint italic">{entry.note}</p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        {entry.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            {link.label}
            <FiExternalLink size={13} aria-hidden="true" />
          </a>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
        {entry.tags.map((tag) => (
          <li
            key={tag}
            className="rounded bg-surface px-2.5 py-1 text-[12px] text-faint"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Research() {
  return (
    <Section
      id="research"
      title="Research"
      lead="Work on self-supervised representation learning for biomedical signals and on latent generative models for geophysical forecasting."
    >
      <div className="space-y-6">
        {PUBLICATIONS.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.06}>
            <Publication entry={entry} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-lg border border-line bg-surface px-6 py-5">
          <h3 className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">
            Competitive Programming
          </h3>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {ACHIEVEMENTS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[15px] text-muted transition-colors hover:text-accent"
              >
                <span className="font-medium text-ink">{item.label}</span> ·{" "}
                {item.detail}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
