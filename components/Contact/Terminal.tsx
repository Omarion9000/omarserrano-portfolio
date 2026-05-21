"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type Line = { type: "input" | "output" | "system"; text: string };

const EMAIL = "omarion.montoya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/omar-serrano-b40b01216";
const GITHUB = "https://github.com/Omarion9000";

export default function Terminal({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [lines, setLines] = useState<Line[]>(
    dict.contact.welcome.map((text) => ({ type: "system" as const, text }))
  );
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const cmds = dict.contact.commands;

  function execute(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [
      ...lines,
      { type: "input", text: `omar@toronto ~ $ ${raw}` },
    ];

    if (cmd === cmds.clear) {
      setLines([]);
      setInput("");
      return;
    }

    if (cmd === cmds.email) {
      newLines.push({ type: "output", text: `→ mailto:${EMAIL}` });
      window.location.href = `mailto:${EMAIL}`;
    } else if (cmd === cmds.linkedin) {
      newLines.push({ type: "output", text: `→ opening ${LINKEDIN}` });
      window.open(LINKEDIN, "_blank", "noopener,noreferrer");
    } else if (cmd === cmds.github) {
      newLines.push({ type: "output", text: `→ opening ${GITHUB}` });
      window.open(GITHUB, "_blank", "noopener,noreferrer");
    } else if (cmd === cmds.help) {
      dict.contact.helpText.forEach((t) => newLines.push({ type: "output", text: t }));
    } else {
      newLines.push({ type: "output", text: dict.contact.unknown.replace("$cmd", cmd) });
    }

    setLines(newLines);
    setInput("");
  }

  function quickRun(cmd: string) {
    execute(cmd);
    inputRef.current?.focus();
  }

  return (
    <div
      className="bg-background rounded-lg border border-editor-border shadow-terminal overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="bg-editor-surface px-4 py-3 flex items-center gap-2 border-b border-editor-border">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-auto font-mono text-xs text-text-muted">
          omar@toronto — {locale}.contact
        </div>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="px-5 py-4 h-80 overflow-y-auto font-mono text-sm space-y-1"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-text-primary"
                : line.type === "system"
                ? "text-syntax-string"
                : "text-text-secondary"
            }
          >
            {line.text}
          </div>
        ))}

        <div className="flex items-center text-text-primary">
          <span className="text-syntax-string">omar@toronto ~ $</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") execute(input);
            }}
            className="flex-1 ml-2 bg-transparent border-none outline-none font-mono text-sm text-text-primary placeholder:text-text-muted"
            placeholder={dict.contact.prompt}
            autoFocus
            spellCheck={false}
          />
          <span className="terminal-caret animate-cursor-blink" />
        </div>
      </div>

      {/* Quick command buttons */}
      <div className="px-5 py-3 bg-editor-surface border-t border-editor-border flex flex-wrap gap-2">
        {[cmds.email, cmds.linkedin, cmds.github, cmds.help].map((c) => (
          <button
            key={c}
            onClick={() => quickRun(c)}
            className="font-mono text-xs px-3 py-1 rounded border border-editor-border bg-background hover:bg-accent hover:text-background hover:border-accent transition-colors"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
