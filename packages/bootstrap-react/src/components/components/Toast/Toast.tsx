import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * @default true
     */
    brToastFade?: boolean
  }
>

export type ToastWithRef = <Component extends ElementType = 'div'>(
  props: ToastProps<Component>
) => ReactNode

/**
 * [Toast]()
 */
const Toast: ToastWithRef = forwardRef(function Toast<T extends ElementType = 'div'>(
  props: ToastProps<T>,
  ref?: ToastProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    className,
    role = 'alert',
    brToastFade = true,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      role={role}
      className={classNames('toast', { fade: brToastFade }, className)}
      {...rest}
    />
  )
})
export default Toast
