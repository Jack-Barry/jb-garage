import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarBrandProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-brand'> }
>

export type NavbarBrandWithRef = <
  Component extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarBrandProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarBrand: NavbarBrandWithRef = forwardRef(function NavbarBrand<
  T extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarBrandProps<T, Breakpoints>, ref?: NavbarBrandProps<T, Breakpoints>['ref']) {
  const { as = 'a' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'navbar-brand', ...bsJs }} {...rest} />
})
export default NavbarBrand
