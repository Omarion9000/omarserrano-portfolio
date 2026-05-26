import type { Dictionary } from "@/lib/i18n";
import Terminal from "./Terminal";
import FloatingShapes from "@/components/FloatingShapes";

export default function Contact({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <section id="contact" className="relative isolate py-24">
      <FloatingShapes />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-mono text-sm text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.contact.heading}
        </h2>
        <p className="mt-2 text-text-secondary">{dict.contact.prompt}</p>

        <div className="mt-8">
          <Terminal dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
}
