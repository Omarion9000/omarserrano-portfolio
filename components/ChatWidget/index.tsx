"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";
import SofiaPanel from "@/components/Sofia/Panel";

export default function ChatWidget({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.8 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label={dict.chat.open}
          >
            <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            <span className="relative font-mono text-sm px-4 py-3 bg-text-primary text-background rounded-full shadow-terminal group-hover:bg-accent transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>{dict.chat.open}</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-3rem)] bg-background rounded-2xl border border-editor-border shadow-terminal overflow-hidden"
            role="dialog"
            aria-label={dict.chat.title}
          >
            <SofiaPanel dict={dict} variant="widget" onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
