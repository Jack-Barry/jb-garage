import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type DropdownItemProps<
  T extends ElementType,
  U extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown-item'>
    /**
     * Type of HTML element to render
     *
     * @default "a"
     */
    as?: T
    /**
     * Type of HTML element to wrap the item in
     *
     * To remove the wrapping element entirely, pass in `null`
     *
     * @default "li"
     */
    brDropdownItemWrapperAs?: U | null
    /** Props to pass along to the wrapper element */
    brDropdownItemWrapperProps?: BrElementProps<U>
  }
>

type DropdownItemWithRef = <
  Component extends ElementType = 'a',
  Wrapper extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownItemProps<Component, Wrapper, Breakpoints>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownItem: DropdownItemWithRef = forwardRef(function DropdownItem<
  T extends ElementType = 'a',
  U extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: DropdownItemProps<T, U, Breakpoints>, ref?: DropdownItemProps<T, U, Breakpoints>['ref']) {
  const {
    as = 'a' as ElementType,
    children,
    bsJs,
    brDropdownItemWrapperAs = 'li' as ElementType,
    brDropdownItemWrapperProps,
    ...rest
  } = props

  const Content = (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'dropdown-item', ...bsJs }} {...rest}>
      {children}
    </BrElement>
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
export default DropdownItem
