import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselIndicatorProps<T extends ElementType> = BrElementProps<
  T,
  {
    bsJs?: BsJsConfig<'carousel-indicator'>
  }
>

export type CarouselIndicatorWithRef = <Component extends ElementType = 'button'>(
  props: CarouselIndicatorProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselIndicator: CarouselIndicatorWithRef = forwardRef(function CarouselIndicator<
  T extends ElementType = 'button'
>(props: CarouselIndicatorProps<T>, ref?: CarouselIndicatorProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    type = as === 'button' ? 'button' : undefined,
    ...rest
  } = props

  return <BrElement as={as} ref={ref} type={type} {...rest} />
})
export default CarouselIndicator
