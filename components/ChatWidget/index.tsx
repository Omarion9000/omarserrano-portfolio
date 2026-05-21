"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

const API_URL = "https://omar-portfolio-api.vercel.app/api/chat";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpen() {
    setOpen(true);
    setMessages((prev) =>
      prev.length === 0 ? [{ role: "assistant", content: dict.chat.welcome }] : prev,
    );
    setTimeout(() => inputRef.current?.focus(), 200);
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const send = useCallback(
    async (textOverride?: string) => {
      const text = (textOverride ?? input).trim();
      if (!text || loading) return;

      const newMessages: Msg[] = [...messages, { role: "user", content: text }];
      setMessages(newMessages);
      setInput("");
      setError(null);
      setLoading(true);

      try {
        const apiMessages = newMessages
          .filter((m, idx) => !(idx === 0 && m.role === "assistant" && m.content === dict.chat.welcome))
          .map((m) => ({ role: m.role, content: m.content }));

        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: apiMessages }),
        });

        if (res.status === 429) {
          const data = await res.json().catch(() => ({}));
          const min = Math.ceil((data?.retryAfter ?? 3600) / 60);
          setError(dict.chat.rateLimit.replace("$min", String(min)));
          setLoading(false);
          return;
        }
        if (!res.ok) throw new Error("API error");

        const data = await res.json();
        setMessages([
          ...newMessages,
          { role: "assistant", content: data?.reply ?? dict.chat.fallbackReply },
        ]);
      } catch {
        setError(dict.chat.error);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages, dict.chat.welcome, dict.chat.rateLimit, dict.chat.error, dict.chat.fallbackReply],
  );

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
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-50 font-mono text-sm px-4 py-3 bg-text-primary text-background rounded-full shadow-terminal hover:bg-accent transition-colors flex items-center gap-2"
            aria-label={dict.chat.open}
          >
            <span className="text-syntax-string">$</span>
            <span>{dict.chat.open}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col bg-background rounded-lg border border-editor-border shadow-terminal overflow-hidden"
            role="dialog"
            aria-label={dict.chat.title}
          >
            <div className="bg-editor-surface px-4 py-3 flex items-center gap-2 border-b border-editor-border">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="close"
                className="w-3 h-3 rounded-full bg-red-400 hover:opacity-80 transition"
              />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto font-mono text-xs text-text-muted">{dict.chat.title}</div>
            </div>

            <div className="px-4 py-2 bg-accent-warm/15 border-b border-editor-border">
              <p className="font-mono text-[10px] text-text-secondary flex items-center gap-1.5">
                <span className="text-accent">✦</span> {dict.chat.banner}
              </p>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 font-mono text-sm space-y-3 bg-background">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={m.role === "user" ? "text-text-primary" : "text-text-secondary"}
                >
                  <span className={m.role === "user" ? "text-syntax-string" : "text-accent"}>
                    {m.role === "user" ? "you" : "sofia"} →
                  </span>{" "}
                  {m.content}
                </motion.div>
              ))}

              {loading && (
                <div className="text-text-muted">
                  <span className="text-accent">sofia</span> → <span className="animate-pulse">…</span>
                </div>
              )}

              {error && (
                <div className="text-red-600 text-xs bg-red-50 border border-red-200 px-3 py-2 rounded">{error}</div>
              )}

              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2">
                  <p className="text-text-muted text-xs">try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {dict.chat.suggestions.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => send(s)}
                        className="text-xs px-3 py-1.5 rounded border border-editor-border bg-editor-surface hover:bg-accent hover:text-background hover:border-accent transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 py-3 border-t border-editor-border bg-editor-surface">
              <div className="flex items-center gap-2">
                <span className="font-mono text-syntax-string text-sm">$</span>
                <label htmlFor="sofia-input" className="sr-only">{dict.chat.placeholder}</label>
                <input
                  id="sofia-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                  placeholder={dict.chat.placeholder}
                  disabled={loading}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-text-primary placeholder:text-text-muted disabled:opacity-50"
                  spellCheck={false}
                />
              </div>
              <p className="mt-2 font-mono text-[9px] text-text-muted text-center">
                {dict.chat.poweredBy}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
