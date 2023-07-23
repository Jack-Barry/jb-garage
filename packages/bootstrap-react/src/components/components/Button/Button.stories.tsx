import type { Meta, StoryFn } from '@storybook/react'

import Button from './Button'
import { CSSProperties } from 'react'
import { BrElement } from '../../utils/BrElement'
import Col from '../../layout/columns/Col'

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
      <Button brVariant="primary">Primary</Button>
      <Button brVariant="secondary">Secondary</Button>
      <Button brVariant="success">Success</Button>
      <Button brVariant="danger">Danger</Button>
      <Button brVariant="warning">Warning</Button>
      <Button brVariant="info">Info</Button>
      <Button brVariant="light">Light</Button>
      <Button brVariant="dark">Dark</Button>
      <Button brVariant="link">Link</Button>
    </div>
  )
}

export const ButtonTags: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button as="a" brVariant="primary" href="#">
        Link
      </Button>
      <Button brVariant="primary" type="submit">
        Button
      </Button>
      <Button as="input" brVariant="primary" type="button" value="Input" />
      <Button as="input" brVariant="primary" type="submit" value="Submit" />
      <Button as="input" brVariant="primary" type="reset" value="Reset" />
    </div>
  )
}

export const OutlineButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button brVariant="outline-primary">Primary</Button>
      <Button brVariant="outline-secondary">Secondary</Button>
      <Button brVariant="outline-success">Success</Button>
      <Button brVariant="outline-danger">Danger</Button>
      <Button brVariant="outline-warning">Warning</Button>
      <Button brVariant="outline-info">Info</Button>
      <Button brVariant="outline-light">Light</Button>
      <Button brVariant="outline-dark">Dark</Button>
    </div>
  )
}

export const Sizes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button brVariant="primary" brLg>
        Large button
      </Button>
      <Button brVariant="secondary" brLg>
        Large button
      </Button>
      <hr />
      <Button brVariant="primary" brSm>
        Small button
      </Button>
      <Button brVariant="secondary" brSm>
        Small button
      </Button>
      <hr />
      <Button
        brVariant="primary"
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
      <Button brVariant="primary" disabled>
        Primary button
      </Button>
      <Button brVariant="secondary" disabled>
        Button
      </Button>
      <Button brVariant="outline-primary" disabled>
        Primary button
      </Button>
      <Button brVariant="outline-secondary" disabled>
        Button
      </Button>
      <hr />
      <Button as="a" brVariant="primary" brDisabled>
        Primary link
      </Button>
      <Button as="a" brVariant="secondary" brDisabled>
        Link
      </Button>
    </div>
  )
}

export const BlockButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement brDisplay="grid" className="gap-2">
        <Button brVariant="primary">Button</Button>
        <Button brVariant="primary">Button</Button>
      </BrElement>
      <hr />
      <BrElement brDisplay="grid" brDisplayMd="block" className="gap-2">
        <Button brVariant="primary">Button</Button>
        <Button brVariant="primary">Button</Button>
      </BrElement>
      <hr />
      <Col brDisplay="grid" brCols={6} brMargin={{ x: 'auto' }} className="gap-2">
        <Button brVariant="primary">Button</Button>
        <Button brVariant="primary">Button</Button>
      </Col>
      <hr />
      <BrElement
        brDisplay="grid"
        brDisplayMd="flex"
        brFlexMd={{ justifyContent: 'end' }}
        className="gap-2"
      >
        <Button brVariant="primary" brMarginMd={{ end: 2 }}>
          Button
        </Button>
        <Button brVariant="primary">Button</Button>
      </BrElement>
    </div>
  )
}
