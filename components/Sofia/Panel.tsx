"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

const API_URL = "https://omar-portfolio-api.vercel.app/api/chat";

type Msg = { role: "user" | "assistant"; content: string };

export type SofiaPanelVariant = "widget" | "modal";

export default function SofiaPanel({
  dict,
  variant = "widget",
  onClose,
  autoFocus = true,
}: {
  dict: Dictionary;
  variant?: SofiaPanelVariant;
  onClose?: () => void;
  autoFocus?: boolean;
}) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: dict.chat.welcome },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [autoFocus]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

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
          .filter(
            (m, idx) => !(idx === 0 && m.role === "assistant" && m.content === dict.chat.welcome),
          )
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
    [
      input,
      loading,
      messages,
      dict.chat.welcome,
      dict.chat.rateLimit,
      dict.chat.error,
      dict.chat.fallbackReply,
    ],
  );

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {variant === "widget" ? (
        <div className="bg-editor-surface px-4 py-2.5 flex items-center gap-2 border-b border-editor-border">
          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="w-3 h-3 rounded-full bg-red-400 hover:opacity-70 transition"
          />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="ml-auto font-mono text-[11px] text-text-muted">{dict.chat.title}</div>
        </div>
      ) : (
        <div className="bg-editor-surface px-5 py-3 flex items-center gap-3 border-b border-editor-border">
          <div className="font-mono text-sm text-text-primary">
            Sofia <span className="text-text-muted">· Live demo</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:bg-background hover:text-text-primary transition"
          >
            ×
          </button>
        </div>
      )}

      <div className="px-4 py-3 flex items-center gap-3 border-b border-editor-border bg-background">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center font-mono font-semibold text-background text-sm">
            S
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
          </span>
        </div>
        <div>
          <div className="font-medium text-sm text-text-primary leading-tight">Sofia</div>
          <div className="text-[11px] text-text-muted leading-tight">{dict.chat.subtitle}</div>
        </div>
      </div>

      <div className="px-4 py-2 bg-accent-warm/15 border-b border-editor-border">
        <p className="font-mono text-[10px] text-text-secondary flex items-center gap-1.5">
          <span className="text-accent">✦</span> {dict.chat.banner}
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-editor-surface/30"
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-accent text-background rounded-br-sm"
                  : "bg-background text-text-primary rounded-bl-sm border border-editor-border shadow-sm"
              }`}
            >
              {m.content}
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-background px-4 py-3 rounded-2xl rounded-bl-sm border border-editor-border shadow-sm">
              <div className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg text-center">
              {error}
            </div>
          </motion.div>
        )}

        {messages.length === 1 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 space-y-2"
          >
            <p className="text-[11px] text-text-muted text-center">{dict.chat.tryAsking}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {dict.chat.suggestions.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-background border border-editor-border text-text-secondary hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-3 py-3 border-t border-editor-border bg-background">
        <div className="flex items-center gap-2 bg-editor-surface rounded-xl px-3 py-2">
          <span className="font-mono text-accent text-sm">$</span>
          <label htmlFor={`sofia-input-${variant}`} className="sr-only">
            {dict.chat.placeholder}
          </label>
          <input
            id={`sofia-input-${variant}`}
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder={dict.chat.placeholder}
            disabled={loading}
            className="flex-1 bg-transparent border-none outline-none text-sm text-text-primary placeholder:text-text-muted disabled:opacity-50"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="w-8 h-8 rounded-lg bg-accent text-background flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-text-primary transition-colors"
            aria-label="send"
          >
            →
          </button>
        </div>
        <p className="mt-2 font-mono text-[9px] text-text-muted text-center">
          {dict.chat.poweredBy}
        </p>
      </div>
    </div>
  );
}
