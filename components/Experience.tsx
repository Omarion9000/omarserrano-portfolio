import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";

export default function Experience({ dict }: { dict: Dictionary }) {
  return (
    <Section id="experience" title={dict.experience.heading}>
      <ol className="relative space-y-10 border-l border-line pl-8">
        {dict.experience.items.map((job) => (
          <li key={job.title + job.dates} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-ink ring-1 ring-line" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold leading-snug">{job.title}</h3>
              <span className="shrink-0 font-mono text-xs text-faint">{job.dates}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {[job.org, job.type, job.location].filter(Boolean).join(" · ")}
            </p>
            <ul className="mt-3 max-w-3xl space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
