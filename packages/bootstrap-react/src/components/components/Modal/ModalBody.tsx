import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalBodyProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal-body'> }
>

export type ModalBodyWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalBodyProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const ModalBody: ModalBodyWithRef = forwardRef(function ModalBody<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalBodyProps<T, Breakpoints>, ref?: ModalBodyProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'modal-body', ...bsJs }} {...rest} />
})
export default ModalBody
