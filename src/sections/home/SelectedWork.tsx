import { AiLabel, Picture } from '../../components/media/Picture'
import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import type { MediaId } from '../../content/media'
import { SITE } from '../../lib/siteRoutes'

const CARD_SIZES = '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'

/**
 * The tablet mockup is the existing product shot in `public/`, not a manifest asset: the real tool
 * screenshots in both themes are still to be captured, and they join the manifest when they land.
 */
const TABLET_MOCKUP = '/DOME%20iPad%20Mockup.png'

type WorkItem = { segment: string; title: string; body: string } & (
  | { media: MediaId; mockup?: never }
  | { media?: never; mockup: true }
)

const WORK: WorkItem[] = [
  {
    media: 'caseProcurementWorkflowRedesign',
    segment: 'Enterprise UX and product',
    title: 'Procurement workflow redesign for a European food retailer',
    body: 'A research-led redesign of non-resale purchasing journeys across five enterprise platforms, rolled out with a standard training programme.',
  },
  {
    media: 'caseAiComplianceAssessments',
    segment: 'AI process automation',
    title: 'AI-assisted compliance assessments',
    body: 'A regulatory library and assessment tools that help compliance teams find gaps faster, with an assistant that explains each finding.',
  },
  {
    mockup: true,
    segment: 'DOME capability',
    title: 'A governed invoice-to-approval workflow',
    body: 'Extraction, policy rules, a multi-model review and a named approver, recorded as one audit trail you can reconstruct step by step.',
  },
]

/** Three selected engagements. All anonymised, which the standfirst says plainly. */
export function SelectedWork() {
  return (
    <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
              Recent engagements
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Client details are anonymised.</p>
          </div>
          <ForwardLink to={SITE.caseStudies}>View all case studies</ForwardLink>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {WORK.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)]"
            >
              <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[var(--color-bg-muted)]">
                {item.media ? (
                  <>
                    <Picture id={item.media} sizes={CARD_SIZES} className="h-full w-full object-cover" />
                    <AiLabel id={item.media} />
                  </>
                ) : (
                  <img
                    src={TABLET_MOCKUP}
                    alt="A DOME tool shown on a tablet"
                    width={760}
                    height={570}
                    loading="lazy"
                    className="h-[190px] w-auto"
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 p-7">
                <p className="text-xs font-semibold text-[var(--color-text-accent)]">{item.segment}</p>
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{item.title}</h3>
                <p className="text-sm leading-[1.6] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
