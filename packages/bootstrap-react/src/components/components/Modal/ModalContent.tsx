import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalContentProps<T extends ElementType> = BrElementProps<T>

export type ModalContentComponent = <Component extends ElementType = 'div'>(
  props: ModalContentProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalContent: ModalContentComponent = forwardRef(function ModalContent<
  T extends ElementType = 'div'
>(props: ModalContentProps<T>, ref?: ModalContentProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('modal-content', className)}
      {...rest}
    />
  )
})
export default ModalContent
