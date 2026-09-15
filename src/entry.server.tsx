import type { EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'
import { renderToReadableStream } from 'react-dom/server'

/**
 * Build-time renderer used only to prerender pages (ssr: false, so nothing runs on a server at
 * runtime). A custom entry means the build needs no @react-router/node runtime or isbot
 * dependency. It waits for the whole tree so crawlers get complete HTML.
 */
export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  let status = responseStatusCode
  const stream = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        status = 500
        console.error(error)
      },
    },
  )
  await stream.allReady

  responseHeaders.set('Content-Type', 'text/html')
  return new Response(stream, { headers: responseHeaders, status })
}
