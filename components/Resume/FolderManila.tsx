"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

export default function FolderManila({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.resume.heading}
        </h2>
        <p className="mt-2 text-text-secondary">{dict.resume.subheading}</p>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            whileHover={{ rotate: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative w-72 origin-bottom-left"
          >
            <div className="absolute -top-3 left-8 px-4 py-1 bg-[#E0C9A0] border border-[#B89968] rounded-t-md font-mono text-xs text-text-primary shadow-sm z-10">
              {dict.resume.folderLabel}
            </div>

            <div className="relative bg-[#E5C896] rounded-lg shadow-paper p-5 pt-8 border-2 border-[#B89968]/40">
              <div className="bg-background rounded-sm shadow-sm p-4 min-h-[200px]">
                <div className="font-mono text-[10px] text-text-muted mb-2">
                  ─────────────────────
                </div>
                <div className="font-bold text-sm text-text-primary">Omar Serrano</div>
                <div className="text-[10px] text-text-secondary mb-3">
                  AI &amp; Automation Developer
                </div>
                <div className="space-y-1.5">
                  <div className="h-1 bg-text-muted/20 rounded w-full" />
                  <div className="h-1 bg-text-muted/20 rounded w-5/6" />
                  <div className="h-1 bg-text-muted/20 rounded w-4/6" />
                </div>
                <div className="mt-3 font-mono text-[9px] text-text-muted">
                  Toronto · EN/ES/FR
                </div>
                <div className="mt-2 text-[9px] text-syntax-string font-mono">
                  ★ {dict.resume.badge}
                </div>
              </div>
            </div>

            <a
              href="/cv/omar-serrano-resume.pdf"
              download="omar-serrano-resume.pdf"
              className="absolute -bottom-4 -right-4 inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-full font-mono text-xs font-medium shadow-paper hover:bg-text-primary transition-colors rotate-[-4deg] hover:rotate-0"
            >
              ↓ {dict.resume.download}
            </a>
          </motion.div>

          <div className="flex-1 max-w-md">
            <p className="text-text-secondary leading-relaxed">
              {dict.resume.summary}
            </p>
            <Link
              href={`/${locale}/resume`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:text-accent transition-colors"
            >
              → {dict.resume.viewOnline}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
