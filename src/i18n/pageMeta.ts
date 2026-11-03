import type { Locale } from './locales'
import { MESSAGES } from './messages'
import type { PageMetaText } from './messages/types'
import type { RouteId } from './routes'

/** Head metadata for any public route, from the message catalogues (a missing key fails `tsc`). */
export function pageMeta(id: RouteId, locale: Locale): PageMetaText {
  return MESSAGES[locale].meta[id]
}
