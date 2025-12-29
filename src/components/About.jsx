// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">
        About Me
        <span className="text-neutral-500"></span>
      </motion.h1>
      <div className="flex flex-wrap items-start justify-between">
        {/* IMAGE COLUMN - LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-5/12 flex-shrink-0"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              alt="about"
              className="w-3/4 sm:w-full max-w-xs h-auto shadow-md rounded-lg"
            />
          </div>
        </motion.div>

        {/* TEXT COLUMN - RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-5/12 flex-shrink-0 mt-4 sm:mt-0"
        >
          <div className="flex justify-center">
            <p className="my-2 max-w-xs py-6 text-xs sm:text-sm leading-tight">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
