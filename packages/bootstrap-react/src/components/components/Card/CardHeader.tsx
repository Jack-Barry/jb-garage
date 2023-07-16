import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type CardHeaderProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** [Card Body](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardHeader<T extends ElementType>(props: CardHeaderProps<T>) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card-header', className)} {...rest}>
      {children}
    </BrElement>
  )
}
