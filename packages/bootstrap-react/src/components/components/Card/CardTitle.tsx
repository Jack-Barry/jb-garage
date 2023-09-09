import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardTitleProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h5"
   */
  as?: T
}

type CardTitleWithRef = <Component extends ElementType = 'h5'>(
  props: CardTitleProps<Component>
) => ReactNode

/** [Card Title](https://getbootstrap.com/docs/5.3/components/card/) */
const CardTitle: CardTitleWithRef = forwardRef(function CardTitle<T extends ElementType = 'h5'>(
  props: CardTitleProps<T>,
  ref?: CardTitleProps<T>['ref']
) {
  const { as = 'h5' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-title', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardTitle
