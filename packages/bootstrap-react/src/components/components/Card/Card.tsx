import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type CardProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
export default function Card<T extends ElementType = 'div'>(props: CardProps<T>) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card', className)} {...rest}>
      {children}
    </BrElement>
  )
}
