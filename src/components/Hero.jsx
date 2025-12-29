// src/components/Hero.jsx
import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.png";
import { motion } from "framer-motion";

const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay }
  }
});
const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } }
};

export default function Hero() {
  return (
    <motion.section
      className="border-b border-neutral-900 pb-4 lg:mb-8"
      initial="hidden"
      whileInView="visible"
    >
      <div className="flex flex-wrap items-start justify-between">
        {/* TEXT COLUMN */}
        <div className="w-full sm:w-5/12 flex-shrink-0
        border-b border-neutral-900 pb-4 lg:mb-8 px-4 sm:px-8">
          <motion.h1
            variants={textVariant(0.3)}
            className="pb-3 text-4xl sm:text-4xl font-thin tracking-tight"
          >
            Meheru Zannat
          </motion.h1>

          <motion.span
            variants={textVariant(0.2)}
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-lg sm:text-xl font-light tracking-tight pb-3"
          >
            FULL STACK DEVELOPER
          </motion.span>

          <motion.p
            variants={textVariant(0.4)}
            className="text-xs sm:text-sm max-w-sm leading-tight"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* IMAGE COLUMN */}
        <motion.div
          variants={imageVariant}
          className="w-full sm:w-5/12 flex-shrink-0 flex justify-center sm:justify-end mt-4 sm:mt-0"
        >
          <img
            src={profilePic}
            alt="Meheru Zannat"
            className="w-3/4 sm:w-full max-w-xs h-auto shadow-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
