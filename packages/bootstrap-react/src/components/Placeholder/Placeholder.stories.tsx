import type { Meta, StoryObj } from '@storybook/react'

import Placeholder from './Placeholder'

const meta: Meta<typeof Placeholder> = {
  component: Placeholder,
  tags: ['autodocs']
}

export default meta
export const PlaceholderStory: StoryObj = {
  args: {
    className: 'w-100',
    animation: undefined
  }
}
