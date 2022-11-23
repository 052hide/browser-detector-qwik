import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { TopPage } from '../components/pages/TopPage'

export default component$(() => {
  return <TopPage />
})

export const head: DocumentHead = {
  title: 'Browser Detector',
  meta: [
    {
      name: 'description',
      content: 'Browser Detector',
    },
  ],
}
