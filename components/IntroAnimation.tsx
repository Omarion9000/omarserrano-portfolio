"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#2A2826" }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-5xl md:text-7xl font-medium text-[#FAF7F2] tracking-tight"
            >
              Omar
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-mono text-5xl md:text-7xl font-medium text-accent tracking-tight"
            >
              Serrano
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="mt-6 font-mono text-xs text-[#A39B8E] tracking-[0.3em] uppercase"
            >
              I think, then I ship
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
