import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";

export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills" title={dict.skills.heading}>
      <div className="grid gap-6 md:grid-cols-3">
        {dict.skills.groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-line bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint">{g.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
