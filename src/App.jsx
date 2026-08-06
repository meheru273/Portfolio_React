import React from "react";
import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import News from "./components/News.jsx";
import Research from "./components/Research.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/**
 * A soft wash of colour behind the top of the page — enough to stop the
 * header reading as a flat white slab, faint enough to stay out of the way.
 * `body` already paints `--c-page`, so this sits at -z-10 above it.
 */
function PageGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[640px] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-56 left-1/2 h-[460px] w-[1100px] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--c-accent), transparent)",
        }}
      />
      <div
        className="absolute -top-32 right-[8%] h-[340px] w-[520px] rounded-full opacity-[0.10] blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--cat-ai), transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(var(--c-line) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 70%)",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:ring-1 focus:ring-line"
      >
        Skip to content
      </a>

      <PageGlow />
      <NavBar />

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 py-12 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-16 xl:grid-cols-[17rem_1fr]">
          <Sidebar />

          <div className="min-w-0 space-y-20 lg:space-y-24">
            <About />
            <News />
            <Research />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
