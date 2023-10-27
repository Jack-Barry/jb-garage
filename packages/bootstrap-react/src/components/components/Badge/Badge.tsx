import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BadgeProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "span"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'badge'>
  }
>

type BadgeWithRef = <
  Component extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BadgeProps<Component, Breakpoints>
) => ReactNode

/**
 * [Badge](https://getbootstrap.com/docs/5.3/components/badge/)
 *
 * - If no `bg-` class is provided, defaults to `bg-secondary`
 */
const Badge: BadgeWithRef = forwardRef(function Badge<
  T extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: BadgeProps<T, Breakpoints>, ref?: BadgeProps<T, Breakpoints>['ref']) {
  const { as = 'span' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'badge', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Badge
