"use client";

import { useMemo, useRef, useState } from "react";
import data from "@/lib/trade-data.json";
import { C } from "./theme";

type Point = { m: string; all: number; core: number };
const LINE = data.line as Point[];

const W = 640;
const H = 330;
const M = { t: 20, r: 58, b: 34, l: 44 };
const Y0 = 64;
const Y1 = 78;

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

export default function LineChart({
  labels,
  locale = "en",
  dark = false,
  active = true,
  show = { all: true, core: true },
}: {
  labels: { all: string; core: string; tariff: string; title: string };
  locale?: string;
  dark?: boolean;
  active?: boolean;
  show?: { all: boolean; core: boolean };
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const x = (i: number) => M.l + (i / (LINE.length - 1)) * (W - M.l - M.r);
  const y = (v: number) => M.t + ((Y1 - v) / (Y1 - Y0)) * (H - M.t - M.b);

  const paths = useMemo(() => {
    const mk = (k: "all" | "core") =>
      LINE.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p[k]).toFixed(1)}`).join("");
    return { all: mk("all"), core: mk("core") };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tariffIdx = LINE.findIndex((p) => p.m === "2025-03");
  const months = locale === "es" ? MONTHS_ES : MONTHS_EN;
  const fmtMonth = (m: string) => `${months[parseInt(m.slice(5), 10) - 1]} ${m.slice(0, 4)}`;

  const colAll = dark ? "#E6EBF2" : C.navy;
  const colCore = dark ? C.goldLight : C.gold;
  const grid = dark ? "rgba(255,255,255,0.08)" : C.grid;
  const tick = dark ? "rgba(230,235,242,0.55)" : C.text;

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const i = Math.round(((px - M.l) / (W - M.l - M.r)) * (LINE.length - 1));
    setHover(Math.max(0, Math.min(LINE.length - 1, i)));
  }

  const last = LINE[LINE.length - 1];
  const h = hover !== null ? LINE[hover] : null;
  const tipX = hover !== null ? x(hover) : 0;
  const tipLeft = tipX > W - 260;

  const dash = (len: number): React.CSSProperties => ({
    strokeDasharray: len,
    strokeDashoffset: active ? 0 : len,
    transition: "stroke-dashoffset 1.8s cubic-bezier(.4,.1,.2,1)",
  });

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full touch-pan-y select-none"
      role="img"
      aria-label={labels.title}
      onPointerMove={onMove}
      onPointerDown={onMove}
      onPointerLeave={() => setHover(null)}
    >
      {[64, 66, 68, 70, 72, 74, 76, 78].map((t) => (
        <g key={t}>
          <line x1={M.l} x2={W - M.r} y1={y(t)} y2={y(t)} stroke={grid} />
          <text x={M.l - 8} y={y(t) + 4} textAnchor="end" fontSize="12.5" fill={tick} className="tnum">
            {t}%
          </text>
        </g>
      ))}
      {["2023", "2024", "2025", "2026"].map((yr) => {
        const i = LINE.findIndex((p) => p.m === `${yr}-01`);
        return (
          <text key={yr} x={x(i)} y={H - 10} textAnchor="middle" fontSize="12.5" fill={tick}>
            {yr}
          </text>
        );
      })}

      <line
        x1={x(tariffIdx)}
        x2={x(tariffIdx)}
        y1={M.t}
        y2={H - M.b}
        stroke={dark ? "rgba(201,169,110,0.5)" : C.axis}
        strokeDasharray="3 4"
      />
      <text x={x(tariffIdx) + 6} y={M.t + 10} fontSize="12" fill={tick}>
        {labels.tariff}
      </text>

      <path
        d={paths.core}
        fill="none"
        stroke={colCore}
        strokeWidth="2.5"
        strokeLinejoin="round"
        style={{ ...dash(1400), opacity: show.core ? 1 : 0.12, transition: `${dash(1400).transition}, opacity .4s` }}
      />
      <path
        d={paths.all}
        fill="none"
        stroke={colAll}
        strokeWidth="2.5"
        strokeLinejoin="round"
        style={{ ...dash(1400), opacity: show.all ? 1 : 0.12, transition: `${dash(1400).transition}, opacity .4s` }}
      />

      <g style={{ opacity: active ? 1 : 0, transition: "opacity .5s ease 1.6s" }}>
        <circle cx={x(LINE.length - 1)} cy={y(last.all)} r="3.5" fill={colAll} opacity={show.all ? 1 : 0.15} />
        <text x={x(LINE.length - 1) + 8} y={y(last.all) + 4} fontSize="12" fontWeight="600" fill={colAll} className="tnum" opacity={show.all ? 1 : 0.15}>
          {last.all.toFixed(1)}%
        </text>
        <circle cx={x(LINE.length - 1)} cy={y(last.core)} r="3.5" fill={colCore} opacity={show.core ? 1 : 0.15} />
        <text x={x(LINE.length - 1) + 8} y={y(last.core) + 4} fontSize="12" fontWeight="600" fill={colCore} className="tnum" opacity={show.core ? 1 : 0.15}>
          {last.core.toFixed(1)}%
        </text>
      </g>

      {h && (
        <g pointerEvents="none">
          <line x1={tipX} x2={tipX} y1={M.t} y2={H - M.b} stroke={dark ? "rgba(255,255,255,0.35)" : C.axis} />
          {show.all && <circle cx={tipX} cy={y(h.all)} r="4.5" fill={colAll} stroke={dark ? "#0B1A2C" : "#fff"} strokeWidth="2" />}
          {show.core && <circle cx={tipX} cy={y(h.core)} r="4.5" fill={colCore} stroke={dark ? "#0B1A2C" : "#fff"} strokeWidth="2" />}
          <g transform={`translate(${tipLeft ? tipX - 242 : tipX + 12}, ${M.t + 22})`}>
            <rect width="230" height="66" rx="6" fill={dark ? "#12263F" : "#fff"} stroke={dark ? "rgba(255,255,255,0.12)" : C.grid} />
            <text x="12" y="20" fontSize="11" fill={tick}>
              {fmtMonth(h.m)}
            </text>
            <circle cx="16" cy="36" r="3.5" fill={colAll} />
            <text x="26" y="40" fontSize="11.5" fill={dark ? "#E6EBF2" : C.ink}>
              {labels.all}
            </text>
            <text x="218" y="40" fontSize="11.5" fontWeight="600" textAnchor="end" fill={dark ? "#E6EBF2" : C.ink} className="tnum">
              {h.all.toFixed(1)}%
            </text>
            <circle cx="16" cy="53" r="3.5" fill={colCore} />
            <text x="26" y="57" fontSize="11.5" fill={dark ? "#E6EBF2" : C.ink}>
              {labels.core}
            </text>
            <text x="218" y="57" fontSize="11.5" fontWeight="600" textAnchor="end" fill={dark ? "#E6EBF2" : C.ink} className="tnum">
              {h.core.toFixed(1)}%
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}
