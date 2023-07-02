import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { control: false }
  }
}

export default meta
export const ButtonStory: StoryObj = {
  args: {
    children: 'Button Text',
    className: '',
    onClick: action('button clicked')
  }
}
