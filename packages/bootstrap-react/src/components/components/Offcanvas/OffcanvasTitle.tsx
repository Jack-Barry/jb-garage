import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type OffcanvasTitleProps<T extends ElementType> = BrElementProps<T>

export type OffcanvasTitleWithRef = <Component extends ElementType = 'h5'>(
  props: OffcanvasTitleProps<Component>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasTitle: OffcanvasTitleWithRef = forwardRef(function OffcanvasTitle<
  T extends ElementType = 'h5'
>(props: OffcanvasTitleProps<T>, ref?: OffcanvasTitleProps<T>['ref']) {
  const { as = 'h5' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('offcanvas-title', className)} {...rest} />
  )
})
export default OffcanvasTitle
