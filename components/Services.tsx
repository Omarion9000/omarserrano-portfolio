import type { Dictionary } from "@/lib/i18n";
import FloatingShapes from "@/components/FloatingShapes";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="relative isolate py-24">
      <FloatingShapes />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.services.heading}
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {dict.services.items.map((item) => (
            <div
              key={item.key}
              className="group p-6 bg-editor-surface border border-editor-border rounded-lg hover:border-accent/40 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-lg text-text-primary">{item.title}</h3>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{item.tag}</span>
              </div>
              <p className="mt-3 text-text-secondary leading-relaxed">{item.desc}</p>
              <div className="mt-4 font-mono text-xs text-syntax-comment">
                <span className="text-syntax-keyword">const</span>{" "}
                <span className="text-syntax-property">{item.key}</span>
                {" = "}
                <span className="text-syntax-string">&quot;available&quot;</span>;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
