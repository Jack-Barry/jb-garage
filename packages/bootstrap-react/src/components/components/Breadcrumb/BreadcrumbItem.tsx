import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { AllBreakpointsOptions } from 'packages/bootstrap-js/src/_types'
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
    bsJs?: BsJsConfig<'breadcrumb-item'>
  }
>

type BreadcrumbItemWithRef = <Component extends ElementType = 'li'>(
  props: BreadcrumbItemProps<Component>
) => ReactNode

/**
 * []()
 */
const BreadcrumbItem: BreadcrumbItemWithRef = forwardRef(function BreadcrumbItem<
  T extends ElementType = 'li'
>(props: BreadcrumbItemProps<T>, ref?: BreadcrumbItemProps<T>['ref']) {
  const isActive = (props.bsJs?.bsJsAll as AllBreakpointsOptions<'breadcrumb-item'>).breadcrumbItem
    ?.active
  const {
    as = 'li' as ElementType,
    className,
    children,
    'aria-current': ariaCurrent = isActive ? 'page' : undefined,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('breadcrumb-item', className)}
      aria-current={ariaCurrent}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default BreadcrumbItem
