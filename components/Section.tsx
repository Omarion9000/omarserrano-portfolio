import Reveal from "./Reveal";

export default function Section({
  id,
  label,
  title,
  sub,
  children,
  tone = "white",
}: {
  id: string;
  label?: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
  tone?: "white" | "mist";
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${tone === "mist" ? "bg-mist" : "bg-white"}`}>
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          {label && <p className="text-xs font-semibold uppercase tracking-label text-gold">{label}</p>}
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{title}</h2>
          <div className="mt-5 h-px w-12 bg-gold" />
          {sub && <p className="mt-5 max-w-2xl text-lg text-muted">{sub}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
