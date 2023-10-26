import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselIndicatorsProps<
  T extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-indicators'>
  }
>

export type CarouselIndicatorsWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselIndicatorsProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselIndicators: CarouselIndicatorsWithRef = forwardRef(function CarouselIndicators<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselIndicatorsProps<T, Breakpoints>,
  ref?: CarouselIndicatorsProps<T, Breakpoints>['ref']
) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'carousel-indicators', ...bsJs }} {...rest} />
  )
})
export default CarouselIndicators
