import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ElementType } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import Input, { InputElementType, InputProps } from './Input'
import Label, { LabelProps } from './Label'

type FormControlProps<
  Wrapper extends ElementType,
  Input extends InputElementType,
  Breakpoints extends string
> = {
  brFormControlWrapperProps?: BrElementProps<Wrapper, undefined, Breakpoints>
  brFormControlInputProps?: InputProps<Input, Breakpoints>
  brFormControlLabelProps?: LabelProps<Breakpoints>
}

/**
 * []()
 *
 * - Combines the lower level `FormInput` and `FormInputLabel` components
 *   into a single component for convenience
 * - If an `inputProps.id` is provided, the `label` will automatically set the
 *   `htmlFor` prop to match. You can override `htmlFor` in the `label` if needed
 *   by explicitly providing `labelProps.htmlFor`
 */
export default function FormControl<
  Wrapper extends ElementType = 'div',
  Input extends InputElementType = 'input',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormControlProps<Wrapper, Input, Breakpoints>) {
  const {
    brFormControlWrapperProps = {} as BrElementProps<Wrapper>,
    brFormControlInputProps = {} as InputProps<Input, Breakpoints>,
    brFormControlLabelProps = {}
  } = props
  const { as, ...wrapperRest } = brFormControlWrapperProps
  const { htmlFor = brFormControlInputProps.id, ...labelPropsRest } = brFormControlLabelProps

  return (
    <BrElement as={as as ElementType} {...wrapperRest}>
      <Label htmlFor={htmlFor} {...labelPropsRest} />
      <Input {...brFormControlInputProps} />
    </BrElement>
  )
}
