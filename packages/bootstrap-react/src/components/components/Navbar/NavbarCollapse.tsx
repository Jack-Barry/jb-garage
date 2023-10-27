import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import Collapse, { CollapseProps } from '../Collapse/Collapse'

export type NavbarCollapseProps<T extends ElementType, Breakpoints extends string> = CollapseProps<
  T,
  Breakpoints
> & {
  bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'navbar-collapse'>
}

export type NavbarCollapseWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavbarCollapseProps<Component, Breakpoints>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarCollapse: NavbarCollapseWithRef = forwardRef(function NavbarCollapse<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavbarCollapseProps<T, Breakpoints>, ref?: NavbarCollapseProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return (
    <Collapse
      as={as}
      ref={ref}
      bsJs={{ elementType: 'navbar-collapse', ...(bsJs as CollapseProps<T, Breakpoints>['bsJs']) }}
      {...rest}
    />
  )
})
export default NavbarCollapse
