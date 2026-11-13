import Link from "next/link";
import { LOCALES, type Dictionary } from "@/lib/i18n";

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
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <Link href={home} className="font-serif text-lg font-medium tracking-tight">
          Omar Serrano
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-xs tracking-wide" aria-label="Language">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-white/25">/</span>}
                <Link
                  href={`/${l}${path}`}
                  hrefLang={l}
                  aria-current={l === locale ? "true" : undefined}
                  className={l === locale ? "font-semibold uppercase text-gold-light" : "uppercase text-white/50 hover:text-white"}
                >
                  {l}
                </Link>
              </span>
            ))}
          </div>
          <Link
            href={`${home}/resume`}
            className="rounded-md border border-gold-light/60 px-3.5 py-1.5 text-sm font-medium text-gold-light transition-colors hover:bg-gold-light hover:text-navy-950"
          >
            {dict.nav.resume}
          </Link>
        </div>
      </nav>
    </header>
  );
}
