import React from "react";
import { FiUser, FiCompass, FiLayers } from "react-icons/fi";
import {
  ABOUT_PARAGRAPHS,
  RESEARCH_INTERESTS,
  CORE_STACK,
} from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";
import TechIcon from "./TechIcon.jsx";

/* Interests cycle through the category hues so the row reads as a spectrum
   rather than six identical grey pills. */
const INTEREST_CATS = ["ai", "ai", "web", "sys", "research", "data"];

export default function About() {
  return (
    <Section id="about" title="About Me" icon={FiUser}>
      <div className="space-y-5">
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-[17px] leading-[1.75] text-muted">
              <RichText text={paragraph} />
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-9">
          <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-faint uppercase">
            <FiLayers size={14} aria-hidden="true" />
            Core Stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CORE_STACK.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] text-muted"
              >
                <TechIcon name={item} className="h-4 w-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-9">
          <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-faint uppercase">
            <FiCompass size={14} aria-hidden="true" />
            Research Interests
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((interest, i) => (
              <li
                key={interest}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] text-muted cat-${
                  INTEREST_CATS[i % INTEREST_CATS.length]
                } cat-ring cat-tint`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--cat)" }}
                  aria-hidden="true"
                />
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
