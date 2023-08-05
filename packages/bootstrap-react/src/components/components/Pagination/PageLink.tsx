import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type PageLinkProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

export type PageLinkComponent = <Component extends ElementType = 'a'>(
  props: PageLinkProps<Component>
) => ReactNode | null

/** [Pagination]() */
const PageLink: PageLinkComponent = forwardRef(function PageLink<T extends ElementType = 'a'>(
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
