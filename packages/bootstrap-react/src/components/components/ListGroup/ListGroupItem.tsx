import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, forwardRef } from 'react'

export type ListGroupProps<T extends ElementType> = Omit<BrElementProps<T>, 'ref'> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
}

/**
 * [List Group Item](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroupItem = forwardRef(function ListGroupItem<T extends ElementType = 'li'>(
  props: ListGroupProps<T>,
  ref: BrElementProps<T>['ref']
) {
  const { as = 'li' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('list-group-item', className)} {...rest}>
      {children}
    </BrElement>
  )
})

export default ListGroupItem
