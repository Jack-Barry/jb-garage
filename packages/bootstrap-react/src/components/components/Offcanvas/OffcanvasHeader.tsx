import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type OffcanvasHeaderProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'offcanvas-header'> }
>

export type OffcanvasHeaderWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: OffcanvasHeaderProps<Component, Breakpoints>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasHeader: OffcanvasHeaderWithRef = forwardRef(function OffcanvasHeader<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: OffcanvasHeaderProps<T, Breakpoints>, ref?: OffcanvasHeaderProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'offcanvas-header', ...bsJs }} {...rest} />
  )
})
export default OffcanvasHeader
