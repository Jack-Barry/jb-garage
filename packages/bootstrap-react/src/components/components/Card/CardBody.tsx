import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type CardBodyProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardBodyWithRef = <Component extends ElementType = 'div'>(
  props: CardBodyProps<Component>
) => ReactNode

/** [Card Body](https://getbootstrap.com/docs/5.3/components/card/) */
const CardBody: CardBodyWithRef = forwardRef(function CardBody<T extends ElementType = 'div'>(
  props: CardBodyProps<T>,
  ref?: CardBodyProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-body', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardBody
