// src/components/Education.jsx
import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Heading */}
      <motion.h1
         whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>

      {/* Experience List */}
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {exp.year}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {exp.role} -{' '}
                <span className="text-sm text-purple-100">
                  {exp.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {exp.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
