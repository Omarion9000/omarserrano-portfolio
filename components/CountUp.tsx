"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

// Animates the numeric part of a label like "−8.4 pp", "56%", "5,382" or "0.84".
export default function CountUp({ value, duration = 1100 }: { value: string; duration?: number }) {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!match || !inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const [, pre, num, post] = match;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const comma = num.includes(",");
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = target * eased;
      const txt = comma
        ? n.toLocaleString("en-US", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })
        : n.toFixed(decimals);
      setShown(`${pre}${txt}${post}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className="tnum">
      {shown}
    </span>
  );
}
