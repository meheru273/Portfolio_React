// src/components/NavBar.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="mb-8 flex items-center justify-between py-12 px-8">
      {/* Logo or Title */}
      <div className="flex items-center">
        <span className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">
          MEHERU
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-3xl sm:text-4xl">
        <a 
          href="https://www.linkedin.com/in/meheru-jannat" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/meheru273" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a 
          href="https://twitter.com/your-handle" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com/_meheru__" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}