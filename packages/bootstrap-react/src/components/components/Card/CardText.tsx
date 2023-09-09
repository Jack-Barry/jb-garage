import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardTextProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "p"
   */
  as?: T
}

type CardTextWithRef = <Component extends ElementType = 'p'>(
  props: CardTextProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardText: CardTextWithRef = forwardRef(function CardText<T extends ElementType = 'p'>(
  props: CardTextProps<T>,
  ref?: CardTextProps<T>['ref']
) {
  const { as = 'p' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-text', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardText
