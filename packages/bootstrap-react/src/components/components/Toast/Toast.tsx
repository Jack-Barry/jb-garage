import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * @default true
     */
    brFade?: boolean
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
  const { as, className, role = 'alert', brFade = true, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      role={role}
      className={classNames('toast', { fade: brFade }, className)}
      {...rest}
    />
  )
})
export default Toast
