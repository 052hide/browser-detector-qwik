import { component$, Slot } from '@builder.io/qwik'
import { clsx } from 'clsx'

export default component$(() => {
  return (
    <>
      <main
        class={clsx(
          'tw-mx-auto',
          'tw-max-w-screen-lg tw-min-h-screen',
          'tw-px-4 lg:tw-px-8 tw-py-8',
          'tw-bg-neutral-50'
        )}
      >
        <Slot />
      </main>
    </>
  )
})
