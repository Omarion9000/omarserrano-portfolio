import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills" title={dict.skills.heading} tone="mist">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {dict.skills.groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 100} className="bg-white p-8">
            <h3 className="text-xs font-semibold uppercase tracking-label text-gold">{g.title}</h3>
            <ul className="mt-5 space-y-3">
              {g.items.map((item) => (
                <li key={item} className="border-b border-line/70 pb-3 text-[15px] last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
