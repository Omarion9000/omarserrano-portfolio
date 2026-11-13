"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import LineChart from "./charts/LineChart";
import { useInView } from "./useInView";

export default function HeroViz({ dict, locale }: { dict: Dictionary; locale: string }) {
  const h = dict.hero;
  const [show, setShow] = useState({ all: true, core: true });
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  const toggle = (k: "all" | "core") =>
    setShow((s) => {
      const next = { ...s, [k]: !s[k] };
      return next.all || next.core ? next : s;
    });

  const chips = [
    { k: "all" as const, label: h.seriesAll, value: "−8.4 pp", dot: "bg-[#E6EBF2]" },
    { k: "core" as const, label: h.seriesCore, value: "−3.3 pp", dot: "bg-gold-light" },
  ];

  return (
    <figure ref={ref} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <figcaption className="text-sm font-medium text-white/90">{h.chartTitle}</figcaption>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.k}
            type="button"
            onClick={() => toggle(c.k)}
            aria-pressed={show[c.k]}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
              show[c.k]
                ? "border-white/25 bg-white/10 text-white"
                : "border-white/10 text-white/45 hover:text-white/70"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${c.dot}`} />
            {c.label}
            <span className="tnum font-semibold">{c.value}</span>
          </button>
        ))}
      </div>
      <div className="mt-3">
        <LineChart
          dark
          active={inView}
          show={show}
          locale={locale}
          labels={{ all: h.seriesAll, core: h.seriesCore, tariff: h.tariffMarker, title: h.chartTitle }}
        />
      </div>
      <p className="mt-1 text-xs text-white/45">{h.chartCaption}</p>
    </figure>
  );
}
