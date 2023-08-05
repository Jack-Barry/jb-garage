import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalHeaderProps<T extends ElementType> = BrElementProps<T>

export type ModalHeaderWithRef = <Component extends ElementType = 'div'>(
  props: ModalHeaderProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalHeader: ModalHeaderWithRef = forwardRef(function ModalHeader<
  T extends ElementType = 'div'
>(props: ModalHeaderProps<T>, ref?: ModalHeaderProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('modal-header', className)} {...rest} />
})
export default ModalHeader
