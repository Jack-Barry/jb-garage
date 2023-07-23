import type { Meta, StoryFn } from '@storybook/react'

import Badge from './Badge'
import Button from '../Button/Button'
import { BrElement } from '../../utils/BrElement'

const meta: Meta = {
  title: 'Badge',
  tags: ['autodocs']
}

export default meta
export const ExamplesHeadings: StoryFn = () => {
  return (
    <div>
      <h1>
        Example heading <Badge>New</Badge>
      </h1>
      <h2>
        Example heading <Badge>New</Badge>
      </h2>
      <h3>
        Example heading <Badge>New</Badge>
      </h3>
      <h4>
        Example heading <Badge>New</Badge>
      </h4>
      <h5>
        Example heading <Badge>New</Badge>
      </h5>
      <h6>
        Example heading <Badge>New</Badge>
      </h6>
    </div>
  )
}

export const ExamplesButtons: StoryFn = () => {
  return (
    <Button brVariant="primary">
      Notifications <Badge className="text-bg-secondary">4</Badge>
    </Button>
  )
}

export const ExamplesPositioned: StoryFn = () => {
  return (
    <div>
      <Button brPosition="relative" brVariant="primary">
        Inbox
        <Badge
          brPosition="absolute"
          brBorder={{ rounded: 'pill' }}
          className="top-0 start-100 translate-middle bg-danger"
        >
          99+
          <BrElement as="span" brVisuallyHidden>
            unread messages
          </BrElement>
        </Badge>
      </Button>
      <hr />
      <Button brPosition="relative" brVariant="primary">
        Profile
        <BrElement
          as="span"
          brPosition="absolute"
          brPadding={2}
          brBorder={{ color: 'light', rounded: 'circle' }}
          className="top-0 start-100 translate-middle bg-danger rounded-circle"
        >
          <BrElement as="span" brVisuallyHidden>
            New alerts
          </BrElement>
        </BrElement>
      </Button>
    </div>
  )
}

export const BackgroundColors: StoryFn = () => {
  return (
    <BrElement brDisplay="flex" className="gap-1">
      <Badge className="text-bg-primary">Primary</Badge>
      <Badge className="text-bg-secondary">Secondary</Badge>
      <Badge className="text-bg-success">Success</Badge>
      <Badge className="text-bg-danger">Danger</Badge>
      <Badge className="text-bg-warning">Warning</Badge>
      <Badge className="text-bg-info">Info</Badge>
      <Badge className="text-bg-light">Light</Badge>
      <Badge className="text-bg-dark">Dark</Badge>
    </BrElement>
  )
}

export const PillBadges: StoryFn = () => {
  return (
    <BrElement brDisplay="flex" className="gap-1">
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-primary">
        Primary
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-secondary">
        Secondary
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-success">
        Success
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-danger">
        Danger
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-warning">
        Warning
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-info">
        Info
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-light">
        Light
      </Badge>
      <Badge brBorder={{ rounded: 'pill' }} className="text-bg-dark">
        Dark
      </Badge>
    </BrElement>
  )
}
