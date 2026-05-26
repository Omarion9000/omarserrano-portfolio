"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

export default function BadgeCard({ dict }: { dict: Dictionary }) {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ perspective: 1000 }}
      className="w-56"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative cursor-pointer"
      >
        <div className="w-2 h-14 bg-text-primary mx-auto rounded-b-sm" />

        <div className="relative w-56 bg-text-primary rounded-2xl shadow-paper p-5 overflow-hidden">
          <div className="text-[10px] font-mono text-background/60 uppercase tracking-wider">
            OMAR · DEV
          </div>
          <div className="mt-1 text-2xl font-mono text-background">OS</div>
          <div className="mt-1 text-xs text-background/80 leading-tight mb-4">
            {dict.hero.whoami}
          </div>

          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-background/10">
            <Image
              src="/photos/omar-photo.png"
              alt="Omar Serrano"
              fill
              className={`object-cover transition-opacity duration-500 ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
              sizes="224px"
            />
            <Image
              src="/photos/omar-ghibli.png"
              alt="Omar Serrano illustration"
              fill
              className={`object-cover transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              sizes="224px"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
