"use client";

import data from "@/lib/trade-data.json";
import type { Dictionary } from "@/lib/i18n";
import { C, fade, grow } from "./theme";

type Charts = Dictionary["story"]["charts"];
type Sectors = Record<string, string>;

const tick = { fontSize: 12.5, fill: C.text } as const;

/* H1: exports to the US vs other countries, baseline vs latest */
export function SidesChart({ t, active }: { t: Charts["sides"]; active: boolean }) {
  const rows = [
    { label: t.us, base: 549.2, latest: 529.5, change: "−3.6%" },
    { label: t.row, base: 171.5, latest: 251.9, change: "+46.9%" },
  ];
  const W = 600;
  const L = 140;
  const max = 600;
  const sx = (v: number) => (v / max) * (W - L - 70);
  return (
    <svg viewBox={`0 0 ${W} 250`} className="w-full" role="img" aria-label={t.title}>
      {rows.map((r, i) => {
        const y0 = 30 + i * 110;
        return (
          <g key={r.label}>
            <text x={0} y={y0 + 28} fontSize="14" fontWeight="600" fill={C.ink}>
              {r.label}
            </text>
            <text x={0} y={y0 + 46} fontSize="13.5" fill={i ? C.gold : C.text} fontWeight="600" className="tnum">
              {r.change}
            </text>
            <rect x={L} y={y0} width={sx(r.base)} height={26} fill={C.navySoft} rx="2" style={grow(active, i * 120, "left")} />
            <text x={L + sx(r.base) + 8} y={y0 + 18} {...tick} className="tnum" style={fade(active, 500)}>
              {r.base.toFixed(1)}
            </text>
            <rect x={L} y={y0 + 34} width={sx(r.latest)} height={26} fill={i ? C.gold : C.navy} rx="2" style={grow(active, 200 + i * 120, "left")} />
            <text x={L + sx(r.latest) + 8} y={y0 + 52} fontSize="12.5" fontWeight="600" fill={C.ink} className="tnum" style={fade(active, 700)}>
              {r.latest.toFixed(1)}
            </text>
          </g>
        );
      })}
      <g transform="translate(140,238)" fontSize="12.5" fill={C.text}>
        <rect width="10" height="10" y="-9" fill={C.navySoft} rx="1" />
        <text x="16">{t.base}</text>
        <rect x="170" width="10" height="10" y="-9" fill={C.navy} rx="1" />
        <text x="186">{t.latest}</text>
      </g>
    </svg>
  );
}

