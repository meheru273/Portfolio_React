import React from "react";
import { NEWS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import RichText from "./RichText.jsx";

export default function News() {
  return (
    <Section id="news" title="News">
      <ul className="divide-y divide-line border-b border-line">
        {NEWS.map((item, i) => (
          <Reveal as="li" key={i} delay={i * 0.05}>
            <div className="grid gap-1.5 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
              <span className="pt-0.5 text-sm font-medium whitespace-nowrap text-faint tabular-nums">
                {item.date}
              </span>
              <p className="text-[15px] leading-relaxed text-muted">
                <RichText text={item.text} />
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
