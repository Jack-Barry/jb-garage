import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BreadcrumbsProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "nav"
     */
    as?: T
    bsJs?: BsJsConfig<'breadcrumb'>
  }
>

type BreadcrumbsWithRef = <Component extends ElementType = 'nav'>(
  props: BreadcrumbsProps<Component>
) => ReactNode

/**
 * []()
 */
const Breadcrumbs: BreadcrumbsWithRef = forwardRef(function Breadcrumbs<
  T extends ElementType = 'nav'
>(props: BreadcrumbsProps<T>, ref?: BreadcrumbsProps<T>['ref']) {
  const {
    as = 'nav' as ElementType,
    className,
    children,
    'aria-label': ariaLabel = 'breadcrumb',
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('breadcrumb', className)}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Breadcrumbs
