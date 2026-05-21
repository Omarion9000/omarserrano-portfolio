"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LOCALES, type Locale, type Dictionary } from "@/lib/i18n";
import clsx from "clsx";

export default function Navbar({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: Locale) {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    const newPath = pathname.replace(/^\/(en|es|fr)/, `/${newLocale}`);
    router.push(newPath);
    router.refresh();
  }

  const navItems = [
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/70 border-b border-editor-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-mono text-sm text-text-primary hover:text-accent transition-colors">
          omar<span className="text-accent">.</span>serrano
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 font-mono text-xs">
          {LOCALES.map((l, i) => (
            <span key={l} className="flex items-center">
              {i > 0 && <span className="text-text-muted mx-1">·</span>}
              <button
                onClick={() => switchLocale(l)}
                className={clsx(
                  "uppercase transition-colors",
                  l === locale ? "text-accent font-medium" : "text-text-muted hover:text-text-primary"
                )}>
                {l}
              </button>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
