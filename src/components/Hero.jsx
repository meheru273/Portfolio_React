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
      className="border-b border-neutral-900 pb-8 lg:pb-16 px-4 sm:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
        {/* TEXT COLUMN */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            variants={textVariant(0.3)}
            className="pb-4 text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight"
          >
            Meheru Zannat
          </motion.h1>

          <motion.span
            variants={textVariant(0.2)}
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-light tracking-tight pb-4"
          >
            FULL STACK DEVELOPER
          </motion.span>

          <motion.p
            variants={textVariant(0.4)}
            className="text-sm sm:text-base max-w-xl leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* IMAGE COLUMN */}
        <motion.div
          variants={imageVariant}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-8"
        >
          <img
            src={profilePic}
            alt="Meheru Zannat"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}