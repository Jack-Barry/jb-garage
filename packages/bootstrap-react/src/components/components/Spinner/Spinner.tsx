import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type SpinnerProps<
  T extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'spinner'>
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
  }
>

type SpinnerWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: SpinnerProps<Component, Breakpoints>
) => ReactNode

/**
 * [Spinner]()
 */
const Spinner: SpinnerWithRef = forwardRef(function Spinner<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: SpinnerProps<T, Breakpoints>, ref?: SpinnerProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'spinner', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Spinner
