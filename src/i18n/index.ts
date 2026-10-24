// Locale helpers. Locales are configured in astro.config.mjs (i18n).
// English is unprefixed (/cv/), Portuguese is prefixed (/pt-br/cv/).

export const LANGS = ['en', 'pt-br'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'en'

// BCP 47 tags for <html lang>, hreflang and date formatting
export const LOCALE_TAGS: Record<Lang, string> = { en: 'en', 'pt-br': 'pt-BR' }
export const OG_LOCALES: Record<Lang, string> = { en: 'en_US', 'pt-br': 'pt_BR' }

// Pass Astro.currentLocale
export function getLang(locale: string | undefined): Lang {
  return LANGS.find(l => l === locale) ?? DEFAULT_LANG
}

// '/pt-br/cv/' -> '/cv/'
export function stripLang(pathname: string): string {
  const prefix = LANGS.find(l => l !== DEFAULT_LANG && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)))
  return prefix ? pathname.slice(prefix.length + 1) || '/' : pathname
}

// ('/cv/', 'pt-br') -> '/pt-br/cv/'
export function localizePath(path: string, lang: Lang): string {
  const base = stripLang(path)
  return lang === DEFAULT_LANG ? base : `/${lang}${base}`
}
