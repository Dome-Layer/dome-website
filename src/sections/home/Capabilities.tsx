import { MediaSplit } from '../../components/media/MediaSplit'
import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale } from '../../i18n/useLocale'

const TOOLS = [
  'Process Analyzer',
  'LLM Council',
  'Document Intelligence',
  'Data Intelligence',
  'Governance Dashboard',
  'Agent Flow (rolling out)',
]

/**
 * The capability showcase. The tools are named, deliberately as plain pills rather than links:
 * they are proof of what we build, never a product for sale, so the single call to action goes to
 * the capabilities page rather than into a tool.
 */
export function Capabilities() {
  const locale = useLocale()
  return (
    <MediaSplit
      className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]"
      media={
        <img
          src="/DOME%20iPad%20Mockup.png"
          alt=""
          aria-hidden="true"
          width={760}
          height={570}
          loading="lazy"
          className="-mr-20 w-[640px] max-w-none [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%)]"
        />
      }
    >
      <div className="flex max-w-[520px] flex-col gap-5">
        <Eyebrow>DOME capabilities</Eyebrow>
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
          Tools we build and operate
        </h2>
        <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
          Our own tools cover the path from process discovery to audited execution. Prospective
          clients can try them before any engagement starts, and where data cannot leave your
          network, three of them run against a local open-weight model instead of a cloud API.
        </p>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-base)] px-3 py-1.5 text-[13px] text-[var(--color-text-secondary)]"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <ForwardLink to={localizedHref('dome', locale)}>Explore DOME capabilities</ForwardLink>
        </div>
      </div>
    </MediaSplit>
  )
}
