import { useEffect, useRef, useState } from "react";

/**
 * A sticky element taller than the viewport pins at the top and its lower half
 * can never be scrolled into view. Measure first: stick only while the element
 * fits, otherwise leave it in normal flow so the whole thing stays reachable.
 *
 * Browser zoom changes innerHeight (CSS px) but not the element's own height,
 * so zooming in drops it back to static — which is exactly what we want.
 */
export default function useStickyFit(gap = 128) {
  const ref = useRef(null);
  const [canStick, setCanStick] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Height is unaffected by the sticky class itself, so no feedback loop.
    const measure = () =>
      setCanStick(el.offsetHeight + gap <= window.innerHeight);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [gap]);

  return [ref, canStick];
}
