import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PopoverBodyProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'popover-body'> }
>

type PopoverBodyWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PopoverBodyProps<Component, Breakpoints>
) => ReactNode

/**
 * Body element for a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 */
const PopoverBody: PopoverBodyWithRef = forwardRef(function PopoverBody<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PopoverBodyProps<T, Breakpoints>, ref?: PopoverBodyProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props
  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'popover-body', ...bsJs }} {...rest} />
})
export default PopoverBody
