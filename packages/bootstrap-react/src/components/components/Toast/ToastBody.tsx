import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ToastBodyProps<T extends ElementType> = BrElementProps<T>

export type ToastBodyWithRef = <Component extends ElementType = 'div'>(
  props: ToastBodyProps<Component>
) => ReactNode

/**
 * [Toast]()
 */
const ToastBody: ToastBodyWithRef = forwardRef(function ToastBody<T extends ElementType = 'div'>(
  props: ToastBodyProps<T>,
  ref?: ToastBodyProps<T>['ref']
) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('toast-body', className)} {...rest} />
})
export default ToastBody
