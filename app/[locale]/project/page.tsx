import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, LOCALES } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Story from "@/components/Story";
import TableauEmbed from "@/components/TableauEmbed";
import { IconArrow, IconChart, IconGitHub } from "@/components/Icons";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.story.metaTitle,
    description: dict.story.dek,
    alternates: { canonical: `/${params.locale}/project`, languages: { en: "/en/project", es: "/es/project" } },
    openGraph: { title: dict.story.metaTitle, description: dict.story.dek },
  };
}

export default function ProjectPage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);
  const st = dict.story;
  const p = dict.project;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} path="/project" />
      <main>
        <header className="bg-navy-900 text-white">
          <div className="mx-auto max-w-page px-5 pb-16 pt-32 sm:px-8 md:pb-20 md:pt-40">
            <Link href={`/${params.locale}#project`} className="text-sm text-white/55 hover:text-white">
              ← {st.back}
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-label text-gold-light">{st.label}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              {st.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{st.dek}</p>
            <p className="mt-6 text-sm text-white/45">Omar Serrano · {params.locale === "es" ? "nov 2026" : "Nov 2026"}</p>
          </div>
        </header>

        <section className="mx-auto max-w-page px-5 sm:px-8">
          <Story dict={dict} locale={params.locale} />
        </section>

        <section className="bg-mist py-20 md:py-24">
          <div className="mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight">{st.methodTitle}</h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-5 text-lg leading-relaxed text-muted">{st.method}</p>
              <p className="mt-4 text-sm text-faint">{st.source}</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight">{st.limitsTitle}</h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <ul className="mt-5 space-y-3">
                {st.limits.map((l) => (
                  <li key={l} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-gold" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-page px-5 sm:px-8">
            <TableauEmbed alt={p.dashboardAlt} cta={p.loadDashboard} note={p.loadNote} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-700"
              >
                <IconChart />
                {p.openDashboard}
                <IconArrow className="h-3.5 w-3.5" />
              </a>
              <a
                href={LINKS.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium hover:border-navy-900"
              >
                <IconGitHub />
                {p.openRepo}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
