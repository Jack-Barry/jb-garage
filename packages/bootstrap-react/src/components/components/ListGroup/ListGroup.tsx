import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ListGroupProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'list-group'>
    /**
     * Type of HTML element to render
     *
     * @default "ul"
     */
    as?: T
  }
>

type ListGroupWithRef = <
  Component extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ListGroupProps<Component, Breakpoints>
) => ReactNode

/**
 * [ListGroup](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroup: ListGroupWithRef = forwardRef(function ListGroup<
  T extends ElementType = 'ul',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ListGroupProps<T, Breakpoints>, ref?: ListGroupProps<T, Breakpoints>['ref']) {
  const { as = 'ul' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'list-group', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default ListGroup
