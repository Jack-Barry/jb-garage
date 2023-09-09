import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbListProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "ol"
     */
    as?: T
  }
>

type BreadcrumbListWithRef = <Component extends ElementType = 'ol'>(
  props: BreadcrumbListProps<Component>
) => ReactNode

/**
 * []()
 */
const BreadcrumbList: BreadcrumbListWithRef = forwardRef(function BreadcrumbList<
  T extends ElementType = 'ol'
>(props: BreadcrumbListProps<T>, ref?: BreadcrumbListProps<T>['ref']) {
  const { as = 'ol' as ElementType, className, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('breadcrumb', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default BreadcrumbList
