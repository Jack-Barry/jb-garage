import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PaginationProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'pagination'>
    /**
     * Type of HTML element to render
     *
     * @default "ul"
     */
    as?: T
  }
>

export type PaginationWithRef = <
  Component extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PaginationProps<Component, Breakpoints>
) => ReactNode

/** [Pagination]() */
const Pagination: PaginationWithRef = forwardRef(function Pagination<
  T extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PaginationProps<T, Breakpoints>, ref?: PaginationProps<T, Breakpoints>['ref']) {
  const { as = 'ul' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'pagination', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Pagination
