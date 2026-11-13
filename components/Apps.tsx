import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";
import { IconArrow } from "./Icons";

export default function Apps({ dict }: { dict: Dictionary }) {
  return (
    <Section id="apps" title={dict.apps.heading} sub={dict.apps.sub}>
      <div className="grid gap-6 md:grid-cols-2">
        {dict.apps.items.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(27,26,23,0.35)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-paper">
              <Image
                src={app.image}
                alt={`${app.name} home page`}
                fill
                className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">{app.name}</h3>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-blue group-hover:underline">
                  {app.urlLabel}
                  <IconArrow className="h-3 w-3" />
                </span>
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{app.desc}</p>
              <p className="mt-4 font-mono text-xs text-faint">{app.stack}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
