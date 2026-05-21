"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

type Msg = { from: "sophia" | "user"; text: string };

export default function ChatWidget({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "sophia", text: dict.chat.welcome },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "sophia", text: dict.chat.stub }]);
    }, 600);
  }

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 font-mono text-sm px-4 py-3 bg-text-primary text-background rounded-full shadow-terminal hover:bg-accent transition-colors flex items-center gap-2"
      >
        <span className="text-syntax-string">$</span>
        <span>{dict.chat.open}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-background rounded-lg border border-editor-border shadow-terminal overflow-hidden"
          >
            {/* Title bar */}
            <div className="bg-editor-surface px-4 py-3 flex items-center gap-2 border-b border-editor-border">
              <div className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" onClick={() => setOpen(false)} />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto font-mono text-xs text-text-muted">{dict.chat.title}</div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="px-4 py-4 h-80 overflow-y-auto font-mono text-sm space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={m.from === "user" ? "text-text-primary" : "text-text-secondary"}>
                  <span className={m.from === "user" ? "text-syntax-string" : "text-accent"}>
                    {m.from === "user" ? "you" : "sophia"} →
                  </span>{" "}
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-editor-border bg-editor-surface flex items-center gap-2">
              <span className="font-mono text-syntax-string text-sm">$</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder={dict.chat.placeholder}
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-text-primary placeholder:text-text-muted"
                spellCheck={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
