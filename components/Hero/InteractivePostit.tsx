"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractivePostit({ message }: { message: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 600 }}
    >
      <motion.div
        animate={{ rotateX: hovered ? -25 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
        className="relative"
      >
        <Image
          src="/objects/postit.png"
          alt="Post-it"
          width={170}
          height={170}
          style={{ width: "auto", height: "auto" }}
          className="drop-shadow-lg"
        />
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, delay: hovered ? 0.1 : 0 }}
          className="absolute inset-0 flex items-center justify-center p-4 text-center pointer-events-none"
        >
          <span
            className="text-xl leading-tight text-text-primary -rotate-3"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            {message}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
