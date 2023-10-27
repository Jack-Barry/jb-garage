import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbItemProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "li"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'breadcrumb-item'>
  }
>

type BreadcrumbItemWithRef = <
  Component extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BreadcrumbItemProps<Component, Breakpoints>
) => ReactNode

/**
 * []()
 */
const BreadcrumbItem: BreadcrumbItemWithRef = forwardRef(function BreadcrumbItem<
  T extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: BreadcrumbItemProps<T, Breakpoints>, ref?: BreadcrumbItemProps<T, Breakpoints>['ref']) {
  const { as = 'li' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'breadcrumb-item', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default BreadcrumbItem
