import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ResponsiveTableWrapperProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'table-responsive'>
  }
>

type ResponsiveTableWrapperWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ResponsiveTableWrapperProps<Component, Breakpoints>
) => ReactNode

const ResponsiveTableWrapper: ResponsiveTableWrapperWithRef = forwardRef(
  function ResponsiveTableWrapper<
    T extends ElementType = 'div',
    Breakpoints extends string = BootstrapDefaultBreakpoint
  >(
    props: ResponsiveTableWrapperProps<T, Breakpoints>,
    ref?: ResponsiveTableWrapperProps<T, Breakpoints>['ref']
  ) {
    const { as = 'div' as ElementType, bsJs, ...rest } = props

    return (
      <BrElement as={as} ref={ref} bsJs={{ elementType: 'table-responsive', ...bsJs }} {...rest} />
    )
  }
)
export default ResponsiveTableWrapper
