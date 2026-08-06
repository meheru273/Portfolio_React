import React, { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "../constants";
import useTheme from "../hooks/useTheme.js";
import useActiveSection from "../hooks/useActiveSection.js";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function NavBar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

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
          className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent sm:text-xl"
        >
          {PROFILE.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`rounded-md px-3 py-2 text-[15px] transition-colors ${
                    active === link.id
                      ? "text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md px-3 py-2 text-[15px] text-muted transition-colors hover:text-ink"
              >
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
            className="ml-1 rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-ink"
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

      {open ? (
        <div className="border-t border-line bg-page lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-[15px] transition-colors ${
                    active === link.id
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <FiFileText size={16} /> Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
