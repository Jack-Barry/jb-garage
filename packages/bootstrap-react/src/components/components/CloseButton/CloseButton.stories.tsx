import { Meta, StoryFn } from '@storybook/react'

import { BrElement } from '../../utils/BrElement'

import CloseButton from './CloseButton'

const meta: Meta = {
  title: 'Close Button',
  tags: ['autodocs']
}

export default meta

export const Example: StoryFn = () => {
  return <CloseButton />
}

export const DisabledState: StoryFn = () => {
  return <CloseButton disabled />
}

export const DarkVariant: StoryFn = () => {
  return (
    <BrElement bsJs={{ theme: 'dark' }}>
      <CloseButton />
      <CloseButton disabled />
    </BrElement>
  )
}
