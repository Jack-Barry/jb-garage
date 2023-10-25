import { BootstrapDefaultBreakpoint, BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AlertHeadingProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "h4"
     */
    as?: T
    bsJs?: Omit<BsJsOptions<Breakpoints, 'alert-heading'>, 'elementType'>
  }
>

type AlertHeadingWithRef = <
  Component extends ElementType = 'h4',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AlertHeadingProps<Component, Breakpoints>
) => ReactNode

/** [AlertHeading]() */
const AlertHeading: AlertHeadingWithRef = forwardRef(function AlertHeading<
  T extends ElementType = 'h4',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AlertHeadingProps<T, Breakpoints>, ref?: AlertHeadingProps<T, Breakpoints>['ref']) {
  const { as = 'h4' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'alert-heading', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default AlertHeading
