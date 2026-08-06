import React, { useEffect, useState } from "react";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiFileText,
  FiUser,
  FiRss,
  FiBookOpen,
  FiLayers,
  FiTool,
  FiAward,
  FiSend,
} from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "../constants";
import useTheme from "../hooks/useTheme.js";
import useActiveSection from "../hooks/useActiveSection.js";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

const NAV_ICONS = {
  about: FiUser,
  news: FiRss,
  research: FiBookOpen,
  projects: FiLayers,
  skills: FiTool,
  education: FiAward,
  contact: FiSend,
};

/** Fraction of the page scrolled, 0–1, sampled on a rAF so it stays smooth. */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? doc.scrollTop / scrollable : 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

export default function NavBar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  // Never leave the mobile panel open across a breakpoint change.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#about"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent sm:text-xl"
        >
          {/* Monogram tile — a small anchor of colour in the header. */}
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-page shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, var(--c-accent), var(--cat-ai))",
            }}
            aria-hidden="true"
          >
            MZ
          </span>
          {PROFILE.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[15px] transition-colors ${
                    active === link.id
                      ? "font-medium text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active === link.id ? (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-accent/30 px-3 py-1.5 text-[14px] font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                <FiFileText size={14} aria-hidden="true" />
                CV
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            className="ml-1 rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-accent"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-ink lg:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Reading progress, pinned to the header's lower edge. */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background:
            "linear-gradient(to right, var(--c-accent), var(--cat-ai))",
        }}
        aria-hidden="true"
      />

      {open ? (
        <div className="border-t border-line bg-page lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => {
              const Icon = NAV_ICONS[link.id];
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[15px] transition-colors ${
                      active === link.id
                        ? "bg-accent-soft font-medium text-accent"
                        : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <FiFileText size={16} aria-hidden="true" /> Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
