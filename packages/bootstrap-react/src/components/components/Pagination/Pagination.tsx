import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type PaginationProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
  brSize?: 'lg' | 'sm'
}

export type PaginationComponent = <Component extends ElementType = 'ul'>(
  props: PaginationProps<Component>
) => ReactNode | null

/** [Pagination]() */
const Pagination: PaginationComponent = forwardRef(function Pagination<
  T extends ElementType = 'ul'
>(props: PaginationProps<T>, ref?: PaginationProps<T>['ref']) {
  const { as = 'ul' as ElementType, children, className, brSize, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('pagination', { [`pagination-${brSize}`]: !!brSize }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Pagination
