import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

function TechList({ tech }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded bg-surface px-2.5 py-1 text-[12px] text-faint"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function LinkList({ links }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          {link.label}
          <FiExternalLink size={13} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="rounded-lg border border-line bg-raised p-6 transition-colors hover:border-faint sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg leading-snug font-semibold text-ink sm:text-xl">
          {project.title}
        </h3>
        <span className="shrink-0 text-sm text-faint tabular-nums">
          {project.period}
        </span>
      </div>

      <p className="mt-1.5 text-[13px] font-medium tracking-wide text-accent">
        {project.category}
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>

      {project.highlights.length ? (
        <ul className="mt-4 space-y-2.5">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:top-[0.6rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
            >
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <LinkList links={project.links} />
      <TechList tech={project.tech} />
    </article>
  );
}

function CompactProject({ project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-raised p-6 transition-colors hover:border-faint">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base leading-snug font-semibold text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 text-sm text-faint tabular-nums">
          {project.period}
        </span>
      </div>

      <p className="mt-1.5 text-[13px] font-medium tracking-wide text-accent">
        {project.category}
      </p>

      <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto">
        <LinkList links={project.links} />
        <TechList tech={project.tech} />
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
      lead="Things I have designed, built and shipped — across microservice backends, LLM systems, databases, mobile apps and RTL."
    >
      <div className="space-y-6">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <FeaturedProject project={project} />
          </Reveal>
        ))}
      </div>

      <h3 className="mt-12 text-xs font-semibold tracking-[0.14em] text-faint uppercase">
        More Work
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
