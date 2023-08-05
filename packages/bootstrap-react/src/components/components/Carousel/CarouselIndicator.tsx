import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type CarouselIndicatorProps<T extends ElementType> = BrElementProps<
  T,
  {
    brActive?: boolean
  }
>

export type CarouselIndicatorComponent = <Component extends ElementType = 'button'>(
  props: CarouselIndicatorProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const CarouselIndicator: CarouselIndicatorComponent = forwardRef(function CarouselIndicator<
  T extends ElementType = 'button'
>(props: CarouselIndicatorProps<T>, ref?: CarouselIndicatorProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    brActive,
    className,
    type = as === 'button' ? 'button' : undefined,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      className={classNames({ active: brActive }, className)}
      {...rest}
    />
  )
})
export default CarouselIndicator
