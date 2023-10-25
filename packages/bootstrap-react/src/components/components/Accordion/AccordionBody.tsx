import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionBodyProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: Omit<BsJsOptions<Breakpoints, 'accordion-body'>, 'elementType'>
  }
>

type AccordionBodyWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionBodyProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionBody: AccordionBodyWithRef = forwardRef(function AccordionBody<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AccordionBodyProps<T, Breakpoints>, ref?: AccordionBodyProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'accordion-body', ...bsJs }} {...rest} />
})
export default AccordionBody
