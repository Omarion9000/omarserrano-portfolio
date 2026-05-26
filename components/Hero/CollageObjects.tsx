"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";
import Signature from "@/components/Signature";
import BadgeCard from "./BadgeCard";
import AnimatedObject from "./AnimatedObject";
import CodeTerminal from "./CodeTerminal";
import FlyingPencil from "./FlyingPencil";
import InteractivePostit from "./InteractivePostit";

export default function CollageObjects({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative w-full h-[680px] hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-[4%] top-[8%] z-20"
      >
        <BadgeCard dict={dict} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-[8%] top-[62%] w-[250px]"
      >
        <AnimatedObject
          src="/objects/vinyl.png"
          alt="Vinyl record"
          width={250}
          height={250}
          anim="spin"
          priority
          floatDelay={2}
          floatDuration={11}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="absolute left-[28%] top-[4%] w-[230px] rotate-[-3deg]"
      >
        <AnimatedObject
          src="/objects/plant.png"
          alt="Plant"
          width={230}
          height={230}
          anim="sway"
          floatDelay={0}
          floatDuration={9}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-[40%] top-[22%] w-[190px] rotate-[4deg]"
      >
        <AnimatedObject
          src="/objects/coffee.png"
          alt="Coffee cup"
          width={190}
          height={190}
          anim="wobble"
          floatDelay={1.5}
          floatDuration={7}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute left-[32%] top-[40%] w-[38%] rotate-[-1deg]"
      >
        <Image
          src="/objects/torn-paper.png"
          alt=""
          width={500}
          height={200}
          className="w-full h-auto opacity-90"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[32%] top-[42%] w-[38%] z-10"
      >
        <Signature className="w-full h-auto" />
        <div className="text-center mt-1 font-mono text-xs tracking-[0.3em] text-text-secondary">
          {dict.hero.tagline.toUpperCase()}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute right-[8%] top-[64%]"
      >
        <AnimatedObject
          src="/objects/ps5-controller.png"
          alt="PS5 controller"
          width={200}
          height={200}
          anim="gaming"
          floatDelay={1}
          floatDuration={8}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        whileHover={{ rotate: 0, scale: 1.03, zIndex: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-[3%] top-[8%]"
      >
        <CodeTerminal />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="absolute right-[20%] top-[42%] w-[150px]"
      >
        <AnimatedObject
          src="/objects/ice-coffee.png"
          alt="Iced coffee"
          width={150}
          height={150}
          anim="shake"
          floatDelay={0.8}
          floatDuration={10}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-[30%] top-[68%]"
      >
        <InteractivePostit message={dict.hero.postit} />
      </motion.div>

      <FlyingPencil />
    </div>
  );
}
