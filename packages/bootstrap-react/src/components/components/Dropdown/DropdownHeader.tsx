import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type DropdownHeaderProps<
  T extends ElementType,
  U extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'dropdown-header'>
    /**
     * Type of HTML element to render
     *
     * @default "h6"
     */
    as?: T
    /**
     * Type of HTML element to wrap the item in
     *
     * To remove the wrapping element entirely, pass in `null`
     *
     * @default "li"
     */
    brDropdownHeaderWrapperAs?: U | null
    /** Props to pass along to the wrapper element */
    brDropdownHeaderWrapperProps?: BrElementProps<U, undefined, Breakpoints>
  }
>

type DropdownHeaderWithRef = <
  Component extends ElementType = 'h6',
  Wrapper extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownHeaderProps<Component, Wrapper, Breakpoints>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownHeader: DropdownHeaderWithRef = forwardRef(function DropdownHeader<
  T extends ElementType = 'h6',
  U extends ElementType = 'li',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: DropdownHeaderProps<T, U, Breakpoints>,
  ref?: DropdownHeaderProps<T, U, Breakpoints>['ref']
) {
  const {
    as = 'h6' as ElementType,
    children,
    bsJs,
    brDropdownHeaderWrapperAs = 'li' as ElementType,
    brDropdownHeaderWrapperProps,
    ...rest
  } = props

  const Content = (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'dropdown-header', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )

  if (brDropdownHeaderWrapperAs === null) {
    return Content
  }

  return (
    <BrElement as={brDropdownHeaderWrapperAs} {...brDropdownHeaderWrapperProps}>
      {Content}
    </BrElement>
  )
})
export default DropdownHeader
