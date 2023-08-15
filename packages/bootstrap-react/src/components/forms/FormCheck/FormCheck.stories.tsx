import type { Meta, StoryFn } from '@storybook/react'

import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import FormCheck from './FormCheck'
import FormCheckInput from './FormCheckInput'
import FormCheckLabel from './FormCheckLabel'
import { BrElement } from '../../utils/BrElement'

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
        brFormCheckInputProps={{ id: 'flexCheckDefault' }}
        brFormCheckLabelProps={{ children: 'Default checkbox' }}
      />
      <FormCheck
        brFormCheckInputProps={{ id: 'flexCheckChecked', defaultChecked: true }}
        brFormCheckLabelProps={{ children: 'Checked checkbox' }}
      />
    </div>
  )
}

export const Indeterminate: StoryFn = () => {
  return (
    <FormCheck
      brFormCheckInputProps={{
        id: 'flexCheckIndeterminate',
        ref: (input) => {
          if (!input) {
            return
          }

          input.indeterminate = true
        }
      }}
      brFormCheckLabelProps={{ children: 'Indeterminate checkbox' }}
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
        brFormCheckInputProps={{
          id: 'flexCheckIndeterminateDisabled',
          disabled: true,
          ref: (input) => {
            if (!input) {
              return
            }

            input.indeterminate = true
          }
        }}
        brFormCheckLabelProps={{
          children: 'Disabled indeterminate checkbox'
        }}
      />
      <FormCheck
        brFormCheckInputProps={{ id: 'flexCheckDisabled', disabled: true }}
        brFormCheckLabelProps={{ children: 'Disabled checkbox' }}
      />
      <FormCheck
        brFormCheckInputProps={{
          id: 'flexCheckCheckedDisabled',
          defaultChecked: true,
          disabled: true
        }}
        brFormCheckLabelProps={{ children: 'Disabled checked checkbox' }}
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
        brFormCheckInputProps={{ type: 'radio', name: 'flexRadioDefault', id: 'flexRadioDefault1' }}
        brFormCheckLabelProps={{ children: 'Default radio' }}
      />
      <FormCheck
        brFormCheckInputProps={{
          type: 'radio',
          name: 'flexRadioDefault',
          id: 'flexRadioDefault2',
          defaultChecked: true
        }}
        brFormCheckLabelProps={{ children: 'Default checked radio' }}
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
        brFormCheckInputProps={{
          type: 'radio',
          name: 'flexRadioDisabled',
          id: 'flexRadioDisabled1',
          disabled: true
        }}
        brFormCheckLabelProps={{ children: 'Disabled radio' }}
      />
      <FormCheck
        brFormCheckInputProps={{
          type: 'radio',
          name: 'flexRadioDisabled',
          id: 'flexRadioDisabled2',
          defaultChecked: true,
          disabled: true
        }}
        brFormCheckLabelProps={{ children: 'Disabled checked radio' }}
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
        brFormCheckWrapperProps={{ className: 'form-switch' }}
        brFormCheckInputProps={{
          id: 'flexSwitchCheckDefault',
          role: 'switch'
        }}
        brFormCheckLabelProps={{ children: 'Default switch checkbox input' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-switch' }}
        brFormCheckInputProps={{
          id: 'flexSwitchCheckChecked',
          defaultChecked: true,
          role: 'switch'
        }}
        brFormCheckLabelProps={{ children: 'Checked switch checkbox input' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-switch' }}
        brFormCheckInputProps={{
          id: 'flexSwitchCheckDisabled',
          role: 'switch',
          disabled: true
        }}
        brFormCheckLabelProps={{ children: 'Disabled switch checkbox input' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-switch' }}
        brFormCheckInputProps={{
          id: 'flexSwitchCheckDisabled',
          defaultChecked: true,
          role: 'switch',
          disabled: true
        }}
        brFormCheckLabelProps={{ children: 'Disabled checked switch checkbox input' }}
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
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{ id: 'inlineCheckbox1', value: 'option1' }}
        brFormCheckLabelProps={{ children: '1' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{ id: 'inlineCheckbox2', value: 'option2' }}
        brFormCheckLabelProps={{ children: '2' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{ id: 'inlineCheckbox3', value: 'option3', disabled: true }}
        brFormCheckLabelProps={{ children: '3 (disabled)' }}
      />
      <hr />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{ type: 'radio', id: 'inlineRadio1', value: 'option1' }}
        brFormCheckLabelProps={{ children: '1' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{ type: 'radio', id: 'inlineRadio2', value: 'option2' }}
        brFormCheckLabelProps={{ children: '2' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-inline' }}
        brFormCheckInputProps={{
          type: 'radio',
          id: 'inlineRadio3',
          value: 'option3',
          disabled: true
        }}
        brFormCheckLabelProps={{ children: '3 (disabled)' }}
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
        brFormCheckWrapperProps={{ className: 'form-check-reverse' }}
        brFormCheckInputProps={{ id: 'reverseCheck1' }}
        brFormCheckLabelProps={{ children: 'Reverse checkbox' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-check-reverse' }}
        brFormCheckInputProps={{ id: 'reverseCheck2', disabled: true }}
        brFormCheckLabelProps={{ children: 'Disabled reverse checkbox' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ className: 'form-switch form-check-reverse' }}
        brFormCheckInputProps={{ id: 'flexSwitchCheckReverse', disabled: true }}
        brFormCheckLabelProps={{ children: 'Reverse switch checkbox input' }}
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
        brFormCheckInputProps={{ className: 'btn-check', id: 'btn-check', autoComplete: 'off' }}
        brFormCheckLabelProps={{ className: 'btn btn-primary', children: 'Single toggle' }}
      />
      <hr />
      <FormCheck
        brFormCheckInputProps={{
          className: 'btn-check',
          id: 'btn-check-2',
          defaultChecked: true,
          autoComplete: 'off'
        }}
        brFormCheckLabelProps={{ className: 'btn btn-primary', children: 'Checked' }}
      />
      <hr />
      <FormCheck
        brFormCheckInputProps={{
          className: 'btn-check',
          id: 'btn-check-3',
          disabled: true,
          autoComplete: 'off'
        }}
        brFormCheckLabelProps={{ className: 'btn btn-primary', children: 'Disabled' }}
      />
    </div>
  )
}
ToggleButtons.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#toggle-buttons')
]

export const RadioToggleButtons: StoryFn = () => {
  return (
    <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ gap: '1' }}>
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
    </BrElement>
  )
}
ToggleButtons.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/forms/checks-radios/#radio-toggle-buttons')
]

export const OutlinedStyles: StoryFn = () => {
  return (
    <BrElement brUtilsDisplay="flex" brUtilsFlex={{ column: true }} brUtilsSpacing={{ gap: '1' }}>
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
      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ gap: '1' }}>
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
      </BrElement>
    </BrElement>
  )
}
