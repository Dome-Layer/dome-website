import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref, type RouteId } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'


/** The three service lines. */
export function Services() {
  const locale = useLocale()
  const t = useMessages().pages.home.services
  const routes: RouteId[] = ['aiProcessAutomation', 'enterpriseUx', 'dome']
  return (
    <section className="bg-[var(--color-bg-base)] py-20 md:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-12">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
            {t.heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] p-8"
            >
              <p className="text-[13px] font-semibold text-[var(--color-text-tertiary)]">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">{service.title}</h3>
              <p className="grow text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{service.body}</p>
              <ForwardLink to={localizedHref(routes[i], locale)}>{service.cta}</ForwardLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
