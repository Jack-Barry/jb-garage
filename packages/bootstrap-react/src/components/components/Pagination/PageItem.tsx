import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type PageItemProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
  /** Apply disabled styles */
  brDisabled?: boolean
  /** Apply active styles */
  brActive?: boolean
}

export type PageItemComponent = <Component extends ElementType = 'li'>(
  props: PageItemProps<Component>
) => ReactNode | null

/** [Pagination]() */
const PageItem: PageItemComponent = forwardRef(function PageItem<T extends ElementType = 'li'>(
  props: PageItemProps<T>,
  ref?: PageItemProps<T>['ref']
) {
  const { as = 'li' as ElementType, children, className, brDisabled, brActive, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('page-item', { disabled: brDisabled, active: brActive }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default PageItem
