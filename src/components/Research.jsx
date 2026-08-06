import React from "react";
import {
  FiExternalLink,
  FiFileText,
  FiBookOpen,
  FiAward,
  FiUsers,
} from "react-icons/fi";
import { PUBLICATIONS, ACHIEVEMENTS, PROFILE } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { PreviewStack } from "./Preview.jsx";
import SocialIcon from "./SocialIcon.jsx";

function Publication({ entry }) {
  return (
    <article className="card cat-research p-6 sm:p-7">
      {/* Paper figures are wide — 2:1 and 3:1 — so a narrow side column would
          render them as unreadable strips with dead space underneath. They get
          the full card width below the text instead. */}
      <div className="flex flex-col gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase cat-tint cat-text">
              <FiFileText size={11} aria-hidden="true" />
              {entry.kind}
            </span>
            {entry.status ? (
              <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-faint">
                {entry.status}
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-lg leading-snug font-semibold text-ink sm:text-xl">
            {entry.title}
          </h3>

          {/* Venue line, set apart in green the way a citation would be. */}
          <p className="mt-2 text-[13px] font-semibold text-ok">
            {entry.venue} — {entry.date}
          </p>

          <p className="mt-2 flex items-start gap-1.5 text-sm text-muted">
            <FiUsers
              size={13}
              className="mt-1 shrink-0 text-faint"
              aria-hidden="true"
            />
            <span>
              {entry.authors.map((author, i) => (
                <React.Fragment key={author}>
                  {i > 0 ? ", " : ""}
                  <span
                    className={
                      author === PROFILE.name
                        ? "font-semibold text-ink underline decoration-dotted underline-offset-2"
                        : undefined
                    }
                  >
                    {author}
                  </span>
                </React.Fragment>
              ))}
            </span>
          </p>

          <ul className="mt-5 space-y-2.5">
            {entry.highlights.map((highlight, i) => (
              <li
                key={i}
                className="relative pl-5 text-[15px] leading-relaxed text-muted"
              >
                <span
                  className="absolute top-[0.55rem] left-0 h-1.5 w-1.5 rounded-full opacity-70"
                  style={{ backgroundColor: "var(--cat, var(--c-accent))" }}
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>

          {entry.note ? (
            <p className="mt-5 text-sm text-faint italic">{entry.note}</p>
          ) : null}

          {entry.links.length ? (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {entry.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pill"
                >
                  <FiExternalLink size={13} aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}

          <PreviewStack
            images={entry.images}
            thumb={entry.thumb}
            columns
            className="mt-6 border-t border-line pt-6"
          />

          <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md px-2.5 py-1 text-[12px] cat-tint cat-text"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Research() {
  return (
    <Section
      id="research"
      title="Research"
      icon={FiBookOpen}
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
        <div className="mt-8 rounded-xl border border-line bg-surface px-6 py-5">
          <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-faint uppercase">
            <FiAward size={14} aria-hidden="true" />
            Competitive Programming
          </h3>
          <div className="mt-3.5 flex flex-wrap gap-x-8 gap-y-3">
            {ACHIEVEMENTS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors hover:text-accent"
              >
                <SocialIcon
                  name={item.label.toLowerCase()}
                  className="h-4 w-4"
                  brand
                />
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
