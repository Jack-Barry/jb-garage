import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type OffcanvasTitleProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'offcanvas-title'> }
>

export type OffcanvasTitleWithRef = <
  Component extends ElementType = 'h5',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: OffcanvasTitleProps<Component, Breakpoints>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasTitle: OffcanvasTitleWithRef = forwardRef(function OffcanvasTitle<
  T extends ElementType = 'h5',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: OffcanvasTitleProps<T, Breakpoints>, ref?: OffcanvasTitleProps<T, Breakpoints>['ref']) {
  const { as = 'h5' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'offcanvas-title', ...bsJs }} {...rest} />
  )
})
export default OffcanvasTitle
