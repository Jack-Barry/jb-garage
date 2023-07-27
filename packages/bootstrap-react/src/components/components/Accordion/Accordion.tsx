import classNames from 'classnames'
import { ElementType } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { AccordionContextProvider } from './AccordionContext'

export type AccordionProps<T extends ElementType> = BrElementProps<T> & {
  /** Apply flush styling to the accordion */
  brFlush?: boolean
  /**
   * Do not collapse other accordion items when opening another
   *
   * @default false
   */
  brAlwaysOpen?: boolean
}

/**
 * [Accordion]()
 */
export default function Accordion<T extends ElementType>(props: AccordionProps<T>) {
  const { as, className, children, brFlush, brAlwaysOpen = false, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      className={classNames(
        'accordion',
        {
          'accordion-flush': brFlush
        },
        className
      )}
      {...rest}
    >
      <AccordionContextProvider maxOneOpen={!brAlwaysOpen}>{children}</AccordionContextProvider>
    </BrElement>
  )
}
