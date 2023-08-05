import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalContentProps<T extends ElementType> = BrElementProps<T>

export type ModalContentWithRef = <Component extends ElementType = 'div'>(
  props: ModalContentProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalContent: ModalContentWithRef = forwardRef(function ModalContent<
  T extends ElementType = 'div'
>(props: ModalContentProps<T>, ref?: ModalContentProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('modal-content', className)} {...rest} />
  )
})
export default ModalContent
