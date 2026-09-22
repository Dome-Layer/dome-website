import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref, type RouteId } from '../../i18n/routes'
import { useLocale } from '../../i18n/useLocale'

const SERVICES: { number: string; title: string; body: string; cta: string; route: RouteId }[] = [
  {
    number: '01',
    title: 'Enterprise UX and product',
    body: 'We untangle complex internal tools and customer platforms: user research, service design, interface design and a design system your developers can build from.',
    cta: 'Explore UX and product',
    route: 'enterpriseUx',
  },
  {
    number: '02',
    title: 'AI process automation',
    body: 'We map a process, automate the parts with clear rules and route the rest to your team with a decision brief and a complete audit trail.',
    cta: 'Explore process automation',
    route: 'aiProcessAutomation',
  },
  {
    number: '03',
    title: 'DOME capabilities',
    body: 'Working tools we build and operate: document extraction, multi-model review, governed dashboards and an audit layer that ties them together.',
    cta: 'See what we build',
    route: 'dome',
  },
]

/** The three service lines. */
export function Services() {
  const locale = useLocale()
  return (
    <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            Three ways we work with you
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-8"
            >
              <p className="text-[13px] font-semibold text-[var(--color-text-tertiary)]">{service.number}</p>
              <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{service.title}</h3>
              <p className="grow text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{service.body}</p>
              <ForwardLink to={localizedHref(service.route, locale)}>{service.cta}</ForwardLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
