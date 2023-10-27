import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PopoverHeaderProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'popover-header'> }
>

type PopoverHeaderWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PopoverHeaderProps<Component, Breakpoints>
) => ReactNode

/**
 * Header element for a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 */
const PopoverHeader: PopoverHeaderWithRef = forwardRef(function PopoverHeader<
  T extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PopoverHeaderProps<T, Breakpoints>, ref?: PopoverHeaderProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props
  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'popover-header', ...bsJs }} {...rest} />
})
export default PopoverHeader
