import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Section from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import TableauEmbed from "./TableauEmbed";
import { IconArrow, IconChart, IconGitHub } from "./Icons";

export default function FeaturedProject({ dict, locale }: { dict: Dictionary; locale: string }) {
  const p = dict.project;
  return (
    <Section id="project" label={p.label} title={p.title}>
      <Reveal className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-label text-faint">{p.questionLabel}</h3>
          <p className="mt-3 font-serif text-2xl leading-snug">{p.question}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-label text-faint">{p.answerLabel}</h3>
          <p className="mt-3 text-lg leading-relaxed text-muted">{p.answer}</p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <dl className="mt-14 grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {p.stats.map((s, i) => (
            <div key={s.label} className={`py-7 pr-4 ${i % 2 ? "pl-5 sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""} ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl font-medium tracking-tight text-navy-800 sm:text-5xl">
                <CountUp value={s.value} />
              </dd>
              <dd className="mt-2 text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-14" delay={100}>
        <TableauEmbed alt={p.dashboardAlt} cta={p.loadDashboard} note={p.loadNote} />
        <p className="mt-3 text-sm text-faint">{p.dashboardCaption}</p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h3 className="font-serif text-2xl font-medium">{p.didLabel}</h3>
          <ol className="mt-6 space-y-5">
            {p.did.map((d, i) => (
              <li key={i} className="flex gap-5 leading-relaxed text-muted">
                <span className="tnum mt-0.5 font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={120}>
          <h3 className="font-serif text-2xl font-medium">{p.toolsLabel}</h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3">
            <Link
              href={`/${locale}/project`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
            >
              {p.readStory}
              <span aria-hidden="true">→</span>
            </Link>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-line px-4 py-3 text-sm font-medium transition-colors hover:border-navy-900"
              >
                <IconChart />
                {p.openDashboard}
                <IconArrow className="h-3.5 w-3.5" />
              </a>
              <a
                href={LINKS.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-line px-4 py-3 text-sm font-medium transition-colors hover:border-navy-900"
              >
                <IconGitHub />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
