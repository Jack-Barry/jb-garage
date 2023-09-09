import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PageLinkProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

export type PageLinkWithRef = <Component extends ElementType = 'a'>(
  props: PageLinkProps<Component>
) => ReactNode

/** [Pagination]() */
const PageLink: PageLinkWithRef = forwardRef(function PageLink<T extends ElementType = 'a'>(
  props: PageLinkProps<T>,
  ref?: PageLinkProps<T>['ref']
) {
  const { as = 'a' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('page-link', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default PageLink
