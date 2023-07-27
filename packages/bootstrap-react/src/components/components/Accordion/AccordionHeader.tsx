import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type AccordionHeaderProps<T extends ElementType> = BrElementProps<T>

/**
 * [Accordion]()
 */
export default function AccordionHeader<T extends ElementType = 'h2'>(
  props: AccordionHeaderProps<T>
) {
  const { as = 'h2' as ElementType, className, ...rest } = props

  return <BrElement as={as} className={classNames('accordion-header', className)} {...rest} />
}
