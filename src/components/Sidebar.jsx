import React from "react";
import { FiMapPin, FiDownload } from "react-icons/fi";
import { PROFILE, SOCIALS } from "../constants";
import SocialIcon from "./SocialIcon.jsx";
import useStickyFit from "../hooks/useStickyFit.js";

export default function Sidebar() {
  const [ref, canStick] = useStickyFit();

  return (
    <aside
      ref={ref}
      className={`lg:self-start ${canStick ? "lg:sticky lg:top-24" : ""}`}
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* A quiet double ring — hairline border, a hair of page-coloured gap,
            then a faint accent outline. Depth from a soft shadow, not a glow. */}
        <div className="relative">
          <div className="h-40 w-40 overflow-hidden rounded-full bg-surface ring-1 ring-line sm:h-48 sm:w-48 lg:h-44 lg:w-44 xl:h-48 xl:w-48">
            <img
              src={PROFILE.image}
              alt={PROFILE.name}
              width={224}
              height={224}
              className="h-full w-full object-cover"
              style={{ transform: "scale(1.12)", transformOrigin: "50% 34%" }}
            />
          </div>
          <span
            className="pointer-events-none absolute -inset-[5px] rounded-full ring-1 ring-accent/25"
            aria-hidden="true"
          />
        </div>

        <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
          {PROFILE.name}
        </h1>
        <p className="mt-1.5 text-[15px] leading-snug text-muted">
          {PROFILE.role}
        </p>

        <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/10 px-2.5 py-1 text-[12px] font-medium text-ok">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
          </span>
          Open to opportunities
        </span>

        <p className="mt-3.5 text-sm leading-relaxed text-faint">
          {PROFILE.affiliation},{" "}
          <a
            href={PROFILE.affiliationUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="prose-link"
          >
            {PROFILE.affiliationShort}
          </a>
        </p>

        <p className="mt-2.5 flex items-center gap-1.5 text-sm text-faint">
          <FiMapPin size={14} className="text-accent" aria-hidden="true" />
          {PROFILE.location}
        </p>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                title={social.label}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-raised transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-surface hover:shadow-sm"
              >
                <SocialIcon
                  name={social.icon}
                  className="h-[17px] w-[17px]"
                  brand
                />
              </a>
            </li>
          ))}
        </ul>

        {/* The one filled button on the page — the action worth taking. */}
        <a
          href={PROFILE.cv}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-page shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <FiDownload size={15} aria-hidden="true" />
          Curriculum Vitae
        </a>
      </div>
    </aside>
  );
}
