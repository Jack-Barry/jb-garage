import type { Meta, StoryFn } from '@storybook/react'
import Select from './Select'

const meta: Meta = {
  title: 'Select',
  tags: ['autodocs']
}

export default meta
export const Default: StoryFn = () => {
  return (
    <Select aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Select>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div className="bd-example">
      <Select brLg brMargin={{ bottom: 3 }} aria-label=".form-select-lg example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
      <Select brSm aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
      <hr />
      <Select multiple aria-label="multiple select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
      <hr />
      <Select size={3} aria-label="size 3 select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
    </div>
  )
}

export const Disabled: StoryFn = () => {
  return (
    <Select aria-label="Disabled select example" disabled>
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Select>
  )
}
