import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type CardTextProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "p"
   */
  as?: T
}

/** [Card Text](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardText<T extends ElementType = 'p'>(props: CardTextProps<T>) {
  const { as = 'p' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card-text', className)} {...rest}>
      {children}
    </BrElement>
  )
}
