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
    <Button brButtonColor="primary">
      Notifications <Badge bsJs={{ bsJsAll: { color: 'bg-secondary' } }}>4</Badge>
    </Button>
  )
}

export const ExamplesPositioned: StoryFn = () => {
  return (
    <div>
      <Button bsJs={{ bsJsAll: { position: 'relative' } }} brButtonColor="primary">
        Inbox
        <Badge
          bsJs={{
            bsJsAll: { background: 'danger', border: { radius: 'pill' }, position: 'absolute' }
          }}
          className="top-0 start-100 translate-middle"
        >
          99+
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
            unread messages
          </BrElement>
        </Badge>
      </Button>
      <hr />
      <Button bsJs={{ bsJsAll: { position: 'relative' } }} brButtonColor="primary">
        Profile
        <BrElement
          as="span"
          bsJs={{
            bsJsAll: {
              background: 'danger',
              border: { color: 'light', radius: 'circle' },
              position: 'absolute',
              spacing: { padding: '2' }
            }
          }}
          className="top-0 start-100 translate-middle rounded-circle"
        >
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
            New alerts
          </BrElement>
        </BrElement>
      </Button>
    </div>
  )
}

export const BackgroundColors: StoryFn = () => {
  return (
    <BrElement bsJs={{ bsJsAll: { display: 'flex', spacing: { gap: '1' } } }}>
      <Badge bsJs={{ bsJsAll: { color: 'bg-primary' } }}>Primary</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-secondary' } }}>Secondary</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-success' } }}>Success</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-danger' } }}>Danger</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-warning' } }}>Warning</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-info' } }}>Info</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-light' } }}>Light</Badge>
      <Badge bsJs={{ bsJsAll: { color: 'bg-dark' } }}>Dark</Badge>
    </BrElement>
  )
}

export const PillBadges: StoryFn = () => {
  return (
    <BrElement bsJs={{ bsJsAll: { display: 'flex', spacing: { gap: '1' } } }}>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-primary' } }}>Primary</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-secondary' } }}>
        Secondary
      </Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-success' } }}>Success</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-danger' } }}>Danger</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-warning' } }}>Warning</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-info' } }}>Info</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-light' } }}>Light</Badge>
      <Badge bsJs={{ bsJsAll: { border: { radius: 'pill' }, color: 'bg-dark' } }}>Dark</Badge>
    </BrElement>
  )
}
