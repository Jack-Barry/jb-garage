import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type AccordionItemProps<T extends ElementType> = BrElementProps<T>

/**
 * [Accordion]()
 */
export default function AccordionItem<T extends ElementType = 'div'>(props: AccordionItemProps<T>) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      className={classNames('accordion-item', className)}
      {...rest}
    />
  )
}
