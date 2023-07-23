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
    /** Divider to use in between breadcrumb items */
    brDivider?: string
  }
>

type BreadcrumbsComponent = <Component extends ElementType = 'nav'>(
  props: BreadcrumbsProps<Component>
) => ReactNode | null

/**
 * []()
 */
const Breadcrumbs: BreadcrumbsComponent = forwardRef(function Breadcrumbs<
  T extends ElementType = 'nav'
>(props: BreadcrumbsProps<T>, ref?: BreadcrumbsProps<T>['ref']) {
  const {
    as = 'nav' as ElementType,
    className,
    children,
    style,
    brDivider,
    'aria-label': ariaLabel = 'breadcrumb',
    ...rest
  } = props

  const usedStyle = { ...style }
  if (typeof brDivider === 'string') {
    usedStyle['--bs-breadcrumb-divider'] = brDivider
  }

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('breadcrumb', className)}
      style={usedStyle}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Breadcrumbs
