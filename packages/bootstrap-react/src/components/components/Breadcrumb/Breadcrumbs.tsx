import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbsProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "nav"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'breadcrumbs-wrapper'>
  }
>

type BreadcrumbsWithRef = <
  Component extends ElementType = 'nav',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BreadcrumbsProps<Component, Breakpoints>
) => ReactNode

/**
 * []()
 */
const Breadcrumbs: BreadcrumbsWithRef = forwardRef(function Breadcrumbs<
  T extends ElementType = 'nav',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: BreadcrumbsProps<T, Breakpoints>, ref?: BreadcrumbsProps<T, Breakpoints>['ref']) {
  const { as = 'nav' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'breadcrumbs-wrapper', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Breadcrumbs
