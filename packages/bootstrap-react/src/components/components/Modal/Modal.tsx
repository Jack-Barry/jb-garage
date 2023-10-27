import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useModal } from './useModal'

export type ModalProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal'>
    /** Controlled state can be provided by the return value of `useModal` */
    brModal: ReturnType<typeof useModal>
  }
>

export type ModalWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const Modal: ModalWithRef = forwardRef(function Modal<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalProps<T, Breakpoints>, ref?: ModalProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brModal, bsJs, ...rest } = props
  const usedRef = useMultiRef(ref, brModal.ref)

  return <BrElement as={as} ref={usedRef} bsJs={{ elementType: 'modal', ...bsJs }} {...rest} />
})
export default Modal
