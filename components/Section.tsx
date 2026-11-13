export default function Section({
  id,
  label,
  title,
  sub,
  children,
  className = "",
}: {
  id: string;
  label?: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line py-20 ${className}`}>
      <div className="mx-auto max-w-page px-5 sm:px-8">
        {label && <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-dark">{label}</p>}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
