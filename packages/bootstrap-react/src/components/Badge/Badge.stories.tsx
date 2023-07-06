import type { Meta, StoryObj } from '@storybook/react'

import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs']
}

export default meta
export const BadgeStory: StoryObj = {
  args: {
    children: 'Badge Text',
    className: ''
  }
}
