import en from "./en";
import es from "./es";
import type { Dict } from "./types";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export type Dictionary = Dict;

const dictionaries: Record<Locale, Dict> = { en, es };

export function getDictionary(locale: string): Dict {
  return (LOCALES as readonly string[]).includes(locale)
    ? dictionaries[locale as Locale]
    : dictionaries[DEFAULT_LOCALE];
}
