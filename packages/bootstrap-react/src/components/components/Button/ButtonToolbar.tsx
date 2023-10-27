import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonToolbarProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
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
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'btn-toolbar'>
  }
>

type ButtonToolbarWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ButtonToolbarProps<Component, Breakpoints>
) => ReactNode

/** [ButtonToolbar]() */
const ButtonToolbar: ButtonToolbarWithRef = forwardRef(function ButtonToolbar<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ButtonToolbarProps<T, Breakpoints>, ref?: ButtonToolbarProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'btn-toolbar', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default ButtonToolbar
