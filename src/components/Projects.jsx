// Fixed Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section className="border-b border-neutral-900 pb-16 lg:pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-16 lg:my-20 text-center text-4xl lg:text-5xl"
      >
        Projects
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:flex-nowrap items-start gap-6 lg:gap-12"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="rounded-lg"
              />
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: index * 0.2 + 0.2 }}
              className="w-full lg:flex-1"
            >
              <h6 className="mb-3 font-semibold text-xl sm:text-2xl">{project.title}</h6>
              <p className="mb-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 text-base font-medium text-cyan-400 hover:underline"
                >
                  Try it now! →
                </a>
              )}
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1.5 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
