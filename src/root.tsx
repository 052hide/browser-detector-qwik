import { component$, useStyles$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { QwikPartytown } from './components/partytown/partytown'
import { RouterHead } from './components/meta/RouterHead'

import globalStyles from './global.css?inline'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={['dataLayer.push']} />
        {import.meta.env.VITE_CLOUDFLARE_BEACON && (
          <script
            async
            type="text/partytown"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{ "token": "${
              import.meta.env.VITE_CLOUDFLARE_BEACON
            }" }`}
          />
        )}
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
