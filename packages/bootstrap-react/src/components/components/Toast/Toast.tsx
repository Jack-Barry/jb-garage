import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ToastProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'toast'>
  }
>

export type ToastWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ToastProps<Component, Breakpoints>
) => ReactNode

/**
 * [Toast]()
 */
const Toast: ToastWithRef = forwardRef(function Toast<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ToastProps<T, Breakpoints>, ref?: ToastProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'toast', ...bsJs }} {...rest} />
})
export default Toast
