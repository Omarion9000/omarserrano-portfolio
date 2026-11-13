"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import LineChart from "./charts/LineChart";
import { ExposureChart, OffsetChart, PairsChart, SidesChart, WaterfallChart } from "./charts/StoryCharts";
import { useInView } from "./useInView";

function ChartFor({ i, dict, locale, active }: { i: number; dict: Dictionary; locale: string; active: boolean }) {
  const c = dict.story.charts;
  const s = dict.story.sectors;
  switch (i) {
    case 0:
      return (
        <LineChart
          active={active}
          locale={locale}
          labels={{ all: dict.hero.seriesAll, core: dict.hero.seriesCore, tariff: dict.hero.tariffMarker, title: c.line.title }}
        />
      );
    case 1:
      return <SidesChart t={c.sides} active={active} />;
    case 2:
      return <WaterfallChart t={c.waterfall} active={active} />;
    case 3:
      return <OffsetChart t={c.offset} sectors={s} active={active} />;
    case 4:
      return <PairsChart t={c.pairs} active={active} />;
    default:
      return <ExposureChart t={c.exposure} sectors={s} active={active} />;
  }
}

const TITLES = (dict: Dictionary) => {
  const c = dict.story.charts;
  return [c.line.title, c.sides.title, c.waterfall.title, c.offset.title, c.pairs.title, c.exposure.title];
};

function MobileChart({ i, dict, locale }: { i: number; dict: Dictionary; locale: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  return (
    <div ref={ref} className="mt-6 rounded-2xl border border-line bg-white p-4 lg:hidden">
      <p className="mb-2 text-xs font-medium text-faint">{TITLES(dict)[i]}</p>
      <ChartFor i={i} dict={dict} locale={locale} active={inView} />
    </div>
  );
}

export default function Story({ dict, locale }: { dict: Dictionary; locale: string }) {
  const steps = dict.story.steps;
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div>
        {steps.map((s, i) => (
          <div
            key={s.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-step={i}
            className="flex min-h-0 flex-col justify-center py-10 lg:min-h-[85vh] lg:py-0"
          >
            <div className={`transition-opacity duration-500 ${active === i ? "lg:opacity-100" : "lg:opacity-40"}`}>
              <p className="text-xs font-semibold uppercase tracking-label text-gold">{s.kicker}</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{s.title}</h2>
              {s.verdict && (
                <span className="mt-4 inline-block rounded-full border border-gold/40 bg-gold-pale/40 px-3 py-1 text-xs font-semibold text-navy-800">
                  {s.verdict}
                </span>
              )}
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <MobileChart i={i} dict={dict} locale={locale} />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center">
          <div className="relative w-full rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-45px_rgba(11,26,44,0.45)]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-ink">{TITLES(dict)[active]}</p>
              <p className="tnum text-xs text-faint">
                {active + 1} / {steps.length}
              </p>
            </div>
            <div className="relative" style={{ aspectRatio: "600 / 340" }}>
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center [&>svg]:h-full"
                  style={{ opacity: active === i ? 1 : 0, transition: "opacity .45s ease", pointerEvents: active === i ? "auto" : "none" }}
                  aria-hidden={active !== i}
                >
                  <ChartFor i={i} dict={dict} locale={locale} active={active === i} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-1.5">
              {steps.map((_, i) => (
                <span key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= active ? "bg-gold" : "bg-line"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
