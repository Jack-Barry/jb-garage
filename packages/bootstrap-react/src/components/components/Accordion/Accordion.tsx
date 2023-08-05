import classNames from 'classnames'
import { ElementType } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { AccordionContextProvider } from './AccordionContext'

export type AccordionProps<T extends ElementType> = BrElementProps<T> & {
  /** Apply flush styling to the accordion */
  brAccordionFlush?: boolean
  /**
   * Do not collapse other accordion items when opening another
   *
   * @default false
   */
  brAccordionAlwaysOpen?: boolean
}

/**
 * [Accordion]()
 */
export default function Accordion<T extends ElementType>(props: AccordionProps<T>) {
  const {
    as,
    className,
    children,
    brAccordionFlush,
    brAccordionAlwaysOpen = false,
    ...rest
  } = props

  return (
    <BrElement
      as={as as ElementType}
      className={classNames(
        'accordion',
        {
          'accordion-flush': brAccordionFlush
        },
        className
      )}
      {...rest}
    >
      <AccordionContextProvider maxOneOpen={!brAccordionAlwaysOpen}>
        {children}
      </AccordionContextProvider>
    </BrElement>
  )
}
