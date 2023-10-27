import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormCheckLabelProps<Breakpoints extends string> = Omit<
  BrElementProps<
    'label',
    undefined,
    Breakpoints,
    { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-check-label'> }
  >,
  'as'
>

type FormCheckLabelWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: FormCheckLabelProps<Breakpoints>
) => ReactNode

const FormCheckLabel: FormCheckLabelWithRef = forwardRef(function FormCheckLabel<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormCheckLabelProps<Breakpoints>, ref?: FormCheckLabelProps<Breakpoints>['ref']) {
  const { children, bsJs, ...rest } = props

  return (
    <BrElement as="label" ref={ref} bsJs={{ elementType: 'form-check-label', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default FormCheckLabel
