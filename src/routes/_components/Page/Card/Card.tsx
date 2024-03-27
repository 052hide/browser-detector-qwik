import { component$, Slot } from '@builder.io/qwik'
import { clsx } from 'clsx'
import { CardText } from '../CardText'
import type { CardProps } from './type'

export const Card = component$(({ title }: CardProps) => {
  return (
    <div class={clsx('tw-p-4', 'tw-shadow', 'tw-rounded', 'tw-bg-white')}>
      <CardText isTitle={true}>{title}</CardText>
      <div class={clsx('tw-mt-4', 'tw-flex tw-flex-col', 'tw-gap-2')}>
        <Slot />
      </div>
    </div>
  )
})
