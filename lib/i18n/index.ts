import en from "./en";
import es from "./es";
import fr from "./fr";

export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries = { en, es, fr } as const;
export type Dictionary = typeof en;

export function getDictionary(locale: string): Dictionary {
  if ((LOCALES as readonly string[]).includes(locale)) {
    return dictionaries[locale as Locale] as unknown as Dictionary;
  }
  return dictionaries[DEFAULT_LOCALE] as unknown as Dictionary;
}
