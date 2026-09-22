import { RelatedWork } from '../../components/page/RelatedWork'
import { CASE_STUDIES } from '../../content/caseStudies'
import { useMessages } from '../../i18n/useLocale'

/** Three selected engagements on the home page, one from each service line. */
const FEATURED = ['procurement', 'compliance', 'invoice']

export function SelectedWork() {
  const t = useMessages().pages.home.selectedWork
  const studies = FEATURED.map((id) => CASE_STUDIES.find((study) => study.id === id)!)
  return <RelatedWork eyebrow={t.eyebrow} heading={t.heading} studies={studies} />
}
