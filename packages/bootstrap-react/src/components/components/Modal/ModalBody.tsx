import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalBodyProps<T extends ElementType> = BrElementProps<T>

export type ModalBodyComponent = <Component extends ElementType = 'div'>(
  props: ModalBodyProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalBody: ModalBodyComponent = forwardRef(function ModalBody<T extends ElementType = 'div'>(
  props: ModalBodyProps<T>,
  ref?: ModalBodyProps<T>['ref']
) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('modal-body', className)}
      {...rest}
    />
  )
})
export default ModalBody
