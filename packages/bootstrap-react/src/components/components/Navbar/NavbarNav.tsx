import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarNavProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-nav'> }
>

export type NavbarNavWithRef = <
  Component extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarNavProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarNav: NavbarNavWithRef = forwardRef(function NavbarNav<
  T extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarNavProps<T, Breakpoints>, ref?: NavbarNavProps<T, Breakpoints>['ref']) {
  const { as = 'ul' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'navbar-nav', ...bsJs }} {...rest} />
})
export default NavbarNav
