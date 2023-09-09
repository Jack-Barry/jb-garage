import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionHeaderProps<T extends ElementType> = BrElementProps<T>

type AccordionHeaderWithRef = <Component extends ElementType = 'h2'>(
  props: AccordionHeaderProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionHeader: AccordionHeaderWithRef = forwardRef(function AccordionHeader<
  T extends ElementType = 'h2'
>(props: AccordionHeaderProps<T>, ref?: AccordionHeaderProps<T>['ref']) {
  const { as = 'h2' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('accordion-header', className)} {...rest} />
  )
})
export default AccordionHeader
