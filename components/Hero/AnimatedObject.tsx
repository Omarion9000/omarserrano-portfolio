"use client";

import Image from "next/image";
import { motion, type TargetAndTransition } from "framer-motion";

type AnimType = "shake" | "horizontal" | "spin" | "wobble" | "sway" | "flip" | "gaming";

const HOVER_ANIMATIONS: Record<AnimType, TargetAndTransition> = {
  shake: {
    scale: 1.15,
    zIndex: 30,
    x: [0, -3, 3, -3, 3, 0],
    transition: { duration: 0.4, repeat: Infinity },
  },
  horizontal: {
    scale: 1.15,
    zIndex: 30,
    x: [0, -8, 8, -8, 8, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
  spin: {
    scale: 1.15,
    zIndex: 30,
    rotate: 360,
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
  wobble: {
    scale: 1.15,
    zIndex: 30,
    rotate: [0, -6, 6, -6, 6, 0],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
  sway: {
    scale: 1.15,
    zIndex: 30,
    rotate: [0, 4, -4, 4, -4, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  flip: {
    scale: 1.15,
    zIndex: 30,
    rotateY: [0, 20, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
  gaming: {
    scale: 1.15,
    zIndex: 30,
    x: [0, -6, 6, -6, 6, 0],
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function AnimatedObject({
  src,
  alt,
  width,
  height,
  anim,
  className = "",
  priority = false,
  floatDelay = 0,
  floatDuration = 8,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  anim: AnimType;
  className?: string;
  priority?: boolean;
  floatDelay?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0, 4, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className={className}
    >
      <motion.div
        whileHover={HOVER_ANIMATIONS[anim]}
        className="cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          style={{ width: "auto", height: "auto" }}
          className="drop-shadow-lg pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
