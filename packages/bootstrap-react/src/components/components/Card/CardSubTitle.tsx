import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type CardSubTitleProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h6"
   */
  as?: T
}

type CardSubTitleWithRef = <Component extends ElementType = 'h6'>(
  props: CardSubTitleProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardSubTitle: CardSubTitleWithRef = forwardRef(function CardSubTitle<
  T extends ElementType = 'h6'
>(props: CardSubTitleProps<T>, ref?: CardSubTitleProps<T>['ref']) {
  const { as = 'h6' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-subtitle', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardSubTitle
