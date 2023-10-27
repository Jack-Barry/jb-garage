import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalFooterProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal-footer'> }
>

export type ModalFooterWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalFooterProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const ModalFooter: ModalFooterWithRef = forwardRef(function ModalFooter<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalFooterProps<T, Breakpoints>, ref?: ModalFooterProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'modal-footer', ...bsJs }} {...rest} />
})
export default ModalFooter
