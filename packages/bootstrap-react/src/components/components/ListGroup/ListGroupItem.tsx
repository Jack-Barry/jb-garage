import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ListGroupItemProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'list-group-item'>
    /**
     * Type of HTML element to render
     *
     * @default "li"
     */
    as?: T
  }
>

export type ListGroupItemWithRef = <
  Component extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ListGroupItemProps<Component, Breakpoints>
) => ReactNode

/**
 * [List Group Item](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroupItem: ListGroupItemWithRef = forwardRef(function ListGroupItem<
  T extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ListGroupItemProps<T, Breakpoints>, ref?: ListGroupItemProps<T, Breakpoints>['ref']) {
  const { as = 'li' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'list-group-item', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})

export default ListGroupItem
