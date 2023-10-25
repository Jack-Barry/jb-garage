import { BootstrapDefaultBreakpoint, BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionItemProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: Omit<BsJsOptions<Breakpoints, 'accordion-item'>, 'elementType'>
  }
>

type AccordionItemWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionItemProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionItem: AccordionItemWithRef = forwardRef(function AccordionItem<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AccordionItemProps<T, Breakpoints>, ref?: AccordionItemProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'accordion-item', ...bsJs }} {...rest} />
})
export default AccordionItem
