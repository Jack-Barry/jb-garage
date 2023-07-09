import type { Meta, StoryObj } from '@storybook/react'

import { as } from '../../storybook/utils'
import Placeholder from './Placeholder'

const meta: Meta<typeof Placeholder> = {
  component: Placeholder,
  tags: ['autodocs'],
  argTypes: { as }
}

export default meta
export const BaseExample: StoryObj = {
  args: {
    className: 'w-100',
    animation: undefined
  }
}
