import { RelatedWork } from '../../components/page/RelatedWork'
import { CASE_STUDIES } from '../../content/caseStudies'

/** Three selected engagements on the home page, one from each service line. */
const FEATURED = ['procurement', 'compliance', 'invoice']

export function SelectedWork() {
  const studies = FEATURED.map((id) => CASE_STUDIES.find((study) => study.id === id)!)
  return <RelatedWork eyebrow="Selected work" heading="Recent engagements" studies={studies} />
}
