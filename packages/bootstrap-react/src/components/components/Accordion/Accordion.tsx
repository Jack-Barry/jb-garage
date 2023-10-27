import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import { AccordionContextProvider } from './AccordionContext'

export type AccordionProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'accordion'>
    /**
     * Do not collapse other accordion items when opening another
     *
     * @default false
     */
    brAccordionAlwaysOpen?: boolean
  }
>

type AccordionWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const Accordion: AccordionWithRef = forwardRef(function Accordion<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AccordionProps<T, Breakpoints>, ref?: AccordionProps<T, Breakpoints>['ref']) {
  const {
    as = 'div' as ElementType,
    bsJs,
    children,
    brAccordionAlwaysOpen = false,
    ...rest
  } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'accordion', ...bsJs }} {...rest}>
      <AccordionContextProvider maxOneOpen={!brAccordionAlwaysOpen}>
        {children}
      </AccordionContextProvider>
    </BrElement>
  )
})
export default Accordion
