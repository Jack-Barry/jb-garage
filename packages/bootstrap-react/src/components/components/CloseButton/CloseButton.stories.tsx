import { Meta, StoryFn } from '@storybook/react'
import CloseButton from './CloseButton'
import { BrElement } from '../../utils/BrElement'

const meta: Meta = {
  title: 'Close Button',
  tags: ['autodocs']
}

export default meta

export const Example: StoryFn = () => {
  return <CloseButton />
}

export const DisabledState: StoryFn = () => {
  return <CloseButton disabled />
}

export const DarkVariant: StoryFn = () => {
  return (
    <BrElement brTheme="dark">
      <CloseButton />
      <CloseButton disabled />
    </BrElement>
  )
}
