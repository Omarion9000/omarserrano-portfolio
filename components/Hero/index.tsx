"use client";

import type { Dictionary } from "@/lib/i18n";
import CollageObjects from "./CollageObjects";
import PhysicsLayer from "./PhysicsLayer";
import BadgeCard from "./BadgeCard";
import AnimatedObject from "./AnimatedObject";

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
        <div className="md:hidden mt-4 space-y-10">
          {/* Foto / BadgeCard */}
          <div className="flex justify-center">
            <BadgeCard dict={dict} />
          </div>

          {/* Nombre + role + ubicación + tagline */}
          <div className="text-center">
            <h1 className="font-mono text-4xl font-medium tracking-tight">{dict.hero.name}</h1>
            <p className="mt-2 text-sm text-text-secondary">{dict.hero.role}</p>
            <p className="mt-1 font-mono text-xs text-text-muted">
              {dict.hero.location} · {dict.hero.languages}
            </p>
            <p className="mt-5 text-text-primary leading-relaxed">{dict.hero.tagline}</p>
          </div>

          {/* Value prop */}
          <p className="text-text-secondary leading-relaxed text-center">{dict.hero.intro}</p>

          {/* Mini-collage de 3 objetos */}
          <div className="flex justify-center items-end gap-5">
            <div className="rotate-[-4deg]">
              <AnimatedObject
                src="/objects/coffee.png"
                alt="Coffee cup"
                width={78}
                height={78}
                anim="wobble"
                floatDelay={0}
                floatDuration={9}
              />
            </div>
            <div className="rotate-[3deg]">
              <AnimatedObject
                src="/objects/plant.png"
                alt="Plant"
                width={86}
                height={86}
                anim="sway"
                floatDelay={1.2}
                floatDuration={10}
              />
            </div>
            <div className="rotate-[-3deg]">
              <AnimatedObject
                src="/objects/postit.png"
                alt="Post-it"
                width={72}
                height={72}
                anim="wobble"
                floatDelay={0.6}
                floatDuration={8}
              />
            </div>
          </div>

          {/* Párrafos code-annotations (mobile) */}
          <div className="text-center space-y-6">
            <p className="font-mono text-base text-text-primary leading-loose">
              {dict.hero.middleText}{" "}
              <span className="inline-block px-2 py-0.5 bg-editor-surface border border-editor-border rounded">
                {dict.hero.middleHighlight}
              </span>{" "}
              {dict.hero.middleSuffix}
            </p>
            <p className="font-mono text-base text-text-primary leading-loose">
              <span className="text-accent">✦</span>{" "}
              <span className="inline-block px-2 py-0.5 bg-editor-surface border border-editor-border rounded">
                {dict.hero.sparkText}
              </span>{" "}
              {dict.hero.sparkSuffix}
            </p>
          </div>
        </div>

        {/* Desktop: text block tipo code annotations */}
        <div className="hidden md:block mt-12 max-w-3xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">{dict.hero.intro}</p>
          <p className="mt-8 font-mono text-lg text-text-primary leading-loose">
            {dict.hero.middleText}{" "}
            <span className="inline-block px-2 py-0.5 bg-editor-surface border border-editor-border rounded">
              {dict.hero.middleHighlight}
            </span>{" "}
            {dict.hero.middleSuffix}
          </p>
          <p className="mt-6 font-mono text-lg text-text-primary leading-loose">
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
