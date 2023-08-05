import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalFooterProps<T extends ElementType> = BrElementProps<T>

export type ModalFooterComponent = <Component extends ElementType = 'div'>(
  props: ModalFooterProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalFooter: ModalFooterComponent = forwardRef(function ModalFooter<
  T extends ElementType = 'div'
>(props: ModalFooterProps<T>, ref?: ModalFooterProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('modal-footer', className)}
      {...rest}
    />
  )
})
export default ModalFooter
