import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastHeaderProps<T extends ElementType> = BrElementProps<T>

export type ToastHeaderComponent = <Component extends ElementType = 'div'>(
  props: ToastHeaderProps<Component>
) => ReactNode | null

/**
 * [Toast]()
 */
const ToastHeader: ToastHeaderComponent = forwardRef(function ToastHeader<
  T extends ElementType = 'div'
>(props: ToastHeaderProps<T>, ref?: ToastHeaderProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('toast-header', className)}
      {...rest}
    />
  )
})
export default ToastHeader
