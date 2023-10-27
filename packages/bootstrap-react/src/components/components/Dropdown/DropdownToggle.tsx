import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import Button, { ButtonProps } from '../Button/Button'

export type DropdownToggleProps<T extends ElementType, Breakpoints extends string> = ButtonProps<
  T,
  Breakpoints
> & {
  bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown-toggle'>
  /**
   * Type of HTML element to render
   *
   * @default "button"
   */
  as?: T
}

type DropdownToggleWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownToggleProps<Component, Breakpoints>
) => ReactNode

/**
 * [DropdownToggle]()
 */
const DropdownToggle: DropdownToggleWithRef = forwardRef(function DropdownToggle<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: DropdownToggleProps<T, Breakpoints>, ref?: DropdownToggleProps<T, Breakpoints>['ref']) {
  const { as = 'button' as ElementType, children, bsJs, ...rest } = props

  return (
    <Button
      as={as}
      ref={ref}
      bsJs={{ elementType: 'dropdown-toggle', ...(bsJs as ButtonProps<T, Breakpoints>['bsJs']) }}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default DropdownToggle
