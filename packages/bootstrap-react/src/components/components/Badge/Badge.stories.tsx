import type { Meta, StoryFn } from '@storybook/react'

import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'

import Badge from './Badge'

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
    <Button bsJs={{ variant: 'primary' }}>
      Notifications <Badge bsJs={{ background: 'secondary' }}>4</Badge>
    </Button>
  )
}

export const ExamplesPositioned: StoryFn = () => {
  return (
    <div>
      <Button bsJs={{ variant: 'primary', position: 'relative' }}>
        Inbox
        <Badge
          bsJs={{
            background: 'danger',
            border: { radius: 'pill' },
            position: 'absolute'
          }}
          className="top-0 start-100 translate-middle"
        >
          99+
          <BrElement as="span" bsJs={{ visuallyHidden: true }}>
            unread messages
          </BrElement>
        </Badge>
      </Button>
      <hr />
      <Button bsJs={{ variant: 'primary', position: 'relative' }}>
        Profile
        <BrElement
          as="span"
          bsJs={{
            background: 'danger',
            border: { color: 'light', radius: 'circle' },
            position: 'absolute',
            spacing: { padding: '2' }
          }}
          className="top-0 start-100 translate-middle rounded-circle"
        >
          <BrElement as="span" bsJs={{ visuallyHidden: true }}>
            New alerts
          </BrElement>
        </BrElement>
      </Button>
    </div>
  )
}

export const BackgroundColors: StoryFn = () => {
  return (
    <BrElement bsJs={{ display: 'flex', spacing: { gap: '1' } }}>
      <Badge bsJs={{ background: 'primary' }}>Primary</Badge>
      <Badge bsJs={{ background: 'secondary' }}>Secondary</Badge>
      <Badge bsJs={{ background: 'success' }}>Success</Badge>
      <Badge bsJs={{ background: 'danger' }}>Danger</Badge>
      <Badge bsJs={{ background: 'warning' }}>Warning</Badge>
      <Badge bsJs={{ background: 'info' }}>Info</Badge>
      <Badge bsJs={{ background: 'light' }}>Light</Badge>
      <Badge bsJs={{ background: 'dark' }}>Dark</Badge>
    </BrElement>
  )
}

export const PillBadges: StoryFn = () => {
  return (
    <BrElement bsJs={{ display: 'flex', spacing: { gap: '1' } }}>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'primary' }}>Primary</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'secondary' }}>Secondary</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'success' }}>Success</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'danger' }}>Danger</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'warning' }}>Warning</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'info' }}>Info</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'light' }}>Light</Badge>
      <Badge bsJs={{ border: { radius: 'pill' }, background: 'dark' }}>Dark</Badge>
    </BrElement>
  )
}
