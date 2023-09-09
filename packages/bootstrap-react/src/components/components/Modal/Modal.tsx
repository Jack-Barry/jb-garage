import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useModal } from './useModal'

export type ModalProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useModal` */
    brModal: ReturnType<typeof useModal>
    /**
     * @default true
     */
    brModalFade?: boolean
  }
>

export type ModalWithRef = <Component extends ElementType = 'div'>(
  props: ModalProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const Modal: ModalWithRef = forwardRef(function Modal<T extends ElementType = 'div'>(
  props: ModalProps<T>,
  ref?: ModalProps<T>['ref']
) {
  const { as = 'div' as ElementType, brModal, brModalFade = true, className, ...rest } = props
  const usedRef = useMultiRef(ref, brModal.ref)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      className={classNames(
        'modal',
        {
          fade: brModalFade
        },
        className
      )}
      {...rest}
    />
  )
})
export default Modal
