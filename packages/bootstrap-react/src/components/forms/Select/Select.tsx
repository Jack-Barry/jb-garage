import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type SelectProps<Breakpoints extends string> = Omit<
  BrElementProps<
    'select',
    undefined,
    Breakpoints,
    {
      bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-select'>
    }
  >,
  'as'
>

type SelectWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: SelectProps<Breakpoints>
) => ReactNode

const Select: SelectWithRef = forwardRef(function Select<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: SelectProps<Breakpoints>, ref?: SelectProps<Breakpoints>['ref']) {
  const { children, bsJs, ...rest } = props

  return (
    <BrElement as="select" ref={ref} bsJs={{ elementType: 'form-select', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Select
