import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type DropdownDividerProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  'hr',
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown-divider'>
    /**
     * Type of HTML element to wrap the item in
     *
     * To remove the wrapping element entirely, pass in `null`
     *
     * @default "li"
     */
    brDropdownItemWrapperAs?: T | null
    /** Props to pass along to the wrapper element */
    brDropdownItemWrapperProps?: BrElementProps<T>
  }
>

type DropdownDividierWithRef = <
  Component extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownDividerProps<Component, Breakpoints>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownDivider: DropdownDividierWithRef = forwardRef(function DropdownDivier<
  T extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: DropdownDividerProps<T, Breakpoints>, ref?: DropdownDividerProps<T, Breakpoints>['ref']) {
  const {
    bsJs,
    brDropdownItemWrapperAs = 'li' as ElementType,
    brDropdownItemWrapperProps,
    ...rest
  } = props

  const Content = (
    <BrElement as="hr" ref={ref} bsJs={{ elementType: 'dropdown-divider', ...bsJs }} {...rest} />
  )

  if (brDropdownItemWrapperAs === null) {
    return Content
  }

  return (
    <BrElement as={brDropdownItemWrapperAs} {...brDropdownItemWrapperProps}>
      {Content}
    </BrElement>
  )
})
export default DropdownDivider
