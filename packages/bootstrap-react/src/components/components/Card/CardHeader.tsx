import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type CardHeaderProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardHeaderWithRef = <Component extends ElementType = 'div'>(
  props: CardHeaderProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardHeader: CardHeaderWithRef = forwardRef(function CardHeader<T extends ElementType>(
  props: CardHeaderProps<T>,
  ref?: CardHeaderProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-header', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardHeader
