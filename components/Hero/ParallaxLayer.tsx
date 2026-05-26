"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function ParallaxLayer({
  children,
  depth = 1,
  className = "",
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };
  const x = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8 * depth, 8 * depth]),
    springConfig,
  );
  const y = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-8 * depth, 8 * depth]),
    springConfig,
  );

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMouseMove(e: MouseEvent) {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      mouseX.set(px);
      mouseY.set(py);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
