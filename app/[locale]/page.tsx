export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <p className="font-mono text-sm text-text-muted">
        <span className="text-syntax-comment">{"// "}</span>
        Toronto, GTA · EN · ES · FR
      </p>
      <h1 className="mt-4 font-mono text-5xl md:text-7xl font-medium text-text-primary tracking-tight">
        Omar Serrano
      </h1>
      <p className="mt-6 max-w-2xl text-text-secondary leading-relaxed">
        Scaffolding base activo. Locale actual:{" "}
        <code className="text-syntax-string">{params.locale}</code>
      </p>

      <div className="mt-16 p-6 rounded-lg bg-editor-surface border border-editor-border font-mono text-sm text-text-secondary">
        <span className="text-syntax-comment">{"// status: "}</span>
        <span className="text-syntax-keyword">const</span>{" "}
        <span className="text-syntax-property">phase</span>
        {" = "}
        <span className="text-syntax-string">&quot;v0 — scaffolding complete&quot;</span>;
      </div>
    </main>
  );
}
