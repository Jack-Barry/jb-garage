import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionBodyProps<T extends ElementType> = BrElementProps<T>

type AccordionBodyWithRef = <Component extends ElementType = 'div'>(
  props: AccordionBodyProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionBody: AccordionBodyWithRef = forwardRef(function AccordionBody<
  T extends ElementType = 'div'
>(props: AccordionBodyProps<T>, ref?: AccordionBodyProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('accordion-body', className)} {...rest} />
  )
})
export default AccordionBody
