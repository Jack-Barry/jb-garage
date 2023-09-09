import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselInnerProps<T extends ElementType> = BrElementProps<T>

export type CarouselInnerWithRef = <Component extends ElementType = 'div'>(
  props: CarouselInnerProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselInner: CarouselInnerWithRef = forwardRef(function CarouselInner<
  T extends ElementType = 'div'
>(props: CarouselInnerProps<T>, ref?: CarouselInnerProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('carousel-inner', className)} {...rest} />
  )
})
export default CarouselInner
