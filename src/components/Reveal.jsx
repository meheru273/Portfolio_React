import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Small, uniform scroll reveal — a short fade and rise, once. */
export default function Reveal({ children, delay = 0, className = "", as }) {
  const reduceMotion = useReducedMotion();

  // No hidden initial state when motion is unwanted — render the content plainly.
  if (reduceMotion) {
    const Plain = as || "div";
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = as ? motion[as] : motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
