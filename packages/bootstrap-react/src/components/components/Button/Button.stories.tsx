import type { Meta, StoryFn } from '@storybook/react'
import { CSSProperties } from 'react'

import Col from '../../layout/columns/Col'
import { BrElement } from '../../utils/BrElement'

import Button from './Button'

const meta: Meta = {
  title: 'Buttons',
  tags: ['autodocs'],
  argTypes: {
    onClick: { control: false }
  }
}

export default meta

export const BaseClass: StoryFn = () => {
  return <Button>Base class</Button>
}

export const Variants: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ variant: 'primary' }}>Primary</Button>
      <Button bsJs={{ variant: 'secondary' }}>Secondary</Button>
      <Button bsJs={{ variant: 'success' }}>Success</Button>
      <Button bsJs={{ variant: 'danger' }}>Danger</Button>
      <Button bsJs={{ variant: 'warning' }}>Warning</Button>
      <Button bsJs={{ variant: 'info' }}>Info</Button>
      <Button bsJs={{ variant: 'light' }}>Light</Button>
      <Button bsJs={{ variant: 'dark' }}>Dark</Button>
      <Button bsJs={{ variant: 'link' }}>Link</Button>
    </div>
  )
}

export const ButtonTags: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button as="a" bsJs={{ variant: 'primary' }} href="#">
        Link
      </Button>
      <Button bsJs={{ variant: 'primary' }} type="submit">
        Button
      </Button>
      <Button as="input" bsJs={{ variant: 'primary' }} type="button" value="Input" />
      <Button as="input" bsJs={{ variant: 'primary' }} type="submit" value="Submit" />
      <Button as="input" bsJs={{ variant: 'primary' }} type="reset" value="Reset" />
    </div>
  )
}

export const OutlineButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ variant: 'outline-primary' }}>Primary</Button>
      <Button bsJs={{ variant: 'outline-secondary' }}>Secondary</Button>
      <Button bsJs={{ variant: 'outline-success' }}>Success</Button>
      <Button bsJs={{ variant: 'outline-danger' }}>Danger</Button>
      <Button bsJs={{ variant: 'outline-warning' }}>Warning</Button>
      <Button bsJs={{ variant: 'outline-info' }}>Info</Button>
      <Button bsJs={{ variant: 'outline-light' }}>Light</Button>
      <Button bsJs={{ variant: 'outline-dark' }}>Dark</Button>
    </div>
  )
}

export const Sizes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ variant: 'primary', buttonSize: 'lg' }}>Large button</Button>
      <Button bsJs={{ variant: 'secondary', buttonSize: 'lg' }}>Large button</Button>
      <hr />
      <Button bsJs={{ variant: 'primary', buttonSize: 'sm' }}>Small button</Button>
      <Button bsJs={{ variant: 'secondary', buttonSize: 'sm' }}>Small button</Button>
      <hr />
      <Button
        bsJs={{ variant: 'primary' }}
        style={
          {
            '--bs-btn-padding-y': '0.25rem',
            '--bs-btn-padding-x': '0.5rem',
            '--bs-btn-font-size': '0.75rem'
          } as CSSProperties
        }
      >
        Custom button
      </Button>
    </div>
  )
}

export const DisabledState: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ variant: 'primary' }} disabled>
        Primary button
      </Button>
      <Button bsJs={{ variant: 'secondary' }} disabled>
        Button
      </Button>
      <Button bsJs={{ variant: 'outline-primary' }} disabled>
        Primary button
      </Button>
      <Button bsJs={{ variant: 'outline-secondary' }} disabled>
        Button
      </Button>
      <hr />
      <Button as="a" bsJs={{ variant: 'primary', disabled: true }}>
        Primary link
      </Button>
      <Button as="a" bsJs={{ variant: 'secondary', disabled: true }}>
        Link
      </Button>
    </div>
  )
}

export const BlockButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement bsJs={{ display: 'grid', spacing: { gap: '2' } }}>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
      </BrElement>
      <hr />
      <BrElement
        bsJs={{ display: 'grid', spacing: { gap: '2' }, breakpoints: { md: { display: 'block' } } }}
      >
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
      </BrElement>
      <hr />
      <Col
        bsJs={{
          display: 'grid',
          spacing: {
            margin: {
              x: 'auto'
            },
            gap: '2'
          }
        }}
        brCols={6}
      >
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
      </Col>
      <hr />
      <BrElement
        bsJs={{
          display: 'grid',
          spacing: { gap: '2' },
          breakpoints: {
            md: { display: 'flex', flex: { justifyContent: 'end' } }
          }
        }}
      >
        <Button
          bsJs={{
            variant: 'primary',
            breakpoints: {
              md: { spacing: { margin: { end: '2' } } }
            }
          }}
        >
          Button
        </Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
      </BrElement>
    </div>
  )
}
