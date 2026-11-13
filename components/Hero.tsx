import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import HeroChart from "./HeroChart";
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section className="mx-auto max-w-page px-5 pb-20 pt-32 sm:px-8 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{h.location}</p>
          <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Omar Serrano
          </h1>
          <p className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {h.title}
            <span className="mx-3 hidden font-light text-line sm:inline">|</span>
            <span className="mt-2 block font-mono text-lg font-normal text-muted sm:mt-0 sm:inline sm:text-xl">{h.tools}</span>
          </p>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{h.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#project"
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
            >
              {h.ctaProject}
            </Link>
            <a
              href={LINKS.resumePdf}
              download="Omar-Serrano-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <IconDownload />
              {h.ctaResume}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted">
            <a href={`mailto:${LINKS.email}`} aria-label="Email" className="hover:text-ink">
              <IconMail className="h-5 w-5" />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink">
              <IconLinkedIn className="h-5 w-5" />
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink">
              <IconGitHub className="h-5 w-5" />
            </a>
          </div>
        </div>

        <HeroChart dict={dict} />
      </div>
    </section>
  );
}
