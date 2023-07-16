import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type CardTitleProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h5"
   */
  as?: T
}

/** [Card Title](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardTitle<T extends ElementType = 'h5'>(props: CardTitleProps<T>) {
  const { as = 'h5' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card-title', className)} {...rest}>
      {children}
    </BrElement>
  )
}
