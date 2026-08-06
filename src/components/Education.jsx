import React from "react";
import { FiAward, FiMapPin, FiCalendar, FiBookmark } from "react-icons/fi";
import { EDUCATION } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

export default function Education() {
  return (
    <Section id="education" title="Education" icon={FiAward}>
      <div className="space-y-6">
        {EDUCATION.map((entry, i) => (
          <Reveal key={entry.institution} delay={i * 0.06}>
            <article className="card cat-ai p-6 sm:p-7">
              <div className="flex gap-4 sm:gap-5">
                <span
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl cat-tint cat-text sm:flex"
                  aria-hidden="true"
                >
                  <FiAward size={22} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink">
                      {entry.institution}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm text-faint sm:ml-auto">
                      <FiMapPin size={13} aria-hidden="true" />
                      {entry.location}
                    </span>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-[15px] font-medium cat-text">
                      {entry.degree}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-faint tabular-nums sm:ml-auto">
                      <FiCalendar size={13} aria-hidden="true" />
                      {entry.period}
                    </span>
                  </div>

                  {entry.notes?.length ? (
                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {entry.notes.map((note, n) => (
                        <li
                          key={n}
                          className="flex gap-2.5 text-[15px] leading-relaxed text-muted"
                        >
                          <FiBookmark
                            size={14}
                            className="mt-1 shrink-0 cat-text"
                            aria-hidden="true"
                          />
                          <span>
                            <RichText text={note} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
