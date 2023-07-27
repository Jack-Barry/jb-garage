import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type AccordionBodyProps<T extends ElementType> = BrElementProps<T>

/**
 * [Accordion]()
 */
export default function AccordionBody<T extends ElementType = 'div'>(props: AccordionBodyProps<T>) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      className={classNames('accordion-body', className)}
      {...rest}
    />
  )
}
