import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselIndicatorsProps<T extends ElementType> = BrElementProps<T>

export type CarouselIndicatorsComponent = <Component extends ElementType = 'div'>(
  props: CarouselIndicatorsProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselIndicators: CarouselIndicatorsComponent = forwardRef(function CarouselIndicators<
  T extends ElementType = 'div'
>(props: CarouselIndicatorsProps<T>, ref?: CarouselIndicatorsProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('carousel-indicators', className)}
      {...rest}
    />
  )
})
export default CarouselIndicators
