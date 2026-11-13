import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Section from "./Section";
import { IconArrow, IconChart, IconGitHub } from "./Icons";

export default function FeaturedProject({ dict }: { dict: Dictionary }) {
  const p = dict.project;
  return (
    <Section id="project" label={p.label} title={p.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint">{p.questionLabel}</h3>
          <p className="mt-2 text-lg leading-relaxed">{p.question}</p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint">{p.answerLabel}</h3>
          <p className="mt-2 leading-relaxed text-muted">{p.answer}</p>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4" style={{ gap: 1 }}>
        {p.stats.map((s) => (
          <div key={s.label} className="bg-card p-5">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
            <dd className="mt-1.5 text-sm leading-snug text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>

      <figure className="mt-10">
        <a
          href={LINKS.dashboard}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-line bg-card p-3 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(27,26,23,0.35)] sm:p-5"
        >
          <Image
            src="/project/dashboard.webp"
            alt={p.dashboardAlt}
            width={1800}
            height={1650}
            className="h-auto w-full"
            sizes="(max-width: 1152px) 100vw, 1100px"
          />
        </a>
        <figcaption className="mt-3 text-sm text-faint">{p.dashboardCaption}</figcaption>
      </figure>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold">{p.didLabel}</h3>
          <ol className="mt-4 space-y-3">
            {p.did.map((d, i) => (
              <li key={i} className="flex gap-4 leading-relaxed text-muted">
                <span className="mt-0.5 font-mono text-sm text-accent-dark">{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{p.toolsLabel}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <li key={t} className="rounded-md border border-line bg-card px-3 py-1.5 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={LINKS.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
            >
              <IconChart />
              {p.openDashboard}
              <IconArrow className="h-3.5 w-3.5" />
            </a>
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-line bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <IconGitHub />
              {p.openRepo}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
