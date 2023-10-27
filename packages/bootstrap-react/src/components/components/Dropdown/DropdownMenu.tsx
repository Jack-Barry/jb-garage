import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type DropdownMenuProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown-menu'>
    /**
     * Type of HTML element to render
     *
     * @default "ul"
     */
    as?: T
  }
>

type DropdownMenuWithRef = <
  Component extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownMenuProps<Component, Breakpoints>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownMenu: DropdownMenuWithRef = forwardRef(function DropdownMenu<
  T extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: DropdownMenuProps<T, Breakpoints>, ref?: DropdownMenuProps<T, Breakpoints>['ref']) {
  const { as = 'ul' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'dropdown-menu', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default DropdownMenu
