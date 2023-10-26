import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionHeaderProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'accordion-header'>
  }
>

type AccordionHeaderWithRef = <
  Component extends ElementType = 'h2',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionHeaderProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionHeader: AccordionHeaderWithRef = forwardRef(function AccordionHeader<
  T extends ElementType = 'h2',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AccordionHeaderProps<T, Breakpoints>, ref?: AccordionHeaderProps<T, Breakpoints>['ref']) {
  const { as = 'h2' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'accordion-header', ...bsJs }} {...rest} />
  )
})
export default AccordionHeader
