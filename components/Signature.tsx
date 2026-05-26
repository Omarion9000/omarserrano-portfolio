"use client";

import { motion } from "framer-motion";

export default function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Omar Serrano signature"
    >
      <defs>
        <clipPath id="reveal-clip">
          <motion.rect
            x="0"
            y="0"
            height="120"
            initial={{ width: 0 }}
            animate={{ width: 400 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
          />
        </clipPath>
      </defs>

      <g clipPath="url(#reveal-clip)">
        <text
          x="200"
          y="70"
          textAnchor="middle"
          fontFamily="var(--font-caveat), cursive"
          fontSize="64"
          fontWeight="600"
          fill="#1A1814"
        >
          Omar Serrano
        </text>
        <path
          d="M 40 90 C 120 84, 280 86, 360 82"
          fill="none"
          stroke="#1A1814"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      <motion.circle
        cy="60"
        r="3"
        fill="#C96A4A"
        initial={{ cx: 0, opacity: 0 }}
        animate={{ cx: 380, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
}
