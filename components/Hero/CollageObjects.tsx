"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";
import Signature from "@/components/Signature";

export default function CollageObjects({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative w-full h-[640px] hidden md:block">
      {/* Lanyard / Badge (izquierda) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-[2%] top-[8%] w-48 origin-top"
      >
        <div className="w-2 h-16 bg-text-primary mx-auto rounded-b-sm" />
        <div className="w-48 h-64 bg-text-primary text-background rounded-lg shadow-paper p-4 flex flex-col">
          <div className="text-xs font-mono opacity-60">OMAR · DEV</div>
          <div className="mt-2 text-2xl font-mono">OS</div>
          <div className="mt-1 text-xs leading-tight opacity-80">
            {dict.hero.whoami}
          </div>
          <div className="mt-auto w-20 h-20 rounded-full bg-accent/30 border-2 border-background/40 mx-auto" />
        </div>
      </motion.div>

      {/* Playlist card (abajo-izquierda) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-[3%] top-[58%] w-48 bg-background rounded-lg shadow-paper p-4 border border-editor-border"
      >
        <div className="w-32 h-32 mx-auto rounded-full bg-text-primary flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-accent" />
        </div>
        <div className="mt-3 text-center">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">PLAYLIST</div>
          <div className="font-medium text-sm mt-1">{dict.hero.playlistTitle}</div>
          <div className="text-xs text-text-muted mt-1 leading-tight">{dict.hero.playlistMeta}</div>
        </div>
      </motion.div>

      {/* Plant + coffee + torn paper (centro-arriba) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute left-[28%] top-[4%] w-[44%]"
      >
        <div
          className="relative h-48 bg-background rounded-sm shadow-paper rotate-[-1deg] border-t border-l border-r border-editor-border"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 80% 88%, 60% 100%, 40% 92%, 20% 100%, 0 85%)" }}
        >
          <div className="absolute inset-0 flex items-end justify-center gap-6 pb-8 px-8">
            <div className="w-16 h-24 rounded-t-full bg-green-700/70" />
            <div className="w-14 h-20 rounded-md bg-accent/40 border border-accent/30" />
            <div className="w-2 h-24 bg-amber-400 rounded-full rotate-12" />
          </div>
        </div>
      </motion.div>

      {/* Signature centro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-[34%] top-[42%] w-[32%]"
      >
        <Signature className="w-full h-auto" />
        <div className="text-center mt-2 font-mono text-xs tracking-[0.3em] text-text-secondary">
          {dict.hero.tagline.toUpperCase()}
        </div>
      </motion.div>

      {/* Ticket (derecha-arriba) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="absolute right-[18%] top-[10%] w-72 bg-background rounded shadow-paper border border-editor-border flex"
      >
        <div className="bg-text-primary text-background p-3 rounded-l flex flex-col justify-between min-w-[110px]">
          <div className="font-mono text-[10px] opacity-60">TICKET</div>
          <div className="font-mono text-xs leading-tight">{dict.hero.ticketTitle}</div>
          <div className="font-mono text-[9px] opacity-70">{dict.hero.ticketEst}</div>
        </div>
        <div className="flex-1 p-3 border-l-2 border-dashed border-editor-border">
          <div className="font-mono text-[10px] text-text-muted">CODE × CRAFT</div>
          <div className="text-xs mt-1 leading-tight space-y-0.5">
            <div>Time · Anytime</div>
            <div>Price · Let&apos;s talk</div>
            <div className="text-text-muted mt-1">{dict.hero.ticketLocation}</div>
          </div>
        </div>
      </motion.div>

      {/* Polaroid (derecha) */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-[2%] top-[38%] w-56 bg-background p-3 pb-12 shadow-polaroid border border-editor-border/40"
      >
        <div className="w-full h-48 bg-gradient-to-br from-accent-warm/40 via-accent/30 to-accent/40 rounded-sm" />
        <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs text-text-secondary">
          Toronto · 2024
        </div>
      </motion.div>

      {/* Mini terminal (abajo-derecha) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute right-[18%] top-[62%] w-72 bg-background rounded-lg shadow-terminal border border-editor-border overflow-hidden rotate-[-2deg]"
      >
        <div className="bg-editor-surface px-3 py-2 flex items-center gap-1.5 border-b border-editor-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="ml-auto font-mono text-[10px] text-text-muted">omar — zsh</div>
        </div>
        <div className="p-3 font-mono text-xs space-y-1">
          <div>
            <span className="text-text-muted">~</span>{" "}
            <span className="text-syntax-string">$ whoami</span>
          </div>
          <div className="text-text-secondary text-[11px] leading-snug">{dict.hero.whoami}</div>
          <div className="mt-2">
            <span className="text-text-muted">~</span>{" "}
            <span className="text-syntax-string">$ ls interests/</span>
          </div>
          <div className="text-text-secondary text-[11px]">{dict.hero.interests}</div>
        </div>
      </motion.div>

      {/* Sticker pequeño */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-[24%] top-[68%] w-20 h-20 rounded-full bg-accent text-background flex items-center justify-center font-mono text-[10px] text-center leading-tight shadow-paper"
      >
        BUILD
        <br />
        SHIP
        <br />
        REPEAT
      </motion.div>
    </div>
  );
}
