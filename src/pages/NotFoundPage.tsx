import type { MetaFunction } from 'react-router'
import { ErrorPage } from '../components/errors/ErrorPage'
import { MESSAGES } from '../i18n/messages'
import { localeFromPath } from '../i18n/routes'

/**
 * Any address the site does not have. In the app this is the catch-all route; at build time it is
 * prerendered as /404 and /it/404, which the Worker serves with the 404 status for unknown paths.
 */
export const meta: MetaFunction = ({ location }) => [
  { title: `${MESSAGES[localeFromPath(location.pathname)].errors.notFoundTitle} | DOME` },
  { name: 'robots', content: 'noindex' },
]

export default function NotFoundPage() {
  return <ErrorPage kind="notFound" />
}
