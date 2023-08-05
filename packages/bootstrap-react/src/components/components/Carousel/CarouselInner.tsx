import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselInnerProps<T extends ElementType> = BrElementProps<T>

export type CarouselInnerComponent = <Component extends ElementType = 'div'>(
  props: CarouselInnerProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselInner: CarouselInnerComponent = forwardRef(function CarouselInner<
  T extends ElementType = 'div'
>(props: CarouselInnerProps<T>, ref?: CarouselInnerProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('carousel-inner', className)}
      {...rest}
    />
  )
})
export default CarouselInner
