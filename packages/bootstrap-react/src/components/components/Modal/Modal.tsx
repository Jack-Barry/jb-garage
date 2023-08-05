import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'
import { useModal } from './useModal'
import { useMultiRef } from '../../utils/useMultiRef'

export type ModalProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useModal` */
    brModal: ReturnType<typeof useModal>
    /**
     * @default true
     */
    brFade?: boolean
  }
>

export type ModalComponent = <Component extends ElementType = 'div'>(
  props: ModalProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const Modal: ModalComponent = forwardRef(function Modal<T extends ElementType = 'div'>(
  props: ModalProps<T>,
  ref?: ModalProps<T>['ref']
) {
  const { as, brModal, brFade = true, className, ...rest } = props
  const usedRef = useMultiRef(ref, brModal.ref)

  return (
    <BrElement
      as={as as ElementType}
      ref={usedRef}
      className={classNames(
        'modal',
        {
          fade: brFade
        },
        className
      )}
      {...rest}
    />
  )
})
export default Modal
