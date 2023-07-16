import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type CardSubTitleProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h6"
   */
  as?: T
}

/** [Card Sub Title](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardSubTitle<T extends ElementType>(props: CardSubTitleProps<T>) {
  const { as = 'h6' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card-subtitle', className)} {...rest}>
      {children}
    </BrElement>
  )
}
