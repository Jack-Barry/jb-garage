import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselCaptionProps<T extends ElementType> = BrElementProps<T>

export type CarouselCaptionComponent = <Component extends ElementType = 'div'>(
  props: CarouselCaptionProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselCaption: CarouselCaptionComponent = forwardRef(function CarouselCaption<
  T extends ElementType = 'div'
>(props: CarouselCaptionProps<T>, ref?: CarouselCaptionProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('carousel-caption', className)}
      {...rest}
    />
  )
})
export default CarouselCaption
