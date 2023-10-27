import { Meta, StoryFn } from '@storybook/react'
import { Fragment } from 'react'

import { BrElement } from './BrElement'

const meta: Meta = {
  title: 'Flex',
  tags: ['autodocs']
}

export default meta
export const EnableFlexBehaviors: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex', spacing: { padding: '2' } }}>
        I'm a flexbox container!
      </BrElement>
      <hr />
      <BrElement bsJs={{ display: 'inline-flex', spacing: { padding: '2' } }}>
        I'm an inline flexbox container!
      </BrElement>
    </div>
  )
}

export const Direction: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { row: true },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
      </BrElement>
      <BrElement bsJs={{ display: 'flex', flex: { row: 'reverse' } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { column: true },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
      </BrElement>
      <BrElement bsJs={{ display: 'flex', flex: { column: 'reverse' } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
      </BrElement>
    </div>
  )
}

export const JustifyContent: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'start' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Start
        </BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'end' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          End
        </BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'center' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Center
        </BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'between' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Between
        </BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'around' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Around
        </BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { justifyContent: 'evenly' },
          spacing: { margin: { bottom: '3' } }
        }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Justify
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
          Content
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="bd-highlight">
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
        bsJs={{
          display: 'flex',
          flex: { alignItems: 'start' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignItems: 'end' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignItems: 'center' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignItems: 'baseline' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{ display: 'flex', flex: { alignItems: 'stretch' } }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const AlignSelf: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { alignSelf: 'start' }, spacing: { padding: '2' } }}>
          Aligned flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { alignSelf: 'end' }, spacing: { padding: '2' } }}>
          Aligned flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { alignSelf: 'center' }, spacing: { padding: '2' } }}>
          Aligned flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement
        bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}
        style={{ height: '100px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { alignSelf: 'baseline' }, spacing: { padding: '2' } }}>
          Aligned flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <BrElement bsJs={{ display: 'flex' }} style={{ height: '100px' }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { alignSelf: 'stretch' }, spacing: { padding: '2' } }}>
          Aligned flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const Fill: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex' }}>
        <BrElement bsJs={{ flex: { fill: true }, spacing: { padding: '2' } }}>
          Flex item with a lot of content
        </BrElement>
        <BrElement bsJs={{ flex: { fill: true }, spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ flex: { fill: true }, spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const GrowAndShrink: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex' }}>
        <BrElement bsJs={{ flex: { grow: true }, spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Third flex item</BrElement>
      </BrElement>
      <hr />
      <BrElement bsJs={{ display: 'flex' }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }} className="w-100">
          Flex item
        </BrElement>
        <BrElement bsJs={{ flex: { shrink: true }, spacing: { padding: '2' } }}>
          Flex item
        </BrElement>
      </BrElement>
    </div>
  )
}

export const AutoMargins: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>

      <BrElement bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}>
        <BrElement bsJs={{ spacing: { margin: { end: 'auto' }, padding: '2' } }}>
          Flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>

      <BrElement bsJs={{ display: 'flex', spacing: { margin: { bottom: '3' } } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { margin: { start: 'auto' } } }}>Flex item</BrElement>
      </BrElement>
    </div>
  )
}

export const WithAlignItems: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { column: true, alignItems: 'start' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <BrElement bsJs={{ spacing: { margin: { bottom: 'auto' }, padding: '2' } }}>
          Flex item
        </BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>

      <BrElement
        bsJs={{
          display: 'flex',
          flex: { column: true, alignItems: 'end' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { margin: { top: 'auto' }, padding: '2' } }}>
          Flex item
        </BrElement>
      </BrElement>
    </div>
  )
}

export const Wrap: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex', flex: { wrap: 'nowrap' } }} style={{ width: '8rem' }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      </BrElement>
      <hr />
      <BrElement bsJs={{ display: 'flex', flex: { wrap: 'wrap' } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 4</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 5</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 6</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 7</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 8</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 9</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 10</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 11</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 12</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 13</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 14</BrElement>
      </BrElement>
      <hr />
      <BrElement bsJs={{ display: 'flex', flex: { wrap: 'wrap-reverse' } }}>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 1</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 2</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 3</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 4</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 5</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 6</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 7</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 8</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 9</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 10</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 11</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 12</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 13</BrElement>
        <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item 14</BrElement>
      </BrElement>
    </div>
  )
}

export const Order: StoryFn = () => {
  return (
    <div className="bd-example-flex">
      <BrElement bsJs={{ display: 'flex', flex: { wrap: 'nowrap' } }}>
        <BrElement bsJs={{ flex: { order: 3 }, spacing: { padding: '2' } }}>
          First flex item
        </BrElement>
        <BrElement bsJs={{ flex: { order: 2 }, spacing: { padding: '2' } }}>
          Second flex item
        </BrElement>
        <BrElement bsJs={{ flex: { order: 1 }, spacing: { padding: '2' } }}>
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
        bsJs={{
          display: 'flex',
          flex: { alignContent: 'start', wrap: 'wrap' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignContent: 'end', wrap: 'wrap' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignContent: 'center', wrap: 'wrap' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignContent: 'between', wrap: 'wrap' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          display: 'flex',
          flex: { alignContent: 'around', wrap: 'wrap' },
          spacing: { margin: { bottom: '3' } }
        }}
        style={{ height: '200px' }}
      >
        <FlexItems />
      </BrElement>
      <hr />
      <BrElement
        bsJs={{ display: 'flex', flex: { alignContent: 'stretch', wrap: 'wrap' } }}
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
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
      <BrElement bsJs={{ spacing: { padding: '2' } }}>Flex item</BrElement>
    </Fragment>
  )
}
