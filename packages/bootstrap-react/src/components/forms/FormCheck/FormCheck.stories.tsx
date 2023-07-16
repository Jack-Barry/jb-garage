import type { Meta, StoryFn } from '@storybook/react'

import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import FormCheck from './FormCheck'
import FormCheckInput from './FormCheckInput'
import FormCheckLabel from './FormCheckLabel'

const meta: Meta<typeof FormCheck> = {
  component: FormCheck,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
export const BaseExample: StoryFn = () => {
  return (
    <div>
      <FormCheck
        inputProps={{ id: 'flexCheckDefault' }}
        labelProps={{ children: 'Default checkbox' }}
      />
      <FormCheck
        inputProps={{ id: 'flexCheckChecked', defaultChecked: true }}
        labelProps={{ children: 'Checked checkbox' }}
      />
    </div>
  )
}

export const Indeterminate: StoryFn = () => {
  return (
    <FormCheck
      inputProps={{
        id: 'flexCheckIndeterminate',
        ref: (input) => {
          if (!input) {
            return
          }

          input.indeterminate = true
        }
      }}
      labelProps={{ children: 'Indeterminate checkbox' }}
    />
  )
}
Indeterminate.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#indeterminate')
]

export const Disabled: StoryFn = () => {
  return (
    <div>
      <FormCheck
        inputProps={{
          id: 'flexCheckIndeterminateDisabled',
          disabled: true,
          ref: (input) => {
            if (!input) {
              return
            }

            input.indeterminate = true
          }
        }}
        labelProps={{
          children: 'Disabled indeterminate checkbox'
        }}
      />
      <FormCheck
        inputProps={{ id: 'flexCheckDisabled', disabled: true }}
        labelProps={{ children: 'Disabled checkbox' }}
      />
      <FormCheck
        inputProps={{ id: 'flexCheckCheckedDisabled', defaultChecked: true, disabled: true }}
        labelProps={{ children: 'Disabled checked checkbox' }}
      />
    </div>
  )
}
Disabled.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#disabled')
]

export const Radios: StoryFn = () => {
  return (
    <div>
      <FormCheck
        inputProps={{ type: 'radio', name: 'flexRadioDefault', id: 'flexRadioDefault1' }}
        labelProps={{ children: 'Default radio' }}
      />
      <FormCheck
        inputProps={{
          type: 'radio',
          name: 'flexRadioDefault',
          id: 'flexRadioDefault2',
          defaultChecked: true
        }}
        labelProps={{ children: 'Default checked radio' }}
      />
    </div>
  )
}
Radios.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios')
]

export const RadiosDisabled: StoryFn = () => {
  return (
    <div>
      <FormCheck
        inputProps={{
          type: 'radio',
          name: 'flexRadioDisabled',
          id: 'flexRadioDisabled1',
          disabled: true
        }}
        labelProps={{ children: 'Disabled radio' }}
      />
      <FormCheck
        inputProps={{
          type: 'radio',
          name: 'flexRadioDisabled',
          id: 'flexRadioDisabled2',
          defaultChecked: true,
          disabled: true
        }}
        labelProps={{ children: 'Disabled checked radio' }}
      />
    </div>
  )
}
RadiosDisabled.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#disabled-1')
]

