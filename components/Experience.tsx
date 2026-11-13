import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience({ dict }: { dict: Dictionary }) {
  return (
    <Section id="experience" title={dict.experience.heading}>
      <ol className="divide-y divide-line border-y border-line">
        {dict.experience.items.map((job) => (
          <li key={job.title + job.dates}>
            <Reveal className="grid gap-4 py-9 md:grid-cols-[13rem_1fr] md:gap-10">
              <div>
                <p className="tnum text-sm font-medium text-gold">{job.dates}</p>
                <p className="mt-1 text-sm text-faint">{job.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium leading-snug">{job.title}</h3>
                <p className="mt-1 text-muted">{[job.org, job.type].filter(Boolean).join(" · ")}</p>
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
