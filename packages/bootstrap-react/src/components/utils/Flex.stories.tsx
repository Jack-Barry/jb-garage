import { Meta, StoryFn } from '@storybook/react'
import { BrElement } from './BrElement'
import { Fragment } from 'react'

const meta: Meta = {
  title: 'Flex',
  tags: ['autodocs']
}

export default meta
export const EnableFlexBehaviors: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ padding: '2' }}>
        I'm a flexbox container!
      </BrElement>
      <hr />
      <BrElement brUtilsDisplay="inline-flex" brUtilsSpacing={{ padding: '2' }}>
        I'm an inline flexbox container!
      </BrElement>
    </div>
  )
}

export const Direction: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ row: true }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
      </BrElement>
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ row: 'reverse' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ column: true }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
      </BrElement>
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ column: 'reverse' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
      </BrElement>
    </div>
  )
}

export const JustifyContent: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'start' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Start
        </BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'end' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          End
        </BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'center' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Center
        </BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'between' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Between
        </BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'around' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Around
        </BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'evenly' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} className="bd-highlight">
          Evenly
        </BrElement>
      </BrElement>
    </div>
  )
}

export const AlignItems: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignItems: 'start' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignItems: 'end' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignItems: 'center' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignItems: 'baseline' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignItems: 'stretch' }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const AlignSelf: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ alignSelf: 'start' }}>
          Aligned flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ alignSelf: 'end' }}>
          Aligned flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ alignSelf: 'center' }}>
          Aligned flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        brUtilsDisplay="flex"
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '100px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ alignSelf: 'baseline' }}>
          Aligned flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <BrElement brUtilsDisplay="flex" style={{ height: '100px' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ alignSelf: 'stretch' }}>
          Aligned flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const Fill: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex">
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ fill: true }}>
          Flex item with a lot of content
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ fill: true }}>
          Flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ fill: true }}>
          Flex item
        </BrElement>
      </BrElement>
    </div>
  )
}

export const GrowAndShrink: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex">
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ grow: true }}>
          Flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Third flex item</BrElement>
      </BrElement>
      <hr />
      <BrElement brUtilsDisplay="flex">
        <BrElement brUtilsSpacing={{ padding: '2' }} className="w-100">
          Flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }} brUtilsFlex={{ shrink: true }}>
          Flex item
        </BrElement>
      </BrElement>
    </div>
  )
}

export const AutoMargins: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ margin: { bottom: '3' } }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>

      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ margin: { bottom: '3' } }}>
        <BrElement brUtilsSpacing={{ margin: { end: 'auto' }, padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>

      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ margin: { bottom: '3' } }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ margin: { start: 'auto' } }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const WithAlignItems: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ column: true, alignItems: 'start' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <BrElement brUtilsSpacing={{ margin: { bottom: 'auto' }, padding: '2' }}>
          Flex item
        </BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>

      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ column: true, alignItems: 'end' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ margin: { top: 'auto' }, padding: '2' }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const Wrap: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ wrap: 'nowrap' }} style={{ width: '8rem' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      </BrElement>
      <hr />
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ wrap: 'wrap' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 4</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 5</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 6</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 7</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 8</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 9</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 10</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 11</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 12</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 13</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 14</BrElement>
      </BrElement>
      <hr />
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ wrap: 'wrap-reverse' }}>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 1</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 2</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 3</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 4</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 5</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 6</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 7</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 8</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 9</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 10</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 11</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 12</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 13</BrElement>
        <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item 14</BrElement>
      </BrElement>
    </div>
  )
}

export const Order: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement brUtilsDisplay="flex" brUtilsFlex={{ wrap: 'nowrap' }}>
        <BrElement brUtilsFlex={{ order: 3 }} brUtilsSpacing={{ padding: '2' }}>
          First flex item
        </BrElement>
        <BrElement brUtilsFlex={{ order: 2 }} brUtilsSpacing={{ padding: '2' }}>
          Second flex item
        </BrElement>
        <BrElement brUtilsFlex={{ order: 1 }} brUtilsSpacing={{ padding: '2' }}>
          Third flex item
        </BrElement>
      </BrElement>
    </div>
  )
}

export const AlignContent: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'start', wrap: 'wrap' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'end', wrap: 'wrap' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'center', wrap: 'wrap' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'between', wrap: 'wrap' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'around', wrap: 'wrap' }}
        brUtilsSpacing={{ margin: { bottom: '3' } }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        brUtilsDisplay="flex"
        brUtilsFlex={{ alignContent: 'stretch', wrap: 'wrap' }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
    </div>
  )
}

function FlexItems() {
  return (
    <Fragment>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
      <BrElement brUtilsSpacing={{ padding: '2' }}>Flex item</BrElement>
    </Fragment>
  )
}
