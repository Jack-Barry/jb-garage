import type { Meta, StoryObj } from '@storybook/react'

import { as } from '../../../storybook/utils'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: { as }
}

export default meta
export const BaseExample: StoryObj = {
  args: {
    children: 'Badge Text',
    className: ''
  }
}
