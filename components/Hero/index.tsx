"use client";

import type { Dictionary } from "@/lib/i18n";
import CollageObjects from "./CollageObjects";
import PhysicsLayer from "./PhysicsLayer";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <section className="relative pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header info línea */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-text-muted">
            <span className="text-syntax-comment">{"// "}</span>
            {dict.hero.location} · {dict.hero.languages}
          </span>
        </div>

        {/* Desktop: collage */}
        <div className="relative">
          <PhysicsLayer />
          <CollageObjects dict={dict} />
        </div>

        {/* Mobile: layout estático apilado */}
        <div className="md:hidden space-y-6 mt-4">
          <div>
            <h1 className="font-mono text-4xl font-medium tracking-tight">{dict.hero.name}</h1>
            <p className="mt-2 text-sm text-text-secondary">{dict.hero.role}</p>
            <p className="mt-1 font-mono text-xs text-text-muted">
              {dict.hero.location} · {dict.hero.languages}
            </p>
          </div>
          <p className="text-text-primary leading-relaxed">{dict.hero.tagline}</p>
        </div>

        {/* Text block tipo code annotations */}
        <div className="mt-16 md:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">{dict.hero.intro}</p>
          <p className="mt-8 font-mono text-base md:text-lg text-text-primary leading-loose">
            {dict.hero.middleText}{" "}
            <span className="inline-block px-2 py-0.5 bg-editor-surface border border-editor-border rounded">
              {dict.hero.middleHighlight}
            </span>{" "}
            {dict.hero.middleSuffix}
          </p>
          <p className="mt-6 font-mono text-base md:text-lg text-text-primary leading-loose">
            <span className="text-accent">✦</span>{" "}
            <span className="inline-block px-2 py-0.5 bg-editor-surface border border-editor-border rounded">
              {dict.hero.sparkText}
            </span>{" "}
            {dict.hero.sparkSuffix}
          </p>
        </div>
      </div>
    </section>
  );
}
