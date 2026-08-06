import { useCallback, useEffect, useState } from "react";

const readInitial = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

/** Class-based theme, kept in sync with localStorage and the inline boot script. */
export default function useTheme() {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* private mode — the class is still applied */
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0e1014" : "#ffffff");
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return [theme, toggle];
}
