import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbItemProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "li"
     */
    as?: T
    /** Item is currently active */
    brBreadcrumbItemActive?: boolean
  }
>

type BreadcrumbItemComponent = <Component extends ElementType = 'li'>(
  props: BreadcrumbItemProps<Component>
) => ReactNode | null

/**
 * []()
 */
const BreadcrumbItem: BreadcrumbItemComponent = forwardRef(function BreadcrumbItem<
  T extends ElementType = 'li'
>(props: BreadcrumbItemProps<T>, ref?: BreadcrumbItemProps<T>['ref']) {
  const {
    as = 'li' as ElementType,
    className,
    children,
    brBreadcrumbItemActive,
    'aria-current': ariaCurrent = brBreadcrumbItemActive ? 'page' : undefined,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('breadcrumb-item', { active: brBreadcrumbItemActive }, className)}
      aria-current={ariaCurrent}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default BreadcrumbItem
