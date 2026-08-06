import React from "react";
import {
  SiAndroid,
  SiApple,
  SiAxios,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDaisyui,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiOpenai,
  SiOpenjdk,
  SiOracle,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRender,
  SiRoboflow,
  SiScikitlearn,
  SiSelenium,
  SiSharp,
  SiSqlite,
  SiStripe,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

/**
 * Tech chips carry their brand mark. Matching is by keyword rather than exact
 * key so "React 19", "PHP 8" and "Python" all resolve without a second list to
 * keep in sync with `constants/index.js`.
 *
 * Order matters — the first match wins, so put the specific patterns first
 * ("scikit-learn" before "C", "next.js" before "node").
 * `dark` overrides brand colours that vanish against a dark surface.
 */
const RULES = [
  [/scikit/i, SiScikitlearn, "#f7931e"],
  [/pytorch/i, SiPytorch, "#ee4c2c"],
  [/tensorflow/i, SiTensorflow, "#ff6f00"],
  [/opencv/i, SiOpencv, "#5c3ee8", "#8f79f0"],
  [/numpy/i, SiNumpy, "#4dabcf"],
  [/pandas/i, SiPandas, "#150458", "#a8a3d6"],
  [/hugging\s*face/i, SiHuggingface, "#ffd21e"],
  [/roboflow|rf-detr/i, SiRoboflow, "#6706ce", "#a97bf0"],
  [/langchain|langgraph/i, SiLangchain, "#1c3c3c", "#5eead4"],
  [/openai|gpt/i, SiOpenai, "#000000", "#e6e9ef"],

  [/next\.?js/i, SiNextdotjs, "#000000", "#e6e9ef"],
  [/react/i, SiReact, "#61dafb"],
  [/vite/i, SiVite, "#a259ff"],
  [/tailwind/i, SiTailwindcss, "#06b6d4"],
  [/daisy/i, SiDaisyui, "#ff6ac1"],
  [/axios/i, SiAxios, "#5a29e4", "#9b7ff0"],
  [/^html|html5/i, SiHtml5, "#e34f26"],
  [/^css|css3/i, SiCss3, "#1572b6", "#5aa9e6"],

  [/node/i, SiNodedotjs, "#5fa04e"],
  [/express/i, SiExpress, "#000000", "#e6e9ef"],
  [/fastapi/i, SiFastapi, "#009688"],
  [/django/i, SiDjango, "#092e20", "#6dbb8a"],
  [/flask/i, SiFlask, "#000000", "#e6e9ef"],
  [/asp\.?net|\.net|dotnet/i, SiDotnet, "#512bd4", "#9d84f5"],
  [/laravel/i, SiLaravel, "#ff2d20"],
  [/graphql/i, SiGraphql, "#e10098"],
  [/jwt|oauth/i, SiJsonwebtokens, "#000000", "#e6e9ef"],

  [/mongo|mongoose/i, SiMongodb, "#47a248"],
  [/redis|bullmq/i, SiRedis, "#ff4438"],
  [/postgres/i, SiPostgresql, "#4169e1", "#7d9cf5"],
  [/mysql/i, SiMysql, "#4479a1", "#7cb0d8"],
  [/sqlite/i, SiSqlite, "#003b57", "#7ab8d8"],
  [/oracle|pl\/sql/i, SiOracle, "#f80000"],
  [/firebase/i, SiFirebase, "#ffca28"],
  [/stripe/i, SiStripe, "#635bff", "#9b95ff"],

  [/github\s*actions|ci\/cd/i, SiGithubactions, "#2088ff"],
  [/docker/i, SiDocker, "#2496ed"],
  [/vercel/i, SiVercel, "#000000", "#e6e9ef"],
  [/render/i, SiRender, "#000000", "#e6e9ef"],
  [/selenium/i, SiSelenium, "#43b02a"],
  [/^git$/i, SiGit, "#f05032"],
  [/linux/i, SiLinux, "#fcc624"],

  [/flutter/i, SiFlutter, "#02569b", "#54c5f8"],
  // Android-specific tooling keeps the robot; the language itself does not.
  [/android|espresso|gradle/i, SiAndroid, "#3ddc84"],
  [/java\b|junit/i, SiOpenjdk, "#f89820"],
  [/swiftui|swift/i, SiSwift, "#f05138"],
  [/xcode|ios|apple/i, SiApple, "#000000", "#e6e9ef"],

  [/typescript/i, SiTypescript, "#3178c6", "#6ea8f0"],
  [/javascript|es6|swiper/i, SiJavascript, "#f7df1e"],
  [/python/i, SiPython, "#3776ab", "#7cb0e0"],
  [/c\+\+|cpp/i, SiCplusplus, "#00599c", "#5aa0d8"],
  [/c#|csharp/i, SiSharp, "#512bd4", "#9d84f5"],
  [/php/i, SiPhp, "#777bb4", "#a4a7d6"],
  [/bash|shell/i, SiGnubash, "#4eaa25"],
  [/^c$|^c\b/i, SiC, "#a8b9cc"],
];

function resolve(name) {
  for (const [pattern, Icon, color, dark] of RULES) {
    if (pattern.test(name)) return { Icon, color, dark };
  }
  return null;
}

/**
 * Renders the brand mark for `name`. Concepts without a logo — "RAG", "QoS",
 * "Microservices" — render nothing rather than a filler glyph; a chip that is
 * pure text alongside branded ones reads fine.
 */
export default function TechIcon({ name, className = "h-3.5 w-3.5" }) {
  const hit = resolve(name);
  if (!hit) return null;

  const { Icon, color, dark } = hit;

  // Both values ride along as custom properties; `.brand` in index.css picks
  // the right one per theme, so the icon stays a single element.
  return (
    <Icon
      className={`brand shrink-0 ${className}`}
      style={{ "--brand": color, "--brand-dark": dark ?? color }}
      aria-hidden="true"
    />
  );
}
