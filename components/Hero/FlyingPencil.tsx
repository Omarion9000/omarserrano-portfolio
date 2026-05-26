"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FlyingPencil() {
  return (
    <motion.div
      className="absolute left-[34%] top-[44%] z-40 pointer-events-none"
      initial={{ x: 0, y: 0, rotate: 45, opacity: 0 }}
      animate={{
        x: [0, 280, 360, 200],
        y: [0, 0, -180, -360],
        rotate: [45, 45, 30, 12],
        opacity: [0, 1, 1, 1],
      }}
      transition={{
        duration: 3.5,
        times: [0, 0.55, 0.8, 1],
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <Image
        src="/objects/pencil.png"
        alt="Pencil"
        width={150}
        height={150}
        style={{ width: "auto", height: "auto" }}
        className="drop-shadow-lg"
      />
    </motion.div>
  );
}
