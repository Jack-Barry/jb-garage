import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonGroupProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'btn-group'>
  }
>

type ButtonGroupWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ButtonGroupProps<Component, Breakpoints>
) => ReactNode

/** [ButtonGroup]() */
const ButtonGroup: ButtonGroupWithRef = forwardRef(function ButtonGroup<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ButtonGroupProps<T, Breakpoints>, ref?: ButtonGroupProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'btn-group', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default ButtonGroup
