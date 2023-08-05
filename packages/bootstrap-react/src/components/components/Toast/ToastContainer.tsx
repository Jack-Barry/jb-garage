import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastContainerProps<T extends ElementType> = BrElementProps<T>

export type ToastContainerWithRef = <Component extends ElementType = 'div'>(
  props: ToastContainerProps<Component>
) => ReactNode

/**
 * [Toast]()
 */
const ToastContainer: ToastContainerWithRef = forwardRef(function ToastContainer<
  T extends ElementType = 'div'
>(props: ToastContainerProps<T>, ref?: ToastContainerProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('toast-container', className)} {...rest} />
  )
})
export default ToastContainer
