import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTextProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-text'> }
>

export type NavbarTextWithRef = <
  Component extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarTextProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarText: NavbarTextWithRef = forwardRef(function NavbarText<
  T extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarTextProps<T, Breakpoints>, ref?: NavbarTextProps<T, Breakpoints>['ref']) {
  const { as = 'span' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'navbar-text', ...bsJs }} {...rest} />
})
export default NavbarText
