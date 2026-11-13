import type { Dictionary } from "@/lib/i18n";
import type { EducationItem } from "@/lib/i18n/types";
import Section from "./Section";
import Reveal from "./Reveal";

function List({ label, items }: { label: string; items: EducationItem[] }) {
  return (
    <Reveal>
      <h3 className="text-xs font-semibold uppercase tracking-label text-gold">{label}</h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {items.map((e) => (
          <li key={e.name} className="py-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <p className="font-serif text-xl font-medium">{e.name}</p>
              <span className="tnum shrink-0 text-sm text-faint">{e.dates}</span>
            </div>
            <p className="mt-1 text-muted">{e.org}</p>
            {e.note && <p className="mt-2 text-sm text-faint">{e.note}</p>}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Education({ dict }: { dict: Dictionary }) {
  const e = dict.education;
  return (
    <Section id="education" title={e.heading} tone="mist">
      <div className="grid gap-12 lg:grid-cols-2">
        <List label={e.certsLabel} items={e.certs} />
        <List label={e.educationLabel} items={e.items} />
      </div>
    </Section>
  );
}
