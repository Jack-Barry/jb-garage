import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardGroupWithRef = <Component extends ElementType = 'div'>(
  props: CardGroupProps<Component>
) => ReactNode

/** []() */
const CardGroup: CardGroupWithRef = forwardRef(function CardGroup<T extends ElementType = 'div'>(
  props: CardGroupProps<T>,
  ref?: CardGroupProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-group', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardGroup
