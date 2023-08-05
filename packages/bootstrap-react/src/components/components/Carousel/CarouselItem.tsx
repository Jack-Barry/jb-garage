import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselItemProps<T extends ElementType> = BrElementProps<
  T,
  {
    brCarouselItemActive?: boolean
    brCarouselItemInterval?: number
  }
>

export type CarouselItemWithRef = <Component extends ElementType = 'div'>(
  props: CarouselItemProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselItem: CarouselItemWithRef = forwardRef(function CarouselItem<
  T extends ElementType = 'div'
>(props: CarouselItemProps<T>, ref?: CarouselItemProps<T>['ref']) {
  const {
    as = 'div' as ElementType,
    brCarouselItemActive,
    brCarouselItemInterval,
    className,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('carousel-item', { active: brCarouselItemActive }, className)}
      data-bs-interval={brCarouselItemInterval}
      {...rest}
    />
  )
})
export default CarouselItem
