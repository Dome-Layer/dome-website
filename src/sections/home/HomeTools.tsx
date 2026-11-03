import { MediaSplit } from '../../components/media/MediaSplit'
import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref, type StaticRouteId } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'

/** In the order of the method, the dashboard and Agent Flow last. */
const TOOLS: readonly StaticRouteId[] = [
  'processAnalyzer',
  'llmCouncil',
  'documentIntelligence',
  'dataIntelligence',
  'governanceDashboard',
  'agentFlow',
]

/** The tools at a glance, beside the tablet picture; the link goes on to the tools page. */
export function HomeTools() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.home.tools
  return (
    <MediaSplit
      media={
        <img
          src="/DOME%20iPad%20Mockup.png"
          alt={messages.media.tabletMockup}
          width={760}
          height={570}
          loading="lazy"
          className="-mr-20 w-[640px] max-w-none [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%)]"
        />
      }
    >
      <div className="flex max-w-[520px] flex-col gap-5">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">{t.heading}</h2>
        <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">{t.lead}</p>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((id) => (
            <li
              key={id}
              className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-base)] px-3 py-1.5 text-[13px] font-medium"
            >
              {messages.meta[id].name}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <ForwardLink to={localizedHref('dome', locale)}>{t.all}</ForwardLink>
        </div>
      </div>
    </MediaSplit>
  )
}
