"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 250, damping: 28 });
  const ringY = useSpring(cursorY, { stiffness: 250, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function over(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], input, .cursor-pointer")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent"
        style={{
          x: cursorX,
          y: cursorY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-accent/40"
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.8 : 0.5 }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
