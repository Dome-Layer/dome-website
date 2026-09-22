import { caseStudy } from '../content/caseStudies'
import type { Locale } from './locales'
import { MESSAGES } from './messages'
import type { PageMetaText } from './messages/types'
import { caseStudyIdFor, type RouteId } from './routes'

/**
 * Head metadata for any public route.
 *
 * Most pages take it from the message catalogues, where a missing key fails `tsc`. Case study
 * pages take it from the case content instead: their title and description are the study's own
 * title and summary, so the words a visitor reads and the words a search engine indexes cannot
 * drift apart, and there is no second copy of the summary to maintain.
 */
export function pageMeta(id: RouteId, locale: Locale): PageMetaText {
  const studyId = caseStudyIdFor(id)
  if (studyId) {
    const study = caseStudy(studyId)
    if (!study) throw new Error(`Route "${id}" names case study "${studyId}", which does not exist`)
    return {
      name: study.title[locale],
      title: `${study.title[locale]} | DOME`,
      description: study.summary[locale],
      imageAlt: study.title[locale],
    }
  }
  return MESSAGES[locale].meta[id as keyof (typeof MESSAGES)[Locale]['meta']]
}
