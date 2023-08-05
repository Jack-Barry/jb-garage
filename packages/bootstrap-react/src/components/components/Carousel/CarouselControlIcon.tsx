import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselControlIconProps<T extends ElementType> = BrElementProps<
  T,
  {
    brDirection: 'prev' | 'next'
  }
>

export type CarouselControlIconComponent = <Component extends ElementType = 'span'>(
  props: CarouselControlIconProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselControlIcon: CarouselControlIconComponent = forwardRef(function CarouselControlIcon<
  T extends ElementType = 'span'
>(props: CarouselControlIconProps<T>, ref?: CarouselControlIconProps<T>['ref']) {
  const { as = 'span' as ElementType, brDirection, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(`carousel-control-${brDirection}-icon`, className)}
      {...rest}
    />
  )
})
export default CarouselControlIcon
