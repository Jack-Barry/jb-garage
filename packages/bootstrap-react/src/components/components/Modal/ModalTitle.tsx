import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalTitleProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal-title'> }
>

export type ModalTitleWithRef = <
  Component extends ElementType = 'h1',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalTitleProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const ModalTitle: ModalTitleWithRef = forwardRef(function ModalTitle<
  T extends ElementType = 'h1',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalTitleProps<T, Breakpoints>, ref?: ModalTitleProps<T, Breakpoints>['ref']) {
  const { as = 'h1' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'modal-title', ...bsJs }} {...rest} />
})
export default ModalTitle
