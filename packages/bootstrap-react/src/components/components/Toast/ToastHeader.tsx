import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastHeaderProps<T extends ElementType> = BrElementProps<T>

export type ToastHeaderWithRef = <Component extends ElementType = 'div'>(
  props: ToastHeaderProps<Component>
) => ReactNode

/**
 * [Toast]()
 */
const ToastHeader: ToastHeaderWithRef = forwardRef(function ToastHeader<
  T extends ElementType = 'div'
>(props: ToastHeaderProps<T>, ref?: ToastHeaderProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('toast-header', className)} {...rest} />
})
export default ToastHeader
