import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselCaptionProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-caption'>
  }
>

export type CarouselCaptionWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselCaptionProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselCaption: CarouselCaptionWithRef = forwardRef(function CarouselCaption<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CarouselCaptionProps<T, Breakpoints>, ref?: CarouselCaptionProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'carousel-caption', ...bsJs }} {...rest} />
  )
})
export default CarouselCaption
