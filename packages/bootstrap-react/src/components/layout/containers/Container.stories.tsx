import type { Meta, StoryObj } from '@storybook/react'

import { as } from '../../../storybook/utils'
import Container from './Container'

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: { as }
}

export default meta
export const BaseExample: StoryObj = {
  args: {
    children: 'Container content',
    className: ''
  }
}
