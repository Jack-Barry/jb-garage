import { Meta, StoryFn } from '@storybook/react'

import Input from './Input'
import Label from './Label'

const meta: Meta = {
  title: 'Range',
  tags: ['autodocs']
}

export default meta
export const Overview: StoryFn = () => {
  return (
    <div>
      <Label htmlFor="customRange1">Example range</Label>
      <Input type="range" id="customRange1" />
    </div>
  )
}

export const Disabled: StoryFn = () => {
  return (
    <div>
      <Label htmlFor="disabledRange">Disabled range</Label>
      <Input type="range" id="disabledRange" disabled />
    </div>
  )
}

export const MinAndMax: StoryFn = () => {
  return (
    <div>
      <Label htmlFor="customRange2">Example range</Label>
      <Input type="range" id="customRange2" min={0} max={5} />
    </div>
  )
}

export const Steps: StoryFn = () => {
  return (
    <div>
      <Label htmlFor="customRange3">Example range</Label>
      <Input type="range" id="customRange3" min={0} max={5} step={0.5} />
    </div>
  )
}
