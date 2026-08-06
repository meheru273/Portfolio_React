import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUpRight } from "react-icons/fi";
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
    cat: "web",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phoneHref}`,
    cat: "mobile",
  },
  { icon: FiMapPin, label: "Location", value: PROFILE.location, cat: "hw" },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" icon={FiSend} lead={CONTACT_INTRO}>
      <div className="grid gap-4 sm:grid-cols-3">
        {DETAILS.map((detail, i) => {
          const Icon = detail.icon;
          const body = (
            <>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl cat-tint cat-text"
                aria-hidden="true"
              >
                <Icon size={18} />
              </span>
              <span className="mt-3.5 block text-xs font-semibold tracking-[0.12em] text-faint uppercase">
                {detail.label}
              </span>
              <span className="mt-1 block text-[15px] break-words text-ink">
                {detail.value}
              </span>
            </>
          );

          return (
            <Reveal key={detail.label} delay={i * 0.05} className="h-full">
              {detail.href ? (
                <a
                  href={detail.href}
                  className={`card cat-${detail.cat} block h-full p-5`}
                >
                  {body}
                </a>
              ) : (
                <div className={`card cat-${detail.cat} h-full p-5`}>{body}</div>
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
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-raised px-3.5 py-2 text-sm text-muted transition-all hover:-translate-y-0.5 hover:text-ink hover:shadow-sm"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" brand />
                {social.label}
                <FiArrowUpRight
                  size={13}
                  className="text-faint"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
