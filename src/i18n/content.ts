// Content collections are split by language folder: src/content/<collection>/<lang>/<slug>.mdx
// The slug is shared across languages so /blog/x/ and /pt-br/blog/x/ are the same post.
import { getCollection, type CollectionEntry } from 'astro:content'
import { LANGS, type Lang } from '.'

type Localized = 'blog' | 'reviews'

export const entryLang = (id: string) => id.split('/')[0] as Lang
export const entrySlug = (id: string) => id.split('/').slice(1).join('/')

export async function getLocalizedCollection<C extends Localized>(collection: C, lang: Lang) {
  const all = (await getCollection(collection)) as CollectionEntry<C>[]
  // Every entry needs every language, otherwise hreflang and the language switcher link to a 404
  const ids = new Set(all.map(e => e.id))
  for (const e of all) {
    for (const l of LANGS) {
      const counterpart = `${l}/${entrySlug(e.id)}`
      if (!ids.has(counterpart)) throw new Error(`Missing translation: src/content/${collection}/${counterpart}.mdx`)
    }
  }
  return all.filter(e => entryLang(e.id) === lang)
}

export async function getEntryPaths<C extends Localized>(collection: C, lang: Lang) {
  const entries = await getLocalizedCollection(collection, lang)
  return entries.map(entry => ({ params: { slug: entrySlug(entry.id) }, props: { entry } }))
}
