import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ListGroupItemProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
  /** Apply action styles */
  brListGroupItemAction?: boolean
  /** Apply active styles */
  brListGroupItemActive?: boolean
}

export type ListGroupItemWithRef = <Component extends ElementType = 'li'>(
  props: ListGroupItemProps<Component>
) => ReactNode

/**
 * [List Group Item](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroupItem: ListGroupItemWithRef = forwardRef(function ListGroupItem<
  T extends ElementType = 'li'
>(props: ListGroupItemProps<T>, ref?: ListGroupItemProps<T>['ref']) {
  const {
    as = 'li' as ElementType,
    children,
    className,
    brListGroupItemAction,
    brListGroupItemActive,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'list-group-item',
        { 'list-group-item-action': brListGroupItemAction, active: brListGroupItemActive },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})

export default ListGroupItem
