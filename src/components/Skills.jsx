import React from "react";
import {
  FiCode,
  FiCpu,
  FiMessageSquare,
  FiServer,
  FiDatabase,
  FiMonitor,
  FiGitBranch,
  FiZap,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";
import { SKILLS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import TechIcon from "./TechIcon.jsx";

/* Each group gets an icon and a hue, so the column of headings is scannable
   without reading it. Hues repeat across distant rows — that's fine. */
const GROUPS = {
  Languages: { icon: FiCode, cat: "sys" },
  "Machine Learning": { icon: FiCpu, cat: "ai" },
  "Agentic AI & LLMs": { icon: FiMessageSquare, cat: "research" },
  "Backend & APIs": { icon: FiServer, cat: "web" },
  "Data & Messaging": { icon: FiDatabase, cat: "data" },
  Frontend: { icon: FiMonitor, cat: "mobile" },
  "Testing & DevOps": { icon: FiGitBranch, cat: "hw" },
  "Systems & Hardware": { icon: FiZap, cat: "sys" },
  Mobile: { icon: FiSmartphone, cat: "mobile" },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" icon={FiTool}>
      <div className="divide-y divide-line border-t border-b border-line">
        {SKILLS.map((row, i) => {
          const { icon: Icon, cat } = GROUPS[row.group] ?? {
            icon: FiCode,
            cat: "web",
          };

          return (
            <Reveal key={row.group} delay={i * 0.04}>
              <div className={`grid gap-3 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 cat-${cat}`}>
                <h3 className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg cat-tint cat-text"
                    aria-hidden="true"
                  >
                    <Icon size={14} />
                  </span>
                  {row.group}
                </h3>

                <ul className="flex flex-wrap gap-1.5">
                  {row.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1 text-[13px] text-muted transition-colors hover:border-[var(--cat)] hover:text-ink"
                    >
                      <TechIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
