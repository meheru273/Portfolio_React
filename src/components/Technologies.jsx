// src/components/Technologies.jsx
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPytorch } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: [1, 1],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  const icons = [
    { Component: RiReactjsLine, color: "text-cyan-400" },
    { Component: TbBrandNextjs, color: "text-white" },
    { Component: SiPython, color: "text-yellow-400" },
    { Component: SiDjango, color: "text-green-600" },
    { Component: SiPytorch, color: "text-orange-500" },
    { Component: TbBrandGraphql, color: "text-purple-500" },
    { Component: SiFlutter, color: "text-blue-400" },
    { Component: SiMongodb, color: "text-green-500" },
    { Component: FaNodeJs, color: "text-green-400" },
    { Component: BiLogoPostgresql, color: "text-sky-700" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {icons.map(({ Component, color }, index) => (
          <motion.div
            key={index}
            variants={iconVariant(2 + index * 0.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Component className={`text-5xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

