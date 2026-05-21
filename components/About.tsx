import type { Dictionary } from "@/lib/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.about.heading}
        </h2>

        {/* Post-it */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md rotate-[-2deg]">
            {/* Tape arriba */}
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
      </div>
    </section>
  );
}
