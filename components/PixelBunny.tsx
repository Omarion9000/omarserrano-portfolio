"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "enter-run" | "rest" | "exit-run" | "offscreen";

const PHASES: { phase: Phase; durationMs: number }[] = [
  { phase: "enter-run", durationMs: 5000 },
  { phase: "rest", durationMs: 2500 },
  { phase: "exit-run", durationMs: 4000 },
  { phase: "offscreen", durationMs: 6500 },
];

export default function PixelBunny() {
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(
      () => setIdx((i) => (i + 1) % PHASES.length),
      PHASES[idx].durationMs,
    );
    return () => clearTimeout(t);
  }, [idx, reduced]);

  if (reduced) return null;

  const { phase, durationMs } = PHASES[idx];

  const target =
    phase === "enter-run" || phase === "rest"
      ? "40vw"
      : phase === "exit-run"
      ? "calc(100vw + 80px)"
      : "-80px";

  const transition =
    phase === "enter-run" || phase === "exit-run"
      ? { duration: durationMs / 1000, ease: "linear" as const }
      : { duration: 0 };

  const spriteClass = phase === "rest" ? "idle" : "run";

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-16 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        initial={{ x: "-80px" }}
        animate={{ x: target }}
        transition={transition}
        className="absolute bottom-0"
      >
        <div className={`bunny-sprite ${spriteClass}`} />
      </motion.div>
    </div>
  );
}
