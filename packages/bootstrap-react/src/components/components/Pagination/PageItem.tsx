import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PageItemProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'page-item'>
    /**
     * Type of HTML element to render
     *
     * @default "li"
     */
    as?: T
  }
>

export type PageItemWithRef = <
  Component extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PageItemProps<Component, Breakpoints>
) => ReactNode

/** [Pagination]() */
const PageItem: PageItemWithRef = forwardRef(function PageItem<
  T extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PageItemProps<T, Breakpoints>, ref?: PageItemProps<T, Breakpoints>['ref']) {
  const { as = 'li' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'page-item', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default PageItem
