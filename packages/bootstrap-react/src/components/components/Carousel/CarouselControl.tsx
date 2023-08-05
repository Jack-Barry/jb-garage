import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselControlProps<T extends ElementType> = BrElementProps<
  T,
  {
    brDirection: 'prev' | 'next'
  }
>

export type CarouselControlComponent = <Component extends ElementType = 'button'>(
  props: CarouselControlProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselControl: CarouselControlComponent = forwardRef(function CarouselControl<
  T extends ElementType = 'button'
>(props: CarouselControlProps<T>, ref?: CarouselControlProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    brDirection,
    className,
    type = as === 'button' ? 'button' : undefined,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      className={classNames(`carousel-control-${brDirection}`, className)}
      {...rest}
    />
  )
})
export default CarouselControl
