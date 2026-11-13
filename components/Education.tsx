import type { Dictionary } from "@/lib/i18n";
import type { EducationItem } from "@/lib/i18n/types";
import Section from "./Section";

function List({ label, items }: { label: string; items: EducationItem[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint">{label}</h3>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-card">
        {items.map((e) => (
          <li key={e.name} className="p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <p className="font-semibold">{e.name}</p>
              <span className="shrink-0 font-mono text-xs text-faint">{e.dates}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{e.org}</p>
            {e.note && <p className="mt-2 text-sm text-faint">{e.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education({ dict }: { dict: Dictionary }) {
  const e = dict.education;
  return (
    <Section id="education" title={e.heading}>
      <div className="grid gap-8 lg:grid-cols-2">
        <List label={e.certsLabel} items={e.certs} />
        <List label={e.educationLabel} items={e.items} />
      </div>
    </Section>
  );
}
