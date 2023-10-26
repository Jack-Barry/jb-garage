import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AlertLinkProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "a"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'alert-link'>
  }
>

type AlertLinkWithRef = <
  Component extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AlertLinkProps<Component, Breakpoints>
) => ReactNode

/** [AlertLink]() */
const AlertLink: AlertLinkWithRef = forwardRef(function AlertLink<
  T extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AlertLinkProps<T, Breakpoints>, ref?: AlertLinkProps<T, Breakpoints>['ref']) {
  const { as = 'a' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'alert-link', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default AlertLink
