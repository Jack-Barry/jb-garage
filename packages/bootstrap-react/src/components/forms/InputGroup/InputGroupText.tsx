import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type InputGroupTextProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'input-group-text'> }
>

type InputGroupTextWithRef = <
  Component extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: InputGroupTextProps<Component, Breakpoints>
) => ReactNode

const InputGroupText: InputGroupTextWithRef = forwardRef(function FormInput<
  T extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: InputGroupTextProps<T, Breakpoints>, ref?: InputGroupTextProps<T, Breakpoints>['ref']) {
  const { as = 'span' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'input-group-text', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default InputGroupText