/* H2: waterfall */
export function WaterfallChart({ t, active }: { t: Charts["waterfall"]; active: boolean }) {
  const wf = data.waterfall;
  const W = 600;
  const H = 300;
  const top = 30;
  const bottom = 250;
  const y = (v: number) => bottom - (v / 80) * (bottom - top);
  const bw = 72;
  const x = (i: number) => 50 + i * 108;
  const colors = [C.navyMid, C.gold, C.slate, C.navySoft, C.navy];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t.title}>
      {[0, 20, 40, 60, 80].map((v) => (
        <g key={v}>
          <line x1={40} x2={W} y1={y(v)} y2={y(v)} stroke={C.grid} />
          <text x={32} y={y(v) + 4} textAnchor="end" {...tick} className="tnum">
            {v}%
          </text>
        </g>
      ))}
      {wf.map((b, i) => {
        const hi = Math.max(b.start, b.end);
        const lo = Math.min(b.start, b.end);
        const h = Math.max(y(lo) - y(hi), 2);
        const label = b.kind === "level" ? `${b.end.toFixed(1)}%` : `−${Math.abs(b.value).toFixed(1)}`;
        return (
          <g key={b.label}>
            {i > 0 && (
              <line x1={x(i - 1) + bw} x2={x(i)} y1={y(wf[i - 1].end)} y2={y(wf[i - 1].end)} stroke={C.axis} strokeDasharray="3 3" style={fade(active, 300 + i * 150)} />
            )}
            <rect x={x(i)} y={y(hi)} width={bw} height={h} fill={colors[i]} rx="2" style={grow(active, i * 150, b.kind === "level" ? "bottom" : "top")} />
            <text x={x(i) + bw / 2} y={y(hi) - 8} textAnchor="middle" fontSize="14" fontWeight="600" fill={i === 1 ? C.gold : C.ink} className="tnum" style={fade(active, 400 + i * 150)}>
              {label}
            </text>
            <text x={x(i) + bw / 2} y={bottom + 20} textAnchor="middle" {...tick}>
              {t.labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* H3: offset ratio by sector */
export function OffsetChart({ t, sectors, active }: { t: Charts["offset"]; sectors: Sectors; active: boolean }) {
  const rows = data.redirection;
  const W = 600;
  const L = 150;
  const min = -0.2;
  const max = 1;
  const sx = (v: number) => L + ((v - min) / (max - min)) * (W - L - 20);
  return (
    <svg viewBox={`0 0 ${W} 300`} className="w-full" role="img" aria-label={t.title}>
      <rect x={sx(min)} y={10} width={sx(0.25) - sx(min)} height={250} fill="#F3F5F8" />
      <rect x={sx(0.75)} y={10} width={sx(max) - sx(0.75)} height={250} fill="#F7F1E7" />
      <text x={sx(0.25) - 6} y={276} textAnchor="end" {...tick}>
        {t.notRedirected}
      </text>
      <text x={sx(max) - 4} y={276} textAnchor="end" fontSize="12.5" fill={C.gold}>
        {t.redirected}
      </text>
      <line x1={sx(0)} x2={sx(0)} y1={10} y2={260} stroke={C.axis} />
      {[0, 0.25, 0.5, 0.75, 1].map((v) => (
        <text key={v} x={sx(v)} y={294} textAnchor="middle" {...tick} className="tnum">
          {v}
        </text>
      ))}
      {rows.map((r, i) => {
        const yy = 26 + i * 48;
        const x0 = sx(Math.min(0, r.ratio));
        const w = Math.max(Math.abs(sx(r.ratio) - sx(0)), 2);
        const col = r.ratio >= 0.75 ? C.gold : r.ratio >= 0.25 ? C.navyMid : C.navy;
        return (
          <g key={r.key}>
            <text x={L - 12} y={yy + 17} textAnchor="end" fontSize="14" fill={C.ink}>
              {sectors[r.key]}
            </text>
            <rect x={x0} y={yy} width={w} height={26} fill={col} rx="2" style={grow(active, i * 110, r.ratio < 0 ? "right" : "left")} />
            <text
              x={r.ratio < 0 ? x0 - 6 : sx(r.ratio) + 6}
              y={yy + 17}
              textAnchor={r.ratio < 0 ? "end" : "start"}
              fontSize="13.5"
              fontWeight="600"
              fill={C.ink}
              className="tnum"
              style={fade(active, 500 + i * 110)}
            >
              {r.ratio.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* H4: new pairs vs frozen band */
export function PairsChart({ t, active }: { t: Charts["pairs"]; active: boolean }) {
  const p = data.pairs;
  const W = 600;
  const top = 30;
  const bottom = 250;
  const y = (v: number) => bottom - ((v - 300) / (700 - 300)) * (bottom - top);
  const bw = 90;
  const x = (i: number) => 110 + i * 160;
  return (
    <svg viewBox={`0 0 ${W} 290`} className="w-full" role="img" aria-label={t.title}>
      {[300, 400, 500, 600, 700].map((v) => (
        <g key={v}>
          <line x1={50} x2={W} y1={y(v)} y2={y(v)} stroke={C.grid} />
          <text x={42} y={y(v) + 4} textAnchor="end" {...tick} className="tnum">
            {v}
          </text>
        </g>
      ))}
      <rect x={50} y={y(p.high)} width={W - 50} height={y(p.low) - y(p.high)} fill="#F7F1E7" style={fade(active)} />
      <line x1={50} x2={W} y1={y(p.mean)} y2={y(p.mean)} stroke={C.gold} strokeDasharray="4 4" style={fade(active)} />
      <text x={W - 4} y={y(p.high) - 6} textAnchor="end" fontSize="12.5" fill={C.gold}>
        {t.band}
      </text>
      {p.snapshots.map((s, i) => (
        <g key={s.label}>
          <rect x={x(i)} y={y(s.n)} width={bw} height={bottom - y(s.n)} fill={i === 2 ? C.navy : C.navySoft} rx="2" style={grow(active, i * 150)} />
          <text x={x(i) + bw / 2} y={y(s.n) - 8} textAnchor="middle" fontSize="14" fontWeight="600" fill={C.ink} className="tnum" style={fade(active, 500 + i * 150)}>
            {s.n}
          </text>
          <text x={x(i) + bw / 2} y={bottom + 20} textAnchor="middle" {...tick}>
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* Exposure: dumbbell */
export function ExposureChart({ t, sectors, active }: { t: Charts["exposure"]; sectors: Sectors; active: boolean }) {
  const rows = data.exposure;
  const W = 600;
  const L = 150;
  const sx = (v: number) => L + (v / 100) * (W - L - 24);
  return (
    <svg viewBox={`0 0 ${W} 330`} className="w-full" role="img" aria-label={t.title}>
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={sx(v)} x2={sx(v)} y1={8} y2={290} stroke={C.grid} />
          <text x={sx(v)} y={306} textAnchor="middle" {...tick} className="tnum">
            {v}%
          </text>
        </g>
      ))}
      {rows.map((r, i) => {
        const yy = 26 + i * 34;
        return (
          <g key={r.key}>
            <text x={L - 12} y={yy + 4} textAnchor="end" fontSize="14" fill={C.ink}>
              {sectors[r.key]}
            </text>
            <line x1={sx(r.latest)} x2={sx(r.base)} y1={yy} y2={yy} stroke={C.navySoft} strokeWidth="3" style={grow(active, i * 80, "right")} />
            <circle cx={sx(r.base)} cy={yy} r="6" fill={C.navySoft} style={fade(active, i * 80)} />
            <circle cx={sx(r.latest)} cy={yy} r="6" fill={C.gold} style={fade(active, 400 + i * 80)} />
          </g>
        );
      })}
      <g transform="translate(150,326)" fontSize="12.5" fill={C.text}>
        <circle cx="5" cy="-4" r="5" fill={C.navySoft} />
        <text x="16">{t.base}</text>
        <circle cx="125" cy="-4" r="5" fill={C.gold} />
        <text x="136">{t.latest}</text>
      </g>
    </svg>
  );
}
