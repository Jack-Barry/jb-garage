import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardWithRef = <Component extends ElementType = 'div'>(props: CardProps<Component>) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const Card: CardWithRef = forwardRef(function Card<T extends ElementType = 'div'>(
  props: CardProps<T>,
  ref?: CardProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default Card
