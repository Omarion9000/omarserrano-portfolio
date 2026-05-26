import type { Dictionary } from "@/lib/i18n";
import SkillIcon from "@/components/SkillIcon";
import FloatingShapes from "@/components/FloatingShapes";

const POSTIT_STYLES = {
  amber: { bg: "#FFE898", rotate: "-rotate-3" },
  mint: { bg: "#C8E6C9", rotate: "rotate-2" },
  terracotta: { bg: "#F4B89F", rotate: "-rotate-2" },
} as const;

type PostitColor = keyof typeof POSTIT_STYLES;

export default function Stack({ dict }: { dict: Dictionary }) {
  return (
    <section id="stack" className="relative py-24">
      <FloatingShapes />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.stack.heading}
        </h2>
        <p className="mt-2 text-text-secondary">{dict.stack.subheading}</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-10">
          {dict.stack.postits.map((postit) => {
            const style = POSTIT_STYLES[postit.color as PostitColor] ?? POSTIT_STYLES.amber;
            return (
              <div
                key={postit.key}
                className={`relative p-6 pt-10 shadow-postit ${style.rotate} hover:rotate-0 transition-transform duration-300`}
                style={{ background: style.bg }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape" />
                <h3 className="font-mono text-xs text-text-secondary mb-4 uppercase tracking-wider">
                  <span className="text-syntax-comment">{"// "}</span>{postit.title}
                </h3>
                <ul className="space-y-2.5">
                  {postit.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3 text-text-primary">
                      <span className="text-text-primary/70">
                        <SkillIcon icon={item.icon} />
                      </span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
