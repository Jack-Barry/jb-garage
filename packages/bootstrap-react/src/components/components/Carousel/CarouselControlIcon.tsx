import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselControlIconProps<T extends ElementType> = BrElementProps<
  T,
  {
    brCarouselControlIconDirection: 'prev' | 'next'
  }
>

export type CarouselControlIconWithRef = <Component extends ElementType = 'span'>(
  props: CarouselControlIconProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselControlIcon: CarouselControlIconWithRef = forwardRef(function CarouselControlIcon<
  T extends ElementType = 'span'
>(props: CarouselControlIconProps<T>, ref?: CarouselControlIconProps<T>['ref']) {
  const { as = 'span' as ElementType, brCarouselControlIconDirection, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(`carousel-control-${brCarouselControlIconDirection}-icon`, className)}
      {...rest}
    />
  )
})
export default CarouselControlIcon
