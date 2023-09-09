import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '@jb-garage/bootstrap-react/storybook/components/PlaceholderImgSvg'
import { Meta, StoryFn } from '@storybook/react'
import { CSSProperties } from 'react'

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
      <BrElement bsJs={{ bsJsAll: { border: true } }} />
      <BrElement bsJs={{ bsJsAll: { border: { top: true } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { end: true } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { bottom: true } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { start: true } } }} />
    </div>
  )
}

export const Subtractive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ bsJsAll: { border: false } }} />
      <BrElement bsJs={{ bsJsAll: { border: { top: false } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { end: false } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { bottom: false } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { start: false } } }} />
    </div>
  )
}

export const Color: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement bsJs={{ bsJsAll: { border: { color: 'primary' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'primary-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'secondary' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'secondary-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'success' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'success-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'danger' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'danger-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'warning' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'warning-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'info' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'info-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'light' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'light-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'dark' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'dark-subtle' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'black' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { color: 'white' } } }} />
      <hr />
      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '4' } } } }}>
        <Label htmlFor="exampleFormControlInput1">Email address</Label>
        <Input
          type="email"
          bsJs={{ bsJsAll: { border: { color: 'success' } } }}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </BrElement>

      <BrElement
        bsJs={{
          bsJsAll: {
            border: { bottom: true, color: 'danger' },
            color: 'danger',
            spacing: {
              margin: { bottom: '4' },
              padding: { bottom: '2' }
            }
          }
        }}
        className="h4"
      >
        Dangerous heading
      </BrElement>

      <BrElement
        bsJs={{
          bsJsAll: {
            background: { color: 'info', opacity: '10' },
            border: { color: 'info', start: false, end: { radius: true } },
            spacing: {
              padding: '3'
            }
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
          bsJsAll: {
            border: { color: 'success' },
            spacing: {
              margin: { bottom: '2' },
              padding: '2'
            }
          }
        }}
      >
        This is default success border
      </BrElement>
      <BrElement
        bsJs={{ bsJsAll: { border: { color: 'success' }, spacing: { padding: '2' } } }}
        style={{ '--bs-border-opacity': '0.5' } as CSSProperties}
      >
        This is 50% opacity success border
      </BrElement>
      <hr />
      <BrElement
        bsJs={{
          bsJsAll: {
            border: { color: 'success' },
            spacing: { margin: { bottom: '2' }, padding: '2' }
          }
        }}
      >
        This is default success border
      </BrElement>
      <BrElement
        bsJs={{
          bsJsAll: {
            border: { color: 'success', opacity: '75' },
            spacing: { margin: { bottom: '2' }, padding: '2' }
          }
        }}
      >
        This is 75% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          bsJsAll: {
            border: { color: 'success', opacity: '50' },
            spacing: { margin: { bottom: '2' }, padding: '2' }
          }
        }}
      >
        This is 50% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          bsJsAll: {
            border: { color: 'success', opacity: '25' },
            spacing: { margin: { bottom: '2' }, padding: '2' }
          }
        }}
      >
        This is 25% opacity success border
      </BrElement>
      <BrElement
        bsJs={{
          bsJsAll: {
            border: { color: 'success', opacity: '10' },
            spacing: { margin: { bottom: '2' }, padding: '2' }
          }
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
      <BrElement bsJs={{ bsJsAll: { border: { width: '1' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { width: '2' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { width: '3' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { width: '4' } } }} />
      <BrElement bsJs={{ bsJsAll: { border: { width: '5' } } }} />
    </div>
  )
}

export const Radius: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: true } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { top: { radius: true } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { end: { radius: true } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { bottom: { radius: true } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { start: { radius: true } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 'circle' } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 'pill' } } }} width={150} />
    </div>
  )
}

export const RadiusSizes: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 0 } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 1 } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 2 } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 3 } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 4 } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 5 } } }} />
      <hr />
      <RadiusExample bsJs={{ bsJsAll: { border: { bottom: { radius: 1 } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { start: { radius: 2 } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { end: { radius: 'circle' } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { start: { radius: 'pill' } } } }} />
      <RadiusExample bsJs={{ bsJsAll: { border: { radius: 5, top: { radius: 0 } } } }} />
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
