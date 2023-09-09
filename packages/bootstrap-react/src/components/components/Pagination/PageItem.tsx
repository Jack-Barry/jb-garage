import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PageItemProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
  /** Apply disabled styles */
  brPageItemDisabled?: boolean
  /** Apply active styles */
  brPageItemActive?: boolean
}

export type PageItemWithRef = <Component extends ElementType = 'li'>(
  props: PageItemProps<Component>
) => ReactNode

/** [Pagination]() */
const PageItem: PageItemWithRef = forwardRef(function PageItem<T extends ElementType = 'li'>(
  props: PageItemProps<T>,
  ref?: PageItemProps<T>['ref']
) {
  const {
    as = 'li' as ElementType,
    children,
    className,
    brPageItemDisabled,
    brPageItemActive,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'page-item',
        { disabled: brPageItemDisabled, active: brPageItemActive },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default PageItem
