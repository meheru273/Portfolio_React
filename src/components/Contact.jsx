import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { CONTACT_INTRO, PROFILE, SOCIALS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import SocialIcon from "./SocialIcon.jsx";

const DETAILS = [
  {
    icon: FiMail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phoneHref}`,
  },
  { icon: FiMapPin, label: "Location", value: PROFILE.location },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" lead={CONTACT_INTRO}>
      <div className="grid gap-4 sm:grid-cols-3">
        {DETAILS.map((detail, i) => {
          const Icon = detail.icon;
          const body = (
            <>
              <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-faint uppercase">
                <Icon size={14} aria-hidden="true" />
                {detail.label}
              </span>
              <span className="mt-2.5 block text-[15px] break-words text-ink">
                {detail.value}
              </span>
            </>
          );

          return (
            <Reveal key={detail.label} delay={i * 0.05} className="h-full">
              {detail.href ? (
                <a
                  href={detail.href}
                  className="block h-full rounded-lg border border-line bg-raised p-5 transition-colors hover:border-accent"
                >
                  {body}
                </a>
              ) : (
                <div className="h-full rounded-lg border border-line bg-raised p-5">
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {SOCIALS.filter((s) => s.icon !== "mail").map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
