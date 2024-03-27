import { component$, Slot } from '@builder.io/qwik'
import { clsx } from 'clsx'
import type { CardTextProps } from './type'

export const CardText = component$(({ isTitle = false }: CardTextProps) => {
  return (
    <p
      class={clsx('tw-text-sm tw-text-neutral-800', isTitle && 'tw-font-bold')}
    >
      <Slot />
    </p>
  )
})
