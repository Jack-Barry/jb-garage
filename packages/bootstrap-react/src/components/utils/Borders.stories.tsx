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
      <BrElement brUtilsBorder />
      <BrElement brUtilsBorder={{ top: true }} />
      <BrElement brUtilsBorder={{ end: true }} />
      <BrElement brUtilsBorder={{ bottom: true }} />
      <BrElement brUtilsBorder={{ start: true }} />
    </div>
  )
}

export const Subtractive: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brUtilsBorder={false} />
      <BrElement brUtilsBorder={{ top: false }} />
      <BrElement brUtilsBorder={{ end: false }} />
      <BrElement brUtilsBorder={{ bottom: false }} />
      <BrElement brUtilsBorder={{ start: false }} />
    </div>
  )
}

export const Color: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brUtilsBorder={{ color: 'primary' }} />
      <BrElement brUtilsBorder={{ color: 'primary-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'secondary' }} />
      <BrElement brUtilsBorder={{ color: 'secondary-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'success' }} />
      <BrElement brUtilsBorder={{ color: 'success-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'danger' }} />
      <BrElement brUtilsBorder={{ color: 'danger-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'warning' }} />
      <BrElement brUtilsBorder={{ color: 'warning-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'info' }} />
      <BrElement brUtilsBorder={{ color: 'info-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'light' }} />
      <BrElement brUtilsBorder={{ color: 'light-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'dark' }} />
      <BrElement brUtilsBorder={{ color: 'dark-subtle' }} />
      <BrElement brUtilsBorder={{ color: 'black' }} />
      <BrElement brUtilsBorder={{ color: 'white' }} />
      <hr />
      <BrElement brMargin={{ bottom: 4 }}>
        <Label htmlFor="exampleFormControlInput1">Email address</Label>
        <Input
          type="email"
          brUtilsBorder={{ color: 'success' }}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </BrElement>

      <BrElement
        brPadding={{ bottom: 2 }}
        brMargin={{ bottom: 4 }}
        brUtilsBorder={{ bottom: true, color: 'danger' }}
        className="h4 text-danger"
      >
        Dangerous heading
      </BrElement>

      <BrElement
        brPadding={3}
        brUtilsBorder={{ color: 'info', start: false, end: { radius: true } }}
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
      <BrElement brUtilsBorder={{ color: 'success' }} brPadding={2} brMargin={{ bottom: 2 }}>
        This is default success border
      </BrElement>
      <BrElement
        brUtilsBorder={{ color: 'success' }}
        brPadding={2}
        style={{ '--bs-border-opacity': '0.5' } as CSSProperties}
      >
        This is 50% opacity success border
      </BrElement>
      <hr />
      <BrElement brUtilsBorder={{ color: 'success' }} brPadding={2} brMargin={{ bottom: 2 }}>
        This is default success border
      </BrElement>
      <BrElement
        brUtilsBorder={{ color: 'success', opacity: '75' }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 75% opacity success border
      </BrElement>
      <BrElement
        brUtilsBorder={{ color: 'success', opacity: '50' }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 50% opacity success border
      </BrElement>
      <BrElement
        brUtilsBorder={{ color: 'success', opacity: '25' }}
        brPadding={2}
        brMargin={{ bottom: 2 }}
      >
        This is 25% opacity success border
      </BrElement>
      <BrElement brUtilsBorder={{ color: 'success', opacity: '10' }} brPadding={2}>
        This is 10% opacity success border
      </BrElement>
    </div>
  )
}

export const Width: StoryFn = () => {
  return (
    <div className="bd-example-border-utils">
      <BrElement brUtilsBorder={{ width: '1' }} />
      <BrElement brUtilsBorder={{ width: '2' }} />
      <BrElement brUtilsBorder={{ width: '3' }} />
      <BrElement brUtilsBorder={{ width: '4' }} />
      <BrElement brUtilsBorder={{ width: '5' }} />
    </div>
  )
}

export const Radius: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample brUtilsBorder={{ radius: true }} />
      <RadiusExample brUtilsBorder={{ top: { radius: true } }} />
      <RadiusExample brUtilsBorder={{ end: { radius: true } }} />
      <RadiusExample brUtilsBorder={{ bottom: { radius: true } }} />
      <RadiusExample brUtilsBorder={{ start: { radius: true } }} />
      <RadiusExample brUtilsBorder={{ radius: 'circle' }} />
      <RadiusExample brUtilsBorder={{ radius: 'pill' }} width={150} />
    </div>
  )
}

export const RadiusSizes: StoryFn = () => {
  return (
    <div className="bd-example-rounded-utils">
      <RadiusExample brUtilsBorder={{ radius: 0 }} />
      <RadiusExample brUtilsBorder={{ radius: 1 }} />
      <RadiusExample brUtilsBorder={{ radius: 2 }} />
      <RadiusExample brUtilsBorder={{ radius: 3 }} />
      <RadiusExample brUtilsBorder={{ radius: 4 }} />
      <RadiusExample brUtilsBorder={{ radius: 5 }} />
      <hr />
      <RadiusExample brUtilsBorder={{ bottom: { radius: 1 } }} />
      <RadiusExample brUtilsBorder={{ start: { radius: 2 } }} />
      <RadiusExample brUtilsBorder={{ end: { radius: 'circle' } }} />
      <RadiusExample brUtilsBorder={{ start: { radius: 'pill' } }} />
      <RadiusExample brUtilsBorder={{ radius: 5, top: { radius: 0 } }} />
    </div>
  )
}

function RadiusExample(
  props: { width?: number; height?: number } & Pick<BrElementProps<'svg'>, 'brUtilsBorder'>
) {
  const { width = 75, height = 75, brUtilsBorder: brBorder } = props

  return (
    <Image brUtilsBorder={brBorder} {...placeholderImgSvgProps({ width, height })}>
      <PlaceholderImgSvgChildren text={`${width}x${height}`} />
    </Image>
  )
}
