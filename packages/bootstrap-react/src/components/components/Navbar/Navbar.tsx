import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar'>
  }
>

export type NavbarWithRef = <
  Component extends ElementType = 'nav',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const Navbar: NavbarWithRef = forwardRef(function Navbar<
  T extends ElementType = 'nav',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarProps<T, Breakpoints>, ref?: NavbarProps<T, Breakpoints>['ref']) {
  const { as = 'nav' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'navbar', ...bsJs }} {...rest} />
})
export default Navbar
