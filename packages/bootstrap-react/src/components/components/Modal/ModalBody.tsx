import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalBodyProps<T extends ElementType> = BrElementProps<T>

export type ModalBodyWithRef = <Component extends ElementType = 'div'>(
  props: ModalBodyProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalBody: ModalBodyWithRef = forwardRef(function ModalBody<T extends ElementType = 'div'>(
  props: ModalBodyProps<T>,
  ref?: ModalBodyProps<T>['ref']
) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('modal-body', className)} {...rest} />
})
export default ModalBody
