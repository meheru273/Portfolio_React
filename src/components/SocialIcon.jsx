import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiArxiv, SiLeetcode, SiCodeforces } from "react-icons/si";

/**
 * Each social gets its real brand colour. GitHub's near-black needs a light
 * counterpart or it disappears against the dark surface — hence `dark`.
 */
const ICONS = {
  mail: { Icon: FiMail, color: "#1a5fb4", dark: "#6fa8ff" },
  github: { Icon: FiGithub, color: "#181717", dark: "#e6e9ef" },
  linkedin: { Icon: FiLinkedin, color: "#0a66c2", dark: "#4d9fe8" },
  arxiv: { Icon: SiArxiv, color: "#b31b1b", dark: "#ef6a6a" },
  leetcode: { Icon: SiLeetcode, color: "#ffa116", dark: "#ffb74d" },
  codeforces: { Icon: SiCodeforces, color: "#1f8acb", dark: "#5cb5e8" },
};

export default function SocialIcon({ name, className = "", brand = false }) {
  const entry = ICONS[name] ?? ICONS.mail;
  const { Icon, color, dark } = entry;

  if (!brand) return <Icon className={className} aria-hidden="true" />;

  return (
    <Icon
      className={`brand ${className}`}
      style={{ "--brand": color, "--brand-dark": dark }}
      aria-hidden="true"
    />
  );
}
