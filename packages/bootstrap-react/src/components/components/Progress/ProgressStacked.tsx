import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ProgressStackedProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'progress-stacked'>
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
  }
>

type ProgressStackedWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ProgressStackedProps<Component, Breakpoints>
) => ReactNode
/**
 * [Progress]()
 */
const ProgressStacked: ProgressStackedWithRef = forwardRef(function ProgressStacked<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ProgressStackedProps<T, Breakpoints>, ref?: ProgressStackedProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'progress-stacked', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default ProgressStacked
