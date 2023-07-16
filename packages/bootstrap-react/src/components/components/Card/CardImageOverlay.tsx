import classNames from 'classnames'
import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardImageOverlayProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** []() */
export default function CardImageOverlay<T extends ElementType = 'div'>(
  props: CardImageOverlayProps<T>
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('card-img-overlay', className)} {...rest}>
      {children}
    </BrElement>
  )
}
