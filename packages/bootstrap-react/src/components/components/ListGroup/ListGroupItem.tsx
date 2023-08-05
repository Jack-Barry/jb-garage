import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type ListGroupItemProps<T extends ElementType> = Omit<BrElementProps<T>, 'ref'> & {
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

export type ListGroupItemComponent = <Component extends ElementType = 'li'>(
  props: ListGroupItemProps<Component>
) => ReactNode | null

/**
 * [List Group Item](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroupItem: ListGroupItemComponent = forwardRef(function ListGroupItem<
  T extends ElementType = 'li'
>(props: ListGroupItemProps<T>, ref: BrElementProps<T>['ref']) {
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
