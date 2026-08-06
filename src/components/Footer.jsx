import React from "react";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import { PROFILE, SOCIALS } from "../constants";
import SocialIcon from "./SocialIcon.jsx";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap items-center gap-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={
                    social.url.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noreferrer noopener"
                  title={social.label}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-raised transition-all hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" brand />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-raised px-3.5 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FiArrowUp size={14} aria-hidden="true" />
            Back to top
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-sm text-faint">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with
            <FiHeart size={13} className="text-accent" aria-hidden="true" />
            using React, Vite and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
