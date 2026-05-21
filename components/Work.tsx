import type { Dictionary } from "@/lib/i18n";

const ROTATIONS = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-3"];
const COLORS = [
  "from-accent/30 to-accent-warm/40",
  "from-syntax-string/25 to-syntax-property/30",
  "from-accent-warm/40 to-accent/30",
  "from-syntax-property/25 to-syntax-keyword/25",
  "from-accent/25 to-syntax-string/30",
];

export default function Work({ dict }: { dict: Dictionary }) {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.work.heading}
        </h2>
        <p className="mt-2 text-text-secondary">{dict.work.subheading}</p>

        {/* Cork board */}
        <div className="mt-10 cork-board rounded-xl p-8 md:p-12 shadow-paper">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {dict.work.items.map((item, i) => (
              <div
                key={item.key}
                className={`relative bg-background p-3 pb-10 shadow-polaroid ${ROTATIONS[i % ROTATIONS.length]} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                {/* Image area */}
                <div className={`w-full aspect-[4/3] bg-gradient-to-br ${COLORS[i % COLORS.length]} rounded-sm`} />
                {/* Caption */}
                <div className="absolute bottom-2 left-3 right-3 text-center">
                  <div className="font-medium text-sm text-text-primary">{item.title}</div>
                  <div className="text-[10px] font-mono text-text-muted mt-0.5">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripciones expandidas debajo */}
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
