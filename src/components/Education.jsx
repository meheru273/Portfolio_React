import React from "react";
import { EDUCATION } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((entry, i) => (
          <Reveal key={entry.institution} delay={i * 0.06}>
            <article className="rounded-lg border border-line bg-raised p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">
                  {entry.institution}
                </h3>
                <span className="text-sm text-faint sm:ml-auto">
                  {entry.location}
                </span>
              </div>

              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-[15px] text-muted">{entry.degree}</p>
                <span className="text-sm text-faint tabular-nums sm:ml-auto">
                  {entry.period}
                </span>
              </div>

              {entry.notes?.length ? (
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {entry.notes.map((note, n) => (
                    <li key={n} className="text-[15px] leading-relaxed text-muted">
                      <RichText text={note} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
