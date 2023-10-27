import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTogglerProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-toggler'> }
>

export type NavbarTogglerWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarTogglerProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarToggler: NavbarTogglerWithRef = forwardRef(function NavbarToggler<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarTogglerProps<T, Breakpoints>, ref?: NavbarTogglerProps<T, Breakpoints>['ref']) {
  const {
    as = 'button' as ElementType,
    type = as === 'button' ? 'button' : undefined,
    bsJs,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      bsJs={{ elementType: 'navbar-toggler', ...bsJs }}
      {...rest}
    />
  )
})
export default NavbarToggler
