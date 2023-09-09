import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AccordionItemProps<T extends ElementType> = BrElementProps<T>

type AccordionItemWithRef = <Component extends ElementType = 'div'>(
  props: AccordionItemProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionItem: AccordionItemWithRef = forwardRef(function AccordionItem<
  T extends ElementType = 'div'
>(props: AccordionItemProps<T>, ref?: AccordionItemProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('accordion-item', className)} {...rest} />
  )
})
export default AccordionItem
