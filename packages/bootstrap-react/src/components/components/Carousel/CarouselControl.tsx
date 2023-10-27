import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselControlProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-control'>
  }
>

export type CarouselControlWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselControlProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselControl: CarouselControlWithRef = forwardRef(function CarouselControl<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CarouselControlProps<T, Breakpoints>, ref?: CarouselControlProps<T, Breakpoints>['ref']) {
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
      bsJs={{ elementType: 'carousel-control', ...bsJs }}
      {...rest}
    />
  )
})
export default CarouselControl
