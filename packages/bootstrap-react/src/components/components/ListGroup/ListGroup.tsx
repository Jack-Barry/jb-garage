import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type ListGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
}

type ListGroupWithRef = <Component extends ElementType = 'ul'>(
  props: ListGroupProps<Component>
) => ReactNode

/**
 * [ListGroup](https://getbootstrap.com/docs/5.3/components/list-group/)
 */
const ListGroup: ListGroupWithRef = forwardRef(function ListGroup<T extends ElementType = 'ul'>(
  props: ListGroupProps<T>,
  ref?: ListGroupProps<T>['ref']
) {
  const { as = 'ul' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('list-group', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default ListGroup
