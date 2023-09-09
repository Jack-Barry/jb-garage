import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardImageOverlayProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type CardImageOverlayWithRef = <Component extends ElementType = 'div'>(
  props: CardImageOverlayProps<Component>
) => ReactNode

/** []() */
const CardImageOverlay: CardImageOverlayWithRef = forwardRef(function CardImageOverlay<
  T extends ElementType = 'div'
>(props: CardImageOverlayProps<T>, ref?: CardImageOverlayProps<T>['ref']) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('card-img-overlay', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardImageOverlay
