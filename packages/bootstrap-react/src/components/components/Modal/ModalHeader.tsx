import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalHeaderProps<T extends ElementType> = BrElementProps<T>

export type ModalHeaderComponent = <Component extends ElementType = 'div'>(
  props: ModalHeaderProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalHeader: ModalHeaderComponent = forwardRef(function ModalHeader<
  T extends ElementType = 'div'
>(props: ModalHeaderProps<T>, ref?: ModalHeaderProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('modal-header', className)}
      {...rest}
    />
  )
})
export default ModalHeader
