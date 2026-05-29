import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResumePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);
  const r = dict.resume.page;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <header className="mb-8 pb-6 border-b border-editor-border">
          <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary">
            Omar Serrano
          </h1>
          <p className="mt-2 text-text-secondary">{r.role}</p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            {r.location} · EN · ES · FR ·
            <a href="mailto:omarion.montoya@gmail.com" className="ml-1 hover:text-accent">omarion.montoya@gmail.com</a>
          </p>

          <a
            href="/cv/omar-serrano-resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded font-mono text-sm hover:bg-text-primary transition-colors"
          >
            {r.downloadCta}
          </a>
        </header>

        <article className="space-y-10 text-text-primary">
          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>{r.sections.summary}
            </h2>
            <p className="leading-relaxed text-text-secondary">{r.summaryBody}</p>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>{r.sections.skills}
            </h2>
            <dl className="space-y-2 text-sm">
              {r.skills.map((skill) => (
                <div key={skill.label} className="flex flex-col md:flex-row md:gap-4">
                  <dt className="font-semibold text-text-primary md:w-40">{skill.label}</dt>
                  <dd className="text-text-secondary">{skill.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>{r.sections.projects}
            </h2>
            <div className="space-y-5">
              {r.projects.map((project) => (
                <div key={project.title}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        className="font-mono text-xs text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-text-muted">{project.linkLabel}</span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mt-1">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>{r.sections.experience}
            </h2>
            <div className="space-y-5">
              {r.experience.map((job) => (
                <div key={job.title}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold">{job.title}</h3>
                    <span className="font-mono text-xs text-text-muted">{job.dates}</span>
                  </div>
                  <p className="text-xs italic text-text-muted">{job.location}</p>
                  <ul className="mt-2 ml-5 list-disc text-sm text-text-secondary space-y-1">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>{r.sections.education}
            </h2>
            <ul className="text-sm text-text-secondary space-y-2">
              {r.education.map((item, i) => (
                <li key={i}>
                  {item.name && <strong className="text-text-primary">{item.name}</strong>}
                  {item.name ? ` · ${item.body}` : item.body}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>

      <Footer dict={dict} />
    </>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "fr" }];
}
