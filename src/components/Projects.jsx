import React from "react";
import {
  FiExternalLink,
  FiGithub,
  FiPlayCircle,
  FiFileText,
  FiCpu,
  FiLayers,
  FiDatabase,
  FiShare2,
  FiZap,
  FiSmartphone,
  FiFolder,
} from "react-icons/fi";
import { PROJECTS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Thumbnail from "./Thumbnail.jsx";
import TechIcon from "./TechIcon.jsx";

const CATEGORY_ICONS = {
  ai: FiCpu,
  web: FiLayers,
  data: FiDatabase,
  sys: FiShare2,
  hw: FiZap,
  mobile: FiSmartphone,
};

/** Repo, live site and paper links each read differently at a glance. */
function linkIcon(label) {
  if (/code|github|repo/i.test(label)) return FiGithub;
  if (/demo|app/i.test(label)) return FiPlayCircle;
  if (/arxiv|pdf|paper/i.test(label)) return FiFileText;
  return FiExternalLink;
}

function TechList({ tech, limit }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const hidden = tech.length - shown.length;

  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {shown.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[12px] text-muted"
        >
          <TechIcon name={item} />
          {item}
        </li>
      ))}
      {hidden > 0 ? (
        <li className="inline-flex items-center rounded-md px-2 py-1 text-[12px] text-faint">
          +{hidden} more
        </li>
      ) : null}
    </ul>
  );
}

function LinkList({ links }) {
  if (!links.length) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const Icon = linkIcon(link.label);
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="pill"
          >
            <Icon size={13} aria-hidden="true" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

function CategoryLine({ project }) {
  const Icon = CATEGORY_ICONS[project.cat] ?? FiFolder;
  return (
    <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium tracking-wide cat-text">
      <Icon size={14} aria-hidden="true" />
      {project.category}
      <span className="text-faint">· {project.period}</span>
    </p>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className={`card cat-${project.cat} p-6 sm:p-7`}>
      <div className="flex flex-col gap-5 sm:flex-row-reverse sm:gap-7">
        {/* `self-start` stops the flex row stretching this past its ratio. */}
        <div className="relative aspect-16/9 w-full shrink-0 self-start overflow-hidden rounded-lg border border-line bg-surface sm:aspect-4/3 sm:w-36 lg:w-44">
          <Thumbnail kind={project.thumb} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg leading-snug font-semibold text-ink sm:text-xl">
            {project.title}
          </h3>

          <CategoryLine project={project} />

          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>

          {project.highlights.length ? (
            <ul className="mt-4 space-y-2.5">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-[15px] leading-relaxed text-muted"
                >
                  <span
                    className="absolute top-[0.55rem] left-0 h-1.5 w-1.5 rounded-full opacity-70"
                    style={{ backgroundColor: "var(--cat, var(--c-accent))" }}
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}

          <LinkList links={project.links} />
          <TechList tech={project.tech} />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }) {
  return (
    <article
      className={`card cat-${project.cat} flex h-full flex-col overflow-hidden`}
    >
      <div className="relative aspect-16/9 w-full border-b border-line bg-surface">
        <Thumbnail kind={project.thumb} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base leading-snug font-semibold text-ink">
          {project.title}
        </h3>

        <CategoryLine project={project} />

        <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto">
          <LinkList links={project.links} />
          <TechList tech={project.tech} limit={5} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      icon={FiLayers}
      lead="Things I have designed, built and shipped — across microservice backends, LLM systems, databases, mobile apps and RTL."
    >
      <div className="space-y-6">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <FeaturedProject project={project} />
          </Reveal>
        ))}
      </div>

      <h3 className="mt-12 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-faint uppercase">
        More Work
        <span className="h-px flex-1 bg-line" />
      </h3>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.06} className="h-full">
            <CompactProject project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
