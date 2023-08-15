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
      <Button brButtonColor="primary">Primary</Button>
      <Button brButtonColor="secondary">Secondary</Button>
      <Button brButtonColor="success">Success</Button>
      <Button brButtonColor="danger">Danger</Button>
      <Button brButtonColor="warning">Warning</Button>
      <Button brButtonColor="info">Info</Button>
      <Button brButtonColor="light">Light</Button>
      <Button brButtonColor="dark">Dark</Button>
      <Button brButtonColor="link">Link</Button>
    </div>
  )
}

export const ButtonTags: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button as="a" brButtonColor="primary" href="#">
        Link
      </Button>
      <Button brButtonColor="primary" type="submit">
        Button
      </Button>
      <Button as="input" brButtonColor="primary" type="button" value="Input" />
      <Button as="input" brButtonColor="primary" type="submit" value="Submit" />
      <Button as="input" brButtonColor="primary" type="reset" value="Reset" />
    </div>
  )
}

export const OutlineButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button brButtonColor="outline-primary">Primary</Button>
      <Button brButtonColor="outline-secondary">Secondary</Button>
      <Button brButtonColor="outline-success">Success</Button>
      <Button brButtonColor="outline-danger">Danger</Button>
      <Button brButtonColor="outline-warning">Warning</Button>
      <Button brButtonColor="outline-info">Info</Button>
      <Button brButtonColor="outline-light">Light</Button>
      <Button brButtonColor="outline-dark">Dark</Button>
    </div>
  )
}

export const Sizes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button brButtonColor="primary" brButtonLg>
        Large button
      </Button>
      <Button brButtonColor="secondary" brButtonLg>
        Large button
      </Button>
      <hr />
      <Button brButtonColor="primary" brButtonSm>
        Small button
      </Button>
      <Button brButtonColor="secondary" brButtonSm>
        Small button
      </Button>
      <hr />
      <Button
        brButtonColor="primary"
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
      <Button brButtonColor="primary" disabled>
        Primary button
      </Button>
      <Button brButtonColor="secondary" disabled>
        Button
      </Button>
      <Button brButtonColor="outline-primary" disabled>
        Primary button
      </Button>
      <Button brButtonColor="outline-secondary" disabled>
        Button
      </Button>
      <hr />
      <Button as="a" brButtonColor="primary" brButtonDisabled>
        Primary link
      </Button>
      <Button as="a" brButtonColor="secondary" brButtonDisabled>
        Link
      </Button>
    </div>
  )
}

export const BlockButtons: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement brUtilsDisplay="grid" brUtilsSpacing={{ gap: '2' }}>
        <Button brButtonColor="primary">Button</Button>
        <Button brButtonColor="primary">Button</Button>
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay={{ brAllBreakpoints: 'grid', md: 'block' }}
        brUtilsSpacing={{ gap: '2' }}
      >
        <Button brButtonColor="primary">Button</Button>
        <Button brButtonColor="primary">Button</Button>
      </BrElement>
      <hr />
      <Col brUtilsDisplay="grid" brCols={6} brUtilsSpacing={{ margin: { x: 'auto' }, gap: '2' }}>
        <Button brButtonColor="primary">Button</Button>
        <Button brButtonColor="primary">Button</Button>
      </Col>
      <hr />
      <BrElement
        brUtilsDisplay={{ brAllBreakpoints: 'grid', md: 'flex' }}
        brUtilsSpacing={{ gap: '2' }}
        brUtilsFlex={{ md: { justifyContent: 'end' } }}
      >
        <Button brButtonColor="primary" brUtilsSpacing={{ md: { margin: { end: '2' } } }}>
          Button
        </Button>
        <Button brButtonColor="primary">Button</Button>
      </BrElement>
    </div>
  )
}
