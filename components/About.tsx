import type { Dictionary } from "@/lib/i18n";
import FloatingShapes from "@/components/FloatingShapes";

export default function About({ dict }: { dict: Dictionary }) {
  const { dashboard } = dict.about;
  const journey = dashboard.journey;

  return (
    <section id="about" className="relative isolate py-24">
      <FloatingShapes />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.about.heading}
        </h2>

        {/* Post-it */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md rotate-[-2deg]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 tape rotate-3" />
            <div className="bg-[#FFE898] p-8 shadow-postit text-text-primary">
              <p className="text-base leading-relaxed font-medium">
                {dict.about.postit}
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-16 max-w-2xl mx-auto space-y-5 text-text-secondary leading-relaxed">
          {dict.about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Dashboard */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* My Journey — timeline */}
          <div className="md:row-span-2 bg-background rounded-2xl border border-editor-border p-6 shadow-sm">
            <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-5">
              <span className="text-syntax-comment">{"// "}</span>
              {dashboard.journeyLabel}
            </div>
            <div className="space-y-5">
              {/* ESCI */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-text-muted mt-1.5" />
                  <div className="w-px flex-1 bg-editor-border mt-1" />
                </div>
                <div className="pb-1">
                  <div className="text-sm font-medium text-text-primary">{journey[0].title}</div>
                  <div className="text-xs text-text-secondary">{journey[0].meta}</div>
                  {"detail" in journey[0] && journey[0].detail ? (
                    <div className="text-[11px] text-text-muted mt-0.5">{journey[0].detail}</div>
                  ) : null}
                </div>
              </div>

              {/* Meraki + Georgian (parallel) */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-syntax-property mt-1.5" />
                  <div className="w-px flex-1 bg-editor-border mt-1" />
                </div>
                <div className="pb-1 space-y-2">
                  <div>
                    <div className="text-sm font-medium text-text-primary">{journey[1].title}</div>
                    <div className="text-xs text-text-secondary">{journey[1].meta}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">{journey[2].title}</div>
                    <div className="text-xs text-text-secondary">{journey[2].meta}</div>
                  </div>
                </div>
              </div>

              {/* AI Dev NOW */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="relative w-2.5 h-2.5 rounded-full bg-accent mt-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary flex items-center gap-2">
                    {journey[3].title}
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                      {dashboard.nowBadge}
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary">{journey[3].meta}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certified */}
          <div className="bg-background rounded-2xl border border-editor-border p-6 shadow-sm">
            <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-4">
              <span className="text-syntax-comment">{"// "}</span>
              {dashboard.certifiedLabel}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-accent">◆</span>
                <div>
                  <div className="text-sm font-medium text-text-primary">{dashboard.certs[0].title}</div>
                  <div className="text-xs text-text-muted">{dashboard.certs[0].meta}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-syntax-property">◆</span>
                <div>
                  <div className="text-sm font-medium text-text-primary">{dashboard.certs[1].title}</div>
                  <div className="text-xs text-text-muted">{dashboard.certs[1].meta}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Building */}
          <div className="bg-background rounded-2xl border border-editor-border p-6 shadow-sm">
            <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-4">
              <span className="text-syntax-comment">{"// "}</span>
              {dashboard.currentlyLabel}
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {dashboard.currentlyText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
