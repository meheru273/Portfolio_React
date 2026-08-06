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

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:ring-1 focus:ring-line"
      >
        Skip to content
      </a>

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
