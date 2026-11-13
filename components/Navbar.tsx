import Link from "next/link";
import { LOCALES, type Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";

export default function Navbar({
  locale,
  dict,
  path = "",
}: {
  locale: string;
  dict: Dictionary;
  path?: string;
}) {
  const home = `/${locale}`;
  const items = [
    { href: `${home}#project`, label: dict.nav.project },
    { href: `${home}#experience`, label: dict.nav.experience },
    { href: `${home}#education`, label: dict.nav.education },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <Link href={home} className="text-[15px] font-semibold tracking-tight">
          Omar Serrano
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center font-mono text-xs" aria-label="Language">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-line">/</span>}
                <Link
                  href={`/${l}${path}`}
                  hrefLang={l}
                  aria-current={l === locale ? "true" : undefined}
                  className={
                    l === locale ? "font-medium uppercase text-ink" : "uppercase text-faint hover:text-ink"
                  }
                >
                  {l}
                </Link>
              </span>
            ))}
          </div>
          <Link
            href={`${home}/resume`}
            className="rounded-md border border-ink px-3 py-1.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            {dict.nav.resume}
          </Link>
        </div>
      </nav>
    </header>
  );
}
