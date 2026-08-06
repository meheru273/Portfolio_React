import React from "react";
import { SKILLS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-line border-b border-line">
        {SKILLS.map((row, i) => (
          <Reveal key={row.group} delay={i * 0.04}>
            <div className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <h3 className="pt-1 text-sm font-semibold text-ink">
                {row.group}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {row.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-surface px-2.5 py-1 text-[13px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
