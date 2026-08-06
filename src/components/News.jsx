import React from "react";
import { FiFileText, FiZap, FiAward, FiRss, FiCalendar } from "react-icons/fi";
import { NEWS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

const KINDS = {
  paper: { icon: FiFileText, cat: "research" },
  launch: { icon: FiZap, cat: "web" },
  degree: { icon: FiAward, cat: "ai" },
};

export default function News() {
  return (
    <Section id="news" title="News" icon={FiRss}>
      <ol className="relative">
        {NEWS.map((item, i) => {
          const { icon: Icon, cat } = KINDS[item.kind] ?? KINDS.launch;
          const isLast = i === NEWS.length - 1;

          return (
            <Reveal
              as="li"
              key={i}
              delay={i * 0.05}
              className={`relative cat-${cat} pl-12 ${isLast ? "" : "pb-7"}`}
            >
              <span
                className="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border cat-ring cat-tint cat-text"
                aria-hidden="true"
              >
                <Icon size={14} />
              </span>

              {/* Thread between markers — omitted after the final entry. */}
              {isLast ? null : (
                <span
                  className="absolute top-9 bottom-1 left-4 w-px -translate-x-1/2 bg-line"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-faint tabular-nums">
                  <FiCalendar size={12} aria-hidden="true" />
                  {item.date}
                </span>
                <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase cat-tint cat-text">
                  {item.tag}
                </span>
              </div>

              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                <RichText text={item.text} />
              </p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
