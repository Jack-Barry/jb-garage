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

export type ToastComponent = <Component extends ElementType = 'div'>(
  props: ToastProps<Component>
) => ReactNode | null

/**
 * [Toast]()
 */
const Toast: ToastComponent = forwardRef(function Toast<T extends ElementType = 'div'>(
  props: ToastProps<T>,
  ref?: ToastProps<T>['ref']
) {
  const { as, className, role = 'alert', brToastFade = true, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      role={role}
      className={classNames('toast', { fade: brToastFade }, className)}
      {...rest}
    />
  )
})
export default Toast
