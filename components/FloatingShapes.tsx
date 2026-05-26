"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Shape = {
  type: "circle" | "square" | "triangle";
  size: number;
  top: string;
  left: string;
  color: string;
  filled: boolean;
  duration: number;
  delay: number;
  drift: number;
};

const SHAPES: Shape[] = [
  { type: "circle",   size: 120, top: "10%", left: "5%",  color: "#C96A4A", filled: false, duration: 20, delay: 0,   drift: 30 },
  { type: "square",   size: 80,  top: "60%", left: "12%", color: "#E6B86A", filled: true,  duration: 24, delay: 2,   drift: 25 },
  { type: "circle",   size: 60,  top: "30%", left: "85%", color: "#3D8B5C", filled: true,  duration: 18, delay: 1,   drift: 35 },
  { type: "triangle", size: 90,  top: "75%", left: "78%", color: "#C96A4A", filled: false, duration: 22, delay: 3,   drift: 28 },
  { type: "square",   size: 50,  top: "45%", left: "50%", color: "#0E7490", filled: false, duration: 26, delay: 1.5, drift: 20 },
];

export default function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y = reduced ? 0 : parallaxY;

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      {SHAPES.map((s, i) => {
        let shapeEl;
        if (s.type === "circle") {
          shapeEl = (
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: "50%",
                opacity: 0.1,
                ...(s.filled
                  ? { background: s.color }
                  : { border: `2px solid ${s.color}` }),
              }}
            />
          );
        } else if (s.type === "square") {
          shapeEl = (
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: "18%",
                opacity: 0.1,
                ...(s.filled
                  ? { background: s.color }
                  : { border: `2px solid ${s.color}` }),
              }}
            />
          );
        } else {
          shapeEl = (
            <div
              style={{
                width: 0,
                height: 0,
                opacity: 0.1,
                borderLeft: `${s.size / 2}px solid transparent`,
                borderRight: `${s.size / 2}px solid transparent`,
                borderBottom: `${s.size}px solid ${s.color}`,
                background: "transparent",
              }}
            />
          );
        }

        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -s.drift, 0, s.drift * 0.6, 0],
              x: [0, s.drift * 0.5, 0, -s.drift * 0.4, 0],
              rotate: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
            style={{ position: "absolute", top: s.top, left: s.left }}
          >
            {shapeEl}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
