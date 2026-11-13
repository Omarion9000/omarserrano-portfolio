import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, LOCALES } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconDownload } from "@/components/Icons";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: `${dict.resume.pageTitle} · Omar Serrano · Data Analyst`,
    alternates: { canonical: `/${params.locale}/resume` },
  };
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 border-b border-navy-900/80 pb-1 text-[13px] font-semibold uppercase tracking-[0.08em] print:mb-1.5 print:text-[10.5pt]">
      {children}
    </h2>
  );
}

export default function ResumePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);
  const r = dict.resume;
  const linkClass = "hover:text-gold print:text-ink";

  return (
    <>
      <Navbar locale={params.locale} dict={dict} path="/resume" />

      <main className="mx-auto max-w-[52rem] px-5 pb-20 pt-28 sm:px-8 print:max-w-none print:p-0">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href={`/${params.locale}`} className="text-sm text-muted hover:text-ink">
            ← {r.back}
          </Link>
          <a
            href={LINKS.resumePdf}
            download="Omar-Serrano-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-700"
          >
            <IconDownload />
            {r.download}
          </a>
        </div>

        <article className="rounded-xl border border-line bg-white p-6 text-[14.5px] leading-relaxed sm:p-10 print:rounded-none print:border-0 print:p-0 print:text-[9pt] print:leading-[1.3]">
          <header className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight print:text-[20pt]">Omar Serrano</h1>
            <p className="mt-1 text-lg font-medium text-gold print:mt-0.5 print:text-[12pt]">{r.targetTitle}</p>
            <p className="mt-2 text-[13px] text-muted print:mt-1 print:whitespace-nowrap print:text-[8.4pt]">
              Toronto, ON
              <span className="mx-2">·</span>
              <a href={`mailto:${LINKS.email}`} className={linkClass}>{LINKS.email}</a>
              <span className="mx-2">·</span>
              <a href={LINKS.linkedin} className={linkClass}>linkedin.com/in/omar-serrano-toronto</a>
              <span className="mx-2">·</span>
              <a href={LINKS.github} className={linkClass}>github.com/Omarion9000</a>
              <span className="mx-2">·</span>
              <a href="https://www.omarserrano.ca" className={linkClass}>omarserrano.ca</a>
            </p>
          </header>

          <section className="mt-6 print:mt-3.5">
            <H2>{r.summaryLabel}</H2>
            <p>{r.summary}</p>
          </section>

          <section className="mt-5 print:mt-2.5">
            <H2>{r.skillsLabel}</H2>
            <dl className="space-y-1 print:space-y-0.5">
              {r.skills.map((s) => (
                <div key={s.label} className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold print:w-[0.8in]">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-semibold print:w-[0.8in]">{r.languagesLabel}</dt>
                <dd>{r.languages}</dd>
              </div>
            </dl>
          </section>

          <section className="mt-5 print:mt-2.5">
            <H2>{r.projectsLabel}</H2>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">
                {r.projectTitle}
                <a href={LINKS.repo} className="ml-2 font-normal text-muted hover:text-gold print:text-muted">
                  github.com/Omarion9000/canada-export-diversification
                </a>
              </h3>
              <span className="shrink-0 text-[13px] text-muted print:text-[9pt]">{r.projectDates}</span>
            </div>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              {r.projectBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="mt-5 print:mt-2.5">
            <H2>{r.experienceLabel}</H2>
            <div className="space-y-3.5 print:space-y-1.5">
              {dict.experience.items.map((job) => (
                <div key={job.title + job.dates} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">{job.title}</h3>
                    <span className="shrink-0 text-[13px] text-muted print:text-[9pt]">{job.dates}</span>
                  </div>
                  <p className="italic text-muted">
                    {[job.org, job.type, job.location].filter(Boolean).join(" · ")}
                  </p>
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-5">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5 print:mt-2.5">
            <H2>{r.educationLabel}</H2>
            <ul className="space-y-1 print:space-y-0.5">
              {[...dict.education.certs, ...dict.education.items].map((e) => (
                <li key={e.name} className="flex items-baseline justify-between gap-4">
                  <span>
                    <strong className="font-semibold">{e.name}</strong>
                    <span className="text-muted"> · {e.org}</span>
                  </span>
                  <span className="shrink-0 text-[13px] text-muted print:text-[9pt]">{e.dates}</span>
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
