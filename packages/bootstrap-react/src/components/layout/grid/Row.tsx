import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type RowProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'row'>
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
  }
>

type RowWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: RowProps<Component, Breakpoints>
) => ReactNode

/** [Row]() */
const Row: RowWithRef = forwardRef(function Row<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: RowProps<T, Breakpoints>, ref?: RowProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'row', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Row
