import React from "react";
import { PROFILE } from "../constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-faint sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>Built with React, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
