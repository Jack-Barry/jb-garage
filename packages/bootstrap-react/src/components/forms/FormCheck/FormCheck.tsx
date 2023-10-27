import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, PropsWithChildren } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import FormCheckInput, { FormCheckInputProps } from './FormCheckInput'
import FormCheckLabel, { FormCheckLabelProps } from './FormCheckLabel'

type FormCheckProps<T extends ElementType, Breakpoints extends string> = PropsWithChildren<{
  brFormCheckWrapperProps?: Omit<
    BrElementProps<
      T,
      undefined,
      Breakpoints,
      { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-check'> }
    >,
    'children'
  >

  brFormCheckInputProps?: FormCheckInputProps<Breakpoints>
  brFormCheckLabelProps?: FormCheckLabelProps<Breakpoints>
}>

/**
 * [Form Check](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)
 *
 * - Combines the lower level `FormCheckInput` and `FormCheckLabel` components
 *   into a single component for convenience
 * - If an `inputProps.id` is provided, the `label` will automatically set the
 *   `htmlFor` prop to match. You can override `htmlFor` in the `label` if needed
 *   by explicitly providing `labelProps.htmlFor`
 */
export default function FormCheck<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormCheckProps<T, Breakpoints>) {
  const {
    brFormCheckWrapperProps: wrapperProps = {} as Required<
      FormCheckProps<T, Breakpoints>
    >['brFormCheckWrapperProps'],
    brFormCheckInputProps = {},
    brFormCheckLabelProps = {},
    children
  } = props
  const { as = 'div' as ElementType, bsJs, ...wrapperRest } = wrapperProps
  const { htmlFor = brFormCheckInputProps.id, ...labelPropsRest } = brFormCheckLabelProps

  return (
    <BrElement as={as} bsJs={{ elementType: 'form-check', ...bsJs }} {...wrapperRest}>
      <FormCheckInput {...brFormCheckInputProps} />
      <FormCheckLabel htmlFor={htmlFor} {...labelPropsRest} />
      {children}
    </BrElement>
  )
}
