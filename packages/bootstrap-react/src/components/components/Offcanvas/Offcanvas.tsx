import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useOffcanvas } from './useOffcanvas'

export type OffcanvasProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'offcanvas'>
    /** Controlled state can be provided by the return value of `useOffcanvas` */
    brOffcanvas: ReturnType<typeof useOffcanvas>
  }
>

export type OffcanvasWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: OffcanvasProps<Component, Breakpoints>
) => ReactNode

/**
 * [Offcanvas]()
 */
const Offcanvas: OffcanvasWithRef = forwardRef(function Offcanvas<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: OffcanvasProps<T, Breakpoints>, ref?: OffcanvasProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brOffcanvas, bsJs, ...rest } = props
  const usedRef = useMultiRef(ref, brOffcanvas.ref)

  return <BrElement as={as} ref={usedRef} bsJs={{ elementType: 'offcanvas', ...bsJs }} {...rest} />
})
export default Offcanvas
