import { ToolPage } from '../components/tools/ToolPage'
import { routeMeta } from '../lib/seo'

export const meta = routeMeta('governanceDashboard')

export default function GovernanceDashboardPage() {
  return <ToolPage id="governanceDashboard" />
}