export const Switches: StoryFn = () => {
  return (
    <div>
      <FormCheck
        wrapperProps={{ className: 'form-switch' }}
        inputProps={{
          id: 'flexSwitchCheckDefault',
          role: 'switch'
        }}
        labelProps={{ children: 'Default switch checkbox input' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-switch' }}
        inputProps={{
          id: 'flexSwitchCheckChecked',
          defaultChecked: true,
          role: 'switch'
        }}
        labelProps={{ children: 'Checked switch checkbox input' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-switch' }}
        inputProps={{
          id: 'flexSwitchCheckDisabled',
          role: 'switch',
          disabled: true
        }}
        labelProps={{ children: 'Disabled switch checkbox input' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-switch' }}
        inputProps={{
          id: 'flexSwitchCheckDisabled',
          defaultChecked: true,
          role: 'switch',
          disabled: true
        }}
        labelProps={{ children: 'Disabled checked switch checkbox input' }}
      />
    </div>
  )
}
Switches.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches')
]

export const Inline: StoryFn = () => {
  return (
    <div>
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ id: 'inlineCheckbox1', value: 'option1' }}
        labelProps={{ children: '1' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ id: 'inlineCheckbox2', value: 'option2' }}
        labelProps={{ children: '2' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ id: 'inlineCheckbox3', value: 'option3', disabled: true }}
        labelProps={{ children: '3 (disabled)' }}
      />
      <hr />
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ type: 'radio', id: 'inlineRadio1', value: 'option1' }}
        labelProps={{ children: '1' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ type: 'radio', id: 'inlineRadio2', value: 'option2' }}
        labelProps={{ children: '2' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-check-inline' }}
        inputProps={{ type: 'radio', id: 'inlineRadio3', value: 'option3', disabled: true }}
        labelProps={{ children: '3 (disabled)' }}
      />
    </div>
  )
}
Inline.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#inline')
]

export const Reverse: StoryFn = () => {
  return (
    <div>
      <FormCheck
        wrapperProps={{ className: 'form-check-reverse' }}
        inputProps={{ id: 'reverseCheck1' }}
        labelProps={{ children: 'Reverse checkbox' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-check-reverse' }}
        inputProps={{ id: 'reverseCheck2', disabled: true }}
        labelProps={{ children: 'Disabled reverse checkbox' }}
      />
      <FormCheck
        wrapperProps={{ className: 'form-switch form-check-reverse' }}
        inputProps={{ id: 'flexSwitchCheckReverse', disabled: true }}
        labelProps={{ children: 'Reverse switch checkbox input' }}
      />
    </div>
  )
}
Reverse.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#reverse')
]

export const WithoutLabels: StoryFn = () => {
  return (
    <div>
      <div>
        <FormCheckInput id="checkboxNoLabel" aria-label="..." />
      </div>
      <div>
        <FormCheckInput type="radio" id="radioNoLabel" aria-label="..." />
      </div>
    </div>
  )
}
WithoutLabels.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#without-labels')
]

export const ToggleButtons: StoryFn = () => {
  return (
    <div>
      <FormCheck
        inputProps={{ className: 'btn-check', id: 'btn-check', autoComplete: 'off' }}
        labelProps={{ className: 'btn btn-primary', children: 'Single toggle' }}
      />
      <hr />
      <FormCheck
        inputProps={{
          className: 'btn-check',
          id: 'btn-check-2',
          defaultChecked: true,
          autoComplete: 'off'
        }}
        labelProps={{ className: 'btn btn-primary', children: 'Checked' }}
      />
      <hr />
      <FormCheck
        inputProps={{
          className: 'btn-check',
          id: 'btn-check-3',
          disabled: true,
          autoComplete: 'off'
        }}
        labelProps={{ className: 'btn btn-primary', children: 'Disabled' }}
      />
    </div>
  )
}
ToggleButtons.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#toggle-buttons')
]

export const RadioToggleButtons: StoryFn = () => {
  return (
    <div className="d-flex gap-1">
      <FormCheckInput
        type="radio"
        className="btn-check"
        name="options"
        id="option1"
        autoComplete="off"
        defaultChecked
      />
      <FormCheckLabel className="btn btn-secondary" htmlFor="option1">
        Checked
      </FormCheckLabel>
      <FormCheckInput
        type="radio"
        className="btn-check"
        name="options"
        id="option2"
        autoComplete="off"
      />
      <FormCheckLabel className="btn btn-secondary" htmlFor="option2">
        Radio
      </FormCheckLabel>
      <FormCheckInput
        type="radio"
        className="btn-check"
        name="options"
        id="option3"
        autoComplete="off"
        disabled
      />
      <FormCheckLabel className="btn btn-secondary" htmlFor="option3">
        Disabled
      </FormCheckLabel>
      <FormCheckInput
        type="radio"
        className="btn-check"
        name="options"
        id="option4"
        autoComplete="off"
      />
      <FormCheckLabel className="btn btn-secondary" htmlFor="option4">
        Radio
      </FormCheckLabel>
    </div>
  )
}
ToggleButtons.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#radio-toggle-buttons')
]

export const OutlinedStyles: StoryFn = () => {
  return (
    <div className="d-flex flex-column gap-1">
      <div>
        <FormCheckInput className="btn-check" id="btn-check-outlined" autoComplete="off" />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btn-check-outlined">
          Single toggle
        </FormCheckLabel>
      </div>
      <div>
        <FormCheckInput
          className="btn-check"
          id="btn-check-2-outlined"
          defaultChecked
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">
          Checked
        </FormCheckLabel>
      </div>
      <div className="d-flex gap-1">
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="success-outlined"
          autoComplete="off"
          defaultChecked
        />
        <FormCheckLabel className="btn btn-outline-success" htmlFor="success-outlined">
          Checked success radio
        </FormCheckLabel>
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="danger-outlined"
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-danger" htmlFor="danger-outlined">
          Danger radio
        </FormCheckLabel>
      </div>
    </div>
  )
}
