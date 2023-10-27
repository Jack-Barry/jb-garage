import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormGroupProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-group'>
  }
>

type FormGroupWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: FormGroupProps<Component, Breakpoints>
) => ReactNode

const FormGroup: FormGroupWithRef = forwardRef(function FormGroup<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormGroupProps<T, Breakpoints>, ref?: FormGroupProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'form-group', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default FormGroup
