"use client";

import { useState, useEffect, useRef } from "react";

const FULL_CODE = `const omar = {
  role: "AI & Automation Dev",
  location: "Toronto, GTA",
  stack: ["Next.js", "TypeScript"],
  languages: ["EN", "ES", "FR"],
  status: "shipping",
};

omar.build().deploy();`;

function colorize(line: string) {
  const parts: { text: string; cls: string }[] = [];
  const tokenRegex =
    /(const|let|var)|("[^"]*")|(\b[a-zA-Z_]+)(?=:)|(\.[a-zA-Z]+)(?=\()|([{}();,[\]])/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = tokenRegex.exec(line)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ text: line.slice(lastIndex, m.index), cls: "text-text-secondary" });
    }
    if (m[1]) parts.push({ text: m[1], cls: "text-syntax-keyword" });
    else if (m[2]) parts.push({ text: m[2], cls: "text-syntax-string" });
    else if (m[3]) parts.push({ text: m[3], cls: "text-syntax-property" });
    else if (m[4]) parts.push({ text: m[4], cls: "text-accent" });
    else if (m[5]) parts.push({ text: m[5], cls: "text-text-muted" });
    lastIndex = tokenRegex.lastIndex;
  }
  if (lastIndex < line.length) {
    parts.push({ text: line.slice(lastIndex), cls: "text-text-secondary" });
  }
  return parts;
}

export default function CodeTerminal({ className = "" }: { className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const phaseRef = useRef<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const phase = phaseRef.current;
      if (phase === "typing") {
        if (indexRef.current < FULL_CODE.length) {
          indexRef.current += 1;
          setDisplayed(FULL_CODE.slice(0, indexRef.current));
          timeout = setTimeout(tick, 45 + Math.random() * 40);
        } else {
          phaseRef.current = "pausing";
          timeout = setTimeout(tick, 2200);
        }
      } else if (phase === "pausing") {
        phaseRef.current = "deleting";
        timeout = setTimeout(tick, 400);
      } else if (phase === "deleting") {
        if (indexRef.current > 0) {
          indexRef.current -= 3;
          if (indexRef.current < 0) indexRef.current = 0;
          setDisplayed(FULL_CODE.slice(0, indexRef.current));
          timeout = setTimeout(tick, 20);
        } else {
          phaseRef.current = "typing";
          timeout = setTimeout(tick, 600);
        }
      }
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  const lines = displayed.split("\n");

  return (
    <div className={`w-72 bg-text-primary rounded-xl shadow-terminal overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2A2826] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-auto font-mono text-[10px] text-white/40">omar.ts</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-relaxed min-h-[180px]">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {colorize(line).map((part, j) => (
              <span key={j} className={part.cls}>
                {part.text}
              </span>
            ))}
            {i === lines.length - 1 && (
              <span className="inline-block w-1.5 h-3.5 bg-accent ml-0.5 animate-pulse align-middle" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
