import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import Section from "./Section";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

export default function Apps({ dict }: { dict: Dictionary }) {
  return (
    <Section id="apps" title={dict.apps.heading} sub={dict.apps.sub}>
      <div className="grid gap-8 md:grid-cols-2">
        {dict.apps.items.map((app, i) => (
          <Reveal key={app.name} delay={i * 120}>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_30px_60px_-40px_rgba(11,26,44,0.5)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-mist">
                <Image
                  src={app.image}
                  alt={`${app.name} home page`}
                  fill
                  className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-medium">{app.name}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-gold group-hover:underline">
                    {app.urlLabel}
                    <IconArrow className="h-3 w-3" />
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{app.desc}</p>
                <p className="mt-5 text-xs uppercase tracking-label text-faint">{app.stack}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
