import React from "react";
import { ABOUT_PARAGRAPHS, RESEARCH_INTERESTS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-5">
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-[17px] leading-[1.75] text-muted">
              <RichText text={paragraph} />
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-9">
          <h3 className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">
            Research Interests
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] text-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
