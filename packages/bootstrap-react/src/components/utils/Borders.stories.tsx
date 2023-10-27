import { Meta, StoryFn } from '@storybook/react'
import { CSSProperties } from 'react'

import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '../../storybook/components/PlaceholderImgSvg'
import Image from '../content/Image/Image'
import Input from '../forms/FormControl/Input'
import Label from '../forms/FormControl/Label'

import { BrElement, BrElementProps } from './BrElement'

const meta: Meta = {
  title: 'Borders',
  tags: ['autodocs']
}

export default meta
export const Additive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ border: true }} />
      <BrElement bsJs={{ border: { top: true } }} />
      <BrElement bsJs={{ border: { end: true } }} />
      <BrElement bsJs={{ border: { bottom: true } }} />
      <BrElement bsJs={{ border: { start: true } }} />
    </div>
  )
}

export const Subtractive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ border: false }} />
      <BrElement bsJs={{ border: { top: false } }} />
      <BrElement bsJs={{ border: { end: false } }} />
      <BrElement bsJs={{ border: { bottom: false } }} />
      <BrElement bsJs={{ border: { start: false } }} />
    </div>
  )
}

export const Color: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ border: { color: 'primary' } }} />
      <BrElement bsJs={{ border: { color: 'primary-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'secondary' } }} />
      <BrElement bsJs={{ border: { color: 'secondary-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'success' } }} />
      <BrElement bsJs={{ border: { color: 'success-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'danger' } }} />
      <BrElement bsJs={{ border: { color: 'danger-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'warning' } }} />
      <BrElement bsJs={{ border: { color: 'warning-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'info' } }} />
      <BrElement bsJs={{ border: { color: 'info-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'light' } }} />
      <BrElement bsJs={{ border: { color: 'light-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'dark' } }} />
      <BrElement bsJs={{ border: { color: 'dark-subtle' } }} />
      <BrElement bsJs={{ border: { color: 'black' } }} />
      <BrElement bsJs={{ border: { color: 'white' } }} />
      <hr />
      <BrElement bsJs={{ spacing: { margin: { bottom: '4' } } }}>
        <Label htmlFor="exampleFormControlInput1">Email address</Label>
        <Input
          type="email"
          bsJs={{ border: { color: 'success' } }}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </BrElement>

      <BrElement
        bsJs={{
          border: { bottom: true, color: 'danger' },
          color: 'danger',
          spacing: {
            margin: { bottom: '4' },
            padding: { bottom: '2' }
          }
        }}
        className="h4"
      >
        Dangerous heading
      </BrElement>

      <BrElement
        bsJs={{
          background: { color: 'info', opacity: '10' },
          border: { color: 'info', start: false, end: { radius: true } },
          spacing: {
            padding: '3'
          }
        }}
      >
        Changing border color and width
      </BrElement>
    </div>
  )
}

export const Opacity: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement
        bsJs={{
          border: { color: 'success' },
          spacing: {
            margin: { bottom: '2' },
            padding: '2'
          }
        }}
      >
        This is default success border
      </BrElement>
      <BrElement
        bsJs={{ border: { color: 'success' }, spacing: { padding: '2' } }}
        style={{ '--bs-border-opacity': '0.5' } as CSSProperties}
      >
        This is 50% opacity success border
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          border: { color: 'success' },
          spacing: { margin: { bottom: '2' }, padding: '2' }
        }}
      >
        This is default success border
      </BrElement>
      <BrElement
        bsJs={{
          border: { color: 'success', opacity: '75' },
          spacing: { margin: { bottom: '2' }, padding: '2' }
        }}
      >
        This is 75% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          border: { color: 'success', opacity: '50' },
          spacing: { margin: { bottom: '2' }, padding: '2' }
        }}
      >
        This is 50% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          border: { color: 'success', opacity: '25' },
          spacing: { margin: { bottom: '2' }, padding: '2' }
        }}
      >
        This is 25% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          border: { color: 'success', opacity: '10' },
          spacing: { margin: { bottom: '2' }, padding: '2' }
        }}
      >
        This is 10% opacity success border
      </BrElement>
    </div>
  )
}

export const Width: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ border: { width: '1' } }} />
      <BrElement bsJs={{ border: { width: '2' } }} />
      <BrElement bsJs={{ border: { width: '3' } }} />
      <BrElement bsJs={{ border: { width: '4' } }} />
      <BrElement bsJs={{ border: { width: '5' } }} />
    </div>
  )
}

export const Radius: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample bsJs={{ border: { radius: true } }} />
      <RadiusExample bsJs={{ border: { top: { radius: true } } }} />
      <RadiusExample bsJs={{ border: { end: { radius: true } } }} />
      <RadiusExample bsJs={{ border: { bottom: { radius: true } } }} />
      <RadiusExample bsJs={{ border: { start: { radius: true } } }} />
      <RadiusExample bsJs={{ border: { radius: 'circle' } }} />
      <RadiusExample bsJs={{ border: { radius: 'pill' } }} width={150} />
    </div>
  )
}

export const RadiusSizes: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample bsJs={{ border: { radius: 0 } }} />
      <RadiusExample bsJs={{ border: { radius: 1 } }} />
      <RadiusExample bsJs={{ border: { radius: 2 } }} />
      <RadiusExample bsJs={{ border: { radius: 3 } }} />
      <RadiusExample bsJs={{ border: { radius: 4 } }} />
      <RadiusExample bsJs={{ border: { radius: 5 } }} />
      <hr />
      <RadiusExample bsJs={{ border: { bottom: { radius: 1 } } }} />
      <RadiusExample bsJs={{ border: { start: { radius: 2 } } }} />
      <RadiusExample bsJs={{ border: { end: { radius: 'circle' } } }} />
      <RadiusExample bsJs={{ border: { start: { radius: 'pill' } } }} />
      <RadiusExample bsJs={{ border: { radius: 5, top: { radius: 0 } } }} />
    </div>
  )
}

function RadiusExample(
  props: { width?: number; height?: number } & Pick<BrElementProps<'svg'>, 'bsJs'>
) {
  const { width = 75, height = 75, bsJs } = props

  return (
    <Image bsJs={bsJs} {...placeholderImgSvgProps({ width, height })}>
      <PlaceholderImgSvgChildren text={`${width}x${height}`} />
    </Image>
  )
}
