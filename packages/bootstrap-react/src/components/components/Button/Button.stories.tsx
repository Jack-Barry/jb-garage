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
      <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Primary</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}>Secondary</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'success' } } }}>Success</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'danger' } } }}>Danger</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'warning' } } }}>Warning</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'info' } } }}>Info</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'light' } } }}>Light</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'dark' } } }}>Dark</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'link' } } }}>Link</Button>
    </div>
  )
}

export const ButtonTags: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button as="a" bsJs={{ bsJsAll: { button: { color: 'primary' } } }} href="#">
        Link
      </Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }} type="submit">
        Button
      </Button>
      <Button
        as="input"
        bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
        type="button"
        value="Input"
      />
      <Button
        as="input"
        bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
        type="submit"
        value="Submit"
      />
      <Button
        as="input"
        bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
        type="reset"
        value="Reset"
      />
    </div>
  )
}

export const OutlineButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-primary' } } }}>Primary</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-secondary' } } }}>Secondary</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-success' } } }}>Success</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-danger' } } }}>Danger</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-warning' } } }}>Warning</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-info' } } }}>Info</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-light' } } }}>Light</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-dark' } } }}>Dark</Button>
    </div>
  )
}

export const Sizes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ bsJsAll: { button: { color: 'primary', size: 'lg' } } }}>Large button</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'lg' } } }}>
        Large button
      </Button>
      <hr />
      <Button bsJs={{ bsJsAll: { button: { color: 'primary', size: 'sm' } } }}>Small button</Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'sm' } } }}>
        Small button
      </Button>
      <hr />
      <Button
        bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
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
      <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }} disabled>
        Primary button
      </Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }} disabled>
        Button
      </Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-primary' } } }} disabled>
        Primary button
      </Button>
      <Button bsJs={{ bsJsAll: { button: { color: 'outline-secondary' } } }} disabled>
        Button
      </Button>
      <hr />
      <Button as="a" bsJs={{ bsJsAll: { button: { color: 'primary', disabled: true } } }}>
        Primary link
      </Button>
      <Button as="a" bsJs={{ bsJsAll: { button: { color: 'secondary', disabled: true } } }}>
        Link
      </Button>
    </div>
  )
}

export const BlockButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement bsJs={{ bsJsAll: { display: 'grid', spacing: { gap: '2' } } }}>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
      </BrElement>
      <hr />
      <BrElement
        bsJs={{ bsJsAll: { display: 'grid', spacing: { gap: '2' } }, md: { display: 'block' } }}
      >
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
      </BrElement>
      <hr />
      <Col
        bsJs={{ bsJsAll: { display: 'grid', spacing: { margin: { x: 'auto' }, gap: '2' } } }}
        brCols={6}
      >
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
      </Col>
      <hr />
      <BrElement
        bsJs={{
          bsJsAll: { display: 'grid', spacing: { gap: '2' } },
          md: { display: 'flex', flex: { justifyContent: 'end' } }
        }}
      >
        <Button
          bsJs={{
            bsJsAll: { button: { color: 'primary' } },
            md: { spacing: { margin: { end: '2' } } }
          }}
        >
          Button
        </Button>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Button</Button>
      </BrElement>
    </div>
  )
}
