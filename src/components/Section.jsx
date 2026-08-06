import React from "react";
import Reveal from "./Reveal.jsx";

/**
 * `icon` is a react-icons component. It sits in a tinted tile beside the
 * heading so each section is identifiable at a glance while scrolling.
 */
export default function Section({
  id,
  title,
  lead,
  icon: Icon,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-3.5">
          {Icon ? (
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15"
              aria-hidden="true"
            >
              <Icon size={20} />
            </span>
          ) : null}
          <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="rule-fade mt-4 w-full" />

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
