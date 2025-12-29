// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap md:flex-nowrap items-start gap-6"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="w-full md:w-auto flex-shrink-0"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded"
              />
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: index * 0.2 + 0.2 }}
              className="w-full md:flex-1 min-w-0"
            >
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="mb-4">
                    {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm mx-8 my-8 font-medium text-cyan-400 hover:underline"
                  >
                    Try it now!
                  </a>
                )}
                </div>
              <div className="flex flex-wrap items-center gap-5">
                
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    
                    {tech}
                  </span>
                ))}

                {/* Call-to-Action Link */}
                
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

