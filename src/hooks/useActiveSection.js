import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under the header.
 * Scroll position beats IntersectionObserver here: sections vary a lot in
 * height, so "last heading passed" matches what a reader actually sees.
 */
export default function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",");
    let frame = 0;

    const measure = () => {
      frame = 0;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(list[list.length - 1]);
        return;
      }

      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, offset]);

  return active;
}
