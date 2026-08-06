import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiArxiv, SiLeetcode, SiCodeforces } from "react-icons/si";

const ICONS = {
  mail: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  arxiv: SiArxiv,
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
};

export default function SocialIcon({ name, className = "" }) {
  const Icon = ICONS[name] ?? FiMail;
  return <Icon className={className} aria-hidden="true" />;
}
