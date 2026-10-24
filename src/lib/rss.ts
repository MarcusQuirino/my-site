import rss from '@astrojs/rss'
import { SITE_TITLE } from '../consts'
import { localizePath, type Lang } from '../i18n'
import { entrySlug, getLocalizedCollection } from '../i18n/content'
import { ui } from '../i18n/ui'

// Used by /rss.xml and /pt-br/rss.xml
export async function rssResponse(lang: Lang, site: URL) {
  const posts = await getLocalizedCollection('blog', lang)
  return rss({
    title: SITE_TITLE,
    description: ui[lang].description,
    site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: localizePath(`/blog/${entrySlug(post.id)}/`, lang),
    })),
  })
}
