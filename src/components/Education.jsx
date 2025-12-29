// Fixed Education.jsx
import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:pb-24">
      <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-16 lg:my-20 text-center text-4xl lg:text-5xl"
      >
        Education
      </motion.h1>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12">
            {/* Year */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="text-base sm:text-lg text-neutral-400 font-medium">
                {exp.year}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-3 text-lg sm:text-xl font-semibold">
                {exp.role} -{' '}
                <span className="text-base sm:text-lg text-purple-100">
                  {exp.company}
                </span>
              </h6>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
