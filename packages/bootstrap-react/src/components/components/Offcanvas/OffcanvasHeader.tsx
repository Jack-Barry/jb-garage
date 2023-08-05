import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type OffcanvasHeaderProps<T extends ElementType> = BrElementProps<T>

export type OffcanvasHeaderWithRef = <Component extends ElementType = 'div'>(
  props: OffcanvasHeaderProps<Component>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasHeader: OffcanvasHeaderWithRef = forwardRef(function OffcanvasHeader<
  T extends ElementType = 'div'
>(props: OffcanvasHeaderProps<T>, ref?: OffcanvasHeaderProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('offcanvas-header', className)} {...rest} />
  )
})
export default OffcanvasHeader
