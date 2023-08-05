import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselIndicatorsProps<T extends ElementType> = BrElementProps<T>

export type CarouselIndicatorsWithRef = <Component extends ElementType = 'div'>(
  props: CarouselIndicatorsProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselIndicators: CarouselIndicatorsWithRef = forwardRef(function CarouselIndicators<
  T extends ElementType = 'div'
>(props: CarouselIndicatorsProps<T>, ref?: CarouselIndicatorsProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('carousel-indicators', className)}
      {...rest}
    />
  )
})
export default CarouselIndicators
