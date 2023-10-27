import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormCheckInputProps<Breakpoints extends string> = Omit<
  BrElementProps<
    'input',
    undefined,
    Breakpoints,
    {
      bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-check-input'>
      type?: 'checkbox' | 'radio'
    }
  >,
  'as'
>

type FormCheckInputWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: FormCheckInputProps<Breakpoints>
) => ReactNode

const FormCheckInput: FormCheckInputWithRef = forwardRef(function FormCheckInput<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormCheckInputProps<Breakpoints>, ref?: FormCheckInputProps<Breakpoints>['ref']) {
  const { type = 'checkbox', children, bsJs, ...rest } = props

  return (
    <BrElement
      as="input"
      type={type}
      ref={ref}
      bsJs={{ elementType: 'form-check-input', ...bsJs }}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormCheckInput
