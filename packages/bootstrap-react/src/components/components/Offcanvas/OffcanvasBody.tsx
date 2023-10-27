import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type OffcanvasBodyProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'offcanvas-body'>
  }
>

export type OffcanvasBodyWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: OffcanvasBodyProps<Component, Breakpoints>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasBody: OffcanvasBodyWithRef = forwardRef(function OffcanvasBody<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: OffcanvasBodyProps<T, Breakpoints>, ref?: OffcanvasBodyProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'offcanvas-body', ...bsJs }} {...rest} />
})
export default OffcanvasBody
