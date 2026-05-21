import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

const ROTATIONS = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-3"];

export default function Work({ dict }: { dict: Dictionary }) {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.work.heading}
        </h2>
        <p className="mt-2 text-text-secondary">{dict.work.subheading}</p>

        <div className="mt-10 cork-board rounded-xl p-8 md:p-12 shadow-paper">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {dict.work.items.map((item, i) => {
              const isExternal = item.href.startsWith("http");
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`group relative bg-background p-3 pb-10 shadow-polaroid ${ROTATIONS[i % ROTATIONS.length]} hover:rotate-0 hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_1px_2px_rgba(0,0,0,0.3)] z-10" />

                  <div className="relative w-full aspect-[4/3] bg-editor-surface overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 text-center">
                    <div className="font-medium text-sm text-text-primary">{item.title}</div>
                    <div className="text-[10px] font-mono text-text-muted mt-0.5">{item.tag}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {dict.work.items.map((item) => (
            <div key={item.key} className="p-5 bg-editor-surface border border-editor-border rounded-lg">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-text-primary">{item.title}</h3>
                <span className="font-mono text-[10px] text-text-muted">{item.tag}</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
