import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastContainerProps<T extends ElementType> = BrElementProps<T>

export type ToastContainerComponent = <Component extends ElementType = 'div'>(
  props: ToastContainerProps<Component>
) => ReactNode | null

/**
 * [Toast]()
 */
const ToastContainer: ToastContainerComponent = forwardRef(function ToastContainer<
  T extends ElementType = 'div'
>(props: ToastContainerProps<T>, ref?: ToastContainerProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('toast-container', className)}
      {...rest}
    />
  )
})
export default ToastContainer
