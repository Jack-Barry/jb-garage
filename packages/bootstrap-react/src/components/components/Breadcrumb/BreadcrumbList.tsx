import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbListProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "ol"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'breadcrumb'>
  }
>

type BreadcrumbListWithRef = <
  Component extends ElementType = 'ol',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BreadcrumbListProps<Component, Breakpoints>
) => ReactNode

/**
 * []()
 */
const BreadcrumbList: BreadcrumbListWithRef = forwardRef(function BreadcrumbList<
  T extends ElementType = 'ol',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: BreadcrumbListProps<T, Breakpoints>, ref?: BreadcrumbListProps<T, Breakpoints>['ref']) {
  const { as = 'ol' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'breadcrumb', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default BreadcrumbList
