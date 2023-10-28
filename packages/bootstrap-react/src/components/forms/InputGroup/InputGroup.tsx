import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type InputGroupProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'input-group'> }
>

type InputGroupWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: InputGroupProps<Component, Breakpoints>
) => ReactNode

const InputGroup: InputGroupWithRef = forwardRef(function FormInput<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: InputGroupProps<T, Breakpoints>, ref?: InputGroupProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'input-group', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default InputGroup
