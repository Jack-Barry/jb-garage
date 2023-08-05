import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type CardFooterProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardFooterWithRef = <Component extends ElementType = 'div'>(
  props: CardFooterProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardFooter: CardFooterWithRef = forwardRef(function CardFooter<T extends ElementType>(
  props: CardFooterProps<T>,
  ref?: CardFooterProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-footer', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardFooter
