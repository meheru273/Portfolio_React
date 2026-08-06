import React from "react";
import { FiMapPin, FiFileText } from "react-icons/fi";
import { PROFILE, SOCIALS } from "../constants";
import SocialIcon from "./SocialIcon.jsx";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="h-44 w-44 overflow-hidden rounded-full ring-1 ring-line sm:h-52 sm:w-52 lg:h-56 lg:w-56">
          <img
            src={PROFILE.image}
            alt={PROFILE.name}
            width={224}
            height={224}
            className="h-full w-full object-cover"
            style={{ transform: "scale(1.12)", transformOrigin: "50% 34%" }}
          />
        </div>

        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
          {PROFILE.name}
        </h1>
        <p className="mt-1.5 text-[15px] leading-snug text-muted">
          {PROFILE.role}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-faint">
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

        <p className="mt-3 flex items-center gap-1.5 text-sm text-faint">
          <FiMapPin size={14} aria-hidden="true" />
          {PROFILE.location}
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                title={social.label}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={social.icon} className="h-[17px] w-[17px]" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PROFILE.cv}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <FiFileText size={15} aria-hidden="true" />
          Curriculum Vitae
        </a>
      </div>
    </aside>
  );
}
