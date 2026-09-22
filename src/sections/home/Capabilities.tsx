import { MediaSplit } from '../../components/media/MediaSplit'
import { ForwardLink } from '../../components/ui/Button'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { localizedHref } from '../../i18n/routes'
import { useLocale, useMessages } from '../../i18n/useLocale'


/**
 * The capability showcase. The tools are named, deliberately as plain pills rather than links:
 * they are proof of what we build, never a product for sale, so the single call to action goes to
 * the capabilities page rather than into a tool.
 */
export function Capabilities() {
  const locale = useLocale()
  const t = useMessages().pages.home.capabilities
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
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[40px]">
          {t.heading}
        </h2>
        <p className="text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
          {t.lead}
        </p>
        <ul className="flex flex-wrap gap-2">
          {t.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-base)] px-3 py-1.5 text-[13px] text-[var(--color-text-secondary)]"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <ForwardLink to={localizedHref('dome', locale)}>{t.cta}</ForwardLink>
        </div>
      </div>
    </MediaSplit>
  )
}
