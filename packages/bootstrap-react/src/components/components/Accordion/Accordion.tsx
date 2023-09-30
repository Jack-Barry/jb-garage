import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import { AccordionContextProvider } from './AccordionContext'

export type AccordionProps<T extends ElementType> = Omit<BrElementProps<T>, 'bsJs'> & {
  bsJs?: BsJsConfig<'accordion'>
  /**
   * Do not collapse other accordion items when opening another
   *
   * @default false
   */
  brAccordionAlwaysOpen?: boolean
}

type AccordionWithRef = <Component extends ElementType = 'div'>(
  props: AccordionProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const Accordion: AccordionWithRef = forwardRef(function Accordion<T extends ElementType = 'div'>(
  props: AccordionProps<T>,
  ref?: AccordionProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    className,
    children,
    brAccordionAlwaysOpen = false,
    ...rest
  } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('accordion', className)} {...rest}>
      <AccordionContextProvider maxOneOpen={!brAccordionAlwaysOpen}>
        {children}
      </AccordionContextProvider>
    </BrElement>
  )
})
export default Accordion
