import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalFooterProps<T extends ElementType> = BrElementProps<T>

export type ModalFooterWithRef = <Component extends ElementType = 'div'>(
  props: ModalFooterProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalFooter: ModalFooterWithRef = forwardRef(function ModalFooter<
  T extends ElementType = 'div'
>(props: ModalFooterProps<T>, ref?: ModalFooterProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('modal-footer', className)} {...rest} />
})
export default ModalFooter
