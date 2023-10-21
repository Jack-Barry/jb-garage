import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselControlIconProps<T extends ElementType> = BrElementProps<
  T,
  {
    bsJs?: BsJsConfig<'carousel-control-icon'>
  }
>

export type CarouselControlIconWithRef = <Component extends ElementType = 'span'>(
  props: CarouselControlIconProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselControlIcon: CarouselControlIconWithRef = forwardRef(function CarouselControlIcon<
  T extends ElementType = 'span'
>(props: CarouselControlIconProps<T>, ref?: CarouselControlIconProps<T>['ref']) {
  const { as = 'span' as ElementType, ...rest } = props

  return <BrElement as={as} ref={ref} {...rest} />
})
export default CarouselControlIcon
