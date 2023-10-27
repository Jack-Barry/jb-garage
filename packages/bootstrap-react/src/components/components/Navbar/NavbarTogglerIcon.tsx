import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTogglerIconProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-toggler-icon'> }
>

export type NavbarTogglerIconWithRef = <
  Component extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarTogglerIconProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarTogglerIcon: NavbarTogglerIconWithRef = forwardRef(function NavbarTogglerIcon<
  T extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarTogglerIconProps<T, Breakpoints>,
  ref?: NavbarTogglerIconProps<T, Breakpoints>['ref']
) {
  const { as = 'span' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'navbar-toggler-icon', ...bsJs }} {...rest} />
  )
})
export default NavbarTogglerIcon
