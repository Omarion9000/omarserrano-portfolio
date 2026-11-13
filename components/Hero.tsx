import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import HeroViz from "./HeroViz";
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: string }) {
  const h = dict.hero;
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60rem 30rem at 85% -10%, rgba(201,169,110,0.18), transparent 60%), radial-gradient(40rem 30rem at -10% 110%, rgba(79,109,143,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-page px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/photo/omar-serrano.webp"
                alt="Omar Serrano"
                width={112}
                height={112}
                priority
                className="h-20 w-20 rounded-full object-cover ring-2 ring-gold-light/70 ring-offset-4 ring-offset-navy-900 sm:h-24 sm:w-24"
              />
              <p className="text-xs font-medium uppercase tracking-label text-gold-light">{h.location}</p>
            </div>
            <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
              Omar Serrano
            </h1>
            <p className="mt-5 text-2xl font-light tracking-tight text-white sm:text-[1.75rem]">{h.title}</p>
            <p className="mt-2 text-sm tracking-wide text-white/60 sm:text-base">{h.tools}</p>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-white/75">{h.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#project"
                className="rounded-md bg-gold-light px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-pale"
              >
                {h.ctaProject}
              </Link>
              <a
                href={LINKS.resumePdf}
                download="Omar-Serrano-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
              >
                <IconDownload />
                {h.ctaResume}
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5 text-white/55">
              <a href={`mailto:${LINKS.email}`} aria-label="Email" className="transition-colors hover:text-white">
                <IconMail className="h-5 w-5" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
                <IconLinkedIn className="h-5 w-5" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
                <IconGitHub className="h-5 w-5" />
              </a>
            </div>
          </div>

          <HeroViz dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
}
