import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'nav'>
    /**
     * Type of HTML element to render
     *
     * @default "ul"
     */
    as?: T
  }
>

type NavWithRef = <
  Component extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: NavProps<Component, Breakpoints>
) => ReactNode

/** [Nav]() */
const Nav: NavWithRef = forwardRef(function Nav<
  T extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: NavProps<T, Breakpoints>, ref?: NavProps<T, Breakpoints>['ref']) {
  const { as = 'ul' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'nav', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Nav
