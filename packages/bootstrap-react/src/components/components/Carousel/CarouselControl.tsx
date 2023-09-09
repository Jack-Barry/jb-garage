import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselControlProps<T extends ElementType> = BrElementProps<
  T,
  {
    brCarouselControlDirection: 'prev' | 'next'
  }
>

export type CarouselControlWithRef = <Component extends ElementType = 'button'>(
  props: CarouselControlProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselControl: CarouselControlWithRef = forwardRef(function CarouselControl<
  T extends ElementType = 'button'
>(props: CarouselControlProps<T>, ref?: CarouselControlProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    brCarouselControlDirection,
    className,
    type = as === 'button' ? 'button' : undefined,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      className={classNames(`carousel-control-${brCarouselControlDirection}`, className)}
      {...rest}
    />
  )
})
export default CarouselControl
