import React from "react";
import {
  FiUser,
  FiLayers,
  FiFileText,
  FiTerminal,
  FiCode,
  FiCompass,
} from "react-icons/fi";
import { ABOUT_PARAGRAPHS, RESEARCH_INTERESTS, STATS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

const STAT_ICONS = {
  projects: FiLayers,
  research: FiFileText,
  code: FiTerminal,
  languages: FiCode,
};

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
        <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = STAT_ICONS[stat.icon] ?? FiLayers;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/40"
              >
                <Icon size={16} className="text-accent" aria-hidden="true" />
                <dd className="mt-2.5 font-display text-2xl font-bold tracking-tight text-ink tabular-nums">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-[12.5px] leading-snug text-faint">
                  {stat.label}
                </dt>
              </div>
            );
          })}
        </dl>
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
