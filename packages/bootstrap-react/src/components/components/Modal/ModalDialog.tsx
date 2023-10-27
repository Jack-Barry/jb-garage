import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalDialogProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'modal-dialog'>
    /**
     */
    // brModalDialogScrollable?: boolean
    // /**
    //  */
    // brModalDialogCentered?: boolean
    // /**
    //  */
    // brModalDialogSize?: 'sm' | 'lg' | 'xl' | string
    // /**
    //  */
    // brModalDialogFullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string
  }
>

export type ModalDialogWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ModalDialogProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const ModalDialog: ModalDialogWithRef = forwardRef(function ModalDialog<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ModalDialogProps<T, Breakpoints>, ref?: ModalDialogProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'modal-dialog', ...bsJs }} {...rest} />
})
export default ModalDialog
