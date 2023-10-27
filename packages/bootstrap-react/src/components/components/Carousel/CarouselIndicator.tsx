import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselIndicatorProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-indicator'>
  }
>

export type CarouselIndicatorWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselIndicatorProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselIndicator: CarouselIndicatorWithRef = forwardRef(function CarouselIndicator<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselIndicatorProps<T, Breakpoints>,
  ref?: CarouselIndicatorProps<T, Breakpoints>['ref']
) {
  const {
    as = 'button' as ElementType,
    type = as === 'button' ? 'button' : undefined,
    bsJs,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      bsJs={{ elementType: 'carousel-indicator', ...bsJs }}
      {...rest}
    />
  )
})
export default CarouselIndicator
