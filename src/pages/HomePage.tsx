import { PublicPage } from '../layouts/PublicPage'
import { HomeHero } from '../sections/home/HomeHero'
import { Method } from '../sections/home/Method'
import { HomeTools } from '../sections/home/HomeTools'
import { RunSection } from '../components/project/RunSection'
import { ProjectClosing } from '../components/project/ProjectClosing'
import { ForwardLink } from '../components/ui/Button'
import { RUN_ANCHOR, useTryHref } from '../lib/project'
import { localizedHref } from '../i18n/routes'
import { useLocale, useMessages } from '../i18n/useLocale'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('home')

/** The entry page of the project site (site split, canvas round 2): try a tool, or watch the run. */
export default function HomePage() {
  const locale = useLocale()
  const messages = useMessages()
  const t = messages.pages.home
  const tryHref = useTryHref()
  return (
    <PublicPage>
      <HomeHero />
      <Method />
      <HomeTools />
      <RunSection
        className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]"
        eyebrow={t.run.eyebrow}
        heading={t.run.heading}
        lead={t.run.lead}
        links={<ForwardLink to={localizedHref('agentFlow', locale)}>{t.run.cta}</ForwardLink>}
      />
      <ProjectClosing
        className="pt-20 md:pt-24"
        text={t.closing}
        primary={{ label: messages.common.tryTool, to: tryHref }}
        secondary={{ label: messages.common.watchRun, to: `#${RUN_ANCHOR}` }}
        hire={t.hire}
      />
    </PublicPage>
  )
}
