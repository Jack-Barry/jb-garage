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

export type CarouselItemComponent = <Component extends ElementType = 'div'>(
  props: CarouselItemProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselItem: CarouselItemComponent = forwardRef(function CarouselItem<
  T extends ElementType = 'div'
>(props: CarouselItemProps<T>, ref?: CarouselItemProps<T>['ref']) {
  const { as, brCarouselItemActive, brCarouselItemInterval, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('carousel-item', { active: brCarouselItemActive }, className)}
      data-bs-interval={brCarouselItemInterval}
      {...rest}
    />
  )
})
export default CarouselItem
