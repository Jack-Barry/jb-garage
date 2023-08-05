import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type ToastBodyProps<T extends ElementType> = BrElementProps<T>

export type ToastBodyComponent = <Component extends ElementType = 'div'>(
  props: ToastBodyProps<Component>
) => ReactNode | null

/**
 * [Toast]()
 */
const ToastBody: ToastBodyComponent = forwardRef(function ToastBody<T extends ElementType = 'div'>(
  props: ToastBodyProps<T>,
  ref?: ToastBodyProps<T>['ref']
) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('toast-body', className)}
      {...rest}
    />
  )
})
export default ToastBody
