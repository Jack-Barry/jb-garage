import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselCaptionProps<T extends ElementType> = BrElementProps<T>

export type CarouselCaptionWithRef = <Component extends ElementType = 'div'>(
  props: CarouselCaptionProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselCaption: CarouselCaptionWithRef = forwardRef(function CarouselCaption<
  T extends ElementType = 'div'
>(props: CarouselCaptionProps<T>, ref?: CarouselCaptionProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('carousel-caption', className)} {...rest} />
  )
})
export default CarouselCaption
