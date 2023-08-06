import { Meta, StoryFn } from '@storybook/react'
import { BrElement, BrElementProps } from './BrElement'
import Label from '../forms/FormControl/Label'
import Input from '../forms/FormControl/Input'
import { CSSProperties } from 'react'
import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '@jb-garage/bootstrap-react/storybook/components/PlaceholderImgSvg'
import Image from '../content/Image/Image'

const meta: Meta = {
  title: 'Borders',
  tags: ['autodocs']
}

export default meta
export const Additive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brBorder />
      <BrElement brBorder={{ top: true }} />
      <BrElement brBorder={{ end: true }} />
      <BrElement brBorder={{ bottom: true }} />
      <BrElement brBorder={{ start: true }} />
    </div>
  )
}

export const Subtractive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brBorder={false} />
      <BrElement brBorder={{ top: false }} />
      <BrElement brBorder={{ end: false }} />
      <BrElement brBorder={{ bottom: false }} />
      <BrElement brBorder={{ start: false }} />
    </div>
  )
}

export const Color: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brBorder={{ color: 'primary' }} />
      <BrElement brBorder={{ color: 'primary-subtle' }} />
      <BrElement brBorder={{ color: 'secondary' }} />
      <BrElement brBorder={{ color: 'secondary-subtle' }} />
      <BrElement brBorder={{ color: 'success' }} />
      <BrElement brBorder={{ color: 'success-subtle' }} />
      <BrElement brBorder={{ color: 'danger' }} />
      <BrElement brBorder={{ color: 'danger-subtle' }} />
      <BrElement brBorder={{ color: 'warning' }} />
      <BrElement brBorder={{ color: 'warning-subtle' }} />
      <BrElement brBorder={{ color: 'info' }} />
      <BrElement brBorder={{ color: 'info-subtle' }} />
      <BrElement brBorder={{ color: 'light' }} />
      <BrElement brBorder={{ color: 'light-subtle' }} />
      <BrElement brBorder={{ color: 'dark' }} />
      <BrElement brBorder={{ color: 'dark-subtle' }} />
      <BrElement brBorder={{ color: 'black' }} />
      <BrElement brBorder={{ color: 'white' }} />
      <hr />
      <BrElement brMargin={{ bottom: 4 }}>
        <Label htmlFor="exampleFormControlInput1">Email address</Label>
        <Input
          type="email"
          brBorder={{ color: 'success' }}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </BrElement>

      <BrElement
        brPadding={{ bottom: 2 }}
        brMargin={{ bottom: 4 }}
        brBorder={{ bottom: true, color: 'danger' }}
        className="h4 text-danger"
      >
        Dangerous heading
      </BrElement>

      <BrElement
        brPadding={3}
        brBorder={{ color: 'info', start: false, end: { rounded: true } }}
        brUtilsBackground={{ color: 'info', opacity: '10' }}
      >
        Changing border color and width
      </BrElement>
    </div>
  )
}

export const Opacity: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement brBorder={{ color: 'success' }} brPadding={2} brMargin={{ bottom: 2 }}>
        This is default success border
      </BrElement>
      <BrElement
        brBorder={{ color: 'success' }}
        brPadding={2}
        style={{ '--bs-border-opacity': '0.5' } as CSSProperties}
      >
        This is 50% opacity success border
      </BrElement>
      <hr />
      <BrElement brBorder={{ color: 'success' }} brPadding={2} brMargin={{ bottom: 2 }}>
        This is default success border
      </BrElement>
      <BrElement
        brBorder={{ color: 'success', opacity: 75 }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 75% opacity success border
      </BrElement>
      <BrElement
        brBorder={{ color: 'success', opacity: 50 }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 50% opacity success border
      </BrElement>
      <BrElement
        brBorder={{ color: 'success', opacity: 25 }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 25% opacity success border
      </BrElement>
      <BrElement brBorder={{ color: 'success', opacity: 10 }} brPadding={2}>
        This is 10% opacity success border
      </BrElement>
    </div>
  )
}

export const Width: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brBorder={{ width: 1 }} />
      <BrElement brBorder={{ width: 2 }} />
      <BrElement brBorder={{ width: 3 }} />
      <BrElement brBorder={{ width: 4 }} />
      <BrElement brBorder={{ width: 5 }} />
    </div>
  )
}

export const Radius: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample brBorder={{ rounded: true }} />
      <RadiusExample brBorder={{ top: { rounded: true } }} />
      <RadiusExample brBorder={{ end: { rounded: true } }} />
      <RadiusExample brBorder={{ bottom: { rounded: true } }} />
      <RadiusExample brBorder={{ start: { rounded: true } }} />
      <RadiusExample brBorder={{ rounded: 'circle' }} />
      <RadiusExample brBorder={{ rounded: 'pill' }} width={150} />
    </div>
  )
}

export const RadiusSizes: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample brBorder={{ rounded: 0 }} />
      <RadiusExample brBorder={{ rounded: 1 }} />
      <RadiusExample brBorder={{ rounded: 2 }} />
      <RadiusExample brBorder={{ rounded: 3 }} />
      <RadiusExample brBorder={{ rounded: 4 }} />
      <RadiusExample brBorder={{ rounded: 5 }} />
      <hr />
      <RadiusExample brBorder={{ bottom: { rounded: 1 } }} />
      <RadiusExample brBorder={{ start: { rounded: 2 } }} />
      <RadiusExample brBorder={{ end: { rounded: 'circle' } }} />
      <RadiusExample brBorder={{ start: { rounded: 'pill' } }} />
      <RadiusExample brBorder={{ rounded: 5, top: { rounded: 0 } }} />
    </div>
  )
}

function RadiusExample(
  props: { width?: number; height?: number } & Pick<BrElementProps<'svg'>, 'brBorder'>
) {
  const { width = 75, height = 75, brBorder } = props

  return (
    <Image brBorder={brBorder} {...placeholderImgSvgProps({ width, height })}>
      <PlaceholderImgSvgChildren text={`${width}x${height}`} />
    </Image>
  )
}
