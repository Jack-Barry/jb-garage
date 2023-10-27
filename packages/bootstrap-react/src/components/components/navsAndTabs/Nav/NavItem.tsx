import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavItemProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'nav-item'>
    /**
     * Type of HTML element to render
     *
     * @default "li"
     */
    as?: T
  }
>

type NavItemWithRef = <
  Component extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavItemProps<Component, Breakpoints>
) => ReactNode

/** [Nav]() */
const NavItem: NavItemWithRef = forwardRef(function NavItem<
  T extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavItemProps<T, Breakpoints>, ref?: NavItemProps<T, Breakpoints>['ref']) {
  const { as = 'li' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'nav-item', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default NavItem
