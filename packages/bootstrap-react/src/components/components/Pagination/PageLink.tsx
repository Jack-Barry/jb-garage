import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PageLinkProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'page-link'>
    /**
     * Type of HTML element to render
     *
     * @default "a"
     */
    as?: T
  }
>

export type PageLinkWithRef = <
  Component extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PageLinkProps<Component, Breakpoints>
) => ReactNode

/** [Pagination]() */
const PageLink: PageLinkWithRef = forwardRef(function PageLink<
  T extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PageLinkProps<T, Breakpoints>, ref?: PageLinkProps<T, Breakpoints>['ref']) {
  const { as = 'a' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'page-link', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default PageLink
