import type { Dictionary } from "@/lib/i18n";

// Values from the project's H2 waterfall (baseline 2022–2024 vs Oct 2025–Sep 2026).
const BASE = 76.2;
const STEPS = [
  { key: "gold", delta: -4.7 },
  { key: "energy", delta: -0.4 },
  { key: "other", delta: -3.3 },
] as const;
const LATEST = 67.8;

const TOP = 34;
const BOTTOM = 214;
const MAX = 80;
const y = (v: number) => BOTTOM - (v / MAX) * (BOTTOM - TOP);

export default function HeroChart({ dict }: { dict: Dictionary }) {
  const labels = dict.hero.chartLabels;
  const barW = 42;
  const gap = 22;
  const x0 = 34;
  const xs = [0, 1, 2, 3, 4].map((i) => x0 + i * (barW + gap));

  let level = BASE;
  const steps = STEPS.map((s) => {
    const from = level;
    level = +(level + s.delta).toFixed(1);
    return { ...s, from, to: level };
  });

  const fmt = (n: number) => (n < 0 ? `−${Math.abs(n)}` : `${n}`);

  return (
    <figure className="rounded-xl border border-line bg-card p-5 shadow-[0_1px_2px_rgba(27,26,23,0.04),0_12px_32px_-16px_rgba(27,26,23,0.18)]">
      <svg viewBox="0 0 360 250" className="w-full" role="img" aria-label={dict.hero.chartCaption}>
        {[0, 20, 40, 60, 80].map((t) => (
          <g key={t}>
            <line x1={x0 - 6} x2={350} y1={y(t)} y2={y(t)} stroke="#EEECE7" />
            <text x={x0 - 10} y={y(t) + 3.5} textAnchor="end" className="fill-faint font-mono" fontSize="9">
              {t}%
            </text>
          </g>
        ))}

        <rect x={xs[0]} y={y(BASE)} width={barW} height={BOTTOM - y(BASE)} fill="#52504B" rx="2" />
        <text x={xs[0] + barW / 2} y={y(BASE) - 7} textAnchor="middle" fontSize="11" fontWeight="600" className="fill-ink font-mono">
          {BASE}%
        </text>

        {steps.map((s, i) => {
          const x = xs[i + 1];
          const top = y(s.from);
          const h = Math.max(y(s.to) - y(s.from), 1.5);
          return (
            <g key={s.key}>
              <line x1={xs[i] + barW} x2={x} y1={top} y2={top} stroke="#B9B5AC" strokeDasharray="2 2" />
              <rect x={x} y={top} width={barW} height={h} fill="#D9572B" rx="1" />
              <text x={x + barW / 2} y={top - 7} textAnchor="middle" fontSize="10.5" className="fill-accent-dark font-mono">
                {fmt(s.delta)}
              </text>
            </g>
          );
        })}

        <line x1={xs[3] + barW} x2={xs[4]} y1={y(LATEST)} y2={y(LATEST)} stroke="#B9B5AC" strokeDasharray="2 2" />
        <rect x={xs[4]} y={y(LATEST)} width={barW} height={BOTTOM - y(LATEST)} fill="#2463C9" rx="2" />
        <text x={xs[4] + barW / 2} y={y(LATEST) - 7} textAnchor="middle" fontSize="11" fontWeight="600" className="fill-ink font-mono">
          {LATEST}%
        </text>

        <line x1={x0 - 6} x2={350} y1={BOTTOM} y2={BOTTOM} stroke="#B9B5AC" />
        {[labels.baseline, labels.gold, labels.energy, labels.other, labels.latest].map((l, i) => (
          <text key={l} x={xs[i] + barW / 2} y={BOTTOM + 16} textAnchor="middle" fontSize="10" className="fill-muted">
            {l}
          </text>
        ))}
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-faint">
        {dict.hero.chartCaption}.
      </figcaption>
    </figure>
  );
}
