import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalTitleProps<T extends ElementType> = BrElementProps<T>

export type ModalTitleWithRef = <Component extends ElementType = 'h1'>(
  props: ModalTitleProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalTitle: ModalTitleWithRef = forwardRef(function ModalTitle<T extends ElementType = 'h1'>(
  props: ModalTitleProps<T>,
  ref?: ModalTitleProps<T>['ref']
) {
  const { as = 'h1' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('modal-title', className)} {...rest} />
})
export default ModalTitle
