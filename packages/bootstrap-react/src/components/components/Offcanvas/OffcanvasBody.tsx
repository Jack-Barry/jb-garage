import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type OffcanvasBodyProps<T extends ElementType> = BrElementProps<T>

export type OffcanvasBodyWithRef = <Component extends ElementType = 'div'>(
  props: OffcanvasBodyProps<Component>
) => ReactNode

/**
 * [Offcanvas]()
 */
const OffcanvasBody: OffcanvasBodyWithRef = forwardRef(function OffcanvasBody<
  T extends ElementType = 'div'
>(props: OffcanvasBodyProps<T>, ref?: OffcanvasBodyProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('offcanvas-body', className)} {...rest} />
  )
})
export default OffcanvasBody
