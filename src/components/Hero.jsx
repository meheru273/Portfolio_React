// Fixed Hero.jsx
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
      className="border-b border-neutral-900 pb-16 lg:pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 lg:gap-12">
        {/* TEXT COLUMN */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={textVariant(0.3)}
            className="pb-4 text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight"
          >
            Meheru Zannat
          </motion.h1>

          <motion.span
            variants={textVariant(0.2)}
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight pb-6"
          >
            FULL STACK DEVELOPER
          </motion.span>

          <motion.p
            variants={textVariant(0.4)}
            className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* IMAGE COLUMN */}
        <motion.div
          variants={imageVariant}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Meheru Zannat"
            className="w-full max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
