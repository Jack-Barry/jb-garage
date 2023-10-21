import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselItemProps<T extends ElementType> = BrElementProps<
  T,
  {
    bsJs?: BsJsConfig<'carousel-item'>
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
  const { as = 'div' as ElementType, brCarouselItemInterval, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('carousel-item', className)}
      data-bs-interval={brCarouselItemInterval}
      {...rest}
    />
  )
})
export default CarouselItem
