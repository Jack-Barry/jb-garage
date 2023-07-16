import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ListGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
}

/**
 * [ListGroup](https://getbootstrap.com/docs/5.3/components/list-group/)
 *
 * - If no `bg-` class is provided, defaults to `bg-secondary`
 */
export default function ListGroup<T extends ElementType = 'ul'>(props: ListGroupProps<T>) {
  const { as = 'ul' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('list-group', className)} {...rest}>
      {children}
    </BrElement>
  )
}
