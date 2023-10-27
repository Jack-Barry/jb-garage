import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalContentProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal-content'> }
>

export type ModalContentWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalContentProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const ModalContent: ModalContentWithRef = forwardRef(function ModalContent<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalContentProps<T, Breakpoints>, ref?: ModalContentProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'modal-content', ...bsJs }} {...rest} />
})
export default ModalContent
