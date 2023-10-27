import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type DropdownProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
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
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown'>
  }
>

type DropdownWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownProps<Component, Breakpoints>
) => ReactNode

/**
 * [Dropdown]()
 */
const Dropdown: DropdownWithRef = forwardRef(function Dropdown<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: DropdownProps<T, Breakpoints>, ref?: DropdownProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'dropdown', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Dropdown
