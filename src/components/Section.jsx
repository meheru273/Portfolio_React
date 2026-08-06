import React from "react";
import Reveal from "./Reveal.jsx";

export default function Section({ id, title, lead, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <Reveal>
        <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 h-px w-full bg-line" />
        {lead ? (
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
      </Reveal>

      <div className="mt-8">{children}</div>
    </section>
  );
}
