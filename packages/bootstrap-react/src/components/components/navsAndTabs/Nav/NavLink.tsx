import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavLinkProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'nav-link'>
    /**
     * Type of HTML element to render
     *
     * @default "a"
     */
    as?: T
  }
>

type NavLinkWithRef = <
  Component extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavLinkProps<Component, Breakpoints>
) => ReactNode

/** [Nav]() */
const NavLink: NavLinkWithRef = forwardRef(
  <T extends ElementType = 'a', Breakpoints extends string = BootstrapDefaultBreakpoint>(
    props: NavLinkProps<T, Breakpoints>,
    ref?: NavLinkProps<T, Breakpoints>['ref']
  ) => {
    const { as = 'a' as ElementType, children, bsJs, ...rest } = props

    return (
      <BrElement as={as} ref={ref} bsJs={{ elementType: 'nav-link', ...bsJs }} {...rest}>
        {children}
      </BrElement>
    )
  }
)
export default NavLink
